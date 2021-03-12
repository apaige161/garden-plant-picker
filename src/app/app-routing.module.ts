import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewGardenComponent } from './new-garden/new-garden.component';
import { PlantsApiComponent } from './plants-api/plants-api.component';
import { AdminComponent } from './admin/admin.component'; 
import { MainComponent } from './main/main.component';
import { Main2Component } from './main2/main2.component';

const routes: Routes = [
  {
    path: "",
    component: Main2Component
  },
  {
    path: "main",
    component: MainComponent
  },
  {
    path: "all",
    component: PlantsApiComponent
  },
  /*
  {
    path: "",
    component: NewGardenComponent
  },
  */
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
