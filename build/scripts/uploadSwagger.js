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
    const folderId = '13sd2JwYrJOX-NCExymKjGmoFzYtr20Pu';
    try {
        const searchResponse = await drive.files.list({
            q: `'${folderId}' in parents and name = 'swagger.json' and trashed = false`,
            fields: 'files(id, name)',
        });
        const files = searchResponse.data.files ?? [];
        if (files.length > 0 && files[0]?.id) {
            const fileId = files[0].id ?? '';
            console.log(`Found existing swagger.json file with ID: ${fileId}. Deleting it...`);
            await drive.files.delete({ fileId });
            console.log('Deleted existing swagger.json file.');
        }
        const fileMetadata = {
            name: 'swagger.json',
            parents: [folderId],
        };
        const media = {
            mimeType: 'application/json',
            body: fs_1.default.createReadStream('http/output/swagger.json'),
        };
        const uploadResponse = await drive.files.create({
            requestBody: fileMetadata,
            media: media,
            fields: 'id',
        });
        console.log('Uploaded new swagger.json file with ID:', uploadResponse.data.id);
    }
    catch (error) {
        console.error('Error uploading file:', error);
    }
}
uploadFile();
