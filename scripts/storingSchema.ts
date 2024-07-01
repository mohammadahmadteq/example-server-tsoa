import { google } from 'googleapis';
import fs from 'fs';
// import dotenv from 'dotenv';

// dotenv.config();

async function uploadFile() {
  const auth = new google.auth.GoogleAuth({
    keyFile: '../credentials.json',
    scopes: ['https://www.googleapis.com/auth/drive.file'],
  });

  const drive = google.drive({ version: 'v3', auth });

  const fileMetadata = {
    name: 'swagger.json',
    parents: ['1cRBjK_sBYiy1DtHhjC0nHXoG7tHol9zO'],
  };
  const media = {
    mimeType: 'application/json',
    body: fs.createReadStream('../http/output/swagger.json'),
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