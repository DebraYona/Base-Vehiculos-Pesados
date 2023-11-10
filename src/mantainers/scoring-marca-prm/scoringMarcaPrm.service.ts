import { pool } from '../../core/db';
import { type QueryResult } from 'pg';
import { type ScoringMarcaPrm } from './definitions';

export class ScoringMarcaPrmService {
  async get(): Promise<ScoringMarcaPrm[]> {
    try {
      const response: QueryResult = await pool.query(
        'SELECT * FROM scoring_marca_prm ORDER BY id ASC',
      );
      const scorings = response.rows.map((scoring) => {
        return {
          id: scoring.id,
          branch: scoring.branch,
          surcharge: scoring.surcharge,
          isActive: scoring.is_active,
        };
      });
      return scorings;
    } catch (e) {
      console.log(e);
      throw new Error('Internal Server error');
    }
  }

  async create(scoring: ScoringMarcaPrm): Promise<ScoringMarcaPrm> {
    try {
      await pool.query(
        'INSERT INTO scoring_marca_prm (branch, surcharge) VALUES ($1, $2)',
        [scoring.branch, scoring.surcharge],
      );
      return scoring;
    } catch (e) {
      console.log(e);
      throw new Error('Internal Server error');
    }
  }

  async put(id: number, scoring: ScoringMarcaPrm): Promise<ScoringMarcaPrm> {
    try {
      const response = await pool.query(
        'UPDATE scoring_marca_prm SET branch = $1, surcharge = $2, is_active = $3 WHERE id = $4',
        [scoring.branch, scoring.surcharge, scoring.isActive, id],
      );
      return scoring;
    } catch (e) {
      console.log(e);
      throw new Error('Internal Server error');
    }
  }

  async delete(id: number): Promise<boolean> {
    try {
      const response = await pool.query(
        'DELETE FROM scoring_marca_prm where id = $1',
        [id],
      );
      return true;
    } catch (e) {
      console.log(e);
      throw new Error('Internal Server error');
    }
  }
}
