import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModelModule } from './model/model.module';
//import {BookStoreModule} from './book-store/book-store.module';
import { HeaderComponent } from './partials/header/header.component';



@NgModule({
  declarations: [
    AppComponent],
  imports: [BrowserModule, AppRoutingModule, ModelModule],
  providers: [],
  bootstrap: [AppComponent],
})


export class AppModule {}
