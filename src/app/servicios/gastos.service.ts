import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gastos } from '../models/gastos';

@Injectable({
  providedIn: 'root'
})
export class GastosService {

  private url = "https://my-api-automate.herokuapp.com";

  public gastos: Gastos;

  constructor(private http: HttpClient) { }

  getGastos(): Observable<Object> {
    return this.http.get(this.url + '/gastos')
  }
}
