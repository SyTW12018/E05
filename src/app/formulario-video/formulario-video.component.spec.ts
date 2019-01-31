import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioVideoComponent } from './formulario-video.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('FormularioVideoComponent', () => {
  let component: FormularioVideoComponent;
  let fixture: ComponentFixture<FormularioVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioVideoComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
