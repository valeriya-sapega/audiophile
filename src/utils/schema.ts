import { ZodType, z } from 'zod';

export type FormData = {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  zipcode: string;
  city: string;
  country: string;
  paymentMethod: string;
  eNumber?: string;
  ePin?: string;
};

export const schema: ZodType<FormData> = z.lazy(() =>
  z
    .object({
      fullName: z
        .string()
        .min(2, { message: 'Must contain at least 2 characters' }),
      email: z.string().email(),
      phone: z
        .string()
        .min(9, { message: 'Must contain at least 9 digits' })
        .regex(/^\d+$/),
      address: z
        .string()
        .min(5, { message: 'Must contain at least 5 characters' }),
      zipcode: z.string().min(4, {
        message: 'Must contain at least 4 characters and/or digits',
      }),
      city: z
        .string()
        .min(3, { message: 'Must contain at least 3 characters' }),
      country: z
        .string()
        .min(4, { message: 'Must contain at least 4 characters' }),
      paymentMethod: z.string(),
      eNumber: z
        .string()
        .min(10, { message: 'Must contain at least 10 digits' })
        .max(16, { message: 'Must contain max 16 digits' })
        .regex(/^(?=\d{10,16}$)\d+/)
        .optional(),

      ePin: z
        .string()
        .min(4, { message: 'Must contain 4 digits' })
        .max(4, { message: 'Must contain 4 digits' })
        .regex(/^\d{4}$/)
        .optional(),
    })
    .refine((data) => {
      if (data.paymentMethod === 'cash') {
        delete data.eNumber;
        delete data.ePin;
      }
      return true;
    })
);
