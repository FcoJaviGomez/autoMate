import { Component, OnInit } from '@angular/core';
import { MantenimientosService } from 'src/app/servicios/mantenimientos.service';
import { Mantenimiento } from 'src/app/models/mantenimiento';
import { Router } from '@angular/router';


@Component({
  selector: 'app-detalle-mantenimiento',
  templateUrl: './detalle-mantenimiento.component.html',
  styleUrls: ['./detalle-mantenimiento.component.css']
})
export class DetalleMantenimientoComponent implements OnInit {

  public mantenimientos: any

  constructor(public router: Router, private mantenimientoService: MantenimientosService) {
    this.mantenimientos = this.mantenimientoService.mantenimientoSeleccionado
    console.log(this.mantenimientos);

  }

  eliminar() {
    this.mantenimientoService.delete(this.mantenimientos.id_maintenance).subscribe((data1: any) => {
      this.router.navigate(['/pagina-mantenimiento'])
    })

  }

  ngOnInit(): void {
  }

}
