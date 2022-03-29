import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(public router: Router) { }


  registrarse(nombre: HTMLInputElement, apellidos: HTMLInputElement,
    email: HTMLInputElement, contraseña: HTMLInputElement, contraseña1: HTMLInputElement) {
    this.router.navigate(['/pagina-login'])
  }



  ngOnInit(): void {
  }

}
