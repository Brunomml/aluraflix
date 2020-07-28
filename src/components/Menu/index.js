import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo.png'
import './Menu.css'
import Button from '../../components/Button'
//import ButtonLink from './componentes/ButtonLink';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="aluraflix logo"/>
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                novo video
            </Button>
        </nav>
    );
}

export default Menu;