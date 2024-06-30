
/*
import express from 'express';
import { PetsController } from '../controllers/petsController';

export const petsRouter = express.Router();

petsRouter.get("/", async (req, res) => {
  const controller = new PetsController();
  const filter = req.query.filter as string;

  controller.getPets(
    (status, data) => res.status(status).json(data),
    (status, error) => res.status(status).json(error),
    filter
  );
});

petsRouter.post("/", async (req, res) => {
  const controller = new PetsController();

  controller.addPets(
    req.body,
    (status, data) => res.status(status).json(data),
    (status, error) => res.status(status).json(error)
  );
});
*/

import express from 'express';
import { PetsController } from '../controllers/petsController';

export const petsRouter = express.Router();

petsRouter.get("/", async (req, res) => {
  const controller = new PetsController();
  const filter = req.query.filter as string;

  controller.getPets(
    (status, data) => res.status(status).json(data),
    (status, error) => res.status(status).json(error),
    filter
  );
});

petsRouter.post("/", async (req, res) => {
  const controller = new PetsController();

  controller.addPets(
    req.body,
    (status, data) => res.status(status).json(data),
    (status, error) => res.status(status).json(error)
  );
});
