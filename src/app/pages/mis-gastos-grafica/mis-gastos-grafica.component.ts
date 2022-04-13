import { Component, ViewChild } from '@angular/core';
import { OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { GastosService } from 'src/app/servicios/gastos.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-mis-gastos-grafica',
  templateUrl: './mis-gastos-grafica.component.html',
  styleUrls: ['./mis-gastos-grafica.component.css']
})

export class MisGastosGraficaComponent {
  
  @ViewChild (BaseChartDirective) chart: BaseChartDirective | undefined;

  public doughnutChartLabels: string[] = [];

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [],
        backgroundColor: ['#FFD966','#A18F65','#FFF9EE','#1B3D2F','#B3ABAC',
                          '#574144','#BEA5A8','#8DB5AD','#5A8079','#1F191A']}
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

  public gastoTotal: number =0;

  constructor(private servicioGastos: GastosService, private servicioUsuario: UsuarioService) {}

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  ngOnInit(): void {

    this.servicioGastos.getGastos(this.servicioUsuario.usuario.id_user).subscribe((data: any)=> {
      
      for(let gasto of data) {
        this.doughnutChartData.datasets[0].data.push(gasto.cost)
        this.doughnutChartLabels.push(gasto.type)
        this.gastoTotal+= parseInt(gasto.cost)

        this.chart?.update();
      }
    })
  } 
}