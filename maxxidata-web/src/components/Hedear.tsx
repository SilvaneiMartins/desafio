/*
 *   Empresa: Maxxidata;
 *   Autor: Silvanei de Almeida Martins;
 *   E-mail: silvaneimartins_rcc@hotmail.com;
 *   Contato Telegram: (69) 9.8405-2620;
 *   Frase: Estamos em constante mudança no aprendizado;
 *   Assinatura: Silvanei Martins;
 */
import React from "react";
import styles from "../styles/components/Header.module.css";
import Profile from "./Profile";

function Hedear() {
    return (
        <div className={styles.container}>
            <div>
                <img src="/logo.png" alt="Search Maxxidata"/>
            </div>

            <div>
                <Profile />
            </div>
        </div>
    );
}

export default Hedear;
