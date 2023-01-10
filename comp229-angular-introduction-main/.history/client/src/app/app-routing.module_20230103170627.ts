import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookStoreComponent } from './book-store/book-store.component';
import { CartDetailComponent } from './book-store/cart-detail/cart-detail.component';
import { CheckoutComponent } from './book-store/checkout/checkout.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { title: 'Home' }},
  { path: 'about', component: AboutComponent, data: { title: 'About' }},
  { path: 'products', component: AboutComponent, data: { title: 'Products' }},
  { path: 'services',component: ServicesComponent,data: { title: 'Services' }},
  { path: "bookList",component: BookStoreComponent,data: { title: 'Book Store' }},
  { path: "cart",component: CartDetailComponent,data: { title: 'Shopping Cart' }},
  { path: "checkout",component: CheckoutComponent,data: { title: 'Checkout' }},
  { path: 'contacts',component: ContactComponent,data: { title: 'Contacts' }},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
