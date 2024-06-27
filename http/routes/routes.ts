/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { TsoaRoute, fetchMiddlewares, ExpressTemplateService } from '@tsoa/runtime';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { PetsController } from './../controllers/petsController';
import type { Request as ExRequest, Response as ExResponse, RequestHandler, Router } from 'express';



// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

const models: TsoaRoute.Models = {
    "IPet": {
        "dataType": "refObject",
        "properties": {
            "name": {"dataType":"string","required":true},
            "age": {"dataType":"double","required":true},
            "species": {"dataType":"string","required":true},
            "customerId": {"dataType":"string","required":true},
            "petId": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Pick_IPet.Exclude_keyofIPet.petId-or-customerId__": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"name":{"dataType":"string","required":true},"age":{"dataType":"double","required":true},"species":{"dataType":"string","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AddPetsDTO": {
        "dataType": "refObject",
        "properties": {
            "name": {"dataType":"string","required":true},
            "age": {"dataType":"double","required":true},
            "species": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const templateService = new ExpressTemplateService(models, {"noImplicitAdditionalProperties":"silently-remove-extras","bodyCoercion":true});

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

export function RegisterRoutes(app: Router) {
    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################
        app.get('/petsapp/pet',
            ...(fetchMiddlewares<RequestHandler>(PetsController)),
            ...(fetchMiddlewares<RequestHandler>(PetsController.prototype.getPets)),

            async function PetsController_getPets(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    success: {"in":"res","name":"200","required":true,"dataType":"array","array":{"dataType":"refObject","ref":"IPet"}},
                    error: {"in":"res","name":"500","required":true,"dataType":"nestedObjectLiteral","nestedProperties":{"message":{"dataType":"string","required":true},"status":{"dataType":"string","required":true}}},
                    query: {"in":"query","name":"query","dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new PetsController();

              await templateService.apiHandler({
                methodName: 'getPets',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/petsapp/pet',
            ...(fetchMiddlewares<RequestHandler>(PetsController)),
            ...(fetchMiddlewares<RequestHandler>(PetsController.prototype.addPets)),

            async function PetsController_addPets(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    body: {"in":"body","name":"body","required":true,"ref":"AddPetsDTO"},
                    success: {"in":"res","name":"200","required":true,"ref":"IPet"},
                    error: {"in":"res","name":"500","required":true,"dataType":"nestedObjectLiteral","nestedProperties":{"message":{"dataType":"string","required":true},"status":{"dataType":"string","required":true}}},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new PetsController();

              await templateService.apiHandler({
                methodName: 'addPets',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 201,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa


    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
