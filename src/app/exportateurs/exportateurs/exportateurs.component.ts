import { Component, OnInit } from '@angular/core';
import { ExportService } from 'src/providers/exportateurs/export.service';

@Component({
  selector: 'app-exportateurs',
  templateUrl: './exportateurs.component.html',
  styleUrls: ['./exportateurs.component.css']
})
export class ExportateursComponent implements OnInit {

liste_exportateurs: any;
form_data = {
  zone: 'cot',
  produit: 'mais',
  page: 1,
};

  constructor(private exportService: ExportService) { }

  ngOnInit() {
  }

  exportateurs() {
    return this.exportService.list_exportateurs(this.form_data.zone, this.form_data.produit, this.form_data.page).subscribe(response => {
      this.liste_exportateurs = response;
      console.log(this.liste_exportateurs);

    });

  }
}
