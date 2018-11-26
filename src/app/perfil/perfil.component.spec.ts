import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilComponent } from './perfil.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { User } from '../user';

describe('PerfilComponent', () => {
  let component: PerfilComponent;
  let fixture: ComponentFixture<PerfilComponent>;
  let dataService: DataserviceService; 

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilComponent ],
      providers: [DataserviceService],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilComponent);
    component = fixture.componentInstance;
    let usuario = new User();
    usuario.set_usuario("Nombre1","Usuario1","Contrasena1");
    component.set_usuario(usuario);
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
