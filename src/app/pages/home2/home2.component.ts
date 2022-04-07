import { Component, OnInit } from '@angular/core';
import { TipsService } from 'src/app/servicios/tips.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

interface Tips {
  id_tips: number,
  text:string
}


@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit {

  public mantenimientos: number[];

  public tip: any;

  constructor(public tips: TipsService, public nombreUsuario: UsuarioService) {

    this.mantenimientos = [

    ]

    this.tips.consejo
     
    this.nombreUsuario.usuario.name
  }

  ngOnInit(): void {
  }


}
