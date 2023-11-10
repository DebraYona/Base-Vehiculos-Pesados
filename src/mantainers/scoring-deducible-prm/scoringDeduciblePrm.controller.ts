import { Service } from 'typedi';
import {
  type Controller,
  type RequestFor,
  type ResponseFor,
} from '../../definitions/controller';
import {
  type CreateScoringDeduciblePrm,
  type DeleteScoringDeduciblePrm,
  type ListScoringDeduciblePrm,
  type PutScoringDeduciblePrm,
} from './scoringDeductiblePrm.route';
import { ScoringDeduciblePrmService } from './scoringDeduciblePrm.service';

@Service()
export class ListScoringDeduciblePrmController
  implements Controller<ListScoringDeduciblePrm>
{
  constructor(protected readonly service: ScoringDeduciblePrmService) {}

  async handle(
    request: RequestFor<ListScoringDeduciblePrm>,
  ): Promise<ResponseFor<ListScoringDeduciblePrm>> {
    const list = await this.service.get();

    return {
      status: 200,
      body: list,
    };
  }
}

@Service()
export class CreateScoringDeduciblePrmController
  implements Controller<CreateScoringDeduciblePrm>
{
  constructor(protected readonly service: ScoringDeduciblePrmService) {}

  async handle(
    request: RequestFor<CreateScoringDeduciblePrm>,
  ): Promise<ResponseFor<CreateScoringDeduciblePrm>> {
    const newScoringDeducible = await this.service.create(request.body);

    return {
      status: 201,
      body: newScoringDeducible,
    };
  }
}

@Service()
export class PutScoringDeduciblePrmController
  implements Controller<PutScoringDeduciblePrm>
{
  constructor(protected readonly service: ScoringDeduciblePrmService) {}

  async handle(
    request: RequestFor<PutScoringDeduciblePrm>,
  ): Promise<ResponseFor<PutScoringDeduciblePrm>> {
    const updatedScoringDeducible = await this.service.put(
      Number(request.req.params.id),
      request.body,
    );

    return {
      status: 200,
      body: updatedScoringDeducible,
    };
  }
}

@Service()
export class DeleteScoringDeduciblePrmController
  implements Controller<DeleteScoringDeduciblePrm>
{
  constructor(protected readonly service: ScoringDeduciblePrmService) {}

  async handle(
    request: RequestFor<DeleteScoringDeduciblePrm>,
  ): Promise<ResponseFor<DeleteScoringDeduciblePrm>> {
    const deleted = await this.service.delete(Number(request.req.params.id));

    return {
      status: 200,
      body: deleted,
    };
  }
}
