import React from 'react';
import './index.css';
import Logo from '../../pictures/logo.svg';

export default function Navigation() {
    return(
        <nav className="navbar">
            <div className="container-fluid">
                <a className="navbar-brand">
                    <img className="logo-wrapper" src={Logo} />
                </a>
            </div>
        </nav>
    )
}