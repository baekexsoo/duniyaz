import { Component, OnInit } from '@angular/core';
import { DistributeursService } from 'src/providers/distributeurs/distributeurs.service';
import { MarketService } from 'src/providers/market/market.service';

@Component({
  selector: 'app-distributeurs',
  templateUrl: './distributeurs.component.html',
  styleUrls: ['./distributeurs.component.css']
})
export class DistributeursComponent implements OnInit {

  liste_distributeurs: any;
  liste_communes: any;
  liste_departement: any;
  liste_exportateurs: any;
  warning: any;
  form_data = {
    departement: '',
    zone: 'cot',
    produit: '',
    page: 1,
  };

  constructor(private distributeursService: DistributeursService,  public market: MarketService) { }

  ngOnInit() {
    this.list_departement();

  }

  list_departement() {
    return this.market.departement().subscribe(response => {
      this.liste_departement = response;
    });
  }

  list_commune() {
    this.warning = '';
    return this.market.commune(this.form_data.departement).subscribe( response => {
      this.liste_communes = response.ville_list;
      console.log(response);
    });
  }

  distributeurs() {
    return this.distributeursService.list_distributeurs(this.form_data.zone, this.form_data.produit, this.form_data.page)
    .subscribe(response => {
      this.liste_distributeurs = response;
      console.log(this.liste_distributeurs);

    });

  }
}
