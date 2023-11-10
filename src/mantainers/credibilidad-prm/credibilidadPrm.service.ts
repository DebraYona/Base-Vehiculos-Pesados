import { pool } from '../../core/db';
import { type QueryResult } from 'pg';
import { type CredibilidadPrmDTO } from './credibilidadRpm.dto';
import { Service } from 'typedi';

@Service()
export class CredibilidadPrmService {
  async get(): Promise<CredibilidadPrmDTO[]> {
    try {
      const response: QueryResult = await pool.query(
        'SELECT * FROM actividades_prm ORDER BY id ASC',
      );
      const credibilidades = response.rows.map((credibilidad) => {
        return {
          id: credibilidad.id,
          price: credibilidad.price,
          isActive: credibilidad.is_active,
        };
      });
      return credibilidades;
    } catch (e) {
      console.log(e);
      throw new Error('Internal Server error');
    }
  }

  async create(credibilidad: CredibilidadPrmDTO): Promise<CredibilidadPrmDTO> {
    try {
      await pool.query('INSERT INTO credibilidad_prm (price) VALUES ($1)', [
        credibilidad.price,
      ]);
      return credibilidad;
    } catch (e) {
      console.log(e);
      throw new Error('Internal Server error');
    }
  }

  async put(
    id: number,
    credibilidad: CredibilidadPrmDTO,
  ): Promise<CredibilidadPrmDTO> {
    try {
      const response = await pool.query(
        'UPDATE credibilidad_prm SET price = $1, is_active = $2 WHERE id = $3',
        [credibilidad.price, credibilidad.isActive, id],
      );
      return credibilidad;
    } catch (e) {
      console.log(e);
      throw new Error('Internal Server error');
    }
  }

  async delete(id: number): Promise<boolean> {
    try {
      const response = await pool.query(
        'DELETE FROM credibilidad_prm where id = $1',
        [id],
      );
      return true;
    } catch (e) {
      console.log(e);
      throw new Error('Internal Server error');
    }
  }
}
