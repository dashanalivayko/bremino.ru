import React from 'react';
import './banner-slider.scss';

import { TransparentButton } from '../../../common/buttons/buttons';
import { img } from '../../../../assets/img';

function Banner() {
    return (
        <section>
            <div className="banner__slider">
                <div className="banner__slider-wrapper">
                    <div className="banner__slider-item">
                        <div className="banner__slider-img">
                            <img src={img.bannerwarehouses} className="banner__slider-background" alt="logo" />
                            <div className="banner__slider-box">
                                <h1 className="banner__slider-title">
                                    Складские услуги <br/> премиум класса
                                </h1>
                                
                                <h2 className="banner__slider-subtitle">
                                    Обработка груза осуществляется в круглосуточном режиме <br/> (без выходных и праздиков)
                                </h2>
                                <TransparentButton className="transparent">заказать звонок</TransparentButton>
                            </div>
                        </div>
                    </div>

                    <div className="banner__slider-item">
                        <div className="banner__slider-img">
                            <img src={img.banneralco} className="banner__slider-background" alt="logo" />
                            <div className="banner__slider-box">
                                <h1 className="banner__slider-title">
                                    Маркировка <br/> акцизными марками
                                </h1>
                                
                                <h2 className="banner__slider-subtitle">
                                    Обработка груза осуществляется в круглосуточном режиме <br/> (без выходных и праздиков)
                                </h2>
                                
                                
                                <TransparentButton className="transparent">заказать звонок</TransparentButton>
                            </div>
                        </div>
                    </div>
                    <div className="banner__slider-item">
                        <div className="banner__slider-img">
                            <img src={img.bannerair} className="banner__slider-background" alt="logo" />
                            <div className="banner__slider-box">
                                <h1 className="banner__slider-title">
                                    Обслуживание <br/> авиагрузов и транспорта
                                </h1>
                             
                                <h2 className="banner__slider-subtitle">
                                    Обработка груза осуществляется в круглосуточном режиме <br/> (без выходных и праздиков)
                                </h2>
                                <TransparentButton className="transparent">заказать звонок</TransparentButton>
                            </div>
                        </div>
                    </div>
                </div>

                        <a className="banner__slider-control banner__slider-control--left" href="#" role="button">
                           <img src={img.left} className=" banner__slider-control banner__slider-control--left" alt="left" /></a>
                        <a className="banner__slider-control banner__slider-control--right" href="#" role="button">
                           <img src={img.right} className=" banner__slider-control banner__slider-control--right" alt="right" /></a>

            </div>
        </section >
    );
}

export default Banner;