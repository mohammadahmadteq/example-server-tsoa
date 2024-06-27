"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetsController = void 0;
const addPetsDTO_1 = require("../../src/application/dto/addPetsDTO");
const getPetsDTO_1 = require("../../src/application/dto/getPetsDTO");
const petsService_1 = require("../../src/application/petsService");
const tsoa_1 = require("tsoa");
const httpResponse_1 = __importDefault(require("../../src/application/utils/httpResponse"));
let PetsController = class PetsController extends tsoa_1.Controller {
    async getPets(filter, success, error) {
        try {
            const getPetsDTO = getPetsDTO_1.GetPetsDTO.createDTO({ filter: filter || "" });
            const petService = new petsService_1.petsService();
            const response = await petService.getPets(getPetsDTO);
            if (response instanceof httpResponse_1.default && response.statusCode === 200) {
                success(200, response.body);
            }
            else {
                throw new Error('Unexpected response');
            }
        }
        catch (err) {
            error(500, { status: "error", message: err.message });
        }
    }
    async addPets(body, success, error) {
        try {
            const addPetsDTO = addPetsDTO_1.AddPetsDTO.createDTO(body);
            const petService = new petsService_1.petsService();
            const response = await petService.addPets(addPetsDTO);
            if (response instanceof httpResponse_1.default && response.statusCode === 200) {
                success(200, response.body);
            }
            else {
                throw new Error('Unexpected response');
            }
        }
        catch (err) {
            error(500, { status: "error", message: err.message });
        }
    }
};
exports.PetsController = PetsController;
__decorate([
    (0, tsoa_1.SuccessResponse)("200", "OK"),
    (0, tsoa_1.Get)("/"),
    __param(0, (0, tsoa_1.Query)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Function, Function]),
    __metadata("design:returntype", Promise)
], PetsController.prototype, "getPets", null);
__decorate([
    (0, tsoa_1.SuccessResponse)("200", "OK"),
    (0, tsoa_1.Post)("/"),
    __param(0, (0, tsoa_1.Body)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [addPetsDTO_1.AddPetsDTO, Function, Function]),
    __metadata("design:returntype", Promise)
], PetsController.prototype, "addPets", null);
exports.PetsController = PetsController = __decorate([
    (0, tsoa_1.Route)("/pets")
], PetsController);
