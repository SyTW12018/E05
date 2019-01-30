import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { User } from './user';
import { UsuarioComponent } from './usuario/usuario.component';

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
  }

obtener_localstorage(){
  let usuariojson = JSON.parse(localStorage.getItem("usuario"));
  this.usuario = new User().deserialize(usuariojson);
}
grabar_localstorage(usuariojson){

  localStorage.setItem( "usuario", JSON.stringify( usuariojson ));
}

get_usuario(){
  return this.usuario;
}
}
