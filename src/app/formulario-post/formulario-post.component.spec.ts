import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPostComponent } from './formulario-post.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('FormularioPostComponent', () => {
  let component: FormularioPostComponent;
  let fixture: ComponentFixture<FormularioPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioPostComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
      
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
