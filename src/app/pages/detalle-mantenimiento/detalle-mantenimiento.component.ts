import { Component, OnInit } from '@angular/core';
import { MantenimientosService } from 'src/app/servicios/mantenimientos.service';

@Component({
  selector: 'app-detalle-mantenimiento',
  templateUrl: './detalle-mantenimiento.component.html',
  styleUrls: ['./detalle-mantenimiento.component.css']
})
export class DetalleMantenimientoComponent implements OnInit {
  public mantenimientos: any

  constructor(private mantenimientoService: MantenimientosService) {
    this.mantenimientos = this.mantenimientoService.mantenimientoSeleccionado
  }

  eliminar() {

  }

  ngOnInit(): void {
  }

}
