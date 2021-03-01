/*
 *   Empresa: Maxxidata;
 *   Autor: Silvanei de Almeida Martins;
 *   E-mail: silvaneimartins_rcc@hotmail.com;
 *   Contato Telegram: (69) 9.8405-2620;
 *   Frase: Estamos em constante mudança no aprendizado;
 *   Assinatura: Silvanei Martins;
 */
import Header from "../components/Hedear";
import Input from "../components/Input";
import styles from "../styles/pages/home.module.css";

export default function Home() {
    return (
        <div className={styles.container}>
            <>
                <Header />
                <Input />
            </>
        </div>
    );
}
