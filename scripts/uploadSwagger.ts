
// scripts/uploadSwagger.ts
import { google } from 'googleapis';
import fs from 'fs';

async function uploadFile() {
  const auth = new google.auth.GoogleAuth({
    //keyFile: 'path/to/your/service-account-file.json', // Path to your service account key file
    keyFile: './keys/service-account-key.json',
    scopes: ['https://www.googleapis.com/auth/drive.file'],
  });

  const drive = google.drive({ version: 'v3', auth });

  const fileMetadata = {
    name: 'swagger.json',
    //parents: ['your-folder-id'], // Google Drive folder ID
    parents: ['13sd2JwYrJOX-NCExymKjGmoFzYtr20Pu'],  // Change this use your own Google Drive folder ID
  };
  const media = {
    mimeType: 'application/json',
    body: fs.createReadStream('http/output/swagger.json'),
  };

  try {
    const response = await drive.files.create({
      requestBody: fileMetadata,
      media: media,
      fields: 'id',
    });
    console.log('File Id:', response.data.id);
  } catch (error) {
    console.error('Error uploading file:', error);
  }
}

uploadFile();
