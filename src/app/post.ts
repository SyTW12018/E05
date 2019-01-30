import {Deserializable} from "./deserializable.model";

export class Post implements Deserializable {
        id: number;
	autor: string;
	titulo: string;
	comentario: string;
        fecha: Date;
        
        deserialize(input: any) {
                Object.assign(this, input);
                return this;
        }
}