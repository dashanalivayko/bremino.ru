import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink, Switch, Route, Router, Link } from 'react-router-dom';

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
        <NavLink className="nav-item" activeClassName = "active" to="/" exact>Услуги
            <div class="submenu">
                <Link className="nav-item__child" to="/warehouses" exact>Складское хранение
                    <div class="submenu__two first">
                    <Link className="nav-item__child" to="/ts" exact>Таможенный склад </Link>
                    <Link className="nav-item__child" to="/svh" exact>Склад временного хранения</Link>
                    <Link className="nav-item__child" to="/sop" exact>Склад общего пользования</Link>
                    <Link className="nav-item__child" to="/cold" exact>Склад-холодильник</Link>
                    <Link className="nav-item__child" to="/open" exact>Открытая площадка</Link>
                    </div>
                </Link>
                <Link className="nav-item__child" to="/labling" exact>Маркировка товара
                    <div class="submenu__two second">
                        <Link className="nav-item__child" to="/data-matrix" exact>Маркировка DataMatrix</Link>
                        <Link className="nav-item__child" to="/alco-labling" exact>Маркировка алкоголя</Link>
                        <Link className="nav-item__child" to="/stickers" exact>Маркировка этикетками, стикерами</Link>
                    </div>
                </Link>
                <Link className="nav-item__child" to="/cross-docking" exact>Услуги кросс-докинга
                    <div class="submenu__two third">
                        <Link className="nav-item__child" to="/usluga" exact>Одноэтапный кросс-докинг</Link>
                        <Link className="nav-item__child" to="/usluga" exact>Двухэтапный кросс-докинг</Link>
                    </div>
                </Link>
                <Link className="nav-item__child" to="/transportnie-uslugi" exact>Транспортно-экспедиционные услуги
                    <div class="submenu__two fourth">
                        <Link className="nav-item__child" to="/usluga" exact>Доставка</Link>
                        <Link className="nav-item__child" to="/usluga" exact>Консолидация</Link>
                        <Link className="nav-item__child" to="/usluga" exact>Услуги таможенных представителей</Link>
                    </div>
                </Link>
                <Link className="nav-item__child" to="/avia" exact>Обслуживание авиагрузов и транспорта
                    <div class="submenu__two fifth">
                        <Link className="nav-item__child" to="/usluga" exact>Разгрузка/загрузка бортов</Link>
                        <Link className="nav-item__child" to="/usluga" exact>Заправка авиасудов</Link>
                        <Link className="nav-item__child" to="/usluga" exact>Хранение авиасудов в ангаре</Link>
                    </div>
                </Link>
                <Link className="nav-item__child sixth" to="/additional" exact>Дополнительные услуги
                     <div class="submenu__two sixth">
                        <Link className="nav-item__child" to="/usluga" exact>Взвешивание</Link>
                        <Link className="nav-item__child" to="/usluga" exact>Фотографирование</Link>
                        <Link className="nav-item__child" to="/usluga" exact>Фитосанитарный контроль</Link>
                        <Link className="nav-item__child" to="/usluga" exact>Ветеринарный контроль</Link>
                        <Link className="nav-item__child" to="/usluga" exact>Упаковка</Link>
                    </div>
                </Link>
            </div>
        </NavLink>
        <NavLink className="nav-item" to="/expeditors" exact>Экспедиторам</NavLink>
        <NavLink className="nav-item" to="/importers" exact>Импортерам</NavLink>
        <NavLink className="nav-item" to="/exporters" exact>Экспортерам</NavLink>
    </nav>
);
}
  
export default Header;

