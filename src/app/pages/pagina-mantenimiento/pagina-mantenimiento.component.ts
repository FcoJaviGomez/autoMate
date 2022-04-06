import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MantenimientosService } from 'src/app/servicios/mantenimientos.service';

@Component({
  selector: 'app-pagina-mantenimiento',
  templateUrl: './pagina-mantenimiento.component.html',
  styleUrls: ['./pagina-mantenimiento.component.css']
})
export class PaginaMantenimientoComponent implements OnInit {

  public alerta: boolean = true

  public mantenimientos: any = [{
    type: "ITV",
    subType: "",
    subSubType: "",
    description: "",
    cost: 12,
    startDate: "1-10-2022",
    endDate: "2022/12/10"

  }, {
    type: "Otros",
    subType: "Faro",
    subSubType: "",
    description: "Bombilla",
    cost: 20,
    startDate: "20-10-2022",
    endDate: "2022/05/02"
  }, {
    type: "Neumáticos",
    subType: "Delanteros",
    subSubType: "Delantera",
    description: "",
    cost: 12,
    startDate: "1-10-2022",
    endDate: "2022/03/10"
  }, {
    type: "Filtros",
    subType: "Aceite",
    subSubType: "",
    description: "",
    cost: 55,
    startDate: "20-10-2022",
    endDate: "2023/10/10"
  },]

  // public mantenimientos: any = []

  constructor(public router: Router, private mantenimientoService: MantenimientosService) {
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
