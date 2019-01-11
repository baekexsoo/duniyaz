import { Component, OnInit } from '@angular/core';
import { DistributeursService } from 'src/providers/distributeurs/distributeurs.service';

@Component({
  selector: 'app-distributeurs',
  templateUrl: './distributeurs.component.html',
  styleUrls: ['./distributeurs.component.css']
})
export class DistributeursComponent implements OnInit {

  liste_distributeurs: any;

form_data = {
  zone: 'cot',
  produit: 'mais',
  page: 1,
};

  constructor(private distributeursService: DistributeursService) { }

  ngOnInit() {
  }


  distributeurs() {
    return this.distributeursService.list_distributeurs(this.form_data.zone, this.form_data.produit, this.form_data.page)
    .subscribe(response => {
      this.liste_distributeurs = response;
      console.log(this.liste_distributeurs);

    });

  }
}
