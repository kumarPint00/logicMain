import nodemailer from 'nodemailer';

const transporterOptions = {
    host: 'smtp.hostinger.com',
    secure: false,
    secureConnection: false,
    tls: {
      ciphers: 'SSLv3',
    },
    port: 587,
    auth: {
      user: 'info@injazrent.ae',
      pass: 'Info@2016',
    },
};

const transporter = nodemailer.createTransport(transporterOptions);
export const sendEmailNotification = async ({enquiry,receiver, subject}) => {
  const msg = {
      from: 'info@injazrent.ae',
      to: receiver,
      subject: subject,
      text: `A new enquiry has been received: ${enquiry}`,
  };

  try {
      await transporter.sendMail(msg, (err, info) => {
          if (err){
              console.error("Error sending email notification:", err);
          } else {
              console.log("Email notification sent:", info.response);
          }
      });
      console.log('Email notification sent to admin');
  } catch (error) {
      console.error('Error sending email notification:', error);
  }
};




// Initialize Twilio
// const twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

// Function to send WhatsApp notification
//  export const sendWhatsAppNotification = async (enquiry) => {
//     try {
//         const message = `New enquiry received: ${JSON.stringify(enquiry)}`;
//         await twilioClient.messages.create({
//             body: message,
//             from: `whatsapp:${process.env.TWILIO_WHATSAPP_NUMBER}`, // Twilio WhatsApp number
//             to: 'whatsapp:+918010186698', // Admin's WhatsApp number
//         });
//         console.log('WhatsApp notification sent to admin');
//     } catch (error) {
//         console.error('Error sending WhatsApp notification:', error);
//     }
// };