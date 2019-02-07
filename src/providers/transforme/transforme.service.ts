import { Injectable } from '@angular/core';
import {  HttpHeaders, HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Api } from '../api/api';
import { Trans } from 'src/app/mock_data/transformateurs';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};
@Injectable({
  providedIn: 'root'
})
export class TransformeService {

  list_url = 'http://api.dev.duniyadata.com/dunya/transformateurs?zone=';
  constructor(private http: HttpClient) { }
  
  liste(zone, produit, page): Observable<any> {
    return this.http.get(this.list_url + zone + '&produit=' + produit + '&page=' + page, httpOptions);
  }

  liste_simulation_trans (): Observable<any> {
    return of(Trans);
  }
}
