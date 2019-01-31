import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarAsignaturaComponent } from './buscar-asignatura.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('BuscarAsignaturaComponent', () => {
  let component: BuscarAsignaturaComponent;
  let fixture: ComponentFixture<BuscarAsignaturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarAsignaturaComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarAsignaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
