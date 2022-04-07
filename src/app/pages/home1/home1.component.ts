import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipsService } from 'src/app/servicios/tips.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

interface Tips
{
  id_tips: number,
  text: string
}

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class Home1Component implements OnInit {

  constructor(public router: Router, public tips: TipsService ) { 
    this.mostrarConsejo()
  }

  public tip: string
  
  iniciarSesion() {
    this.router.navigate(['/pagina-login'])
  }

  mostrarConsejo()
  {
    this.tips.getTip().subscribe((data:Tips[])=>
    {
      console.log(data)
      this.tip = data[0].text
      this.tips.consejo = this.tip
      
      console.log(this.tips.consejo)
    })
  }

  ngOnInit(): void {
  }

}
