"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const authentication_1 = require("../../src/authentication");
const authMiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(401).json({ message: 'Unauthorized: No token provided.' });
    }
    const token = authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: No token provided.' });
    }
    const decoded = (0, authentication_1.verifyToken)(token);
    if (!decoded) {
        return res.status(401).json({ message: 'Unauthorized: Failed to authenticate token.' });
    }
    req.user = decoded;
    next();
};
exports.authMiddleware = authMiddleware;
