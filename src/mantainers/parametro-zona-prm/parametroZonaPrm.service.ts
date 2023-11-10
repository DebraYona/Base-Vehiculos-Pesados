import { pool } from '../../core/db';
import { type QueryResult } from 'pg';
import { type ParametroZonaPrm } from './definitions';

export class ParametroZonaPrmService {
  async get(): Promise<ParametroZonaPrm[]> {
    try {
      const response: QueryResult = await pool.query(
        'SELECT * FROM parametro_zona_prm ORDER BY id ASC',
      );
      const parametros = response.rows.map((parametro) => {
        return {
          id: parametro.id,
          areaCovered: parametro.area_covered,
          zoneFactor: parametro.zone_factor,
          isActive: parametro.is_active,
        };
      });
      return parametros;
    } catch (e) {
      console.log(e);
      throw new Error('Internal Server error');
    }
  }

  async create(parametro: ParametroZonaPrm): Promise<ParametroZonaPrm> {
    try {
      const response = await pool.query(
        'INSERT INTO parametro_zona_prm (area_covered, zone_factor) VALUES ($1, $2)',
        [parametro.areaCovered, parametro.zoneFactor],
      );
      return parametro;
    } catch (e) {
      console.log(e);
      throw new Error('Internal Server error');
    }
  }

  async put(
    id: number,
    parametro: ParametroZonaPrm,
  ): Promise<ParametroZonaPrm> {
    try {
      const response = await pool.query(
        'UPDATE parametro_zona_prm SET area_covered = $1, zone_factor = $2, is_active = $3 WHERE id = $4',
        [parametro.areaCovered, parametro.zoneFactor, parametro.isActive, id],
      );
      return parametro;
    } catch (e) {
      console.log(e);
      throw new Error('Internal Server error');
    }
  }

  async delete(id: number): Promise<boolean> {
    try {
      const response = await pool.query(
        'DELETE FROM parametro_zona_prm where id = $1',
        [id],
      );
      return true;
    } catch (e) {
      console.log(e);
      throw new Error('Internal Server error');
    }
  }
}
