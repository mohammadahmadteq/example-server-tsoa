/*
import express from "express";
import {petsRouter} from "../http/routes/petRoutes";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/petsapp/pet", petsRouter);

app.listen(Number(3020), () => {
    console.log(`DEV Server running on port ${3020}`);
});

*/

import express from 'express';
import { RegisterRoutes } from '../http/routes/routes';
import bodyParser from 'body-parser';
import { petsRouter } from '../http/routes/petRoutes';

const app = express();
const port = 3020;

app.use(bodyParser.json());

// Use the petsRouter
app.use('/pets', petsRouter);

// Register other routes
RegisterRoutes(app);

app.listen(port, () => {
  console.log(`DEV Server running on port ${port}`);
});
