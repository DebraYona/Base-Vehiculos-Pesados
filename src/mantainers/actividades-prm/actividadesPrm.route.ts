import { type AppRoute } from '@ts-rest/core';
import { z } from 'zod';
import {
  actividadPrm,
  actividadPrmList,
  createActividadPrmBody,
} from './actividadesPrm.dto';

export const listActividadPrm = {
  method: 'GET',
  path: '/actividades-prm',
  responses: {
    200: actividadPrmList,
  },
  strictStatusCodes: true,
} satisfies AppRoute;

export type ListActividadPrm = typeof listActividadPrm;

export const createActividadPrm = {
  method: 'POST',
  path: '/actividades-prm',
  body: createActividadPrmBody,
  responses: {
    201: createActividadPrmBody,
  },
  strictStatusCodes: true,
} satisfies AppRoute;

export type CreateActividadPrm = typeof createActividadPrm;

export const putActividadPrm = {
  method: 'PUT',
  path: '/actividades-prm/:id',
  body: actividadPrm,
  responses: {
    200: actividadPrm,
  },
  strictStatusCodes: true,
} satisfies AppRoute;

export type UpdateActividadPrm = typeof putActividadPrm;

export const deleteActividadPrm = {
  method: 'DELETE',
  path: '/actividades-prm/:id',
  body: z.undefined(),
  responses: {
    200: z.boolean(),
  },
  strictStatusCodes: true,
} satisfies AppRoute;

export type DeleteActividadPrm = typeof deleteActividadPrm;
