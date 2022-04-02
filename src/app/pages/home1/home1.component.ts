import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class Home1Component implements OnInit {

  constructor(public router: Router) { }
  iniciarSesion() {
    this.router.navigate(['/pagina-login'])
  }

  ngOnInit(): void {
  }

}
