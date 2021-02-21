import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewGardenComponent } from './new-garden/new-garden.component';
import { PlantsApiComponent } from './plants-api/plants-api.component';

const routes: Routes = [
  {
    path: "",
    component: PlantsApiComponent
  },
  {
    path: "create",
    component: NewGardenComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
