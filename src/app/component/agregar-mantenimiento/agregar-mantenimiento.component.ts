import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

const BATERIA = "Bateria";
const ACEITE_MOTOR = "Aceite Motor";
const FILTROS = "Filtros";
const FILTROACEITE = "Aceite";
const FILTROCOMBUSTIBLE = "Combustible";
const FILTROAIRE = "Aire";
const FILTROHABITACULO = "Habitáculo";
const NEUMATICOS = "Neumáticos";
const NEUMATICODELANTEROS = "Delanteros";
const NEUMATICOTRASEROS = "Traseros";
const NEUMATICOAMBOS = "Ambos";
const TRACCIONDELANTERA = "Delantera";
const TRACCIONTRASERA = "Trasera";
const TRACCIONAMBOS = "Ambos";
const FRENOS = "Frenos";
const FRENODISCOS = "Discos";
const FRENOPASTILLAS = "Pastillas";
const FRENOLIQUIDO = "Líquido"
const BUJIAS = "Bujías";
const CORREA = "Correa de distribución";
const ESCOBILLAS = "Escobillas limpiaparabrisas";
const ITV = "Inspección técnica (ITV)";
const OTROS = "Otros";

@Component({
  selector: 'app-agregar-mantenimiento',
  templateUrl: './agregar-mantenimiento.component.html',
  styleUrls: ['./agregar-mantenimiento.component.css']
})

export class AgregarMantenimientoComponent implements OnInit {

  public mantenimientos: string[] = [BATERIA, ACEITE_MOTOR, FILTROS,
    NEUMATICOS, FRENOS, BUJIAS, CORREA, ESCOBILLAS,
    ITV, OTROS]

  public tipoBasico: string[] = [BATERIA, ACEITE_MOTOR, BUJIAS, CORREA, ESCOBILLAS]


  public tipoFiltro: string[] = [FILTROACEITE, FILTROCOMBUSTIBLE, FILTROAIRE, FILTROHABITACULO]

  public tipoFreno: string[] = [FRENODISCOS, FRENOPASTILLAS, FRENOLIQUIDO]

  public tipoNeumatico: string[] = [NEUMATICODELANTEROS, NEUMATICOTRASEROS, NEUMATICOAMBOS]

  public tipoTraccion: string[] = [TRACCIONDELANTERA, TRACCIONTRASERA, TRACCIONAMBOS]

  public formularioBasico: boolean;
  public formularioFiltros: boolean;
  public formularioFrenos: boolean;
  public formularioNeumaticos: boolean;
  public formularioITV: boolean;
  public formularioOtros: boolean;

  constructor(public router: Router) {

    this.formularioBasico = false;
    this.formularioFiltros = false;
    this.formularioFrenos = false;
    this.formularioNeumaticos = false;
    this.formularioITV = false;
    this.formularioOtros = false;
  }
  mantenimientoSeleccion(tipoMantenimiento: string) {
    if (this.tipoBasico.includes(tipoMantenimiento)) {
      this.formularioBasico = true;
      this.formularioFiltros = false;
      this.formularioFrenos = false;
      this.formularioNeumaticos = false;
      this.formularioITV = false;
      this.formularioOtros = false;
    }
    else if (tipoMantenimiento === "seleciona mantenimiento") {
      this.formularioBasico = false;
      this.formularioFiltros = false;
      this.formularioFrenos = false;
      this.formularioNeumaticos = false;
      this.formularioITV = false;
      this.formularioOtros = false;
    }
    else if (tipoMantenimiento === FILTROS) {
      this.formularioBasico = false;
      this.formularioFiltros = true;
      this.formularioFrenos = false;
      this.formularioNeumaticos = false;
      this.formularioITV = false;
      this.formularioOtros = false;
    }
    else if (tipoMantenimiento === "tipo") {
      this.formularioBasico = false;
      this.formularioFiltros = false;
      this.formularioFrenos = false;
      this.formularioNeumaticos = false;
      this.formularioITV = false;
      this.formularioOtros = false;
    }
    else if (tipoMantenimiento === FRENOS) {
      this.formularioBasico = false;
      this.formularioFiltros = false;
      this.formularioFrenos = true;
      this.formularioNeumaticos = false;
      this.formularioITV = false;
      this.formularioOtros = false;
    }
    else if (tipoMantenimiento === NEUMATICOS) {
      this.formularioBasico = false;
      this.formularioFiltros = false;
      this.formularioFrenos = false;
      this.formularioNeumaticos = true;
      this.formularioITV = false;
      this.formularioOtros = false;
    }
    else if (tipoMantenimiento === ITV) {
      this.formularioBasico = false;
      this.formularioFiltros = false;
      this.formularioFrenos = false;
      this.formularioNeumaticos = false;
      this.formularioITV = true;
      this.formularioOtros = false;
    }
    else if (tipoMantenimiento === OTROS) {
      this.formularioBasico = false;
      this.formularioFiltros = false;
      this.formularioFrenos = false;
      this.formularioNeumaticos = false;
      this.formularioITV = false;
      this.formularioOtros = true;
    }
    // console.log(tipoMantenimiento);
  }

  agregarBasico(tipoMantenimiento: string, coste: string) {
    if (tipoMantenimiento != "") {
      console.log(tipoMantenimiento);
      console.log(coste);
      this.router.navigate(['/mantenimiento'])
    }

  }
  agregarFreno(tipoMantenimiento: string, tipoFreno: string, coste: string) {
    if (tipoMantenimiento != "" && tipoFreno != "") {
      console.log(tipoMantenimiento);
      console.log(tipoFreno);
      console.log(coste);
      this.router.navigate(['/mantenimiento'])
    }

  }
  agregarFiltro(tipoMantenimiento: string, tipoFiltro: string, coste: string) {
    if (tipoMantenimiento != "" && tipoFiltro != "") {
      console.log(tipoMantenimiento);
      console.log(tipoFiltro);
      console.log(coste);
      this.router.navigate(['/mantenimiento'])
    }

  }
  agregarNeumatico(tipoMantenimiento: string, posicionNeumatico: string, traccion: string, coste: string) {
    if (tipoMantenimiento != "" && posicionNeumatico != "" && traccion != "") {
      console.log(tipoMantenimiento);
      console.log(posicionNeumatico);
      console.log(traccion);
      console.log(coste);
      this.router.navigate(['/mantenimiento'])
    }

  }
  agregarItv(tipoMantenimiento: string, coste: string) {
    if (tipoMantenimiento != "") {
      console.log(tipoMantenimiento);
      console.log(coste);
      this.router.navigate(['/mantenimiento'])
    }

  }
  agregarOtro(tipoMantenimiento: string, nombre: string, descripcion: string, coste: string, fecha: string) {
    if (tipoMantenimiento != "" && nombre != "" && fecha != "") {
      console.log(tipoMantenimiento);
      console.log(nombre);
      console.log(descripcion);
      console.log(coste);
      console.log(fecha);
      this.router.navigate(['/mantenimiento'])
    }

  }

  ngOnInit(): void {
  }

}
