import {Deserializable} from "./deserializable.model";
import { Post } from "./post";
import { Video } from "./video";
import { Apuntes } from "./apuntes";

export class Asignatura implements Deserializable {
        nombre: string;
        curso: string;
        contrasena: string;
        foro: Post[];
        videos: Video[];
        apuntes: Apuntes[];

        deserialize(input: any): this {
                Object.assign(this, input);
                return this;
        }
}