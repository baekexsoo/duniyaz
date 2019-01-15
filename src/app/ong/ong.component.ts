import { Component, OnInit } from '@angular/core';
import { OngService } from 'src/providers/ong/ong.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-ong',
  templateUrl: './ong.component.html',
  styleUrls: ['./ong.component.css']
})
export class OngComponent implements OnInit {
  list: any;
  objet_list = {
    zone: '',
    produit: '',
    page: 1
  }
  constructor(private ong: OngService ) { }

  ngOnInit() {
  }

  getAll() {
    return this.ong.liste(this.objet_list.zone, this.objet_list.produit, this.objet_list.page).subscribe( response => {
      this.list = response;
      console.log(this.list);
    })
  }

}
