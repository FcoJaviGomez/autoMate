import { Component, OnInit } from '@angular/core';
import { MantenimientosService } from 'src/app/servicios/mantenimientos.service';

@Component({
  selector: 'app-detalle-historial',
  templateUrl: './detalle-historial.component.html',
  styleUrls: ['./detalle-historial.component.css']
})
export class DetalleHistorialComponent implements OnInit {
  public mantenimientos: any

  constructor(private mantenimientoService: MantenimientosService) {
    this.mantenimientos = this.mantenimientoService.mantenimientoSeleccionado
  }

  eliminar() { }

  ngOnInit(): void {
  }

}
