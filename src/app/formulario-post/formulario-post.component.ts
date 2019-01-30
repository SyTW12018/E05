import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-post',
  templateUrl: './formulario-post.component.html',
  styleUrls: ['./formulario-post.component.css']
})
export class FormularioPostComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  subir_comentario(titulo_comentario, comentario){
    console.log(comentario.value);
  }
}
