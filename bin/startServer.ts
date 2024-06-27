import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
// import {petsRouter} from "../http/routes/petRoutes";
import {RegisterRoutes} from "../http/routes/routes";

export const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

RegisterRoutes(app);
// app.use("/petsapp/pet", petsRouter);

app.listen(Number(3020), "0.0.0.0", () => {
    console.log(`DEV Server running on port ${3020}`);
});
