import {Deserializable} from "./deserializable.model";

export class Video implements Deserializable {
        id: number;
	autor: string;
	titulo: string;
        url: string;
        
        deserialize(input: any) {
                Object.assign(this, input);
                return this;
        }
}