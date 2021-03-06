import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from '../httpservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-tema',
  templateUrl: './post-tema.component.html',
  styleUrls: ['./post-tema.component.css']
})
export class PostTemaComponent implements OnInit {

  constructor(private httpService: HttpserviceService, private route: ActivatedRoute, private router: Router) { 
    this.httpService.get_post(this.route.snapshot.paramMap.get('id'), function(datospost) {
      this.post = datospost;
    }.bind(this));
  }

  post;
  
  ngOnInit() {
    this.httpService.get_post(this.route.snapshot.paramMap.get('id'), function(datospost) {
      this.post = datospost;
    }.bind(this));
  }

  responder(comentario){
    this.httpService.set_respuesta(this.post._id, comentario.value, function(){
      this.httpService.get_post(this.route.snapshot.paramMap.get('id'), function(datospost) {
        this.post = datospost;
      }.bind(this));
    }.bind(this));
  }
}
