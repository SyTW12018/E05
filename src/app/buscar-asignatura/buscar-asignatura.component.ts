import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from '../httpservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscar-asignatura',
  templateUrl: './buscar-asignatura.component.html',
  styleUrls: ['./buscar-asignatura.component.css']
})
export class BuscarAsignaturaComponent implements OnInit {

  constructor(private httpService: HttpserviceService, private router: Router) { }

  ngOnInit() {
  }

  resultados;

  buscar(asignatura){
    this.httpService.buscar(asignatura.value, function(resultados)  {
      this.resultados = resultados;
      console.log(resultados);
    }.bind(this));
  }

  matricularse_asignatura(contrasena_asignatura, id_asignatura){
    this.httpService.matricular_usuario(id_asignatura, contrasena_asignatura.value, function(matriculado){
      if(matriculado){
        this.router.navigate(['perfil/mis-asignaturas']);
      }
    }.bind(this));
  }
}
