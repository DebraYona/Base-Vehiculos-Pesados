import express, { type Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import { generateOpenApi } from '@ts-rest/open-api';
import { contract } from './api/contract';
import * as swaggerUi from 'swagger-ui-express';
import { createExpressEndpoints, initServer } from '@ts-rest/express';
import Container from 'typedi';
import {
  CreateParametroZonaPrmController,
  DeleteParametroZonaPrmController,
  ListParametroZonaPrmController,
  PutParametroZonaPrmController,
} from './mantainers/parametro-zona-prm/parametroZonaPrm.controller';
import {
  CreateCredibilidadPrmController,
  DeleteCredibilidadPrmController,
  ListCredibilidadPrmController,
  PutCredibilidadPrmController,
} from './mantainers/credibilidad-prm/credibilidadPrm.controller';
import {
  CreateScoringMarcaPrmController,
  DeleteScoringMarcaPrmController,
  ListScoringMarcaPrmController,
  PutScoringMarcaPrmController,
} from './mantainers/scoring-marca-prm/scoringMarcaPrm.controller';
import {
  CreateScoringDeduciblePrmController,
  DeleteScoringDeduciblePrmController,
  ListScoringDeduciblePrmController,
  PutScoringDeduciblePrmController,
} from './mantainers/scoring-deducible-prm/scoringDeduciblePrm.controller';
import {
  CreateActividadesPrmController,
  ListActividadesPrmController,
  PutActividadesPrmController,
} from './mantainers/actividades-prm/actividadesPRM.controller';

export const app: Application = express();
const s = initServer();

// setting

app.set('port', 3000);

// middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.json());

const openApiDocument = generateOpenApi(contract, {
  info: {
    title: 'API',
    version: '1.0.0',
  },
});
app.use('/docs', swaggerUi.serve, swaggerUi.setup(openApiDocument));

const router = s.router(contract, {
  maintainersRouter: {
    parametroZonaPrm: {
      createParametroZonaPrm: async (d) =>
        await Container.get(CreateParametroZonaPrmController).handle(d),
      deleteParametroZonaPrm: async (d) =>
        await Container.get(DeleteParametroZonaPrmController).handle(d),
      listParametroZonaPrm: async (d) =>
        await Container.get(ListParametroZonaPrmController).handle(d),
      putParametroZonaPrm: async (d) =>
        await Container.get(PutParametroZonaPrmController).handle(d),
    },
    credibilidadPrm: {
      listCredibilidadPrm: async (d) =>
        await Container.get(ListCredibilidadPrmController).handle(d),
      createCredibilidadPrm: async (d) =>
        await Container.get(CreateCredibilidadPrmController).handle(d),
      putCredibilidadPrm: async (d) =>
        await Container.get(PutCredibilidadPrmController).handle(d),
      deleteCredibilidadPrm: async (d) =>
        await Container.get(DeleteCredibilidadPrmController).handle(d),
    },

    scoringMarcaPrm: {
      createScoringMarcaPrm: async (d) =>
        await Container.get(CreateScoringMarcaPrmController).handle(d),
      deleteScoringMarcaPrm: async (d) =>
        await Container.get(DeleteScoringMarcaPrmController).handle(d),
      listScoringMarcaPrm: async (d) =>
        await Container.get(ListScoringMarcaPrmController).handle(d),
      putScoringMarcaPrm: async (d) =>
        await Container.get(PutScoringMarcaPrmController).handle(d),
    },
    scoringDeducible: {
      createScoringDeduciblePrm: async (d) =>
        await Container.get(CreateScoringDeduciblePrmController).handle(d),
      listScoringDeduciblePrm: async (d) =>
        await Container.get(ListScoringDeduciblePrmController).handle(d),
      putScoringDeduciblePrm: async (d) =>
        await Container.get(PutScoringDeduciblePrmController).handle(d),
      deleteScoringDeduciblePrm: async (d) =>
        await Container.get(DeleteScoringDeduciblePrmController).handle(d),
    },
    actividadesPrm: {
      listActividadPrm: async (d) =>
        await Container.get(ListActividadesPrmController).handle(d),
      createActividadPrm: async (d) =>
        await Container.get(CreateActividadesPrmController).handle(d),
      putActividadPrm: async (d) =>
        await Container.get(PutActividadesPrmController).handle(d),
      deleteActividadPrm: async (d) =>
        await Container.get(DeleteCredibilidadPrmController).handle(d),
    },
  },
});

createExpressEndpoints(contract, router, app);
