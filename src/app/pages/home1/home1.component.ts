import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipsService } from 'src/app/servicios/tips.service';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class Home1Component implements OnInit {

  constructor(public router: Router, public tips: TipsService) { 
    this.mostrarConsejo()
  }

  public tip: string
  
  iniciarSesion() {
    this.router.navigate(['/pagina-login'])
  }

  mostrarConsejo()
  {
    this.tips.getTip().subscribe((data:string[])=>
    {
      console.log(data)
      this.tip = data[0]
    })
  }

  ngOnInit(): void {
  }

}
