"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const googleapis_1 = require("googleapis");
const fs_1 = __importDefault(require("fs"));
async function uploadFile() {
    const auth = new googleapis_1.google.auth.GoogleAuth({
        keyFile: './keys/service-account-key.json',
        scopes: ['https://www.googleapis.com/auth/drive.file'],
    });
    const drive = googleapis_1.google.drive({ version: 'v3', auth });
    const fileMetadata = {
        name: 'swagger.json',
        parents: ['13sd2JwYrJOX-NCExymKjGmoFzYtr20Pu'],
    };
    const media = {
        mimeType: 'application/json',
        body: fs_1.default.createReadStream('http/output/swagger.json'),
    };
    try {
        const response = await drive.files.create({
            requestBody: fileMetadata,
            media: media,
            fields: 'id',
        });
        console.log('File Id:', response.data.id);
    }
    catch (error) {
        console.error('Error uploading file:', error);
    }
}
uploadFile();
