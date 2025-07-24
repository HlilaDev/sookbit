import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Allusers } from './allusers/allusers';

const routes: Routes = [
  {path:'', component:Allusers}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
