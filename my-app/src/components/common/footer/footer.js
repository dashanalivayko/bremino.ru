import React from 'react';
import { NavLink } from 'react-router-dom';

import './footer.scss';
import facebook from '../../../assets/facebook.svg';
import linkedin from '../../../assets/linkedin.svg';
import instagram from '../../../assets/instagram.svg';
import youtube from '../../../assets/youtube.svg';
import envelowp from '../../../assets/envelowp.svg';
import globo from '../../../assets/globo.svg';
import { TransparentButton } from '../buttons/buttons';

function Footer() {
    return (
        <section className="footer">
            <div className="wrapper">
                <footer className="footer">
                    <div className="footer__header">
                        <p><a className="footer__number" href="tel:74993502120">+7 499 350 21 20</a></p>
                        <TransparentButton>Заказать звонок</TransparentButton>
                        <div className="social-media">
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
                        <div className="footer__e-mail">
                            <img src={envelowp} />
                            <p className="footer__e-mail-adress">
                                marketing@bremino.by
                                <span>коммерческий отдел</span>
                            </p>
                        </div>
                    </div>
                    <NavFooter />
                    <div className="footer__footer">
                        <p className="footer__lng">
                           <img src={globo} />
                           english version
                        </p>
                        <div className="footer__info">
                            <a className="footer__info-item" href="#"><p className="footer__info-item">Карта сайта</p></a>
                            <p className="footer__info-item">
                                © bremino group 2021
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </section>
    );
  }

  function NavFooter() {
    return (
        <nav className="nav-footer">
            <div className="nav-footer__block">
                <p className="nav-footer__headline">услуги компании</p>
                <NavLink className="nav-footer__item" to="/warehousing" exact>Услуги хранения</NavLink>
                <NavLink className="nav-footer__item" to="/labling" exact>Маркировка товаров</NavLink>
                <NavLink className="nav-footer__item" to="/cross-docking" exact>Услуги кросс-докинга</NavLink>
                <NavLink className="nav-footer__item" to="/transportnie-uslugi" exact>Транспортные услуги</NavLink>
            </div>
            <div className="nav-footer__block">
                <NavLink className="nav-footer__item" to="/warehousing" exact>Услуги кросс-докинга</NavLink>
                <NavLink className="nav-footer__item" to="/labling" exact>Услуги по обслуживанию авиагрузов и транспорта</NavLink>
                <NavLink className="nav-footer__item" to="/cross-docking" exact>Дополнительные услуги</NavLink>
                <NavLink className="nav-footer__item" to="/transportnie-uslugi" exact>Отраслевые решения</NavLink>
            </div>
            <div className="nav-footer__block">
                <p className="nav-footer__headline"> Для клиента</p>
                <NavLink className="nav-footer__item" to="/warehousing" exact>Заполнение CMR</NavLink>
                <NavLink className="nav-footer__item" to="/labling" exact>Пример технического задания</NavLink>
                <NavLink className="nav-footer__item" to="/cross-docking" exact>Оплата услуг</NavLink>
                <NavLink className="nav-footer__item" to="/transportnie-uslugi" exact>FAQS</NavLink>
            </div>
            <div className="nav-footer__block">
                <p className="nav-footer__headline">Документы</p>
                <NavLink className="nav-footer__item" to="/warehousing" exact>Правовая информая</NavLink>
                <NavLink className="nav-footer__item" to="/labling" exact>Договор на хранение</NavLink>
                <NavLink className="nav-footer__item" to="/cross-docking" exact>Презентация компании</NavLink>
                <NavLink className="nav-footer__item" to="/transportnie-uslugi" exact>Сертификаты</NavLink>
                <NavLink className="nav-footer__item" to="/transportnie-uslugi" exact>Реквизиты компании</NavLink>
            </div>
            <div className="nav-footer__block">
                <p className="nav-footer__headline">Новости</p>
                <p className="nav-footer__headline">О компании</p>
                <p className="nav-footer__headline">Партнерам</p>
                <NavLink className="nav-footer__item" to="/transportnie-uslugi" exact>Предложения о сотрудничестве</NavLink>
            </div>
        </nav>
    );
  }
  
  export default Footer;