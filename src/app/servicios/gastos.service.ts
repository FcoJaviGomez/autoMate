import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GastosService {

  private url = "https://my-api-automate.herokuapp.com";

  // private url = "https://localhost:3000";

  constructor(private http: HttpClient) { }

  getGastos(id_user: number): Observable<Object> {
    return this.http.get(this.url + '/gastos' + '?id_user=' + id_user)
  }
  
}
