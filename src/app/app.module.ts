import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconSeedlingComponent } from './icon-seedling/icon-seedling.component';
import { NavComponent } from './nav/nav.component';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { PlantsFromServerComponent } from './plants-from-server/plants-from-server.component'
import { PlantServerService } from './services/plant-server.service';
import { PlantsApiComponent } from './plants-api/plants-api.component';
import { MainComponent } from './main/main.component';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { NewGardenComponent } from './new-garden/new-garden.component';
import { SortAndFilterComponent } from './sort-and-filter/sort-and-filter.component';
import { AdminComponent } from './admin/admin.component';
import { Main2Component } from './main2/main2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { DragDropModule } from '@angular/cdk/drag-drop';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSliderModule} from '@angular/material/slider';



@NgModule({
  declarations: [
    AppComponent,
    IconSeedlingComponent,
    NavComponent,
    PlantsFromServerComponent,
    PlantsApiComponent,
    MainComponent,
    FilterPipe,
    SortPipe,
    NewGardenComponent,
    SortAndFilterComponent,
    AdminComponent,
    Main2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    PopoverModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatProgressBarModule,
    MatSliderModule,


  ],
  providers: [
    PlantServerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
