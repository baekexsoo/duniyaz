import { Component, OnInit } from '@angular/core';
import { ProgrammeService } from '../../providers/programmes/programme.service';
import { MarketService } from '../../providers/market/market.service';

@Component({
  selector: 'app-programmes',
  templateUrl: './programmes.component.html',
  styleUrls: ['./programmes.component.css']
})
export class ProgrammesComponent implements OnInit {
  liste_communes: any;
  liste_departement: any;
  list_programmes: any;
  warning: any;
  form_data = {
    departement: '',
    zone: 'cot',
    produit: '',
    page: 1,
  };
  constructor(private programService: ProgrammeService, public market: MarketService) { }

  ngOnInit() {
    this.list_departement();

  }
  programmes() {
    return this.programService.list_programmes(this.form_data.zone, this.form_data.produit, this.form_data.page).subscribe(response => {
      this.list_programmes = response;
      console.log(this.list_programmes);

    });

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

}
