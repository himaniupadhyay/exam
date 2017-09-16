import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstcodeComponent } from './firstcode/firstcode.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstcodeComponent

  ],
  imports: [
    BrowserModule,
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
