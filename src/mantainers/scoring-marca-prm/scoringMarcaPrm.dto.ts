import { z } from 'zod';

export interface ScoringMarcaPrm {
  id: number;
  branch: string;
  surcharge: number;
  isActive: boolean;
}

export const scoringMarcaPrmDtoSchema = z.object({
  id: z.number(),
  branch: z.string(),
  surcharge: z.number(),
  isActive: z.boolean(),
});

export const scoringMarcaPrmListDtoSchema = z.array(scoringMarcaPrmDtoSchema);
