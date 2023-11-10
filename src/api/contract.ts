import { initContract } from '@ts-rest/core';
import { maintainersRouter } from '../mantainers/router';

const c = initContract();

export const contract = c.router({
  maintainersRouter,
});
