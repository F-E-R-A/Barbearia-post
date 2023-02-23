import React, {useState} from "react";
import {Link} from 'react-router-dom';
import './style.css';

export default function Header(){
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
    

    function mudarTema(){
        if(tema === headerLight){
            setTema(headerDark);
            setLetter(letterLight);
            setButtonTextColor(button_text_light);
            setButonTextDescr(button_descr_light);
            
        }else{
            setTema(headerLight);
            setLetter(letterDark);
            setButtonTextColor(button_text_dark);
            setButonTextDescr(button_descr_dark);
          
        }
    }

    return(
        <header className={tema}>
            <div className="div-logo">
                <img src="/assets/barbearia-logo.png" alt="Logo-Empresa" title="Logo da Empresa"/>
            </div>
            <div className="nav-menu">
                <div className="button-dark">
                    <button id="button-dark-mode" className={button_text_color} onClick={mudarTema}>{button_text_descr}</button>
                </div>
                <div className="nav">
                    <Link id="link1" className={letter}>Sobre</Link>
                    <Link id="link2" className={letter} to="">Modelos</Link>
                    <Link id="link3" className={letter} to="">Galeria</Link>
                </div>
            </div>
        </header>
    );
};