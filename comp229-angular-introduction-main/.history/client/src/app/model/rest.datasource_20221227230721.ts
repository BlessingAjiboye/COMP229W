import {Injectable} from '@angular/core';
import { timeStamp } from 'console';
import {observable} from 'rxjs';
import {Book} from './book.model';
const PROTOCOL = 'http';
const PORT = 3500;
@Injectable()
export class restdatasource
{
  baseurl:string;
  constructor(private http: HttpClient)
  {
  this.baseurl = '${PROTOCOL}://${location.hostname}:${PORT}/';
  }
  getBooks():observable<Book[]>
  {
    return this.http.get<Book[]>(this.baseurl +'book-list');
  }
}
