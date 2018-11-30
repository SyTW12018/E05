import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from '../httpservice.service';
import { DataserviceService } from '../dataservice.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-form-inicio-sesion',
  templateUrl: './form-inicio-sesion.component.html',
  styleUrls: ['./form-inicio-sesion.component.css']
})
export class FormInicioSesionComponent implements OnInit {
text = 'Inicio de Sesion';
constructor(private httpService: HttpserviceService, private router: Router, private dataService: DataserviceService ) { }

  ngOnInit() {
  }
  
  inicio_sesion(usuario, contrasena){
      this.httpService.login(usuario.value, contrasena.value, function(usuario){
        this.dataService.login(usuario);
        this.router.navigate(['perfil']);
      }.bind(this));
      return true;
  }


}