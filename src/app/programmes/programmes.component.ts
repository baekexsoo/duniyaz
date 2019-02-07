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
  loading = false;
  warning: any;
  form_data = {
    zone: '',
    produit: '',
  };
  constructor(private programService: ProgrammeService, public market: MarketService) { }

  ngOnInit() {
    this.list_departement();
    this.programmes();
  }

  
  programmes() {
  this.loading = true;
    return this.programService.liste_simulation_prog().subscribe(response => {
      this.list_programmes = response;
  this.loading = false;

      console.log(this.list_programmes);

    });

  }

  /**
   * departement getAll function
   * list of departement
   * Author Christian
   */
  list_departement() {
    return this.market.departement().subscribe(response => {
      this.liste_departement = response;
      console.log(this.liste_departement);
    }, error => {
      console.log('Callback error : ' + error);
    });
  }

  /*list_commune() {
    this.warning = '';
    return this.market.commune(this.form_data.departement).subscribe( response => {
      this.liste_communes = response.ville_list;
      console.log(response);
    });
  }*/

}
