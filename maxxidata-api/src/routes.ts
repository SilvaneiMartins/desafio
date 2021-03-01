/*
*   Empresa: Maxxidata;
*   Autor: Silvanei de Almeida Martins;
*   E-mail: silvaneimartins_rcc@hotmail.com;
*   Contato Telegram: (69) 9.8405-2620;
*   Frase: Estamos em constante mudança no aprendizado;
*   Assinatura: Silvanei Martins;
*/
import { Router } from 'express';
import { ProfissionalController } from './controllers/ProfissionalController';
import { TipoProfissionalController } from './controllers/TipoProfissionalController';

const router = Router();
const profissionalController = new ProfissionalController();
const tipoProfissionalController = new TipoProfissionalController();

// Rota para cadastrar um profissional;
router.post("/profissional", profissionalController.create);
router.get("/profissional", profissionalController.show);

// Rota para lista um tipos de profissional;
router.post("/tipoprofissional", tipoProfissionalController.create);
router.get("/tipoprofissional", tipoProfissionalController.show);

export { router };
