import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookStoreComponent } from './book-store/book-store.component';
import { BookStoreModule } from './book-store/book-store.module';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { PagesModule } from './pages/pages.module';
import { ProductComponent } from './pages/product/product.component';
import { ServicesComponent } from './pages/services/services.component';
import { BasePageComponent } from './partials/base-page/base-page.component';
import { FooterComponent } from './partials/footer/footer.component';
import { HeaderComponent } from './partials/header/header.component';
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
   BookStoreComponent],

  imports: [BrowserModule, AppRoutingModule, BookStoreModule, PagesModule, PartialsModule],
  providers: [],
  bootstrap: [AppComponent],
})


export class AppModule {}
