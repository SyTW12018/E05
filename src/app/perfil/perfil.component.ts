import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { User } from '../user';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(private dataService: DataserviceService) { }

  usuario:User;

  ngOnInit() {
    this.usuario = this.dataService.usuario
  }

}
