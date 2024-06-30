import { CustomerEntity } from "../domain/customerEntity";
import { placeHolderCustomers } from "../../src/infrastructure/customersData";
import { GetCustomersDTO } from "../../src/application/dto/getCustomerDTO";
import HttpResponse from "./utils/httpResponse";
import { AddCustomerDTO } from "../../src/application/dto/addCustomerDTO";
export class customersService {
    getCustomers(getCustomersDto: GetCustomersDTO) {
        const customerEntities: CustomerEntity[] = [];

        for (const customer of placeHolderCustomers) {
            if (getCustomersDto.customerId && getCustomersDto.customerId !== customer.customerId) continue;

            if (getCustomersDto.firstName && getCustomersDto.firstName !== customer.firstName) continue;

            if (getCustomersDto.lastName && getCustomersDto.lastName !== customer.lastName) continue;

            customerEntities.push(CustomerEntity.createCustomer(customer));
        }

        if (customerEntities.length > 0) return HttpResponse.ok(customerEntities);

        return HttpResponse.notFound();
    }

    addCustomer(addCustomerDto: AddCustomerDTO) {
        const customerEntity = CustomerEntity.createCustomer(addCustomerDto);

        if (customerEntity.customerId) {
            return HttpResponse.ok(customerEntity);
        }

        return HttpResponse.error({
            message: "error creating customer"
        });
    }
}
