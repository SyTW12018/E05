import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormInicioSesionComponent } from './form-inicio-sesion.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

describe('FormInicioSesionComponent', () => {
  let component: FormInicioSesionComponent;
  let fixture: ComponentFixture<FormInicioSesionComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormInicioSesionComponent ],
      imports: [ HttpClientTestingModule, RouterTestingModule, ReactiveFormsModule ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(FormInicioSesionComponent);
      component = fixture.componentInstance;
      de = fixture.debugElement.query(By.css('form'));
      el = de.nativeElement;
     // fixture.detectChanges();
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have as text Inicio de sesion', async(() => {
    expect(component.text).toEqual('Inicio de Sesion');
  }));

  it('form should be created', async(() => {
    expect(component.contactForm).toBeTruthy();
  }));


  it('form should be invalid', async(() => {
    component.contactForm.controls['usuario2'].setValue('');
    component.contactForm.controls['contrasena2'].setValue('12');

    expect(component.contactForm.valid).toBeFalsy();
  }));


  it('form should be valid', async(() => {
    component.contactForm.controls['usuario2'].setValue('Juan');
    component.contactForm.controls['contrasena2'].setValue('dsfdg');

    expect(component.contactForm.valid).toBeTruthy();
  }));

/*
  it('should call the inicio_sesion method', async(() => {
    fixture.detectChanges();
    spyOn(component,'inicio_sesion');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.inicio_sesion).toHaveBeenCalledTimes(0);
  }));*/

});