import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink, Switch, Route, Router } from 'react-router-dom';

import './header.scss';
import logo from '../../../assets/logo-big.png';

function Header() {
    return (
        <section>
            <div className="wrapper">
                <header className="header">
                    <img src={logo} className="logo" alt="logo" />
                    <Nav />
                </header>
            </div>
        </section>
    );
  }

  function Nav() {
    return (
        <nav className="nav">
            <NavLink className="nav-item" to="/about" exact>О нас</NavLink>
            <NavLink className="nav-item" activeClassName = "active" to="/" exact>Главная</NavLink>
            <NavLink className="nav-item" to="/news" exact>Новости</NavLink>
            <NavLink className="nav-item" to="/faq" exact>FAQ</NavLink>
            <NavLink className="nav-item" to="/contacts" exact>Контакты</NavLink>
        </nav>
    );
  }
  
  export default Header;