import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from '../httpservice.service';
import { DataserviceService } from '../dataservice.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router'

@Component({
  selector: 'app-form-inicio-sesion',
  templateUrl: './form-inicio-sesion.component.html',
  styleUrls: ['./form-inicio-sesion.component.css']
})
export class FormInicioSesionComponent implements OnInit {
text = 'Inicio de Sesion';
contactForm: FormGroup;
contact={
  usuario2: '',
  contrasena2: ''
};

constructor(private httpService: HttpserviceService, private router: Router, private dataService: DataserviceService ) {
  this.createForm();
 }
  ngOnInit() {
  }
    
createForm(): void{
  this.contactForm = new FormGroup({
    'usuario2': new FormControl(this.contact.usuario2,[
      Validators.required,
      Validators.minLength(3)
      ]),
      'contrasena2': new FormControl(this.contact.contrasena2,[
        Validators.required,
        Validators.minLength(3)
        ])
  })
}
  
  
  
  inicio_sesion(usuario, contrasena){
      this.httpService.login(usuario.value, contrasena.value, function(usuario){
        this.dataService.login(usuario);
        this.router.navigate(['perfil']);
      }.bind(this));
      return true;
  }


}