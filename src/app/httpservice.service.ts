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
    this.http.post('http://localhost:8081/registro', {nombre: nombre, usuario: usuario, contrasena: contrasena }).subscribe();
  }

  set_asignatura(nombre, curso, contrasena){
    var user = this.data.get_usuario();
    this.http.post('http://localhost:8081/crear_asignatura', {nombre: nombre, curso: curso, contrasena: contrasena, usuario: user.get_usuario()}).subscribe();
  }

  get_usuarios(callback) {
    this.http.get<User[]>('http://localhost:8081/users').subscribe(data => {
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
    this.http.post('http://localhost:8081/asignatura/' + id, { usuario: user.get_usuario() }).subscribe(data => {
      callback(data);
    });
  }

  get_asignaturas(callback){
    var user = this.data.get_usuario();
    this.http.post('http://localhost:8081/mis_asignaturas', { usuario: user.get_usuario() }).subscribe(data => {
      callback(data);
    });
  }

  login(usuario,contrasena, callback){
    this.http.post('http://localhost:8081/inicio_sesion', {usuario: usuario, contrasena: contrasena }).subscribe(data => {
      callback(data);
    });
  }

}
