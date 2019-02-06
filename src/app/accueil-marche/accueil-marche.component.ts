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
  accueil_list: any;
  rec_date: any;
  dat: any;
  loading = false;
  aff_bool = false;
  warning_bool = false;
  liste_departement: any;
  liste_communes: any;
  text_table = [];
  var_res = true;
  Today: any ;
  dte: any;
  text: any;
  rec: any;
  warning = '';
  objet_market = {
          date: this.dte,
          departement: '',
          ville: ''
              };
              dateString: any;

  constructor(public market: MarketService, private router: Router, private calendar: NgbCalendar) {
  }

  ngOnInit() {

    this.Today =  this.calendar.getToday();
    this.objet_market.date = this.Today.day + '/0' + this.Today.month + '/' + this.Today.year;
    console.log(this.Today);

     this.dateString = '2019/01/15';

    this.list_accueil();
    this.goto(0);
    this.list_departement();
    this.rec_date = this.objet_market.date;
    this.list_accueil();
  }
  goto(n= 0) {
    this.step = n;return this.market.liste_simulation().subscribe( res => {
        this.accueil_list = res;
        console.log(this.accueil_list);
        this.loading = false;
        this.aff_bool = true;
      });
  }
  aff_maps() {
    this.step = 1;return this.market.liste_simulation().subscribe( res => {
        this.accueil_list = res;
        console.log(this.accueil_list);
        this.loading = false;
        this.aff_bool = true;
      });
  }
  aff_tab() {
    this.step = 0;
  }
  search_market() {
    this.loading = true;
    if (this.Today === null) {
      this.objet_market.date = '';
      return this.market.recherche(JSON.stringify(this.objet_market)).subscribe(res => {
        this.search_result = res;
        this.loading = false;
        this.aff_bool = false;
        this.warning_bool = false;
      }, error => {
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
    } else {
      this.dat = this.Today.day + '/' + '0' + this.Today.month + '/' + this.Today.year;
      this.objet_market.date = this.dat ;
      console.log( ) ;
      return this.market.recherche(JSON.stringify(this.objet_market)).subscribe( res => {
        this.search_result = res;
        this.loading = false;
        this.aff_bool = false;
        this.warning_bool = false;
      }, error => {
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
    /*return this.market.recherche(JSON.stringify(this.objet_market)).subscribe(response => {
      this.search_result = response;
      this.loading = false;
      this.aff_bool = false;
      this.warning_bool = false;
    }, );*/
  }

  barre_rech_respn () {
    if (this.var_res === false) {
      this.var_res = true;
    } else {
      this.var_res = false;
    }
  }

  list_accueil() {
    this.loading = true;
    if (this.Today.day < 10) {
      this.dat = '0' + this.Today.day + '/' + '0' + this.Today.month + '/' + this.Today.year;
      this.rec_date = this.dat;
      return this.market.recherche(JSON.stringify(this.objet_market)).subscribe( res => {
        this.accueil_list = res;
        this.loading = false;
        this.aff_bool = true;
      });
    } else {
      this.dat = this.Today.day + '/' + '0' + this.Today.month + '/' + this.Today.year;
      this.rec_date = this.dat;
      return this.market.recherche(JSON.stringify(this.objet_market)).subscribe( res => {
        this.accueil_list = res;
        this.loading = false;
        this.aff_bool = true;
      });
    }
    // return this.market.recherche(JSON.stringify(this.objet_market)).subscribe(response => {
  // });
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
      console.log(JSON.stringify(error.status));
      console.log('Error:: ' + error); });
  }

  list_commune() {
    return this.market.commune(this.objet_market.departement).subscribe( response => {
      this.liste_communes = response.ville_list;
    });
  }

}
