import { type AppRouter } from '@ts-rest/core';
import {
  createParametroZonaPrm,
  deleteParametroZonaPrm,
  listParametroZonaPrm,
  putParametroZonaPrm,
} from './parametro-zona-prm/parametro-zona-prm.route';
import {
  listScoringMarcaPrm,
  createScoringMarcaPrm,
  putScoringMarcaPrm,
  deleteScoringMarcaPrm,
} from './scoring-marca-prm/scoringMarcaPrm.route';
import {
  createScoringDeduciblePrm,
  deleteScoringDeduciblePrm,
  listScoringDeduciblePrm,
  putScoringDeduciblePrm,
} from './scoring-deducible-prm/scoringDeductiblePrm.route';
import {
  listActividadPrm,
  createActividadPrm,
  putActividadPrm,
  deleteActividadPrm,
} from './actividades-prm/actividadesPrm.route';

import {
  listCredibilidadPrm,
  createCredibilidadPrm,
  putCredibilidadPrm,
  deleteCredibilidadPrm,
} from './credibilidad-prm/credibilidadPrm.route';
export const maintainersRouter = {
  actividadesPrm: {
    listActividadPrm,
    createActividadPrm,
    putActividadPrm,
    deleteActividadPrm,
  },
  parametroZonaPrm: {
    listParametroZonaPrm,
    createParametroZonaPrm,
    putParametroZonaPrm,
    deleteParametroZonaPrm,
  },
  credibilidadPrm: {
    listCredibilidadPrm,
    createCredibilidadPrm,
    putCredibilidadPrm,
    deleteCredibilidadPrm,
  },
  scoringMarcaPrm: {
    listScoringMarcaPrm,
    createScoringMarcaPrm,
    putScoringMarcaPrm,
    deleteScoringMarcaPrm,
  },
  scoringDeducible: {
    listScoringDeduciblePrm,
    createScoringDeduciblePrm,
    putScoringDeduciblePrm,
    deleteScoringDeduciblePrm,
  },
} satisfies AppRouter;
