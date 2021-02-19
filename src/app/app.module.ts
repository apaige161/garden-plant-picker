import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconSeedlingComponent } from './icon-seedling/icon-seedling.component';
import { NavComponent } from './nav/nav.component';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { PlantsFromServerComponent } from './plants-from-server/plants-from-server.component'
import { PlantServerService } from './services/plant-server.service';
import { PlantsApiComponent } from './plants-api/plants-api.component';
import { MainComponent } from './main/main.component'

@NgModule({
  declarations: [
    AppComponent,
    IconSeedlingComponent,
    NavComponent,
    PlantsFromServerComponent,
    PlantsApiComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    PopoverModule.forRoot(),
    FormsModule,
    HttpClientModule,

  ],
  providers: [
    PlantServerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
