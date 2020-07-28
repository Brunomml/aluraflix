import React from 'react';
import Logo from '../../assets/Logo.png'
import './Menu.css'
import Button from '../../components/Button'
//import ButtonLink from './componentes/ButtonLink';

function Menu() {
    return (
        <nav className="Menu">
            <a href="./">
                <img className="Logo" src={Logo} alt="aluraflix logo"/>
            </a>

            <Button as="a" className="ButtonLink" href="/">
                novo video
            </Button>
        </nav>
    );
}

export default Menu;