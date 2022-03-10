import React, { useContext } from 'react';
import './NavBar.css'
import { CartWidget } from './CartWidget/CartWidget'
import { NavLink } from 'react-router-dom';
import { CartContext } from '../../Context'

export const NavBar = () => {
    const { Cartcount } = useContext(CartContext)

    return (
        <header className="header">
            <nav className="nav">
                <ul>
                    <li>
                        <NavLink to="/">
                            <img className="iconoNav" src="https://statics.glamit.com.ar/skin/frontend/default/fila16/images/filanew_dark.svg" alt="logo" />
                        </NavLink></li>
                    <li><NavLink to={"/category/Sneakers"}>Sneakers</NavLink></li>
                    <li><NavLink to={"/category/Training"}>Training</NavLink></li>
                    <li><NavLink to={"/category/Tennis"}>Tennis</NavLink></li>
                    <li><NavLink to={"/category/Ojotas"}>Ojotas</NavLink></li>
                    <li><NavLink to={"/Cart"}><CartWidget />{Cartcount}</NavLink></li>
                </ul>
            </nav>
        </header>
    )
};