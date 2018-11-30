import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from '../httpservice.service';
import { DataserviceService } from '../dataservice.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router'

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  contactForm: FormGroup;
  contact={
    nombre1: '',
    usuario1: '',
    contrasena1: ''
  }; 
  constructor(private httpService: HttpserviceService ) {
    this.createForm();
   }

  ngOnInit() {
  }
  
  createForm(): void{
    this.contactForm = new FormGroup({
      'nombre1': new FormControl(this.contact.nombre1,[
        Validators.required,
        Validators.minLength(3)
        ]),
      'usuario1': new FormControl(this.contact.usuario1,[
        Validators.required,
        Validators.minLength(3)
        ]),
      'contrasena1': new FormControl(this.contact.contrasena1,[
        Validators.required,
        Validators.minLength(3)
        ])
    })
  }

  enviar(nombre, usuario, contrasena){
    this.httpService.set_usuario(nombre.value, usuario.value, contrasena.value);
    return false;
  }

}
