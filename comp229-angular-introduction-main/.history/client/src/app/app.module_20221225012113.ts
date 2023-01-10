import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookStoreModule } from './book-store/book-store.module';
import { PagesModule } from './pages/pages.module';
//import {BookStoreModule} from './book-store/book-store.module';
//import { HeaderComponent } from './partials/header/header.component';
import { PartialsModule } from './partials/partials.module';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
   FooterComponent,
   HomeComponent,
   ContactComponent,
   AboutComponent,
   ProductComponent,
   ServicesComponent,
   BasePageComponent,
   BookStoreComponent,],
  imports: [BrowserModule, AppRoutingModule, BookStoreModule, PagesModule, PartialsModule],
  providers: [],
  bootstrap: [AppComponent],
})


export class AppModule {}
