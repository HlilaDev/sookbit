import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Allsellers } from './allsellers/allsellers';

const routes: Routes = [
  {path:'', component:Allsellers}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellersRoutingModule { }
