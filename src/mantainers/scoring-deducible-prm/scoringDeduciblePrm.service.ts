import { pool } from '../../core/db';
import { type QueryResult } from 'pg';
import { type ScoringDeduciblePrm } from './definitions';

export class ScoringDeduciblePrmService {
  async get(): Promise<ScoringDeduciblePrm[]> {
    try {
      const response: QueryResult = await pool.query(
        'SELECT * FROM scoring_deducible_voluf_prm ORDER BY id ASC',
      );
      const scorings = response.rows.map((scoring) => {
        return {
          id: scoring.id,
          deducible: scoring.deducible,
          discount: scoring.discount,
          isActive: scoring.is_active,
        };
      });
      return scorings;
    } catch (e) {
      console.log(e);
      throw new Error('Internal Server error');
    }
  }

  async create(scoring: ScoringDeduciblePrm): Promise<ScoringDeduciblePrm> {
    try {
      await pool.query(
        'INSERT INTO scoring_deducible_voluf_prm (deducible,discount) VALUES ($1, $2)',
        [scoring.deducible, scoring.discount],
      );
      return scoring;
    } catch (e) {
      console.log(e);
      throw new Error('Internal Server error');
    }
  }

  async put(
    id: number,
    scoring: ScoringDeduciblePrm,
  ): Promise<ScoringDeduciblePrm> {
    try {
      const response = await pool.query(
        'UPDATE scoring_deducible_voluf_prm SET deducible = $1, discount = $2, is_active = $3 WHERE id = $4',
        [scoring.deducible, scoring.discount, scoring.isActive, id],
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
        'DELETE FROM scoring_deducible_voluf_prm where id = $1',
        [id],
      );
      return true;
    } catch (e) {
      console.log(e);
      throw new Error('Internal Server error');
    }
  }
}
