import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from '../httpservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-asignatura',
  templateUrl: './asignatura.component.html',
  styleUrls: ['./asignatura.component.css']
})
export class AsignaturaComponent implements OnInit {

  constructor(private httpService: HttpserviceService, private route: ActivatedRoute, private router: Router) {
    this.httpService.get_asignatura(this.route.snapshot.paramMap.get('id'), function(datosasignatura) {
      this.asignatura = datosasignatura;
      console.log(this.asignatura)
    }.bind(this));
  }
  
  asignatura;

  ngOnInit(){}

  nav_formulario_add(tipo){
    this.router.navigate([this.asignatura._id + "/add/" + tipo]);
  }
}
