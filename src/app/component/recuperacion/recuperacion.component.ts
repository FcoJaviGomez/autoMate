import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';
import { ContraseñaService } from 'src/app/servicios/contraseña.service';

@Component({
  selector: 'app-recuperacion',
  templateUrl: './recuperacion.component.html',
  styleUrls: ['./recuperacion.component.css']
})
export class RecuperacionComponent implements OnInit {

  constructor(public router: Router, public contrasenya: ContraseñaService) { }
  recuperar(email: HTMLInputElement) {

    let correo = new Usuario(0,null,null,email.value,null,0,0,null,null);
    console.log(correo)
    this.contrasenya.restoreContrasena(correo).subscribe(function(data){
      console.log(data)
    })
    this.router.navigate(['/pagina-login'])
  }

  ngOnInit(): void {
  }

}
