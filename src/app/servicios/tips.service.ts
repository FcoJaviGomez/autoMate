import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipsService {

  private url = "https://my-api-automate.herokuapp.com"




  constructor(private http: HttpClient) { }

  getTip():Observable<Object>
  {
    return this.http.get(this.url + '/home-logged')
  }
}
