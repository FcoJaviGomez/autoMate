import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario';


@Injectable({
  providedIn: 'root'
})
export class ContraseñaService {

  private url = "https://apiautomate002.fly.dev"

  constructor(private http: HttpClient) { }

  restoreContrasena(contrasena: Usuario): Observable<Object> {

    return this.http.put(this.url + '/recuperacion', contrasena)

  }

}
