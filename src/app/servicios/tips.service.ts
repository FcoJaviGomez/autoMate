import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Home1Component } from '../pages/home1/home1.component';

@Injectable({
  providedIn: 'root'
})
export class TipsService {

  // private url = "https://my-api-automate.herokuapp.com"

  private url = "https://app-api-auto-mate.herokuapp.com"

  // private url = "http://localhost:3000";

  public consejo: string

  constructor(private http: HttpClient) { }



  getTip(): Observable<Object> {
    return this.http.get(this.url + '/home-logged')
  }
}
