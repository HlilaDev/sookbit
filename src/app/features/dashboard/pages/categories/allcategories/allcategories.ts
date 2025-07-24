import { Component, OnInit } from '@angular/core';
import { Category } from '../../../../../core/services/category/category';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-allcategories',
  imports: [DatePipe],
  templateUrl: './allcategories.html',
  styleUrl: './allcategories.scss',


})
export class Allcategories implements OnInit{
    allCats: any[] = [];

  constructor(private catservices:Category , private router:Router ){}


  ngOnInit(): void {
    this.getAllCategories()
    

  }

  getAllCategories():void {
    this.catservices.getAllCategories().subscribe((res)=>{
      this.allCats = res ;
          console.log(this.allCats);


    })

  }

editCategory(categoryId: string): void {
  console.log('Editing category with ID:', categoryId);
  this.router.navigate(['/admin/categories/edit', categoryId]);
}

addCategory(){
  this.router.navigate(['/admin/categories/create'])
}



   deleteCategory(catId: any): void {
    console.log('Deleting category with ID:', catId);
    // You can implement the logic to call the delete API method and refresh the table
    this.catservices.deleteCategory(catId).subscribe(() => {
      this.getAllCategories(); // Refresh the category list after deletion
    });
  }

}
