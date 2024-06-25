export interface ICustomer {
    firstName: string;
    lastName: string;
    customerId: string;
}


export class CustomerEntity implements ICustomer {
    firstName: string;
    lastName: string;
    customerId: string;

    constructor(customer: ICustomer) {
        this.firstName = customer.firstName;
        this.lastName = customer.lastName;
        this.customerId = customer.customerId;
    }

    static createCustomer (customer: unknown) {
        return new CustomerEntity(customer as ICustomer)
    }
}