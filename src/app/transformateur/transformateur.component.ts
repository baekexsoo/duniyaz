import { Component, OnInit } from '@angular/core';
import { TransformeService } from 'src/providers/transforme/transforme.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-transformateur',
  templateUrl: './transformateur.component.html',
  styleUrls: ['./transformateur.component.css']
})
export class TransformateurComponent implements OnInit {
  list: any;
  objet_list = {
    zone: '',
    produit: '',
    page: 1
  }

  constructor( private transformateur: TransformeService) { }

  ngOnInit() {
  }

  getAll() {
    console.log(this.objet_list);
    return this.transformateur.liste(this.objet_list.zone, this.objet_list.produit, this.objet_list.page).subscribe(response => {
      this.list = response;
      console.log(this.list);
    })
  }

}