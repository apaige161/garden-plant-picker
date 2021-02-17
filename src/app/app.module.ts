import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconSeedlingComponent } from './icon-seedling/icon-seedling.component';
import { NavComponent } from './nav/nav.component';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    IconSeedlingComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    PopoverModule.forRoot(),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
