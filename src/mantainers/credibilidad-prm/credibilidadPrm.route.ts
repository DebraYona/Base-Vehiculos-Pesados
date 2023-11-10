import { type AppRoute } from '@ts-rest/core';
import { z } from 'zod';
import { credibilidadPrm, credibilidadPrmList } from './credibilidadRpm.dto';

export const listCredibilidadPrm = {
  method: 'GET',
  path: '/credibilidad-prm',
  responses: {
    200: credibilidadPrmList,
  },
  strictStatusCodes: true,
} satisfies AppRoute;

export type GetCredibilidadPrm = typeof listCredibilidadPrm;

export const createCredibilidadPrm = {
  method: 'POST',
  path: '/credibilidad-prm',
  body: credibilidadPrm,
  responses: {
    201: credibilidadPrm,
  },
  strictStatusCodes: true,
} satisfies AppRoute;

export type CreateCredibilidadPrm = typeof createCredibilidadPrm;

export const putCredibilidadPrm = {
  method: 'PUT',
  path: '/credibilidad-prm/:id',
  body: credibilidadPrm,
  responses: {
    200: credibilidadPrm,
  },
  strictStatusCodes: true,
} satisfies AppRoute;

export type UpdateCredibilidadPrm = typeof putCredibilidadPrm;

export const deleteCredibilidadPrm = {
  method: 'DELETE',
  path: '/credibilidad-prm/:id',
  body: z.undefined(),
  responses: {
    200: z.boolean(),
  },
  strictStatusCodes: true,
} satisfies AppRoute;

export type DeleteCredibilidadPrm = typeof deleteCredibilidadPrm;
