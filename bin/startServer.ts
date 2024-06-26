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
