import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink, Switch, Route, Router } from 'react-router-dom';

import './header.scss';
import logo from '../../../assets/logo-big.png';
import eng from '../../../assets/eng.svg';
import call from '../../../assets/call.svg';
import envelowpb from '../../../assets/envelowpb.svg';
import facebook from '../../../assets/facebookb.svg';
import linkedin from '../../../assets/linkedinb.svg';
import instagram from '../../../assets/instagramb.svg';
import youtube from '../../../assets/youtubeb.svg';
import { BlueButton } from '../buttons/buttons';

function Header() {
return (
    <section>
        <HeaderContacts />
        <div className="wrapper">
            <header className="header">
                <img src={logo} className="logo" alt="logo" />
                <Nav />
                <BlueButton className="marginLeftAuto">Заказать звонок</BlueButton>
            </header>
        </div>
    </section>
);
}


function HeaderContacts() {
return (
    <section className="HeaderContacts">
        <div className="wrapper wrapper-row">
            <img src={eng} />
            <p className="HeaderContacts__item">
                <img src={call} />
                <a href="tel:7 499 350 21 20">
                    +7 499 350 21 20
                </a>
            </p>
            <p className="HeaderContacts__item">
                <img src={envelowpb} />
                <a href="mailto:marketing@bremino.by">
                    marketing@bremino.by
                </a>
            </p>
            <div className="social-media marginLeftAuto">
                <a className="social-media__item" href="https://www.facebook.com/breminogroup/?modal=admin_todo_tour" target="blank">
                    <img src={facebook} />
                </a>
                <a className="social-media__item" href="https://www.linkedin.com/company/%D0%BE%D0%BE%D0%BE-%D0%B1%D1%80%D0%B5%D0%BC%D0%B8%D0%BD%D0%BE-%D0%B3%D1%80%D1%83%D0%BF%D0%BF/mycompany/" target="blank"> 
                    <img src={linkedin} />
                </a>
                <a className="social-media__item" href="https://www.instagram.com/bremino_group/" target="blank">
                    <img src={instagram} />
                </a>
                <a className="social-media__item" href="https://www.youtube.com/channel/UCeu2yjNHcww8WKRsg6cmPHw" target="blank">
                    <img src={youtube} />
                </a>
            </div>
        </div>
    </section>
);
}

function Nav() {
return (
    <nav className="nav">
        <NavLink className="nav-item" to="/about" exact>О нас</NavLink>
        <NavLink className="nav-item" activeClassName = "active" to="/" exact>Услуги</NavLink>
        <NavLink className="nav-item" to="/expeditors" exact>Экспедиторам</NavLink>
        <NavLink className="nav-item" to="/importers" exact>Импортерам</NavLink>
        <NavLink className="nav-item" to="/exporters" exact>Экспортерам</NavLink>
    </nav>
);
}
  
export default Header;