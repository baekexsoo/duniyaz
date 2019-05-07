import { Component, OnInit } from '@angular/core';
import { ProducteursService } from '../../providers/union_producteur/producteurs.service';

@Component({
  selector: 'app-union-producteur',
  templateUrl: './union-producteur.component.html',
  styleUrls: ['./union-producteur.component.css']
})
export class UnionProducteurComponent implements OnInit {

  list_union: any;
  loading=false;

  constructor(private unions: ProducteursService) { }

  ngOnInit() {
    this.liste();
  }

  liste() {
    this.loading=true;
    return this.unions.list().subscribe( res => {
      this.list_union = res;
     
    })
  }

}
