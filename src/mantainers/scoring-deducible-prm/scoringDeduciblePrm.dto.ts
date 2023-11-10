import { z } from 'zod';

export const scoringDeduciblePrmDtoSchema = z.object({
  id: z.number(),
  deducible: z.string(),
  discount: z.number(),
  isActive: z.boolean(),
});

export const scoringDeduciblePrmListDtoSchema = z.array(
  scoringDeduciblePrmDtoSchema,
);
