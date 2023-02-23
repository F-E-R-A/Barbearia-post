import React, {useState} from 'react';
import './style.css';

import Header from '../Header';
import Footer from '../Footer';

export default function InitialPage(){
    
 
    return(
        <div className="ini">
            <header>
                <Header/>
            </header>
            <main className="main">
                <div className="capa">
                    <h1>BARBER &nbsp;SHOP</h1>
                </div>
                <div className="descr">
                    <h2>Bem-Vindo a Barber-Shop</h2>
                    <p>Nossa barbearia sempre oferece profissionais de qualidade e 
                       estamos prontos para lidar com suas maiores expectativas.
                    </p>
                    <p>Nossos serviços são dedicados ao seu sucesso pessoal. 
                       Aqui temos uma equipe premiada que demonstrou o talento de 
                       mestres barbeiros em vários concursos de estilo. Deixe nosso 
                       barbeiro ser seu estilista pessoal e você nunca ficará desapontado.
                    </p>
                </div>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
};