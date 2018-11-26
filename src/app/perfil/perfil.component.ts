import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { User } from '../user';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usuario:User;

  constructor(private dataService: DataserviceService) { 
    this.usuario = new User(); 
  }

  ngOnInit() {
    this.set_usuario(this.dataService.usuario);
  }

  set_usuario(usuario){
    this.usuario = usuario;
    this.dataService.login(usuario);
  }

}
