import {AddPetsDTO} from "../../src/application/dto/addPetsDTO";
import {GetPetsDTO} from "../../src/application/dto/getPetsDTO";
import {petsService} from "../../src/application/petsService";
import HttpResponse from "../../src/application/utils/httpResponse";
import {TRequest, TResponse} from "../../src/types/Express";

export class PetsController {
    static async getPets(request: TRequest, response: TResponse) {
        try {
            const getPetsDTO = GetPetsDTO.createDTO(request.body);
            const petService = new petsService();
            const httpResponse = await petService.getPets(getPetsDTO);

            return HttpResponse.convertToExpress(response, httpResponse);
        } catch (error) {
            return HttpResponse.convertToExpress(response, HttpResponse.error({message: error as string}));
        }
    }

    static async addPets(request: TRequest, response: TResponse) {
        try {
            const addPetsDTO = AddPetsDTO.createDTO(request.body);
            const petService = new petsService();
            const httpResponse = await petService.addPets(addPetsDTO);

            return HttpResponse.convertToExpress(response, httpResponse);
        } catch (error) {
            return HttpResponse.convertToExpress(response, HttpResponse.error({message: error as string}));
        }
    }
}
