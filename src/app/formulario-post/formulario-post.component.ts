import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from '../httpservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario-post',
  templateUrl: './formulario-post.component.html',
  styleUrls: ['./formulario-post.component.css']
})
export class FormularioPostComponent implements OnInit {

  constructor(private httpService: HttpserviceService, private route: ActivatedRoute, private router: Router) { }

  asignatura;

  ngOnInit() {
    this.httpService.get_asignatura(this.route.snapshot.paramMap.get('id'), function(datosasignatura) {
      this.asignatura = datosasignatura;
    }.bind(this));
  }

  subir_comentario(titulo_comentario, comentario){
    this.httpService.set_comentario(this.asignatura._id, titulo_comentario.value, comentario.value, function(){
      this.router.navigate(['asignatura', this.route.snapshot.paramMap.get('id')]);
    }.bind(this));
  }
}
