export interface IGetPetsDTO {
    name?: string;
    species?: string;
    customerId?: string
}

export class GetPetsDTO implements IGetPetsDTO {
    name?: string;
    species?: string;
    customerId?: string

    constructor(dto) {
        this.name  = dto.name 
        this.species = dto.species
        this.customerId = dto.customerId
    }

    static createDTO(dto: unknown) {
        return new GetPetsDTO(dto as IGetPetsDTO)
    }
}