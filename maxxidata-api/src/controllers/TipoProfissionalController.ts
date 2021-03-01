/*
*   Empresa: Maxxidata;
*   Autor: Silvanei de Almeida Martins;
*   E-mail: silvaneimartins_rcc@hotmail.com;
*   Contato Telegram: (69) 9.8405-2620;
*   Frase: Estamos em constante mudança no aprendizado;
*   Assinatura: Silvanei Martins;
*/
import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';

import { TipoProfissionalRepository } from '../repositories/TipoProfissionalRepository';

class TipoProfissionalController {
    // Metodo que realiza a criação no banco de dados;
    async create(request: Request, response: Response) {
        const { descricao, telefone, situacao } = request.body;

        const tipoProfissionalRepository = getCustomRepository(TipoProfissionalRepository);
        const tipoProfissional = tipoProfissionalRepository.create({
            descricao,
            telefone,
            situacao,
        })

        await tipoProfissionalRepository.save(tipoProfissional);
        return response.status(201).json(tipoProfissional);
    }

    // Metodo que realizar uma busca de tipos de profissional no banco de dados;
    async show(request: Request, response: Response) {
        const tipoProfissionalRepository = getCustomRepository(TipoProfissionalRepository);
        const lista = await tipoProfissionalRepository.find();
        return response.json(lista);
    }
}

export { TipoProfissionalController };
