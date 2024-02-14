import { z } from 'zod';

const schema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(9),
  addres: z.string().min(5),
  zipcode: z.string().min(4),
  city: z.string().min(3),
  country: z.string().min(4),
});
