/*
*   Empresa: Maxxidata;
*   Autor: Silvanei de Almeida Martins;
*   E-mail: silvaneimartins_rcc@hotmail.com;
*   Contato Telegram: (69) 9.8405-2620;
*   Frase: Estamos em constante mudança no aprendizado;
*   Assinatura: Silvanei Martins;
*/
import 'reflect-metadata';
import express from 'express';
import cors from 'cors';

import "./database";
import { router } from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(3333, () => console.log("🔥  Servidor está online! 🔥"));
