import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink, Switch, Route, Router } from 'react-router-dom';

import './footer.scss';
import logo from '../../../assets/logo-big.png';

function Footer() {
    return (
        <section>
            <div className="wrapper">
                <footer className="footer">
                    <img src={logo} className="logo" alt="logo" />
                    <NavFooter />
                </footer>
            </div>
        </section>
    );
  }

  function NavFooter() {
    return (
        <nav className="nav">
            <div className="nav-block">
                <NavLink className="nav-item" to="/about" exact>О нас</NavLink>
            </div>
            <div className="nav-block">
                <NavLink className="nav-item" to="/alcohol-labling" exact>маркировка алкоголя</NavLink>
                <NavLink className="nav-item" to="/datamatrix-labling" exact>маркировка DataMatrix</NavLink>
                <NavLink className="nav-item" to="/sticker-labling" exact>маркировка стикерами</NavLink>
                {/* <NavLink className="nav-item" to="/about" exact>О нас</NavLink>
                <NavLink className="nav-item" to="/about" exact>О нас</NavLink>
                <NavLink className="nav-item" to="/about" exact>О нас</NavLink>
                <NavLink className="nav-item" to="/about" exact>О нас</NavLink>
                <NavLink className="nav-item" to="/about" exact>О нас</NavLink>
                <NavLink className="nav-item" to="/about" exact>О нас</NavLink> */}
            </div>
            {/* <NavLink className="nav-item" activeClassName = "active" to="/" exact>Главная</NavLink>
            <NavLink className="nav-item" to="/news" exact>Новости</NavLink>
            <NavLink className="nav-item" to="/faq" exact>FAQ</NavLink>
            <NavLink className="nav-item" to="/contacts" exact>Контакты</NavLink> */}
        </nav>
    );
  }
  
  export default Footer;