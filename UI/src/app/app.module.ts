import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import { NewComponent } from './new/new.component';
// Import BrowserAnimationsModule
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
 
// Import your library
import { AlertModule } from 'ngx-alerts';


@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    NewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,  
    // Specify your library as an import (set timeout to -1 for unlimited timeout, the message can only be closed by the user clicking on it)
    AlertModule.forRoot({maxMessages: 5, timeout: 5000, position: 'right'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
