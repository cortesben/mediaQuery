import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { WindowRefService } from './window-ref.service';
import { MediaQuery } from './app.mediaQuery.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [WindowRefService, MediaQuery],
  bootstrap: [AppComponent]
})
export class AppModule { }
