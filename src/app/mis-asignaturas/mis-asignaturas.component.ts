import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from '../httpservice.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mis-asignaturas',
  templateUrl: './mis-asignaturas.component.html',
  styleUrls: ['./mis-asignaturas.component.css']
})
export class MisAsignaturasComponent implements OnInit {

  constructor(private httpService: HttpserviceService, private router: Router) { }

  asignaturas = null;

  ngOnInit() {
    this.httpService.get_asignaturas(function(asignaturas){
      this.asignaturas = asignaturas;
    }.bind(this));
  }

  nav_asignatura(id){
    this.router.navigate(['asignatura', id]);
  }

}
