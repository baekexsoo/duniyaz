import { Injectable } from '@angular/core';
import {  HttpHeaders, HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Api } from '../api/api';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};
@Injectable({
  providedIn: 'root'
})
export class CultureService {

  list_url = 'http://api.dev.duniyadata.com/dunya/speculations?zone=';

  constructor(private http: HttpClient) { }

  liste(zone, produit, page): Observable<any> {
    return this.http.get(this.list_url + zone + '&produit=' + produit + '&page=' + page, httpOptions);
  }
}
