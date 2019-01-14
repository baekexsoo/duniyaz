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
export class ExportService {

  Base_url = 'http://api.dev.duniyadata.com/dunya/exportateurs?zone=';

  constructor( public api: Api, private http: HttpClient) { }

  list_exportateurs(zone, produit, page): Observable<any> {

        return this.http.get(this.Base_url + zone + '&produit=' + produit + '&page=' + page, httpOptions)

  }


}
