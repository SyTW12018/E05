import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from '../httpservice.service';


@Component({
  selector: 'app-form-inicio-sesion',
  templateUrl: './form-inicio-sesion.component.html',
  styleUrls: ['./form-inicio-sesion.component.css']
})
export class FormInicioSesionComponent implements OnInit {

constructor(private httpService: HttpserviceService ) { }

  ngOnInit() {
  }
  
  inicio_sesion(usuario, contrasena){
      this.httpService.login(usuario.value, contrasena.value);
      return false;
  }


}
