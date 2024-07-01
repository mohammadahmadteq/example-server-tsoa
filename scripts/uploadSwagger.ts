/*
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
*/



/*
import { google } from 'googleapis';
import fs from 'fs';

async function uploadFile() {
  const auth = new google.auth.GoogleAuth({
    keyFile: './keys/service-account-key.json',
    scopes: ['https://www.googleapis.com/auth/drive.file'],
  });

  const drive = google.drive({ version: 'v3', auth });

  const folderId = '13sd2JwYrJOX-NCExymKjGmoFzYtr20Pu'; // Google Drive folder ID

  try {
    // Search for the existing swagger.json file
    const searchResponse = await drive.files.list({
      q: `'${folderId}' in parents and name = 'swagger.json' and trashed = false`,
      fields: 'files(id, name)',
    });

    const files = searchResponse.data.files ?? [];
    if (files.length > 0 && files[0]?.id) {
      const fileId = files[0].id ?? '';
      console.log(`Found existing swagger.json file with ID: ${fileId}. Deleting it...`);

      // Delete the existing swagger.json file
      await drive.files.delete({ fileId });
      console.log('Deleted existing swagger.json file.');
    }

    // Upload the new swagger.json file
    const fileMetadata = {
      name: 'swagger.json',
      parents: [folderId],
    };
    const media = {
      mimeType: 'application/json',
      body: fs.createReadStream('http/output/swagger.json'),
    };

    const uploadResponse = await drive.files.create({
      requestBody: fileMetadata,
      media: media,
      fields: 'id',
    });

    console.log('Uploaded new swagger.json file with ID:', uploadResponse.data.id);
  } catch (error) {
    console.error('Error uploading file:', error);
  }
}

uploadFile();
*/

import { google } from 'googleapis';
import fs from 'fs';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

async function uploadFile() {
  const keyFile = process.env['GOOGLE_SERVICE_ACCOUNT_KEY'];
  const folderId = process.env['GOOGLE_DRIVE_FOLDER_ID'];

  if (!keyFile || !folderId) {
    console.error('Missing GOOGLE_SERVICE_ACCOUNT_KEY or GOOGLE_DRIVE_FOLDER_ID in environment variables.');
    return;
  }

  const auth = new google.auth.GoogleAuth({
    keyFile: keyFile,
    scopes: ['https://www.googleapis.com/auth/drive.file'],
  });

  const drive = google.drive({ version: 'v3', auth });

  try {
    // Search for the existing swagger.json file
    const searchResponse = await drive.files.list({
      q: `'${folderId}' in parents and name = 'swagger.json' and trashed = false`,
      fields: 'files(id, name)',
    });

    const files = searchResponse.data.files ?? [];
    if (files.length > 0 && files[0]?.id) {
      const fileId = files[0].id ?? '';
      console.log(`Found existing swagger.json file with ID: ${fileId}. Deleting it...`);

      // Delete the existing swagger.json file
      await drive.files.delete({ fileId });
      console.log('Deleted existing swagger.json file.');
    }

    // Upload the new swagger.json file
    const fileMetadata = {
      name: 'swagger.json',
      parents: [folderId],
    };
    const media = {
      mimeType: 'application/json',
      body: fs.createReadStream('http/output/swagger.json'),
    };

    const uploadResponse = await drive.files.create({
      requestBody: fileMetadata,
      media: media,
      fields: 'id',
    });

    if (uploadResponse.data && 'id' in uploadResponse.data) {
      console.log('Uploaded new swagger.json file with ID:', uploadResponse.data.id);
    } else {
      console.error('Unexpected response format:', uploadResponse.data);
    }
  } catch (error) {
    console.error('Error uploading file:', error);
  }
}

uploadFile();
