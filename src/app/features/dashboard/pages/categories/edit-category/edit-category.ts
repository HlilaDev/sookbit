import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Category } from '../../../../../core/services/category/category';
import { ActivatedRoute, Router } from '@angular/router';

// Define the Category interface for the data structure
interface CategoryData {
  name: string;
  slug: string;
  description: string;
}

@Component({
  selector: 'app-edit-category',
  imports: [ReactiveFormsModule],
  templateUrl: './edit-category.html',
  styleUrl: './edit-category.scss'
})
export class EditCategory implements OnInit {
  editCategoryForm: FormGroup;
  categoryId: string = '';
  isLoading: boolean = false;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private categoryService: Category, // Service type
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.editCategoryForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      slug: ['', [Validators.required, Validators.pattern('^[a-z0-9-]+$')]],
      description: ['', [Validators.maxLength(500)]]
    });
  }

  ngOnInit(): void {
    this.categoryId = this.route.snapshot.paramMap.get('id') || '';
    if (this.categoryId) {
      this.loadCategoryData();
    }
  }

  loadCategoryData(): void {
    this.isLoading = true;
    this.categoryService.getCategoryById(this.categoryId).subscribe({
      next: (category: CategoryData) => {
        this.editCategoryForm.patchValue({
          name: category.name,
          slug: category.slug,
          description: category.description
        });
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = 'Failed to load category data';
        this.isLoading = false;
        console.error('Error loading category:', error);
      }
    });
  }

  onNameChange(): void {
    const nameValue = this.editCategoryForm.get('name')?.value;
    if (nameValue) {
      const slug = this.generateSlug(nameValue);
      this.editCategoryForm.patchValue({ slug: slug });
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
    if (this.editCategoryForm.valid) {
      this.isLoading = true;
      this.errorMessage = '';
      this.successMessage = '';

      const categoryData = this.editCategoryForm.value;

      this.categoryService.editCategory(this.categoryId, categoryData).subscribe({
        next: (response) => {
          this.successMessage = 'Category updated successfully!';
          this.isLoading = false;
          setTimeout(() => {
            this.router.navigate(['/admin/categories']);
          }, 2000);
        },
        error: (error) => {
          this.errorMessage = error.error?.message || 'Failed to update category';
          this.isLoading = false;
          console.error('Error updating category:', error);
        }
      });
    } else {
      this.markFormGroupTouched();
    }
  }

  markFormGroupTouched(): void {
    Object.keys(this.editCategoryForm.controls).forEach(key => {
      const control = this.editCategoryForm.get(key);
      control?.markAsTouched();
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.editCategoryForm.get(fieldName);
    return !!(field && field.invalid && field.touched);
  }

  getFieldError(fieldName: string): string {
    const field = this.editCategoryForm.get(fieldName);
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