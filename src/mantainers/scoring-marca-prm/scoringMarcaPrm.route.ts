import { type AppRoute } from '@ts-rest/core';
import {
  scoringMarcaPrmDtoSchema,
  scoringMarcaPrmListDtoSchema,
} from './scoringMarcaPrm.dto';
import { z } from 'zod';

export const listScoringMarcaPrm = {
  method: 'GET',
  path: '/scoring-marca-prm',
  responses: {
    200: scoringMarcaPrmListDtoSchema,
  },
  strictStatusCodes: true,
} satisfies AppRoute;

export type ListScoringMarcaPrm = typeof listScoringMarcaPrm;

export const createScoringMarcaPrm = {
  method: 'POST',
  path: '/scoring-marca-prm',
  body: scoringMarcaPrmDtoSchema,
  responses: {
    201: scoringMarcaPrmDtoSchema,
  },
  strictStatusCodes: true,
} satisfies AppRoute;

export type CreateScoringMarcaPrm = typeof createScoringMarcaPrm;

export const putScoringMarcaPrm = {
  method: 'PUT',
  path: '/scoring-marca-prm/:id',
  body: scoringMarcaPrmDtoSchema,
  responses: {
    200: scoringMarcaPrmDtoSchema,
  },
  strictStatusCodes: true,
} satisfies AppRoute;

export type PutScoringMarcaPrm = typeof putScoringMarcaPrm;

export const deleteScoringMarcaPrm = {
  method: 'DELETE',
  path: '/scoring-marca-prm/:id',
  body: z.undefined(),
  pathParams: z.object({
    id: z.number(),
  }),
  responses: {
    200: z.boolean(),
  },
  strictStatusCodes: true,
} satisfies AppRoute;

export type DeleteScoringMarcaPrm = typeof deleteScoringMarcaPrm;
