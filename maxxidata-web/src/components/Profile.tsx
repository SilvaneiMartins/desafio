/*
 *   Empresa: Maxxidata;
 *   Autor: Silvanei de Almeida Martins;
 *   E-mail: silvaneimartins_rcc@hotmail.com;
 *   Contato Telegram: (69) 9.8405-2620;
 *   Frase: Estamos em constante mudança no aprendizado;
 *   Assinatura: Silvanei Martins;
 */
import React from "react";
import styles from "../styles/components/Profile.module.css";

function Profile() {
    return (
        <div>
            <div className={styles.container}>
                <h2>Pesquisar por Profissional</h2>
                <img src="/logoUser.png" alt="Profile" />
            </div>
        </div>
    );
}

export default Profile;
