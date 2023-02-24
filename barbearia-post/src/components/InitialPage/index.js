import React, {useState} from "react";
import {Link} from 'react-router-dom';
import './style.css';

export default function InitialPage(){
    const headerLight = 'headerLight';
    const headerDark = 'headerDark';

    const letterLight = 'linksLight';
    const letterDark = 'linksDark';
    
    const button_text_light = 'button-light';
    const button_text_dark = 'button-dark';

    const button_descr_dark = 'Dark';
    const button_descr_light = 'Light';

    const main_dark = 'initialpageDark';
    const main_light = 'initialpageLight';

    const [ tema, setTema ] = useState(headerLight);
    const [ letter, setLetter ] = useState(letterDark);
    const [ button_text_color, setButtonTextColor ] = useState(button_text_dark);
    const [ button_text_descr, setButonTextDescr] = useState(button_descr_dark);
    const [ main_theme, setMainTheme ] = useState(main_light);
    

    function mudarTema(){
        if(tema === headerLight){
            setTema(headerDark);
            setLetter(letterLight);
            setButtonTextColor(button_text_light);
            setButonTextDescr(button_descr_light);
            setMainTheme(main_dark);
            
        }else{
            setTema(headerLight);
            setLetter(letterDark);
            setButtonTextColor(button_text_dark);
            setButonTextDescr(button_descr_dark);
            setMainTheme(main_light);
          
        }
    }
 
    return(
        <div className={main_theme}>
            <header className={tema}>
                <div className="div-logo">
                    <img src="/assets/barbearia-logo.png" alt="Logo-Empresa" title="Logo da Empresa"/>
                </div>
                <div className="nav-menu">
                    <div className="button-area">
                        <button id="button-dark-mode" className={button_text_color} onClick={mudarTema}>{button_text_descr}</button>
                    </div>
                    <div className="nav">
                        <Link id="link1" className={letter}>Sobre</Link>
                        <Link id="link2" className={letter} to="">Modelos</Link>
                        <Link id="link3" className={letter} to="">Galeria</Link>
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
};