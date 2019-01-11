import { Component, OnInit } from '@angular/core';
import { CultureService } from 'src/providers/culture/culture.service';
@Component({
  selector: 'app-cultures',
  templateUrl: './cultures.component.html',
  styleUrls: ['./cultures.component.css']
})
export class CulturesComponent implements OnInit {

  list: any;
  objet_list = {
    zone: '',
    produit: '',
    page: 1
  }
  constructor( private culture: CultureService) { }

  ngOnInit() {
  }
  getAll() {
    console.log(this.objet_list);
    return this.culture.liste(this.objet_list.zone, this.objet_list.produit, this.objet_list.page).subscribe(response => {
      this.list = response;
      console.log(this.list);
    })
  }

}
