import { Component, OnInit } from '@angular/core';
import { MantenimientosService } from 'src/app/servicios/mantenimientos.service';
import { Mantenimiento } from 'src/app/models/mantenimiento';
import { Router } from '@angular/router';
import { Modal } from 'bootstrap'
// import React from 'react'


@Component({
  selector: 'app-detalle-mantenimiento',
  templateUrl: './detalle-mantenimiento.component.html',
  styleUrls: ['./detalle-mantenimiento.component.css']
})
export class DetalleMantenimientoComponent implements OnInit {

  public mantenimientos: any

  constructor(public router: Router, private mantenimientoService: MantenimientosService) {
    this.mantenimientos = this.mantenimientoService.mantenimientoSeleccionado
    console.log(this.mantenimientos);

  }

  eliminar() {
    this.mantenimientoService.delete(this.mantenimientos.id_maintenance).subscribe((data1: any) => {
      this.router.navigate(['/pagina-mantenimiento'])
    })
  }

  ngOnInit(): void {
  }

}

// import { Component, Input } from '@angular/core';
// import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

// @Component({
//   selector: 'ngbd-modal-content',
//   template: `
//     <div class="modal-header">
//       <h4 class="modal-title">Hi there!</h4>
//       <button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss('Cross click')"></button>
//     </div>
//     <div class="modal-body">
//       <p>Hello, {{name}}!</p>
//     </div>
//     <div class="modal-footer">
//       <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
//     </div>
//   `
// })
// export class DetalleMantenimientoComponent {
//   @Input() name;

//   constructor(public activeModal: NgbActiveModal) { }
// }

// @Component({ selector: 'app-detalle-mantenimiento', templateUrl: './detalle-mantenimiento.component.html' })
// export class NgbdModalComponent {
//   constructor(private modalService: NgbModal) { }

//   open() {
//     const modalRef = this.modalService.open(DetalleMantenimientoComponent);
//     modalRef.componentInstance.name = 'World';
//   }
// }