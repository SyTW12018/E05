import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
  constructor(private http: HttpClient) { }
  
  set_usuario(usuario){
    alert(usuario);
    /*this.http.get('/registro/' + usuario);*/
  }
}
