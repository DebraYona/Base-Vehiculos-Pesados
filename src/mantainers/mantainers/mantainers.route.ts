import { type AppRoute } from '@ts-rest/core';
import { maintainersResponseSchema } from './maintainers.dto';

export const listMaintainers = {
  method: 'GET',
  path: '/maintainers',
  responses: {
    200: maintainersResponseSchema,
  },
  strictStatusCodes: true,
} satisfies AppRoute;

export type ListMaintainers = typeof listMaintainers;
