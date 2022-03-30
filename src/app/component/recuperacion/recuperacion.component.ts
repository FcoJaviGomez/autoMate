import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperacion',
  templateUrl: './recuperacion.component.html',
  styleUrls: ['./recuperacion.component.css']
})
export class RecuperacionComponent implements OnInit {

  constructor(public router: Router) { }
  recuperar() {
    this.router.navigate(['/pagina-login'])
  }

  ngOnInit(): void {
  }

}
