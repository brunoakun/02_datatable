 import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(private http: HttpClient) { }

  public getPersonajes(): Observable<any> {
    var url = "http://localhost/ng_jamones/api/api.php?accion=getTrabajadores";
    var respuesta = this.http.get<any>(url);
    console.log(respuesta);
    return (respuesta);
  }
}