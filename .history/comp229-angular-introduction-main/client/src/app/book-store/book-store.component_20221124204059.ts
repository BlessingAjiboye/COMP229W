import { Component} from '@angular/core';
import {Book} from '../model/book.model';
import {BookRepository} from '../model/book.repository';


@Component({
  selector: 'app-book-store',
  templateUrl: './book-store.component.html',
  styleUrls: ['./book-store.component.css']
})
export class BookStoreComponent  {
  public selectedAuthor = "";
  public selectedPage = 1;
  booksPerPage!: number;

  constructor(private repository:BookRepository) { }


  get books():Book []
{
  const pageIndex = (this.selectedPage-1)
  * this.booksPerPage;
  return this.repository.getBooks(this.selectedAuthor);
  slice(pageIndex,pageIndex + this.booksPerPage);
}
get authors():string[]
{
  return this.repository.getAuthors();
}
changeAuthor(newAuthor?:string):void
{
  this.selectedAuthor = newAuthor;
}
}

function slice(pageIndex: number, arg1: number) {
  throw new Error('Function not implemented.');
}

