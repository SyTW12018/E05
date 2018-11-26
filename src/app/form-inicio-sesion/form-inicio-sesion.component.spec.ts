import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInicioSesionComponent } from './form-inicio-sesion.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('FormInicioSesionComponent', () => {
  let component: FormInicioSesionComponent;
  let fixture: ComponentFixture<FormInicioSesionComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormInicioSesionComponent ],
      imports: [ HttpClientTestingModule, RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInicioSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
