/*
import {Router} from "express";
import {PetsController} from "../controllers/petsController";

export const petsRouter = Router();

petsRouter.get("/", PetsController.getPets);
petsRouter.post("/", PetsController.addPets);
*/




/*
import { Router, Request, Response } from 'express';
import { PetsController } from '../controllers/petsController';
import { createTsoaResponse } from '../../src/application/utils/responseHelper'; // Adjust the path as needed
import { IPet } from 'src/domain/petEntitiy';

const petsRouter = Router();
const petsController = new PetsController();

petsRouter.get("/", (req: Request, res: Response) => {
  const filter = (req.query['filter'] as string) || '';
  const success = createTsoaResponse<IPet[]>(res);
  const error = createTsoaResponse<{ status: string; message: string }>(res);
  petsController.getPets(filter, success, error);
});

petsRouter.post("/", (req: Request, res: Response) => {
  const success = createTsoaResponse<IPet>(res);
  const error = createTsoaResponse<{ status: string; message: string }>(res);
  petsController.addPets(req.body, success, error);
});

export { petsRouter };
*/

import { Router, Request, Response } from 'express';
import { PetsController } from '../controllers/petsController';
import { createTsoaResponse } from '../../src/application/utils/responseHelper';
import { IPet } from 'src/domain/petEntitiy';

const petsRouter = Router();
const petsController = new PetsController();

petsRouter.get("/", (req: Request, res: Response) => {
  const filter = (req.query['filter'] as string) || '';
  const success = createTsoaResponse<IPet[]>(res);
  const error = createTsoaResponse<{ status: string; message: string }>(res);
  petsController.getPets(filter, success, error);
});

petsRouter.post("/", (req: Request, res: Response) => {
  const success = createTsoaResponse<IPet>(res);
  const error = createTsoaResponse<{ status: string; message: string }>(res);
  petsController.addPets(req.body, success, error);
});

export { petsRouter };
