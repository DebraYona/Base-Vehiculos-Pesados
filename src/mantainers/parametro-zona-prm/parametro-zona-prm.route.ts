import { type AppRoute } from '@ts-rest/core';
import {
  parametroZonaPrmDtoSchema,
  parametroZonaPrmListDtoSchema,
} from './parametroZonaPrm.dto';
import { z } from 'zod';

export const listParametroZonaPrm = {
  method: 'GET',
  path: '/parametro-zona-prm',
  responses: {
    200: parametroZonaPrmListDtoSchema,
  },
  strictStatusCodes: true,
} satisfies AppRoute;

export type ListParametroZonaPrm = typeof listParametroZonaPrm;

export const createParametroZonaPrm = {
  method: 'POST',
  path: '/parametro-zona-prm',
  body: parametroZonaPrmDtoSchema,
  responses: {
    201: parametroZonaPrmDtoSchema,
  },
  strictStatusCodes: true,
} satisfies AppRoute;

export type CreateParametroZonaPrm = typeof createParametroZonaPrm;

export const putParametroZonaPrm = {
  method: 'PUT',
  path: '/parametro-zona-prm/:id',
  body: parametroZonaPrmDtoSchema,
  responses: {
    200: parametroZonaPrmDtoSchema,
  },
  strictStatusCodes: true,
} satisfies AppRoute;

export type PutParametroZonaPrm = typeof putParametroZonaPrm;

export const deleteParametroZonaPrm = {
  method: 'DELETE',
  path: '/parametro-zona-prm/:id',
  body: z.undefined(),
  pathParams: z.object({
    id: z.number(),
  }),
  responses: {
    200: z.boolean(),
  },
  strictStatusCodes: true,
} satisfies AppRoute;

export type DeleteParametroZonaPrm = typeof deleteParametroZonaPrm;
