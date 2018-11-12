import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { User } from './user';
import {Observable} from 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
  constructor(private http: HttpClient) {}
  
  set_usuario(nombre, usuario, contrasena){
    this.http.post('http://localhost:8081/registro', {nombre: nombre, usuario: usuario, contrasena: contrasena }).subscribe();
  }

  get_usuarios(callback) {
    this.http.get<User[]>('http://localhost:8081/users').subscribe(data => callback(new User().deserialize(data)));
  }
}