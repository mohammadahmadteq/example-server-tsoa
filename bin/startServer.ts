import express, {json, urlencoded} from "express";
// import {petsRouter} from "../http/routes/petRoutes";
// import {RegisterRoutes} from "../build/routes";

const app = express();

app.use(
    urlencoded({
      extended: true,
    })
  );
app.use(json());

// RegisterRoutes(app);
// app.use("/petsapp/pet", petsRouter);

app.listen(Number(3020), "0.0.0.0", () => {
    console.log(`DEV Server running on port ${3020}`);
});
