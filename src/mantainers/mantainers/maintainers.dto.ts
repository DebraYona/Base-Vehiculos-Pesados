import { z } from 'zod';

export const maintainersResponseSchema = z.array(
  z.object({
    id: z.number(),
    name: z.string(),
  }),
);
