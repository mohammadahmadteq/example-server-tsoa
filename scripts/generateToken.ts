
/*
import { sign } from 'jsonwebtoken';

const secretKey: string = '777'; // Your secret key
const payload: { id: number, name: string } = { id: 1, name: 'John Doe' }; // Payload data

const token: string = sign(payload, secretKey, { expiresIn: '1h' });
console.log(token);
*/

//import { generateToken } from './http/authentication';
import { generateToken } from '../src/authentication';
const payload = {
    id: 1,
    name: 'John Doe'
};

const token = generateToken(payload);
console.log(`Generated Token: ${token}`);
