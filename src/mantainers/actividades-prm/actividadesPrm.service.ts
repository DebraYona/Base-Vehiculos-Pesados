import { pool } from '../../core/db';
import { type QueryResult } from 'pg';
import {
  type ActividadesPrmDTO,
  type CreateActividadesPrmDTO,
} from './actividadesPrm.dto';
import { Service } from 'typedi';

@Service()
export class ActividadesPrmService {
  async get(): Promise<ActividadesPrmDTO[]> {
    try {
      const response: QueryResult = await pool.query(
        'SELECT * FROM actividades_prm ORDER BY id ASC',
      );
      const actividades = response.rows.map((actividad) => {
        return {
          id: actividad.id,
          activity: actividad.activity,
          risk: actividad.risk,
          actNFactor: actividad.act_n_factor,
          minimumDeductible: actividad.minimum_deductible,
          validity: actividad.validity,
          isHeavy: actividad.is_heavy,
          isActive: actividad.is_active,
        };
      });
      return actividades;
    } catch (e) {
      console.log(e);
      throw new Error('Internal Server error');
    }
  }

  async create(
    actividad: CreateActividadesPrmDTO,
  ): Promise<CreateActividadesPrmDTO> {
    try {
      const response = await pool.query(
        'INSERT INTO actividades_prm (activity, act_n_factor, risk, minimum_deductible, validity, is_heavy) VALUES ($1, $2,$3, $4, $5, $6)',
        [
          actividad.activity,
          actividad.actNFactor,
          actividad.risk,
          actividad.minimumDeductible,
          actividad.validity,
          actividad.isHeavy,
        ],
      );
      return actividad;
    } catch (e) {
      console.log(e);
      throw new Error('Internal Server error');
    }
  }

  async put(
    id: number,
    actividad: ActividadesPrmDTO,
  ): Promise<ActividadesPrmDTO> {
    try {
      const response = await pool.query(
        'UPDATE actividades_prm SET activiyty = $1, act_n_factor = $2, risk = $3, minimum_deductible = $4, validity = $5, is_heavy = $6, is_active = $7 WHERE id = $8',
        [
          actividad.activity,
          actividad.actNFactor,
          actividad.risk,
          actividad.minimumDeductible,
          actividad.validity,
          actividad.isHeavy,
          actividad.isActive,
          id,
        ],
      );
      return actividad;
    } catch (e) {
      console.log(e);
      throw new Error('Internal Server error');
    }
  }

  async delete(id: number): Promise<boolean> {
    try {
      const response = await pool.query(
        'DELETE FROM actividades_prm where id = $1',
        [id],
      );
      return true;
    } catch (e) {
      console.log(e);
      throw new Error('Internal Server error');
    }
  }
}
