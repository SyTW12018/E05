import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  usuario;

  constructor() { 
      this.obtener_localstorage();
   }

  login(usuariojson){
    this.usuario = new User().deserialize(usuariojson);
    this.grabar_localstorage(usuariojson);
    console.log(this.usuario.get_nombre_usuario());
  }

obtener_localstorage(){
  let usuariojson = JSON.parse(localStorage.getItem("usuario"));
  this.usuario = new User().deserialize(usuariojson);
}
grabar_localstorage(usuariojson){

  localStorage.setItem( "usuario", JSON.stringify( usuariojson ));
}
}
