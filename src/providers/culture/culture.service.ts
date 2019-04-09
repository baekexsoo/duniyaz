import { Injectable } from '@angular/core';
import {  HttpHeaders, HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Api } from '../api/api';
//import { Culture } from 'src/app/mock_data/culture';
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

  /*liste_simulation_culture (): Observable<any> {
    return of(Culture);
  }*/
}