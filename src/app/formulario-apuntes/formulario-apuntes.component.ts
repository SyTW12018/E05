import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from '../httpservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario-apuntes',
  templateUrl: './formulario-apuntes.component.html',
  styleUrls: ['./formulario-apuntes.component.css']
})
export class FormularioApuntesComponent implements OnInit {

  constructor(private httpService: HttpserviceService, private route: ActivatedRoute, private router: Router) { }

  asignatura; 

  ngOnInit() {
    this.httpService.get_asignatura(this.route.snapshot.paramMap.get('id'), function(datosasignatura) {
      this.asignatura = datosasignatura;
    }.bind(this));
  }

  subir_apuntes(titulo_apuntes, url_apuntes,descripcion_apuntes){
    this.httpService.set_apuntes(this.asignatura._id, titulo_apuntes.value, url_apuntes.value, descripcion_apuntes.value);
  }
}
