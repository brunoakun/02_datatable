import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPais } from '../_modelos/ipais';

@Injectable({
  providedIn: 'root'
})

export class PaisService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {
  }

  getPaises() {
    // Devuelve un array de objetos <pais>
    var endPoint = `/all`;
    return this.http.get<IPais[]>(this.apiUrl + endPoint);
  }

}
