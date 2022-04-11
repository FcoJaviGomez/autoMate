import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MantenimientosService } from 'src/app/servicios/mantenimientos.service';
import { TipsService } from 'src/app/servicios/tips.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Mantenimiento } from 'src/app/models/mantenimiento';


interface Tips {
  id_tips: number,
  text: string
}


@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit {

  public mantenimientos: Mantenimiento[];

  public tip: any;

  constructor(public tips: TipsService, public usuario: UsuarioService, public mantenimientoService: MantenimientosService, public router: Router) {


    this.tips.consejo
    console.log(this.tips.consejo)

    this.usuario.usuario.name

    this.mantenimientoService.getOne(this.usuario.usuario.id_user).subscribe((data: Mantenimiento[]) => {
      console.log(data)
      this.mantenimientos = data
      console.log(this.mantenimientos)
    }
    )

  }

  compararFecha(endDate: string): boolean {
    let date = new Date(endDate)
    console.log(date)
    let hoy = new Date()
    let month = hoy.getMonth() + 2
    let year = hoy.getFullYear()
    let day = hoy.getDate()
    hoy = new Date(`${year}/${month}/${day}`)
    return date < hoy
  }

  mantenimientoDetalle(index: string) {
    this.mantenimientoService.mantenimientoSeleccionado = this.mantenimientos[index]
    this.router.navigate(['/detalle-mantenimiento'])
  }

  ngOnInit(): void {
  }


}
