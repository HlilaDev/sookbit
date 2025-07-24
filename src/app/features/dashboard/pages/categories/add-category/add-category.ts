import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Category } from '../../../../../core/services/category/category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  imports: [ReactiveFormsModule],
  templateUrl: './add-category.html',
  styleUrl: './add-category.scss'
})
export class AddCategory implements OnInit{


   addCategoryForm: FormGroup;
  isLoading: boolean = false;
  errorMessage: string = '';
  successMessage: string = '';



  constructor(
    private fb: FormBuilder,
    private categoryService: Category,
    private router: Router
  ) {
    this.addCategoryForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      slug: ['', [Validators.required, Validators.pattern('^[a-z0-9-]+$')]],
      description: ['', [Validators.maxLength(500)]]
    });
  }

  ngOnInit(): void {}

  onNameChange(): void {
    const nameValue = this.addCategoryForm.get('name')?.value;
    if (nameValue) {
      const slug = this.generateSlug(nameValue);
      this.addCategoryForm.patchValue({ slug: slug });
    }
  }

  generateSlug(text: string): string {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '') // Remove special characters
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-') // Replace multiple hyphens with single
      .replace(/^[-]+|[-]+$/g, ''); // Remove leading and trailing hyphens
  }

  onSubmit(): void {
    if (this.addCategoryForm.valid) {
      this.isLoading = true;
      this.errorMessage = '';
      this.successMessage = '';

      const categoryData = this.addCategoryForm.value;

      this.categoryService.addCategory(categoryData).subscribe({
        next: (response) => {
          this.successMessage = 'Category added successfully!';
          this.isLoading = false;
          setTimeout(() => {
            this.router.navigate(['/admin/categories']);
          }, 2000);
        },
        error: (error) => {
          this.errorMessage = error.error?.message || 'Failed to add category';
          this.isLoading = false;
          console.error('Error adding category:', error);
        }
      });
    } else {
      this.markFormGroupTouched();
    }
  }

  markFormGroupTouched(): void {
    Object.keys(this.addCategoryForm.controls).forEach(key => {
      const control = this.addCategoryForm.get(key);
      control?.markAsTouched();
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.addCategoryForm.get(fieldName);
    return !!(field && field.invalid && field.touched);
  }

  getFieldError(fieldName: string): string {
    const field = this.addCategoryForm.get(fieldName);
    if (field?.errors) {
      if (field.errors['required']) {
        return `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required`;
      }
      if (field.errors['minlength']) {
        return `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} must be at least ${field.errors['minlength'].requiredLength} characters`;
      }
      if (field.errors['maxlength']) {
        return `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} must not exceed ${field.errors['maxlength'].requiredLength} characters`;
      }
      if (field.errors['pattern']) {
        return 'Slug can only contain lowercase letters, numbers, and hyphens';
      }
    }
    return '';
  }

  onCancel(): void {
    this.router.navigate(['/admin/categories']);
  }



}
