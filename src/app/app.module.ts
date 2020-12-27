import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputFormComponent } from './input-form/input-form.component';
import {ColorSketchModule} from 'ngx-color/sketch';
import { OutputBoxComponent } from './output-box/output-box.component';

@NgModule({
  declarations: [
    AppComponent,
    InputFormComponent,
    OutputBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ColorSketchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
