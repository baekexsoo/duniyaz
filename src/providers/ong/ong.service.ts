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
export class OngService {

  constructor(public Api: Api) { }

  liste(zone, produit, page): Observable<any> {
    let url = 'dunya/ongs?zone=' + zone + '&produit=' + produit + '&page=' + page;
    return this.Api.get(url , httpOptions);
  }
}
