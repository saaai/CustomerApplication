import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { CustomerComponent } from './CustomerApp.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [CustomerComponent]
})
export class CustomerModule { }
