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
  
  public gastosTipo: Gastos = new Gastos (0,"",0)

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
  

  // single = [
  //   {
  //     "name": "Bateria",
  //     "value": this.gastosTipo.cost
  //   },
  //   {
  //     "name": "AceiteMotor",
  //     "value": 530
  //   },
  //   {
  //     "name": "Filtros",
  //     "value": 220
  //   },
  //   {
  //     "name": "Neumáticos",
  //     "value": 109
  //   },
  //   {
  //     "name": "Frenos",
  //     "value": 620
  //   },
  //   {
  //     "name": "Bujías",
  //     "value": 89
  //   },
  //   {
  //     "name": "Correa",
  //     "value": 325
  //   },
  //   {
  //   "name": "Escobillas",
  //   "value": 620
  //   },
  //   {
  //     "name": "ITV",
  //     "value": 89
  //   },
  //   {
  //     "name": "Otros",
  //     "value": 325
  //   }
  // ];

  constructor(public ServicioGastos: GastosService) {
    this.ServicioGastos.getGastos(this.gastosTipo.id_user).subscribe(function(data: Gastos[]){
      console.log(data)
    })
  }

  igualBateria() {
    let bateria: string = "bateria"
    console.log(this.gastosTipo.cost);
    console.log(this.gastosTipo.type);

    if (this.gastosTipo.type == bateria)
    {
      console.log(this.gastosTipo.cost);
      
      return this.gastosTipo.cost
    }
  }

  single = [
    {
      "name": "Bateria",
      "value": this.igualBateria
    },
    {
      "name": "AceiteMotor",
      "value": 530
    },
    {
      "name": "Filtros",
      "value": 220
    },
    {
      "name": "Neumáticos",
      "value": 109
    },
    {
      "name": "Frenos",
      "value": 620
    },
    {
      "name": "Bujías",
      "value": 89
    },
    {
      "name": "Correa",
      "value": 325
    },
    {
    "name": "Escobillas",
    "value": 620
    },
    {
      "name": "ITV",
      "value": 89
    },
    {
      "name": "Otros",
      "value": 325
    }
  ];

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