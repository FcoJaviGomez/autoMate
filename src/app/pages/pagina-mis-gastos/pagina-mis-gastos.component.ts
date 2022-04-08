import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Gastos } from 'src/app/models/gastos';
import { GastosService } from 'src/app/servicios/gastos.service';
import { single } from './data';

@Component({
  selector: 'app-pagina-mis-gastos',
  templateUrl: './pagina-mis-gastos.component.html',
  styleUrls: ['./pagina-mis-gastos.component.css'],
})
export class PaginaMisGastosComponent implements OnInit {

  public gastosTotales: Gastos;
  public gastosTipo: Gastos;

  // single: any[];
  view:[number,number] = [340, 369];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  // colorScheme = {
  //   domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  // };

  single = [
    {
      "name": "Neumáticos",
      "value": 1090
    },
    {
      "name": "Frenos",
      "value": 530
    },
    {
      "name": "Filtros",
      "value": 220
    },
    {
      "name": "AceiteMotor",
      "value": 109
    },
      {
      "name": "Bateria",
      "value": 620
    },
    {
      "name": "Correa",
      "value": 89
    },
    {
      "name": "Otros Gastos",
      "value": 325
    }
  ];

  constructor(public ServicioGastos: GastosService) {
    // Object.assign(this, { single });

    this.ServicioGastos.getGastos()

    // this.librosService.getAll(this.usuarioService.usuario.id_usuario).subscribe((data: any)=>
    // {
    //   this.libros = data
    //   console.log(data)
    // })
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  ngOnInit(): void {
  }

}
