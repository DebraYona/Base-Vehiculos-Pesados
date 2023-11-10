import { z } from 'zod';

export const parametroZonaPrmDtoSchema = z.object({
  id: z.number(),
  areaCovered: z.string(),
  zoneFactor: z.number(),
  isActive: z.boolean(),
});

export const parametroZonaPrmListDtoSchema = z.array(parametroZonaPrmDtoSchema);
