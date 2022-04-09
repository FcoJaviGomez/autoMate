import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mantenimiento } from '../models/mantenimiento';

@Injectable({
  providedIn: 'root'
})
export class MantenimientosService {

  private url = "https://my-api-automate.herokuapp.com"
  // private url = "http://localhost:3000"

  public mantenimientoSeleccionado: any

  public mantenimiento: Mantenimiento

  constructor(private http: HttpClient) {
  }

  getAll(id_user: number): Observable<Object> {
    return this.http.get(this.url + "/mantenimiento?id_user=" + id_user)
  }

  getOne(id_user: number): Observable<Object> {

    return this.http.get(this.url + `/mantenimientoHome?id_user= ${id_user} `)
  }

  add(mantenimiento: Mantenimiento): Observable<Object> {
    return this.http.post(this.url + "/mantenimiento", mantenimiento)
  }
  delete(id_maintenance: number): Observable<Object> {
    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      body: { id_maintenance: id_maintenance }
    }
    return this.http.delete(this.url + "/mantenimiento", options)
  }
}
