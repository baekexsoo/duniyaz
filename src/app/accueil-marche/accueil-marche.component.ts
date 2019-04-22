import { Component, OnInit } from '@angular/core';
import { MarketService } from 'src/providers/market/market.service';
import { ActivatedRoute, Router } from '@angular/router';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-accueil-marche',
  templateUrl: './accueil-marche.component.html',
 // changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./accueil-marche.component.css']
})
export class AccueilMarcheComponent implements OnInit {

  search_result: any;
  step= 0;
  loading = false;
  aff_bool = false;
  warning_bool = false;
  liste_departement: any;
  liste_communes: any;
  var_res = true;
  Today: any ;
  warning = '';
  objet_market = {
          date: '',
          departement: '',
          ville: ''
              };
  dateString: any;

  constructor(public market: MarketService, private router: Router, private calendar: NgbCalendar) {
  }

  ngOnInit() {
    this.list_departement();
    this.Today =  this.calendar.getToday();
    this.search_market();
  }

  search_market(search?: any ) {
    this.loading = true;
    let search_data = {
      date: '',
      departement: '',
      ville: ''
     };
    if (search) {
      
      try {
        search_data = search;
         if(this.Today.month < 10){ search_data.date = this.Today.day + '/' + '0' + this.Today.month + '/' + this.Today.year;}
         else {search_data.date = this.Today.day + '/' +  this.Today.month + '/' + this.Today.year;}
      } catch (error) {
        console.log('An error occured with date parameter');
        search_data.date = '';
      }
      
    }
      this.market.recherche(JSON.stringify(search_data)).subscribe(res => {
          this.search_result = res;
          this.loading = false;
          this.aff_bool = false;
          this.warning_bool = false;
        }, 
        error => {
          if (error.status === 404) {
            this.warning = 'Aucun marché pour votre recherche';
            this.loading = false;
            this.warning_bool = true;
          }
          if (error.status === 500) {
            this.warning = 'Oops! il y a un problème';
            this.loading = false;
            this.warning_bool = true;
          }
        });
  }

  barre_rech_respn () {
    if (this.var_res === false) {this.var_res = true;
    } else {this.var_res = false;}
  }

  list_departement() {
    return this.market.departement().subscribe(response => {
      this.liste_departement = response;
    }, error => {
      if (error.status === 404) {
        this.warning = 'Aucun marché pour votre recherche';
        this.warning_bool = true;
      }
      if (error.status === 500) {
        this.warning = 'Oops! il y a un problème';
        this.warning_bool = true;
      }

      });
  }

  list_commune(search: String) {

    return this.market.commune(search).subscribe( response => {
      this.liste_communes = response.ville_list;
    });
  }

}
