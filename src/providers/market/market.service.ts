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
export class MarketService {

 
  constructor(public Api: Api, private http: HttpClient) { }

  recherche(data): Observable<any> {
    let url = 'dunya/markets';
    return this.Api.post(url, data, httpOptions);
  }

  departement(): Observable<any> {
    let url = 'dunya/markets/departement';
    return this.Api.get(url, httpOptions);
  }

  commune(data): Observable<any> {
    let url = '/dunya/markets/departement/' + data;
    return this.Api.get(url + data, httpOptions);
  }

}
  