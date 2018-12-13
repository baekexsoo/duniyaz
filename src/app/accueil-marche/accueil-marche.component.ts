import { Component, OnInit } from '@angular/core';
import { MarketService } from 'src/providers/market/market.service';


@Component({
  selector: 'app-accueil-marche',
  templateUrl: './accueil-marche.component.html',
  styleUrls: ['./accueil-marche.component.css']
})
export class AccueilMarcheComponent implements OnInit {
  
  search_result: any;
  liste_departement: any;
  liste_communes: any;
  warning = '';
  objet_market = {
          date: '',
          departement: '',
          ville: ''
              };

  constructor(public market: MarketService) { }

  ngOnInit() {
    this.list_departement();
  }
  search_market() {
    if(this.objet_market.departement === '' && this.objet_market.date === '') {
      this.warning = 'Remplissez un champ';
    } else {
    return this.market.recherche(JSON.stringify(this.objet_market)).subscribe(response => {
      this.search_result = response.listMarkets;
      
    })
  }
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
    })
  }

}
