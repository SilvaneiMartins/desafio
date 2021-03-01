/*
*   Empresa: Maxxidata;
*   Autor: Silvanei de Almeida Martins;
*   E-mail: silvaneimartins_rcc@hotmail.com;
*   Contato Telegram: (69) 9.8405-2620;
*   Frase: Estamos em constante mudança no aprendizado;
*   Assinatura: Silvanei Martins;
*/
import { EntityRepository, Repository } from "typeorm";

import { TipoProfissional } from "../models/TipoProfissional";

@EntityRepository(TipoProfissional)
class TipoProfissionalRepository extends Repository<TipoProfissional> {

}

export { TipoProfissionalRepository }
