import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from '../httpservice.service';

@Component({
  selector: 'app-buscar-asignatura',
  templateUrl: './buscar-asignatura.component.html',
  styleUrls: ['./buscar-asignatura.component.css']
})
export class BuscarAsignaturaComponent implements OnInit {

  constructor(private httpService: HttpserviceService) { }

  ngOnInit() {
  }

  resultados;

  buscar(asignatura){
    this.httpService.buscar(asignatura.value, function(resultados)  {
      this.resultados = resultados;
    }.bind(this));
  }

  matricularse_asignatura(contrasena_asignatura){
    console.log(contrasena_asignatura);
  }
}
