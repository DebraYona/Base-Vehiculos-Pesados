import { Service } from 'typedi';
import { ScoringMarcaPrmService } from './scoringMarcaPrm.service';
import {
  type Controller,
  type RequestFor,
  type ResponseFor,
} from '../../definitions/controller';
import {
  type CreateScoringMarcaPrm,
  type DeleteScoringMarcaPrm,
  type ListScoringMarcaPrm,
  type PutScoringMarcaPrm,
} from './scoringMarcaPrm.route';

@Service()
export class ListScoringMarcaPrmController
  implements Controller<ListScoringMarcaPrm>
{
  constructor(protected readonly service: ScoringMarcaPrmService) {}

  async handle(
    request: RequestFor<ListScoringMarcaPrm>,
  ): Promise<ResponseFor<ListScoringMarcaPrm>> {
    const list = await this.service.get();

    return {
      status: 200,
      body: list,
    };
  }
}

@Service()
export class CreateScoringMarcaPrmController
  implements Controller<CreateScoringMarcaPrm>
{
  constructor(protected readonly service: ScoringMarcaPrmService) {}

  async handle(
    request: RequestFor<CreateScoringMarcaPrm>,
  ): Promise<ResponseFor<CreateScoringMarcaPrm>> {
    const newScoringMarca = await this.service.create(request.body);

    return {
      status: 201,
      body: newScoringMarca,
    };
  }
}

@Service()
export class PutScoringMarcaPrmController
  implements Controller<PutScoringMarcaPrm>
{
  constructor(protected readonly service: ScoringMarcaPrmService) {}

  async handle(
    request: RequestFor<PutScoringMarcaPrm>,
  ): Promise<ResponseFor<PutScoringMarcaPrm>> {
    const updatedScoringMarca = await this.service.put(
      Number(request.req.params.id),
      request.body,
    );

    return {
      status: 200,
      body: updatedScoringMarca,
    };
  }
}

@Service()
export class DeleteScoringMarcaPrmController
  implements Controller<DeleteScoringMarcaPrm>
{
  constructor(protected readonly service: ScoringMarcaPrmService) {}

  async handle(
    request: RequestFor<DeleteScoringMarcaPrm>,
  ): Promise<ResponseFor<DeleteScoringMarcaPrm>> {
    const deletedScoringMarca = await this.service.delete(
      Number(request.req.params.id),
    );

    return {
      status: 200,
      body: deletedScoringMarca,
    };
  }
}
