import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mantenimiento } from 'src/app/models/mantenimiento';
import { MantenimientosService } from 'src/app/servicios/mantenimientos.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {



  public mantenimientos: any

  constructor(public router: Router, private mantenimientoService: MantenimientosService,
    private usuarioService: UsuarioService) {
    mantenimientoService.getAllHistorial(this.usuarioService.usuario.id_user).subscribe((data: Mantenimiento[]) => {
      console.log(data)

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
    })
  }

  historialDetalle(index: string) {
    this.mantenimientoService.mantenimientoSeleccionado = this.mantenimientos[index]
    this.router.navigate(['/detalle-historial'])
    console.log(this.mantenimientos[index]);

  }

  ngOnInit(): void {
  }

}
