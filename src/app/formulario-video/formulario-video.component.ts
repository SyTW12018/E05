import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from '../httpservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario-video',
  templateUrl: './formulario-video.component.html',
  styleUrls: ['./formulario-video.component.css']
})
export class FormularioVideoComponent implements OnInit {

  constructor(private httpService: HttpserviceService, private route: ActivatedRoute, private router: Router) { }

  asignatura; 

  ngOnInit() {
    this.httpService.get_asignatura(this.route.snapshot.paramMap.get('id'), function(datosasignatura) {
      this.asignatura = datosasignatura;
    }.bind(this));
  }

  subir_video(titulo_video, url_video, descripcion_video){
    this.httpService.set_video(this.asignatura._id, titulo_video.value, url_video.value, descripcion_video.value, function(){
      this.router.navigate(['asignatura', this.route.snapshot.paramMap.get('id')]);
    }.bind(this));
  }
}
