import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public logged: boolean;

  constructor(public router: Router, public usuario: UsuarioService) {
    console.log(this.usuario.logged)
  }

  iniciarSesion(email: HTMLInputElement, contraseña: HTMLInputElement) {
    this.usuario.logged = true;    
    console.log(this.usuario.logged)
    this.router.navigate(['/home2']);

  }


  ngOnInit(): void {
  }

}
