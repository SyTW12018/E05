import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav-perfil',
  templateUrl: './nav-perfil.component.html',
  styleUrls: ['./nav-perfil.component.css']
})
export class NavPerfilComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  nav_crear_asignatura(){
    this.router.navigate(['perfil/crear-asignatura']);
  }

  nav_buscar_asignaturas(){
    this.router.navigate(['buscar-asignaturas']);
  }

  nav_mis_asignaturas(){
    this.router.navigate(['perfil/mis-asignaturas']);
  }

  nav_usuario(){
    this.router.navigate(['perfil/usuario']);
  }
}
