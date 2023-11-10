import { type AppRoute } from '@ts-rest/core';
import {
  scoringDeduciblePrmDtoSchema,
  scoringDeduciblePrmListDtoSchema,
} from './scoringDeduciblePrm.dto';
import { z } from 'zod';

export const listScoringDeduciblePrm = {
  method: 'GET',
  path: '/scoring-deducible-prm',
  responses: {
    200: scoringDeduciblePrmListDtoSchema,
  },
  strictStatusCodes: true,
} satisfies AppRoute;

export type ListScoringDeduciblePrm = typeof listScoringDeduciblePrm;

export const createScoringDeduciblePrm = {
  method: 'POST',
  path: '/scoring-deducible-prm',
  body: scoringDeduciblePrmDtoSchema,
  responses: {
    201: scoringDeduciblePrmDtoSchema,
  },
  strictStatusCodes: true,
} satisfies AppRoute;

export type CreateScoringDeduciblePrm = typeof createScoringDeduciblePrm;

export const putScoringDeduciblePrm = {
  method: 'PUT',
  path: '/scoring-deducible-prm/:id',
  body: scoringDeduciblePrmDtoSchema,
  responses: {
    200: scoringDeduciblePrmDtoSchema,
  },
  strictStatusCodes: true,
} satisfies AppRoute;

export type PutScoringDeduciblePrm = typeof putScoringDeduciblePrm;

export const deleteScoringDeduciblePrm = {
  method: 'DELETE',
  path: '/scoring-deducible-prm/:id',
  body: z.undefined(),
  pathParams: z.object({
    id: z.number(),
  }),
  responses: {
    200: z.boolean(),
  },
  strictStatusCodes: true,
} satisfies AppRoute;

export type DeleteScoringDeduciblePrm = typeof deleteScoringDeduciblePrm;
