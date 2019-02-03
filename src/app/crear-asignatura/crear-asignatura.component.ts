import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from '../httpservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-asignatura',
  templateUrl: './crear-asignatura.component.html',
  styleUrls: ['./crear-asignatura.component.css']
})
export class CrearAsignaturaComponent implements OnInit {

  constructor(private httpService: HttpserviceService, private router: Router) { }

  ngOnInit() {
  }

  crear(nombre, curso, contrasena) {
    this.httpService.set_asignatura(nombre.value, curso.value, contrasena.value, function(){
      this.router.navigate(['perfil/mis-asignaturas']);
    }.bind(this));
  }
}
