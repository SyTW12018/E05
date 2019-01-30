import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioApuntesComponent } from './formulario-apuntes.component';

describe('FormularioApuntesComponent', () => {
  let component: FormularioApuntesComponent;
  let fixture: ComponentFixture<FormularioApuntesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioApuntesComponent ]
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
