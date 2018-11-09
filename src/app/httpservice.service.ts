import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
  constructor(private http: HttpClient) { }
  
  set_usuario(usuario){
    this.http.get('localhost:8081/registro/' + usuario);
  }
}
