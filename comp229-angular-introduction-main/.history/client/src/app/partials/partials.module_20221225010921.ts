import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import {AboutComponent} from './about/about.component';
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
import { ProductComponent } from "./product/product.component";
import { ServicesComponent } from "./services/services.component";



@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [],
    exports: []
})
export class PartialsModule { }
