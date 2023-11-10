import { pool } from '../../core/db';
import { type QueryResult } from 'pg';
import { type Maintainer } from './definitions';

export class MaintainerService {
  async get(): Promise<Maintainer[]> {
    try {
      const response: QueryResult = await pool.query(
        'SELECT * FROM mantainers ORDER BY id ASC',
      );
      const maintainers = response.rows.map((maintainer) => {
        return {
          id: maintainer.id,
          name: maintainer.name,
        };
      });
      return maintainers;
    } catch (e) {
      console.log(e);
      throw new Error('Internal Server error');
    }
  }
}
