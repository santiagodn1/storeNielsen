import React, { useContext } from 'react';
import './NavBar.css'
import { CartWidget } from './CartWidget/CartWidget'
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context'

export const NavBar = () => {
    const { Cartcount } = useContext(CartContext)

    return (
        <header className="header">
            <nav className="nav">
                <ul>
                    <li>
                        <a href="/">
                            <img className="iconoNav" src="https://statics.glamit.com.ar/skin/frontend/default/fila16/images/filanew_dark.svg" alt="logo" />
                        </a></li>
                    <li><Link to={"/category/sneakers"}>Sneakers</Link></li>
                    <li><Link to={"/category/training"}>Training</Link></li>
                    <li><Link to={"/category/tennis"}>Tennis</Link></li>
                    <li><Link to={"/category/ojotas"}>Ojotas</Link></li>
                    <li><Link to={"/Cart"}><CartWidget />{Cartcount}</Link></li>
                </ul>
            </nav>
        </header>
    )
};