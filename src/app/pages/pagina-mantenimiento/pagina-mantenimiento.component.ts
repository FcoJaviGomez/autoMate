import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MantenimientosService } from 'src/app/servicios/mantenimientos.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Mantenimiento } from 'src/app/models/mantenimiento';

@Component({
  selector: 'app-pagina-mantenimiento',
  templateUrl: './pagina-mantenimiento.component.html',
  styleUrls: ['./pagina-mantenimiento.component.css']
})
export class PaginaMantenimientoComponent implements OnInit {

  public alerta: boolean = true

  public mantenimientos: Mantenimiento[]

  constructor(public router: Router, private mantenimientoService: MantenimientosService,
    private usuarioService: UsuarioService) {
    mantenimientoService.getAll(this.usuarioService.usuario.id_user).subscribe((data: Mantenimiento[]) => {
      console.log("chec", data)

      for (let mantenimiento of data) {
        for (let mantenimientoModificado in mantenimiento) {

          if (mantenimiento[mantenimientoModificado] === "aceitemotor") {
            mantenimiento[mantenimientoModificado] = "Aceite Motor"
          }
          if (mantenimiento[mantenimientoModificado] === "correadedistribución") {
            mantenimiento[mantenimientoModificado] = "Correa de Distribución"
          }

        }
      }

      this.mantenimientos = data
      console.log(this.mantenimientos.length)
    })
  }

  compararFecha(endDate: string): boolean {
    let date = new Date(endDate)
    // console.log(endDate);

    // console.log(date)
    let hoy = new Date()


    let month = hoy.getMonth() + 2
    let year = hoy.getFullYear()
    let day = hoy.getDate()
    // console.log(day);1
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
