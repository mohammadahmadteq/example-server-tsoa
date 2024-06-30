


import express from 'express';
import bodyParser from 'body-parser';
import { petsRouter } from '../http/routes/petRoutes';
import cors from "cors";
import { RegisterRoutes } from '../http/routes/routes';
import { authMiddleware } from '../http/routes/authMiddleware';



const app = express();

app.use(express.json());
app.use(cors());
app.use("/petsapp/pet", petsRouter);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Apply the middleware only to customers routes
app.use('/customersapp/customer', authMiddleware);

// Register TSOA generated routes
RegisterRoutes(app);

app.listen(3020, () => {
  console.log('Server is running on port 3020');
});

export default app;
