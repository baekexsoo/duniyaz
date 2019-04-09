import { Injectable } from '@angular/core';
import {  HttpHeaders, HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Api } from '../api/api';
import { Data } from 'src/app/data';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': '8c54eb1b-0f53-3a46-8d5f-2bf392c89946',
  })
};

@Injectable({
  providedIn: 'root'
})
export class MarketService {

 
  constructor(public Api: Api, private http: HttpClient) { }

  recherche(data): Observable<any> {
    let url = '/markets';
    return this.Api.post(url, data, httpOptions);
  }

  departement(): Observable<any> {
    let url = '/markets/departement';
    return this.Api.get(url, httpOptions);
  }

  commune(data): Observable<any> {
    let url = '/markets/departement/';
    return this.Api.get(url + data, httpOptions);
  }
  
  liste_simulation (): Observable<any> {
    return of(Data);
  }
}