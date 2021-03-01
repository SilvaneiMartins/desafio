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

import { ProfissionalRepository } from '../repositories/ProfissionalRepository';

class ProfissionalController {
    // Metodo para criar um profissional no banco de dados;
    async create(request: Request, response: Response) {
        const { name, telefone, email, tipoProfissional, situacao } = request.body;

        const profissionalRepository = getCustomRepository(ProfissionalRepository);
        const profissionalalreadyExists = await profissionalRepository.findOne({
            email,
        })

        if (profissionalalreadyExists) {
            return response.status(400).json({
                error: "Email do profissional já cadastrado."
            })
        }

        const profissional = profissionalRepository.create({
            name,
            telefone,
            email,
            tipoProfissional,
            situacao,
        })

        await profissionalRepository.save(profissional);
        return response.json(profissional);
    }


    // Metodo que realizar uma busca de profissional no banco de dados;
    async show(request: Request, response: Response) {
        const profissionalRepository = getCustomRepository(ProfissionalRepository);
        const lista = await profissionalRepository.find();
        return response.json(lista);
    }
}

export { ProfissionalController };
