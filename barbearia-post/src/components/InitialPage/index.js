import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './style.css';

export default function InitialPage(){
    const Light = 'initialpageLight';
    const Dark = 'initialpageDark';

    const [ tema, setTema ] = useState(Light);

    function mudarTema(){
        if(tema === 'initialpageLight'){
            setTema(Dark);
        }else{
            setTema(Light);
        }
    }

    return(
        <div className={tema}>
            <header className="header">
                <div className="div-logo">
                    <img src="/assets/barbearia-logo.png" alt="Logo-Empresa" title="Logo da Empresa"/>
                </div>
                <div className="nav-menu">
                    <div className="button-dark">
                        <button onClick={mudarTema}>Dark</button>
                    </div>
                    <div className="nav">
                        <Link className="links">Sobre</Link>
                        <Link className="links" to="">Modelos</Link>
                        <Link className="links" to="">Galeria</Link>
                    </div>
                </div>
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
            <footer className="footer">
                <h4>S. Kelly</h4>
            </footer>
        </div>
    );
}