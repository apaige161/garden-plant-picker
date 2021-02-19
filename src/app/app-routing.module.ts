import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlantsApiComponent } from './plants-api/plants-api.component';

const routes: Routes = [
  {
    path: "",
    component: PlantsApiComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
