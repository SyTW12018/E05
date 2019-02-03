import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from '../httpservice.service';

@Component({
  selector: 'app-crear-asignatura',
  templateUrl: './crear-asignatura.component.html',
  styleUrls: ['./crear-asignatura.component.css']
})
export class CrearAsignaturaComponent implements OnInit {

  constructor(private httpService: HttpserviceService) { }

  ngOnInit() {
  }

  crear(nombre, curso, contrasena) {
    this.httpService.set_asignatura(nombre.value, curso.value, contrasena.value, function(){
      this.router.navigate(['perfil']);
    }.bind(this));
  }
}
