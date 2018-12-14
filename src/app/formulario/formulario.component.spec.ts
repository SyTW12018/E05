import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormularioComponent } from './formulario.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';






describe('Pruebas FormularioComponent', () => {
  let component: FormularioComponent;
  let fixture: ComponentFixture<FormularioComponent>;
  let de: DebugElement;
  let el: HTMLElement;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioComponent ],
      imports: [ HttpClientTestingModule,RouterTestingModule, ReactiveFormsModule ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(FormularioComponent);
      component = fixture.componentInstance;
      de = fixture.debugElement.query(By.css('form'));
      el = de.nativeElement;
    });
  }));

 

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('form should be created', async(() => {
    expect(component.contactForm).toBeTruthy();
  }));


  it('form should be invalid', async(() => {
    component.contactForm.controls['nombre1'].setValue('KI');
    component.contactForm.controls['usuario1'].setValue('');
    component.contactForm.controls['contrasena1'].setValue('');

    expect(component.contactForm.valid).toBeFalsy();
  }));


  it('form should be valid', async(() => {
    component.contactForm.controls['nombre1'].setValue('Pepito');
    component.contactForm.controls['usuario1'].setValue('Pepin');
    component.contactForm.controls['contrasena1'].setValue('dsfdg');

    expect(component.contactForm.valid).toBeTruthy();
  }));






});
