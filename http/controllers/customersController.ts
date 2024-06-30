
import { ICustomer } from "../../src/domain/customerEntity";
import { AddCustomerDTO } from "../../src/application/dto/addCustomerDTO";
import { GetCustomersDTO } from "../../src/application/dto/getCustomerDTO";
import { customersService } from "../../src/application/customersService";
import { Body, Controller, Get, Post, Res, Query, Route, SuccessResponse, TsoaResponse } from "tsoa";

@Route("/customersapp/customer")
export class CustomerController extends Controller {
    @SuccessResponse("200", "Found")
    @Get("/")
    public async getCustomers(@Res() success: TsoaResponse<200, ICustomer[]>, @Res() error: TsoaResponse<500, { status: string, message: string }>, @Query() query?: string): Promise<void> {
        try {
            const getCustomersDTO = GetCustomersDTO.createDTO(query || "");
            const customerService = new customersService();
            const httpResponse = await customerService.getCustomers(getCustomersDTO);

            success(200, httpResponse.body as ICustomer[]);
        } catch (err) {
            error(500, { status: "error", message: (err as Error).message });
        }
    }

    @SuccessResponse("201", "Created")
    @Post("/")
    public async addCustomer(@Body() body: AddCustomerDTO, @Res() success: TsoaResponse<200, ICustomer>, @Res() error: TsoaResponse<500, { status: string, message: string }>): Promise<void> {
        try {
            const addCustomerDTO = AddCustomerDTO.createDTO(body);
            const customerService = new customersService();
            const response = await customerService.addCustomer(addCustomerDTO);

            success(200, response.body as ICustomer);
        } catch (err) {
            error(500, { status: "error", message: (err as Error).message });
        }
    }
}
