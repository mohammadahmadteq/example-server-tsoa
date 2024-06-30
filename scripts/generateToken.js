"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = require("jsonwebtoken");
var secretKey = '777'; // Your secret key
var payload = { id: 1, name: 'John Doe' }; // Payload data
var token = (0, jsonwebtoken_1.sign)(payload, secretKey, { expiresIn: '1h' });
console.log(token);
