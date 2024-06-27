"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.petsRouter = void 0;
const express_1 = require("express");
const petsController_1 = require("../controllers/petsController");
const responseHelper_1 = require("../../src/application/utils/responseHelper");
const petsRouter = (0, express_1.Router)();
exports.petsRouter = petsRouter;
const petsController = new petsController_1.PetsController();
petsRouter.get("/", (req, res) => {
    const filter = req.query['filter'] || '';
    const success = (0, responseHelper_1.createTsoaResponse)(res);
    const error = (0, responseHelper_1.createTsoaResponse)(res);
    petsController.getPets(filter, success, error);
});
petsRouter.post("/", (req, res) => {
    const success = (0, responseHelper_1.createTsoaResponse)(res);
    const error = (0, responseHelper_1.createTsoaResponse)(res);
    petsController.addPets(req.body, success, error);
});
