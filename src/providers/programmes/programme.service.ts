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
export class ProgrammeService {
 
  Base_url = 'http://api.dev.duniyadata.com/dunya/programmes?zone=';

  constructor(public api: Api, private http: HttpClient) { }

  list_programmes(zone, produit): Observable<any> {

    return this.http.get(this.Base_url + zone + '&produit=' + produit, httpOptions);

}

}
