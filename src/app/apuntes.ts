import {Deserializable} from "./deserializable.model";

export class Apuntes implements Deserializable {
        id: number;
        autor: string;
	titulo: string;
	peso: number;
        fecha: Date;
        
        deserialize(input: any) {
                Object.assign(this, input);
                return this;
        }
}