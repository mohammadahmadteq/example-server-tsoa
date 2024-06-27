"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterRoutes = RegisterRoutes;
const runtime_1 = require("@tsoa/runtime");
const petsController_1 = require("./../controllers/petsController");
const models = {
    "IPet": {
        "dataType": "refObject",
        "properties": {
            "name": { "dataType": "string", "required": true },
            "age": { "dataType": "double", "required": true },
            "species": { "dataType": "string", "required": true },
            "customerId": { "dataType": "string", "required": true },
            "petId": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    "Pick_IPet.Exclude_keyofIPet.petId-or-customerId__": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "name": { "dataType": "string", "required": true }, "age": { "dataType": "double", "required": true }, "species": { "dataType": "string", "required": true } }, "validators": {} },
    },
    "AddPetsDTO": {
        "dataType": "refObject",
        "properties": {
            "name": { "dataType": "string", "required": true },
            "age": { "dataType": "double", "required": true },
            "species": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
};
const templateService = new runtime_1.ExpressTemplateService(models, { "noImplicitAdditionalProperties": "silently-remove-extras", "bodyCoercion": true });
function RegisterRoutes(app) {
    app.get('/pets', ...((0, runtime_1.fetchMiddlewares)(petsController_1.PetsController)), ...((0, runtime_1.fetchMiddlewares)(petsController_1.PetsController.prototype.getPets)), async function PetsController_getPets(request, response, next) {
        const args = {
            filter: { "in": "query", "name": "filter", "required": true, "dataType": "string" },
            success: { "in": "res", "name": "200", "required": true, "dataType": "array", "array": { "dataType": "refObject", "ref": "IPet" } },
            error: { "in": "res", "name": "500", "required": true, "dataType": "nestedObjectLiteral", "nestedProperties": { "message": { "dataType": "string", "required": true }, "status": { "dataType": "string", "required": true } } },
        };
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args, request, response });
            const controller = new petsController_1.PetsController();
            await templateService.apiHandler({
                methodName: 'getPets',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    app.post('/pets', ...((0, runtime_1.fetchMiddlewares)(petsController_1.PetsController)), ...((0, runtime_1.fetchMiddlewares)(petsController_1.PetsController.prototype.addPets)), async function PetsController_addPets(request, response, next) {
        const args = {
            body: { "in": "body", "name": "body", "required": true, "ref": "AddPetsDTO" },
            success: { "in": "res", "name": "200", "required": true, "ref": "IPet" },
            error: { "in": "res", "name": "500", "required": true, "dataType": "nestedObjectLiteral", "nestedProperties": { "message": { "dataType": "string", "required": true }, "status": { "dataType": "string", "required": true } } },
        };
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args, request, response });
            const controller = new petsController_1.PetsController();
            await templateService.apiHandler({
                methodName: 'addPets',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
            });
        }
        catch (err) {
            return next(err);
        }
    });
}
