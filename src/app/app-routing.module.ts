import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MainOrderComponent } from './main-order/main-order.component';
import { MainpageComponent } from './mainpage/mainpage.component';
const routes: Routes = [
  {path: '', component:MainpageComponent, children:[
    {path:'',redirectTo: '/home', pathMatch: 'full'},
    {path:'home', component: MainpageComponent},
    {path:'profile', component:ProfileComponent},
    {path:'products', component: ProductsComponent},
    {path:'mainpage', component: MainOrderComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
