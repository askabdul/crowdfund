import React from "react";
import Logo from './../../../../assets/images/logo.svg';
import './style.scss';


export const AppHeader = () => {
    return (
        <header className="hero">
            <div className="header-content">
            <span>
                <img src={Logo} alt="crowdfund logo"/>
            </span>
            <nav>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#discover">Discover</a></li>
                    <li><a href="#getStarted">Get Started</a></li>
                </ul>
            </nav>
            </div>
        </header>
    )
}