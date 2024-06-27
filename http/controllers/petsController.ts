/*
import { IPet } from "../../src/domain/petEntitiy";
import { AddPetsDTO } from "../../src/application/dto/addPetsDTO";
import { GetPetsDTO } from "../../src/application/dto/getPetsDTO";
import { petsService } from "../../src/application/petsService";
import { Controller, Get, Post, Route, Body, Query, Res, TsoaResponse, SuccessResponse } from 'tsoa';
import HttpResponse from "src/application/utils/httpResponse";
*/



/*

import { IPet } from "../../src/domain/petEntitiy";
import { AddPetsDTO } from "../../src/application/dto/addPetsDTO";
import { GetPetsDTO } from "../../src/application/dto/getPetsDTO";
import { petsService } from "../../src/application/petsService";
import { Controller, Get, Post, Body, Query, Res, TsoaResponse, SuccessResponse } from 'tsoa';
import HttpResponse from "src/application/utils/httpResponse";

export class PetsController extends Controller {

    @SuccessResponse("200", "OK")
    @Get("/")
    public async getPets(@Query() filter: string, @Res() success: TsoaResponse<200, IPet[]>, @Res() error: TsoaResponse<500, { status: string, message: string }>): Promise<void> {
        try {
            const getPetsDTO = GetPetsDTO.createDTO({ filter });
            const petService = new petsService();
            const response = await petService.getPets(getPetsDTO);
            if (response instanceof HttpResponse && response.statusCode === 200) {
                success(200, response.body as IPet[]);
            } else {
                throw new Error('Unexpected response');
            }
        } catch (err) {
            error(500, { status: "error", message: (err as Error).message });
        }
    }

    @SuccessResponse("200", "OK")
    @Post("/")
    public async addPets(@Body() body: AddPetsDTO, @Res() success: TsoaResponse<200, IPet>, @Res() error: TsoaResponse<500, { status: string, message: string }>): Promise<void> {
        try {
            const addPetsDTO = AddPetsDTO.createDTO(body);
            const petService = new petsService();
            const response = await petService.addPets(addPetsDTO);
            if (response instanceof HttpResponse && response.statusCode === 200) {
                success(200, response.body as IPet);
            } else {
                throw new Error('Unexpected response');
            }
        } catch (err) {
            error(500, { status: "error", message: (err as Error).message });
        }
    }
}
*/

import { IPet } from "../../src/domain/petEntitiy";
import { AddPetsDTO } from "../../src/application/dto/addPetsDTO";
import { GetPetsDTO } from "../../src/application/dto/getPetsDTO";
import { petsService } from "../../src/application/petsService";
import { Controller, Get, Post, Body, Query, Res, TsoaResponse, SuccessResponse, Route } from 'tsoa';
import HttpResponse from "../../src/application/utils/httpResponse";

@Route("/pets")
export class PetsController extends Controller {

  @SuccessResponse("200", "OK")
  @Get("/")
  public async getPets(
    @Query() filter: string,
    @Res() success: TsoaResponse<200, IPet[]>,
    @Res() error: TsoaResponse<500, { status: string; message: string }>
  ): Promise<void> {
    try {
      const getPetsDTO = GetPetsDTO.createDTO({ filter: filter || "" });
      const petService = new petsService();
      const response = await petService.getPets(getPetsDTO);
      if (response instanceof HttpResponse && response.statusCode === 200) {
        success(200, response.body as IPet[]);
      } else {
        throw new Error('Unexpected response');
      }
    } catch (err) {
      error(500, { status: "error", message: (err as Error).message });
    }
  }

  @SuccessResponse("200", "OK")
  @Post("/")
  public async addPets(
    @Body() body: AddPetsDTO,
    @Res() success: TsoaResponse<200, IPet>,
    @Res() error: TsoaResponse<500, { status: string; message: string }>
  ): Promise<void> {
    try {
      const addPetsDTO = AddPetsDTO.createDTO(body);
      const petService = new petsService();
      const response = await petService.addPets(addPetsDTO);
      if (response instanceof HttpResponse && response.statusCode === 200) {
        success(200, response.body as IPet);
      } else {
        throw new Error('Unexpected response');
      }
    } catch (err) {
      error(500, { status: "error", message: (err as Error).message });
    }
  }
}
