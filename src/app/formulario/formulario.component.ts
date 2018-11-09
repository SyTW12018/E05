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
  
  enviar(nombre){
    this.httpService.set_usuario(nombre.value);
    return false;
  }

}
