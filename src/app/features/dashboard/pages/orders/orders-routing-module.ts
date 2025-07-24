import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Allorders } from './allorders/allorders';

const routes: Routes = [
        {path:'' ,component:Allorders , title:'all-orders'},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
