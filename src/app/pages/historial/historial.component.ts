import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {

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
  },]

  // public mantenimientos: any = []

  constructor(public router: Router) { }

  historialDetalle() {
    this.router.navigate(['/detalle-historial'])
  }

  ngOnInit(): void {
  }

}
