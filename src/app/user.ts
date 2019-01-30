import {Deserializable} from "./deserializable.model";
import { UsuarioComponent } from "./usuario/usuario.component";

export class User implements Deserializable {
        nombre: string;
        usuario: string;
        contrasena: string;

        set_usuario(nombre:string,usuario:string,contrasena:string){
                this.nombre = nombre;
                this.usuario = usuario;
                this.contrasena = contrasena;
        }

        deserialize(input: any) {
                Object.assign(this, input);
                return this;
        }

        get_nombre_usuario(){
                return (this.nombre + '(' + this.usuario + ')');
        }

        get_usuario(){
                return this.usuario;
        }
}