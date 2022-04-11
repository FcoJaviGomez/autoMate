import { Component, OnInit, TemplateRef } from '@angular/core';
import { MantenimientosService } from 'src/app/servicios/mantenimientos.service';
import { Mantenimiento } from 'src/app/models/mantenimiento';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-detalle-mantenimiento',
  templateUrl: './detalle-mantenimiento.component.html',
  styleUrls: ['./detalle-mantenimiento.component.css']
})
export class DetalleMantenimientoComponent implements OnInit {

  public mantenimientos: any

  modalRef: BsModalRef;

  constructor(public router: Router, private mantenimientoService: MantenimientosService,
    private modalService: BsModalService) {
    this.mantenimientos = this.mantenimientoService.mantenimientoSeleccionado
    console.log(this.mantenimientos);

  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  confirmarEliminar() {
    this.mantenimientoService.delete(this.mantenimientos.id_maintenance).subscribe((data1: any) => {
      this.router.navigate(['/pagina-mantenimiento'])
    })
  }

  ngOnInit(): void {
  }

}
