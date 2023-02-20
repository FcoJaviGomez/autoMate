import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Home1Component } from '../pages/home1/home1.component';

@Injectable({
  providedIn: 'root'
})
export class TipsService {

  private url = "https://apiautomate002.fly.dev"

  public consejo: string

  constructor(private http: HttpClient) { }



  getTip(): Observable<Object> {
    return this.http.get(this.url + '/home-logged')
  }
}
