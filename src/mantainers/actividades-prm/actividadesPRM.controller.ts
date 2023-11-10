import { Service } from 'typedi';
import {
  type Controller,
  type RequestFor,
  type ResponseFor,
} from '../../definitions/controller';
import {
  type CreateActividadPrm,
  type DeleteActividadPrm,
  type ListActividadPrm,
  type UpdateActividadPrm,
} from './actividadesPrm.route';
import { ActividadesPrmService } from './actividadesPrm.service';

@Service()
export class ListActividadesPrmController
  implements Controller<ListActividadPrm>
{
  constructor(protected readonly service: ActividadesPrmService) {}
  async handle(
    request: RequestFor<ListActividadPrm>,
  ): Promise<ResponseFor<ListActividadPrm>> {
    return {
      status: 200,
      body: await this.service.get(),
    };
  }
}

@Service()
export class CreateActividadesPrmController
  implements Controller<CreateActividadPrm>
{
  constructor(protected readonly service: ActividadesPrmService) {}
  async handle(
    request: RequestFor<CreateActividadPrm>,
  ): Promise<ResponseFor<CreateActividadPrm>> {
    return {
      status: 201,
      body: await this.service.create(request.body),
    };
  }
}

@Service()
export class PutActividadesPrmController
  implements Controller<UpdateActividadPrm>
{
  constructor(protected readonly service: ActividadesPrmService) {}
  async handle(
    request: RequestFor<UpdateActividadPrm>,
  ): Promise<ResponseFor<UpdateActividadPrm>> {
    return {
      status: 200,
      body: await this.service.put(+request.req.params.id, request.body),
    };
  }
}

@Service()
export class DeleteActividadesPrmController
  implements Controller<DeleteActividadPrm>
{
  constructor(protected readonly service: ActividadesPrmService) {}
  async handle(
    request: RequestFor<DeleteActividadPrm>,
  ): Promise<ResponseFor<DeleteActividadPrm>> {
    return {
      status: 200,
      body: await this.service.delete(+request.req.params.id),
    };
  }
}
