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
  Base_url = 'http://api.dev.duniyadata.com/dunya/speculations';


  constructor(private Api : Api, private http: HttpClient) { }

  liste(): Observable<any> {
    // let url = 'dunya/speculations';
    return this.http.get(this.Base_url , httpOptions);
  }

  /*liste_simulation_culture (): Observable<any> {
    return of(Culture);
  }*/
}