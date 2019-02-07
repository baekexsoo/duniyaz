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


  constructor(private Api : Api) { }

  liste(): Observable<any> {
    let url = 'dunya/speculations';
    return this.Api.get(url , httpOptions);
  }
}
