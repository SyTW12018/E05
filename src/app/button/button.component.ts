import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from '../httpservice.service';
import { map } from 'rxjs/operators';
import { User } from '../user';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  constructor(private httpService: HttpserviceService) { } 

  ngOnInit() {
  }

  usuarios = null;

  getUsers(){
    this.httpService.get_usuarios(function(users){
      this.usuarios = users;
    }.bind(this));
    return false;
  }

}
