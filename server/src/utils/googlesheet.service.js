import { google } from 'googleapis';

// Initialize the Google Sheets API
const sheets = google.sheets({
  version: 'v4',
  auth: YOUR_AUTHENTICATION_CLIENT // Your authentication client for accessing Google Sheets API
});

// Function to insert new inquiry data into Google Sheet
const insertInquiryIntoSheet = async (data) => {
  try {
    // Define the spreadsheet ID and range
    const spreadsheetId = 'YOUR_SPREADSHEET_ID';
    const range = 'Sheet1!A1'; // Update the range as per your sheet configuration

    // Prepare the data to be inserted
    const values = [
      [data.name, data.email, data.phone, data.message, new Date()] // Example: Name, Email, Phone, Message, Timestamp
    ];

    // Make API request to append data to the Google Sheet
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: spreadsheetId,
      range: range,
      valueInputOption: 'RAW',
      requestBody: {
        values: values,
      },
    });

    console.log('Data inserted into Google Sheet:', response.data);
  } catch (error) {
    console.error('Error inserting data into Google Sheet:', error);
  }
};

export { insertInquiryIntoSheet };
