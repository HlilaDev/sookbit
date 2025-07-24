import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Homepage } from './pages/homepage/homepage';



const routes: Routes = [
    {path:'' ,component:Homepage , title:'home'},
    {path:'categories' ,loadChildren:()=>import('../dashboard/pages/categories/categories-module').then(m=>m.CategoriesModule), title:'categories'},
    {path:'subcategories' ,loadChildren:()=>import('../dashboard/pages/subcategories/subcategories-module').then(m=>m.SubcategoriesModule), title:'subcategories'},
    {path:'products' ,loadChildren:()=>import('../dashboard/pages/products/products-module').then(m=>m.ProductsModule), title:'products'},
    {path:'offers' ,loadChildren:()=>import('../dashboard/pages/offers/offers-module').then(m=>m.OffersModule), title:'offers'},
    {path:'users' ,loadChildren:()=>import('../dashboard/pages/users/users-module').then(m=>m.UsersModule), title:'users'},
    {path:'sellers' ,loadChildren:()=>import('../dashboard/pages/sellers/sellers-module').then(m=>m.SellersModule), title:'sellers'},
    {path:'orders' ,loadChildren:()=>import('../dashboard/pages/orders/orders-module').then(m=>m.OrdersModule), title:'orders'},
    {path:'settings' ,loadChildren:()=>import('../dashboard/pages/settings/settings-module').then(m=>m.SettingsModule), title:'settings'},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
