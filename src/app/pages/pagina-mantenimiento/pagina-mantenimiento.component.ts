import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MantenimientosService } from 'src/app/servicios/mantenimientos.service';

@Component({
  selector: 'app-pagina-mantenimiento',
  templateUrl: './pagina-mantenimiento.component.html',
  styleUrls: ['./pagina-mantenimiento.component.css']
})
export class PaginaMantenimientoComponent implements OnInit {

  public mantenimientos: any = [{
    type: "itv",
    subType: "",
    subSubType: "",
    description: "",
    cost: 12,
    startDate: "1-10-2022",
    endDate: "2-10-2022"
  }, {
    type: "Bateria",
    subType: "",
    subSubType: "",
    description: "",
    cost: 100,
    startDate: "20-10-2022",
    endDate: "30-10-2022"
  }]

  constructor(public router: Router, private mantenimientoService: MantenimientosService) {

  }

  mantenimientoDetalle(index: string) {
    this.mantenimientoService.mantenimientoSeleccionado = this.mantenimientos[index]
    this.router.navigate(['/detalle-mantenimiento'])

  }

  ngOnInit(): void {
  }

}
