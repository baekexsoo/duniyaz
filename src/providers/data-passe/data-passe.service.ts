import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable ,  BehaviorSubject ,  Subscription, Subject } from 'rxjs';
import { Api } from 'src/providers/api/api';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class DataPasseService {

  subscription: Subscription;

  private programSource: any = new BehaviorSubject<string>(null);
  currentProgram: any = this.programSource.asObservable();


  constructor() { }

  changeProgram(query: any) {
    this.programSource.next(query);
   }


}