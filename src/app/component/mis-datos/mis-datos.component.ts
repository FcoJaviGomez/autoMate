import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-mis-datos',
  templateUrl: './mis-datos.component.html',
  styleUrls: ['./mis-datos.component.css']
})
export class MisDatosComponent implements OnInit {
 
   public usuario: Usuario 
  
   constructor(public usuarioService: UsuarioService)
  {
    this.usuario = this.usuarioService.usuario  
    console.log(this.usuario);
    console.log(this.usuarioService.usuario)
  }
 modificar(nombre:HTMLInputElement, apellido:HTMLInputElement, email:HTMLInputElement, contraseña:HTMLInputElement)
 {
   
  if(contraseña.value != "" && contraseña.value.length >3 )
    {

    
      this.usuario= new Usuario(this.usuario.id_user, nombre.value, apellido.value, email.value, contraseña.value, this.usuario.kilometers_car, this.usuario.year_car, this.usuario.provisional_password, this.usuario.provisional_date)
     
     console.log(this.usuario)
    
      this.usuarioService.putUsuario(this.usuario).subscribe((data:Usuario) =>
    
      {
        console.log(data);
        this.usuario = data;
        this.usuario.name = nombre.value
        this.usuario.last_name = apellido.value
        this.usuario.email = email.value
        
        console.log(this.usuario)
      })
    }  
      else 
    {
      console.log("La contraseña debe de tener mas de 3 caracteres")
    }
  
 }
  ngOnInit(): void {
  }

}
