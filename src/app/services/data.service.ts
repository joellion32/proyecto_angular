import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina-interface';
import { Producto } from '../interfaces/productos-inferface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 info: InfoPagina = {};
 cargada = true;
 equipo: any = [];

 // para los productos
 productos: Producto[] = [];


  constructor(private http: HttpClient) { }

  Data() {
    this.http.get('assets/data/datos.json').subscribe(
      (resp: InfoPagina) => {
          this.info = resp;
          this.cargada = false;
          console.log(resp);
      }
      );
  }

  DataFirebase() {
   this.http.get('https://portafolio-289b5.firebaseio.com/equipo.json').subscribe(
     (resp: any[]) => {
      this.equipo = resp;
      console.log(this.equipo);
      }
     );
  }

  // servicio para los productos
  Producto() {
  this.http.get('https://portafolio-289b5.firebaseio.com/productos_idx.json').subscribe(
    (resp: Producto[]) => {
      this.productos = resp;
      this.cargada = false;
      console.log(this.productos);
    }
  );
  }
}
