import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {

  constructor(public router: Router) { }

  historial() {
    this.router.navigate(['/detalle-historial'])
  }

  ngOnInit(): void {
  }

}
