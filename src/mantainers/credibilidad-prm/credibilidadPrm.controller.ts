import { CredibilidadPrmService } from './credibilidadPrm.service';
import { Service } from 'typedi';
import {
  type Controller,
  type RequestFor,
  type ResponseFor,
} from '../../definitions/controller';
import {
  type CreateCredibilidadPrm,
  type DeleteCredibilidadPrm,
  type GetCredibilidadPrm,
  type UpdateCredibilidadPrm,
} from './credibilidadPrm.route';

@Service()
export class ListCredibilidadPrmController
  implements Controller<GetCredibilidadPrm>
{
  constructor(protected readonly service: CredibilidadPrmService) {}
  async handle(
    request: RequestFor<GetCredibilidadPrm>,
  ): Promise<ResponseFor<GetCredibilidadPrm>> {
    return {
      status: 200,
      body: await this.service.get(),
    };
  }
}

@Service()
export class CreateCredibilidadPrmController
  implements Controller<CreateCredibilidadPrm>
{
  constructor(protected readonly service: CredibilidadPrmService) {}
  async handle(
    request: RequestFor<CreateCredibilidadPrm>,
  ): Promise<ResponseFor<CreateCredibilidadPrm>> {
    return {
      status: 201,
      body: await this.service.create(request.body),
    };
  }
}

@Service()
export class PutCredibilidadPrmController
  implements Controller<UpdateCredibilidadPrm>
{
  constructor(protected readonly service: CredibilidadPrmService) {}
  async handle(
    request: RequestFor<UpdateCredibilidadPrm>,
  ): Promise<ResponseFor<UpdateCredibilidadPrm>> {
    return {
      status: 200,
      body: await this.service.put(+request.req.params.id, request.body),
    };
  }
}

@Service()
export class DeleteCredibilidadPrmController
  implements Controller<DeleteCredibilidadPrm>
{
  constructor(protected readonly service: CredibilidadPrmService) {}
  async handle(
    request: RequestFor<DeleteCredibilidadPrm>,
  ): Promise<ResponseFor<DeleteCredibilidadPrm>> {
    return {
      status: 200,
      body: await this.service.delete(+request.req.params.id),
    };
  }
}
