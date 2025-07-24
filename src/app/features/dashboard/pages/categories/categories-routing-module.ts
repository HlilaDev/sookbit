import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Allcategories } from './allcategories/allcategories';
import { EditCategory } from './edit-category/edit-category';
import { AddCategory } from './add-category/add-category';

const routes: Routes = [
      {path:'' ,component:Allcategories , title:'all-categories'},
      {path:'edit/:id' ,component:EditCategory , title:'edit-category'},
       {path:'create' ,component:AddCategory , title:'create-category'},

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
