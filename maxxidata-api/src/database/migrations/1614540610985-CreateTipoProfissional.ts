/*
*   Empresa: Maxxidata;
*   Autor: Silvanei de Almeida Martins;
*   E-mail: silvaneimartins_rcc@hotmail.com;
*   Contato Telegram: (69) 9.8405-2620;
*   Frase: Estamos em constante mudança no aprendizado;
*   Assinatura: Silvanei Martins;
*/
import {MigrationInterface, QueryRunner, Table} from "typeorm";

class CreateTipoProfissional1614540610985 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "tipoprofissional",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "descricao",
                        type: "varchar",
                    },
                    {
                        name: "telefone",
                        type: "varchar",
                    },
                    {
                        name: "situacao",
                        type: "varchar",
                    },
                    {
                        name: "updatedAt",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "createdAt",
                        type: "timestamp",
                        default: "now()",
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tipoprofissional");
    }

}

export default CreateTipoProfissional1614540610985
