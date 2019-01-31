import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioApuntesComponent } from './formulario-apuntes.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('FormularioApuntesComponent', () => {
  let component: FormularioApuntesComponent;
  let fixture: ComponentFixture<FormularioApuntesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioApuntesComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioApuntesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
