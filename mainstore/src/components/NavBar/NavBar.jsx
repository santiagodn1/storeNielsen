import React from 'react';
import './NavBar.css'
import { CartWidget } from './CartWidget/CartWidget'

function NavBar() {
    return (
        <header className="header">
            <nav className="nav">
                <ul>
                    <li>
                        <a href="/">
                            <img className="iconoNav" src="https://statics.glamit.com.ar/skin/frontend/default/fila16/images/filanew_dark.svg" alt="logo" />
                        </a></li>
                    <li><a href="#">Novedades</a></li>
                    <li><a href="#">Sneakers</a></li>
                    <li><a href="#">Training</a></li>
                    <li><a href="#">Tennis</a></li>
                    <li><a href="#">Ojotas</a></li>
                    <li><a className="sale" href="#">SALE</a></li>
                    <li><CartWidget /></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;