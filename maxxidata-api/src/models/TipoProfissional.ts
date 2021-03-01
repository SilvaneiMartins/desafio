/*
*   Empresa: Maxxidata;
*   Autor: Silvanei de Almeida Martins;
*   E-mail: silvaneimartins_rcc@hotmail.com;
*   Contato Telegram: (69) 9.8405-2620;
*   Frase: Estamos em constante mudança no aprendizado;
*   Assinatura: Silvanei Martins;
*/
import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryColumn,
    UpdateDateColumn
} from 'typeorm';
import { v4 as uuid } from 'uuid'

@Entity("tipoprofissional")
class TipoProfissional {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    descricao: string;

    @Column()
    telefone: string;

    @Column()
    situacao: string;

    @UpdateDateColumn()
    updatedAt: Date;

    @CreateDateColumn()
    createdAt: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { TipoProfissional }
