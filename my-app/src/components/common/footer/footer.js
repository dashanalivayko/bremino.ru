import React from 'react';
import { Link, NavLink } from 'react-router-dom';

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
                        <div className="footer__lng">
                           <img className="footer__lng-icon" src={globo} />
                           <a className="footer__lng-transfer" href="#">english version</a>
                        </div>
                        <div className="footer__info">
                            <a className="footer__info-item" href="#">Карта сайта</a>
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
                <Link className="nav-footer__item" to="/warehousing" exact>Услуги хранения</Link>
                <Link className="nav-footer__item" to="/labling" exact>Маркировка товаров</Link>
                <Link className="nav-footer__item" to="/cross-docking" exact>Услуги кросс-докинга</Link>
                <Link className="nav-footer__item" to="/transportnie-uslugi" exact>Транспортные услуги</Link>
            </div>
            <div className="nav-footer__block">
                <Link className="nav-footer__item" to="/avia" exact>Услуги по обслуживанию авиагрузов и транспорта</Link>
                <Link className="nav-footer__item" to="/additional" exact>Дополнительные услуги</Link>
                <Link className="nav-footer__item" to="/usluga" exact>Отраслевые решения</Link>
            </div>
            {/* <div className="nav-footer__block">
                <p className="nav-footer__headline"> Для клиента</p>
                <Link className="nav-footer__item" to="/usluga" exact>Заполнение CMR</Link>
                <Link className="nav-footer__item" to="/usluga" exact>Пример технического задания</Link>
                <Link className="nav-footer__item" to="/usluga" exact>Оплата услуг</Link>
                <Link className="nav-footer__item" to="/usluga" exact>FAQS</Link>
            </div> */}
            {/* <div className="nav-footer__block">
                <p className="nav-footer__headline">Документы</p>
                <Link className="nav-footer__item" to="/usluga" exact>Правовая информая</Link>
                <Link className="nav-footer__item" to="/usluga" exact>Договор на хранение</Link>
                <Link className="nav-footer__item" to="/usluga" exact>Презентация компании</Link>
                <Link className="nav-footer__item" to="/usluga" exact>Сертификаты</Link>
                <Link className="nav-footer__item" to="/usluga" exact>Реквизиты компании</Link>
            </div> */}
            <div className="nav-footer__block">
                <Link className="nav-footer__headline" to="/usluga" exact>Новости</Link>
                <Link className="nav-footer__headline" to="/about" exact>О компании</Link>
                <Link className="nav-footer__headline" to="/usluga" exact>Партнерам</Link>
                <Link className="nav-footer__item" to="/transportnie-uslugi" exact>Предложения о сотрудничестве</Link>
            </div>
        </nav>
    );
  }
  
  export default Footer;