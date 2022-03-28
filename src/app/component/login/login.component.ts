import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router) {

  }

  iniciarSesion(email: HTMLInputElement, contraseña: HTMLInputElement) {
    this.router.navigate(['/home2'])
  }


  ngOnInit(): void {
  }

}
