import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.sass']
})
export class PortafolioComponent implements OnInit {
  constructor(public dataService: DataService) { }
 
  ngOnInit() {
    this.dataService.Data();
    this.dataService.Producto();
  }

}
