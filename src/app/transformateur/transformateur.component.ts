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
  loading = false;
  objet_list = {
    departement: '',
    zone: '',
    produit: '',
    page: 1
  }

  constructor( private transformateur: TransformeService, public market: MarketService) { }

  ngOnInit() {
    this.list_departement();
    this.getAll();
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
    this.loading = true;
    console.log(this.objet_list);
    return this.transformateur.liste_simulation_trans().subscribe(response => {
      this.list = response;
      this.loading = false;
      console.log(this.list);
    });
  }

  

}
