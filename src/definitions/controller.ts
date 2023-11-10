import { type AppRoute } from '@ts-rest/core';
import { type AppRouteOptions } from '@ts-rest/express/src/lib/types';

export type HandlerFor<T extends AppRoute> = AppRouteOptions<T>['handler'];
export type RequestFor<T extends AppRoute> = Parameters<HandlerFor<T>>[0];
export type ResponseFor<T extends AppRoute> = ReturnType<HandlerFor<T>>;

export interface Controller<T extends AppRoute> {
  handle: (request: RequestFor<T>) => Promise<ResponseFor<T>>;
}
