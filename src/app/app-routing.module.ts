import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewGardenComponent } from './new-garden/new-garden.component';
import { PlantsApiComponent } from './plants-api/plants-api.component';
import { AdminComponent } from './admin/admin.component'; 
import { MainComponent } from './main/main.component';
import { Main2Component } from './pages/main2/main2.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [

  {
    path: "",
    component: HomeComponent
  },

  {
    path: "login",
    component: LoginComponent
  },

  {
    path: "create",
    component: Main2Component
  },

  {
    path: "signup",
    component: SignUpComponent
  },

  {
    path: "about",
    component: AboutComponent
  },

  {
    path: "products",
    component: ProductsComponent
  },

  {
    path: "main",
    component: MainComponent
  },
  {
    path: "all",
    component: PlantsApiComponent
  },
  {
    path: "admin",
    component: AdminComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
