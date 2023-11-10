import { z } from 'zod';

export interface ActividadesPrmDTO {
  id: number;
  activity: string;
  risk: number;
  actNFactor: number;
  minimumDeductible: number;
  validity: number;
  isHeavy: boolean;
  isActive: boolean;
}

export interface CreateActividadesPrmDTO {
  activity: string;
  risk: number;
  actNFactor: number;
  minimumDeductible: number;
  validity: number;
  isHeavy: boolean;
}

export const actividadPrm = z.object({
  id: z.number(),
  activity: z.string(),
  risk: z.number(),
  actNFactor: z.number(),
  minimumDeductible: z.number(),
  validity: z.number(),
  isHeavy: z.boolean(),
  isActive: z.boolean(),
});

export const actividadPrmList = z.array(actividadPrm);

export const createActividadPrmBody = z.object({
  activity: z.string(),
  risk: z.number(),
  actNFactor: z.number(),
  minimumDeductible: z.number(),
  validity: z.number(),
  isHeavy: z.boolean(),
});
