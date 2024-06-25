export interface IPet  {
    name: string;
    age :number;
    species: string;
    customerId: string;
    petId: string
}


export class PetEntity implements IPet  {
    name: string;
    age :number;
    species: string;
    customerId: string;
    petId: string


    constructor(pet: IPet) {
        this.age = pet.age;
        this.customerId = pet.customerId;
        this.species = pet.species;
        this.name = pet.name;
        this.petId = pet.petId
    }

      static createPet (pet: unknown) {
        return new PetEntity(pet as IPet)
    }
}