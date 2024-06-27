"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("../http/routes/routes");
const body_parser_1 = __importDefault(require("body-parser"));
const petRoutes_1 = require("../http/routes/petRoutes");
const app = (0, express_1.default)();
const port = 3020;
app.use(body_parser_1.default.json());
app.use('/pets', petRoutes_1.petsRouter);
(0, routes_1.RegisterRoutes)(app);
app.listen(port, () => {
    console.log(`DEV Server running on port ${port}`);
});
