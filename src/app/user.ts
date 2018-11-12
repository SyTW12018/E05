import {Deserializable} from "./deserializable.model";

export class User implements Deserializable {
        nombre: string;
        usuario: string;
        contrasena: string;

        deserialize(input: any) {
                Object.assign(this, input);
                return this;
        }

        get_nombre_usuario(){
                return (this.nombre + '(' + this.usuario + ')');
        }
}