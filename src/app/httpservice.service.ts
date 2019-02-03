import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { User } from './user';
import {Observable} from 'rxjs/Rx';
import { DataserviceService } from './dataservice.service';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
  constructor(private http: HttpClient, private data: DataserviceService) {}

  set_usuario(nombre, usuario, contrasena){
    this.http.post('/registro', {nombre: nombre, usuario: usuario, contrasena: contrasena }).subscribe();
  }

  set_asignatura(nombre, curso, contrasena, callback){
    var user = this.data.get_usuario();
    this.http.post('/crear_asignatura', {nombre: nombre, curso: curso, contrasena: contrasena, usuario: user.get_usuario()}).subscribe(function(){
      callback();
    });
  }

  get_usuarios(callback) {
    this.http.get<User[]>('/users').subscribe(data => {
      var usuarios = []
      for(var i = 0; i < data.length; i++) {
        var obj = data[i];
        usuarios[i] = new User().deserialize(obj);
      }
      callback(usuarios)
    });
  }

  get_asignatura(id, callback){
    var user = this.data.get_usuario();
    this.http.post('/asignatura/' + id, { usuario: user.get_usuario() }).subscribe(data => {
      callback(data);
    });
  }

  get_asignaturas(callback){
    var user = this.data.get_usuario();
    this.http.post('/mis_asignaturas', { usuario: user.get_usuario() }).subscribe(data => {
      callback(data);
    });
  }

  login(usuario,contrasena, callback){
    this.http.post('/inicio_sesion', {usuario: usuario, contrasena: contrasena }).subscribe(data => {
      callback(data);
    });
  }

  set_video(asignatura_id, titulo_video, url_video, descripcion_video, callback){
    var user = this.data.get_usuario();
    this.http.post('/add/video', { autor: user.get_usuario(), titulo: titulo_video, url: url_video, descripcion: descripcion_video, _id: asignatura_id }, { responseType: 'text' }).subscribe(function(){
      callback();
    });
  }

  set_apuntes(asignatura_id, titulo_apuntes, url_apuntes, descripcion_apuntes, callback){
    var user = this.data.get_usuario();
    this.http.post('/add/apuntes', { autor: user.get_usuario(), titulo: titulo_apuntes, url: url_apuntes, descripcion: descripcion_apuntes, _id: asignatura_id }, { responseType: 'text' }).subscribe(function(){
      callback();
    });
  }

  set_comentario(asignatura_id, titulo_comentario, comentario, callback){
    var user = this.data.get_usuario();
    this.http.post('http://localhost:8081/add/post', { autor: user.get_usuario(), titulo: titulo_comentario, comentario: comentario, _id: asignatura_id }, { responseType: 'text' }).subscribe(function(){
      callback();
    });
  }

  buscar(asignatura, callback){
    this.http.get('http://localhost:8081/buscar', { params: { busqueda: asignatura } }).subscribe(data => {
      callback(data);
    });
  }

  get_post(id, callback){
    this.http.get('http://localhost:8081/post/' + id).subscribe(data => {
      callback(data);
    });
  }

  set_respuesta(id_post, comentario, callback){
    var user = this.data.get_usuario();
    this.http.post('http://localhost:8081/post/' + id_post + '/responder', { autor: user.get_usuario() ,comentario: comentario }, { responseType: 'text' }).subscribe(function(){
      callback();
    });
  }
}
