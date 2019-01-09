import { Component, OnInit } from '@angular/core';
import { MarketService } from 'src/providers/market/market.service';
import { ActivatedRoute, Router } from '@angular/router';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-accueil-marche',
  templateUrl: './accueil-marche.component.html',
  styleUrls: ['./accueil-marche.component.css']
})
export class AccueilMarcheComponent implements OnInit {
  step = 0 ; // variable qui definit l'état du workflow.
  search_result: any;
  liste_departement: any;
  liste_communes: any;
  Today: any ;
  dte: any;
  warning = '';
  
  objet_market = {
          date: this.dte,
          departement: '',
          ville: ''
              };

  constructor(public market: MarketService, private router: Router, private calendar: NgbCalendar) { 
   
  }

  ngOnInit() {
    this.Today =  this.calendar.getToday();
    this.objet_market.date = this.Today.day + '/' + this.Today.month + '/' + this.Today.year;
    console.log(this.objet_market.date);

    this.goto(0);
    this.list_departement();
  }
  goto(n= 0) {
    this.step = n;
  }
  aff_maps() {
    this.step = 1;
  }
  aff_tab() {
    this.step = 0;
  }
  search_market() {
    let dat = this.Today.day + '/' + this.Today.month + '/' + this.Today.year;
    this.objet_market.date = dat ;
     console.log(this.objet_market)
    return this.market.recherche(JSON.stringify(this.objet_market)).subscribe(response => {
      console.log(response);
      this.search_result = response.listMarkets;
    }, error => { console.log('Error:: ' + error); } );
  }

  list_departement() {
    return this.market.departement().subscribe(response => {
      this.liste_departement = response;
    })
  }

  list_commune() {
    this.warning = '';
    return this.market.commune(this.objet_market.departement).subscribe( response => {
      this.liste_communes = response.ville_list;
      console.log(response);
    })
  }

}
