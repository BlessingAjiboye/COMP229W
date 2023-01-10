import {Injectable} from '@angular/core';
import { timeStamp } from 'console';
import {Observable, observable} from 'rxjs';
import {Book} from './book.model';
const PROTOCOL = 'http';
const PORT = 3500;
@Injectable()
export class restdatasource
{
  baseUrl:string;
  constructor(private http: HttpClient)
  {
  this.baseUrl = '${PROTOCOL}://${location.hostname}:${PORT}/';
  }
  getBooks():Observable<Book[]>
  {
    return this.http.get<Book[]>(this.baseurl +'book-list');
  }
}
