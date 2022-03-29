import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaMisDatosComponent } from './pagina-mis-datos.component';

describe('PaginaMisDatosComponent', () => {
  let component: PaginaMisDatosComponent;
  let fixture: ComponentFixture<PaginaMisDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaMisDatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaMisDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
