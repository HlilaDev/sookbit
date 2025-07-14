import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Homepage } from './pages/homepage/homepage';
import { AboutUs } from './pages/about-us/about-us';
import { Canva } from './pages/apps/canva/canva';
import { Capcut } from './pages/apps/capcut/capcut';


const routes: Routes = [
    {path:'' ,component:Homepage , title:'home'},
    {path:'about-us' , component:AboutUs , title:'about-us'},
    {path:'canva' , component:Canva , title:'canva'},
    {path:'capcut' , component:Capcut , title:'capcut'},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
