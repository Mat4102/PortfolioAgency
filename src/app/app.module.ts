import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeLadureeComponent } from './home-laduree/home-laduree.component';
import { HomeEssilorComponent } from './home-essilor/home-essilor.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeLadureeComponent,
    HomeEssilorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
