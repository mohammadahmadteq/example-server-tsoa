

import { generateToken } from '../src/authentication';
const payload = {
    id: 1,
    name: 'John Doe'
};

const token = generateToken(payload);
console.log(`Generated Token: ${token}`);
