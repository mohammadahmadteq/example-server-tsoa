export interface IGetCustomersDTO {
    customerId?: string;
    firstName?: string;
    lastName?: string;
}

export class GetCustomersDTO implements IGetCustomersDTO {
    customerId?: string;
    firstName?: string;
    lastName?: string;

    constructor(dto) {
        this.customerId = dto.customerId;
        this.firstName = dto.firstName;
        this.lastName = dto.lastName;
    }

    static createDTO(dto: unknown) {
        return new GetCustomersDTO(dto as IGetCustomersDTO);
    }
}
