import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Allproducts } from './allproducts/allproducts';

const routes: Routes = [
  {path:'' , component:Allproducts}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
