import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Allsubcategories } from './allsubcategories/allsubcategories';

const routes: Routes = [
  {path:'',component:Allsubcategories},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubcategoriesRoutingModule { }
