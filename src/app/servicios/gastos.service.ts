import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GastosService {

  private url = environment.apiURL

  constructor(private http: HttpClient) { }

  getGastos(id_user: number): Observable<Object> {
    return this.http.get(this.url + '/gastos' + '?id_user=' + id_user)
  }

}
