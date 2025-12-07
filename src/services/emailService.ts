import emailjs from '@emailjs/browser';
import { ContactFormInput } from '../utils/validation';

// Configuration EmailJS
// TODO: Remplacer par vos vraies clés depuis https://www.emailjs.com/
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

export const sendContactEmail = async (data: ContactFormInput): Promise<void> => {
  try {
    const templateParams = {
      from_name: `${data.firstName} ${data.lastName}`,
      from_email: data.email,
      company: data.company || 'Not specified',
      phone: data.phone || 'Not provided',
      project_type: data.projectType,
      message: data.message,
      to_email: 'zoncaglobalinvestment@gmail.com'
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    if (response.status !== 200) {
      throw new Error('Failed to send email');
    }
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send message. Please try again or contact us directly.');
  }
};
