import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewGardenComponent } from './new-garden/new-garden.component';
import { PlantsApiComponent } from './plants-api/plants-api.component';
import { AdminComponent } from './admin/admin.component'; 

const routes: Routes = [
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
    path: "",
    component: AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
