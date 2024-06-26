import {Router} from "express";
import {PetsController} from "../controllers/petsController";

export const petsRouter = Router();

petsRouter.get("/", PetsController.getPets);
petsRouter.post("/", PetsController.addPets);
