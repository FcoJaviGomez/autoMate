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
    type: "ITV",
    subType: "",
    subSubType: "",
    description: "",
    cost: 12,
    startDate: "1-10-2022",
    endDate: "2-10-2022"
  }, {
    type: "Otros",
    subType: "Faro",
    subSubType: "",
    description: "Bombilla",
    cost: 20,
    startDate: "20-10-2022",
    endDate: "30-10-2022"
  }, {
    type: "Neumáticos",
    subType: "Delanteros",
    subSubType: "Delantera",
    description: "",
    cost: 12,
    startDate: "1-10-2022",
    endDate: "2-10-2022"
  }, {
    type: "Filtros",
    subType: "Aceite",
    subSubType: "",
    description: "",
    cost: 55,
    startDate: "20-10-2022",
    endDate: "30-10-2022"
  },]

  // public mantenimientos: any = []

  constructor(public router: Router, private mantenimientoService: MantenimientosService) {

  }

  mantenimientoDetalle(index: string) {
    this.mantenimientoService.mantenimientoSeleccionado = this.mantenimientos[index]
    this.router.navigate(['/detalle-mantenimiento'])

  }

  ngOnInit(): void {
  }

}
