import { Service } from 'typedi';
import {
  type Controller,
  type RequestFor,
  type ResponseFor,
} from '../../definitions/controller';
import { ParametroZonaPrmService } from './parametroZonaPrm.service';
import {
  type CreateParametroZonaPrm,
  type DeleteParametroZonaPrm,
  type ListParametroZonaPrm,
  type PutParametroZonaPrm,
} from './parametro-zona-prm.route';

@Service()
export class ListParametroZonaPrmController
  implements Controller<ListParametroZonaPrm>
{
  constructor(protected readonly service: ParametroZonaPrmService) {}

  async handle(
    request: RequestFor<ListParametroZonaPrm>,
  ): Promise<ResponseFor<ListParametroZonaPrm>> {
    const list = await this.service.get();

    return {
      status: 200,
      body: list,
    };
  }
}

@Service()
export class CreateParametroZonaPrmController
  implements Controller<CreateParametroZonaPrm>
{
  constructor(protected readonly service: ParametroZonaPrmService) {}

  async handle(
    request: RequestFor<CreateParametroZonaPrm>,
  ): Promise<ResponseFor<CreateParametroZonaPrm>> {
    const newParametroZona = await this.service.create(request.body);

    return {
      status: 201,
      body: newParametroZona,
    };
  }
}

@Service()
export class PutParametroZonaPrmController
  implements Controller<PutParametroZonaPrm>
{
  constructor(protected readonly service: ParametroZonaPrmService) {}

  async handle(
    request: RequestFor<PutParametroZonaPrm>,
  ): Promise<ResponseFor<PutParametroZonaPrm>> {
    const updatedParametroZona = await this.service.put(
      Number(request.req.params.id),
      request.body,
    );

    return {
      status: 200,
      body: updatedParametroZona,
    };
  }
}

@Service()
export class DeleteParametroZonaPrmController
  implements Controller<DeleteParametroZonaPrm>
{
  constructor(protected readonly service: ParametroZonaPrmService) {}

  async handle(
    request: RequestFor<DeleteParametroZonaPrm>,
  ): Promise<ResponseFor<DeleteParametroZonaPrm>> {
    await this.service.delete(Number(request.req.params.id));

    return {
      status: 200,
      body: true,
    };
  }
}
