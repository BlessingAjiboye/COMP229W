import {NgModule} from '@angular/core';
import {BookRepository} from './book.repository';
import {staticDataSource} from './static.datasource';
@NgModule ({
providers: [BookRepository,staticDataSource]
})
export class ModelModule{}
