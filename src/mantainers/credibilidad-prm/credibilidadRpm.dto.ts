import { z } from 'zod';

export interface CredibilidadPrmDTO {
  id: number;
  price: number;
  isActive: boolean;
}

export const credibilidadPrm = z.object({
  id: z.number(),
  price: z.number(),
  isActive: z.boolean(),
});

export const credibilidadPrmList = z.array(credibilidadPrm);
