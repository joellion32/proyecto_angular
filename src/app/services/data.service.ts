import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina-interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 info: InfoPagina = {};
 cargada = false;


  constructor(private http: HttpClient) { }

  Data() {
    this.http.get('assets/data/datos.json').subscribe(
      (resp: InfoPagina) => {
        this.cargada = true;
        this.info = resp;
        console.log(resp);
      }
      );
  }

}
