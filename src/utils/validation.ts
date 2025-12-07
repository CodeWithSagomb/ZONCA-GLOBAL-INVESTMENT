import { z } from 'zod';

export const contactSchema = z.object({
  firstName: z.string()
    .min(2, 'First name must be at least 2 characters')
    .max(50, 'First name is too long'),

  lastName: z.string()
    .min(2, 'Last name must be at least 2 characters')
    .max(50, 'Last name is too long'),

  company: z.string()
    .max(100, 'Company name is too long')
    .optional()
    .or(z.literal('')),

  email: z.string()
    .email('Invalid email address')
    .min(5, 'Email is too short')
    .max(100, 'Email is too long'),

  phone: z.string()
    .regex(/^[\d\s\+\-\(\)]+$/, 'Invalid phone number')
    .min(10, 'Phone number is too short')
    .max(20, 'Phone number is too long')
    .optional()
    .or(z.literal('')),

  projectType: z.string()
    .min(1, 'Please select a project type'),

  message: z.string()
    .min(20, 'Message must be at least 20 characters')
    .max(2000, 'Message is too long')
});

export type ContactFormInput = z.infer<typeof contactSchema>;
