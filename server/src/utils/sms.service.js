// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure

import * as dotenv from 'dotenv';
dotenv.config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;


import pkg from "twilio";
const client = pkg(accountSid, authToken);
export const sendWhatsAppmessage = ({ message }) => {
  client.messages
    .create({
      body: message,
      from: "whatsapp:+14155238886",
      to: "whatsapp:+971509961569",
    })
    .then((message) => console.log(message.sid));
};
// .done();





/**
* @description for setting up the initial whatsapp message
Send a WhatsApp message
Use WhatsApp and send a message from your device to
WhatsApp logo+1 415 523 8886

with code
 
join adjective-practical


*/

