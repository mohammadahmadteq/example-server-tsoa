import {IPet} from "../../domain/petEntitiy";

export interface IAddPetsDTO extends Omit<IPet, "petId" | "customerId"> {}

export class AddPetsDTO implements IAddPetsDTO {
    name: string;
    age: number;
    species: string;

    constructor(dto) {
        this.name = dto.name;
        this.species = dto.species;
        this.age = dto.age;
    }

    static createDTO(dto: unknown) {
        return new AddPetsDTO(dto as IAddPetsDTO);
    }
}
