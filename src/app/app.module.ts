import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { MynameComponent } from './myname/myname.component';
import { ContentComponent } from './content/content.component';
import { BiographyComponent } from './content/biography/biography.component';
import { AphorismComponent } from './aphorism/aphorism.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    MynameComponent,
    ContentComponent,
    BiographyComponent,
    AphorismComponent,
  ],

  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
