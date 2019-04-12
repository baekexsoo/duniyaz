import { Injectable } from '@angular/core';
import {  HttpHeaders, HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Api } from '../api/api';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Bearer 31c79287-65c4-3609-91f4-ffbd1240a873',
  })
};
@Injectable({
  providedIn: 'root'
})

@Injectable({
  providedIn: 'root'
})
export class TransformateursService {

  constructor( private Api:Api, private http:HttpClient) { }

  list(): Observable <any> {
    let url = 'transformateurs'
    let url_test = 'http://api.dev.duniyadata.com/dunya/transformateurs';
    return this.http.get(url_test, httpOptions); 
  }
}
