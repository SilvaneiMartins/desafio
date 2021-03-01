/*
 *   Empresa: Maxxidata;
 *   Autor: Silvanei de Almeida Martins;
 *   E-mail: silvaneimartins_rcc@hotmail.com;
 *   Contato Telegram: (69) 9.8405-2620;
 *   Frase: Estamos em constante mudança no aprendizado;
 *   Assinatura: Silvanei Martins;
 */
import React, { useEffect, useState } from "react";
import api from "../services/api";
import styles from "../styles/components/Input.module.css";

function Input() {
    const [profissional, setProfissional] = useState([]);
    const [tipoProfissionial, setTipoProfissionial] = useState([]);

    useEffect(() => {
        api.get("profissional").then((response) => {
            setProfissional(response.data);
        });

        api.get("tipoprofissional").then((response) => {
            setTipoProfissionial(response.data);
        });
    }, []);

    return (
        <div className={styles.containerList}>
            {profissional.map((item) => (
                <>
                    <span>Nome do profissional: {item.name}</span>
                    <p>Telefone: {item.telefone}</p>
                    <p>Email: {item.email}</p>
                    <p>Tipo de Profissional: {item.tipoProfissional}</p>
                    <p>Situação: {item.situacao}</p>
                </>
            ))}
        </div>
    );
}

export default Input;
