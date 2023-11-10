import { Service } from 'typedi';
import { MaintainerService } from './maintainers.services';
import {
  type Controller,
  type RequestFor,
  type ResponseFor,
} from '../../definitions/controller';
import { type ListMaintainers } from './mantainers.route';

@Service()
export class ActividadesPRMController implements Controller<ListMaintainers> {
  constructor(protected readonly service: MaintainerService) {}

  public async handle(
    request: RequestFor<ListMaintainers>,
  ): Promise<ResponseFor<ListMaintainers>> {
    const maintainers = await this.service.get();
    return {
      status: 200,
      body: maintainers,
    };
  }
}
