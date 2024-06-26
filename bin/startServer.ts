import express from "express";
import {petsRouter} from "../http/routes/petRoutes";

const app = express();

app.use(express.json());

app.use("/petsapp/pet", petsRouter);

app.listen(Number(3020), "0.0.0.0", () => {
    console.log(`DEV Server running on port ${3020}`);
});
