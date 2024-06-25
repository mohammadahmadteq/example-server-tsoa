import { PetEntity } from "src/domain/petEntitiy";
import { placeHolderPets } from "src/infrastructure/petsData";
import { GetPetsDTO } from "./dto/getPetsDTO";

export class petsService {
    getPets(getPetsDto: GetPetsDTO) {
        const petsEntity: PetEntity[] = []

        for (const pet of placeHolderPets) {
            if(getPetsDto.name && getPetsDto.name !== pet.name) continue;
            
            if(getPetsDto.species && getPetsDto.species !== pet.species) continue;

            petsEntity.push( PetEntity.createPet(pet));
        }

        if(petsEntity.length > 0) return petsEntity

        return {status: "error", message: "not found"}
    }
}