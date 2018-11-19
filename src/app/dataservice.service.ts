import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  usuario;

  constructor() { }

  login(usuariojson){
    this.usuario = new User().deserialize(usuariojson);
    console.log(this.usuario.get_nombre_usuario());
  }
}
