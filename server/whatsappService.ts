// server/whatsappService.ts

import { Twilio } from 'twilio';

const accountSid = process.env.TWILIO_ACCOUNT_SID as string;
const authToken = process.env.TWILIO_AUTH_TOKEN as string;
const whatsappFrom = process.env.TWILIO_WHATSAPP_FROM as string;
const whatsappTo = process.env.TWILIO_WHATSAPP_TO as string;

const client = new Twilio(accountSid, authToken);

export const sendWhatsAppMessage = async (body: string) => {
  try {
    const message = await client.messages.create({
      from: whatsappFrom,
      to: whatsappTo,
      body: body,
    });
    return message.sid;
  } catch (error) {
    console.error('Failed to send WhatsApp message:', error);

    if (error instanceof Error) {
        throw new Error(error.message);
    } else {
        // Handle the case where error is not an instance of Error
        throw new Error('An unknown error occurred');
    }
}
};
