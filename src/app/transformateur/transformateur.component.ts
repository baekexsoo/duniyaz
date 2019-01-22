import { Component, OnInit } from '@angular/core';
import { TransformeService } from 'src/providers/transforme/transforme.service';
import { from } from 'rxjs';
import { MarketService } from 'src/providers/market/market.service';
@Component({
  selector: 'app-transformateur',
  templateUrl: './transformateur.component.html',
  styleUrls: ['./transformateur.component.css']
})
export class TransformateurComponent implements OnInit {
  liste_departement: any;
  liste_communes: any;
  list: any;
  objet_list = {
    departement: '',
    zone: '',
    produit: '',
    page: 1
  }

  constructor( private transformateur: TransformeService, public market: MarketService) { }

  ngOnInit() {
    this.list_departement();
  }

  list_departement() {
    return this.market.departement().subscribe(response => {
      this.liste_departement = response;
    });
  }
  list_commune() {
    // this.warning = '';
    return this.market.commune(this.objet_list.departement).subscribe( response => {
      this.liste_communes = response.ville_list;
      console.log(response);
    });
  }

  getAll() {
    console.log(this.objet_list);
    return this.transformateur.liste(this.objet_list.zone, this.objet_list.produit, this.objet_list.page).subscribe(response => {
      this.list = response;
      console.log(this.list);
    })
  }

}
