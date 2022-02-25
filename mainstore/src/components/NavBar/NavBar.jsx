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
                    <li><a href="/category/sneakers">Sneakers</a></li>
                    <li><a href="/category/training">Training</a></li>
                    <li><a href="/category/tennis">Tennis</a></li>
                    <li><a href="/category/ojotas">Ojotas</a></li>
                    <li><a href="/Cart"><CartWidget /></a></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;