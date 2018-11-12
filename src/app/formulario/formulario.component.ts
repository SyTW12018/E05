import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from '../httpservice.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor(private httpService: HttpserviceService ) { }

  ngOnInit() {
  }
  
  enviar(nombre, usuario, contrasena){
    this.httpService.set_usuario(nombre.value, usuario.value, contrasena.value);
    return false;
  }

}
