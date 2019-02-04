import { Component, OnInit } from '@angular/core';
import { ExportService } from 'src/providers/exportateurs/export.service';
import { MarketService } from 'src/providers/market/market.service';

@Component({
  selector: 'app-exportateurs',
  templateUrl: './exportateurs.component.html',
  styleUrls: ['./exportateurs.component.css']
})
export class ExportateursComponent implements OnInit {
liste_communes: any;
loading = false;
liste_departement: any;
liste_exportateurs: any;
warning: any;
form_data = {
  departement: '',
  zone: '',
  produit: '',
  page: 1,
};

  constructor(private exportService: ExportService, public market: MarketService) { }

  ngOnInit() {
    this.list_departement();
    this.exportateurs();
  }

  exportateurs() {
  this.loading = true;
    return this.exportService.list_export_simulation().subscribe(response => {
      this.liste_exportateurs = response;
  this.loading = false;
      // console.log(this.liste_exportateurs);
    });
  }
  filtre_exportateur () {
    this.loading = true;
    if (this.form_data.zone !== '' && this.form_data.produit !== '' ) {
      return this.exportService.list_filtre(this.form_data.zone, this.form_data.produit).subscribe( response => {
        this.liste_exportateurs = response;
        console.log(this.liste_exportateurs);
        this.loading = false;
      });
    }
    if (this.form_data.zone !== '') {
      return this.exportService.list_by_zone(this.form_data.zone).subscribe( response =>{
        this.liste_exportateurs = response;
        console.log(this.liste_exportateurs);
        this.loading = false;
      });
    }
    if (this.form_data.produit !== '') {
      return this.exportService.list_by_produit(this.form_data.produit).subscribe( response => {
        this.liste_exportateurs = response;
        this.loading = false;
      });
    }
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
    });
  }
}
