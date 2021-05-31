import React from 'react';
import './howWeWork.scss';
import {img} from '../../../assets/img';

function HowWeWork() {
    return (
        <section className="howWeWork">
            <div className="wrapper">
                <h3 className="howWeWork__title">как мы работаем</h3>
                <div className="howWeWork__content">
                    <img className="howWeWork__content-img" src={img.bruzgi_tlc} alt='car' />
                    <div className="steps">
                        <div className="line" />
                        <div className="steps__container">
                            <img className="steps__container-img" src={img.computer} alt="icon"/>
                            <p className="steps__container-text">Звонок или обращение с сайта</p>
                            <img className="steps__container-point" src={img.pointblue} alt='point' />
                        </div>
                        <div className="steps__container">
                            <img className="steps__container-img" src={img.documents} alt="icon"/>
                            <p className="steps__container-text">Согласование техничекого задания, подписание договора и перечада марок</p>
                            <img className="steps__container-point" src={img.pointblue} alt='point' />
                        </div>
                        <div className="steps__container">
                            <img className="steps__container-img" src={img.carPoint} alt="icon"/>
                            <p className="steps__container-text">Размещение транспорта средства в зоне таможенного контроля</p>
                            <img className="steps__container-point" src={img.pointblue} alt='point' />
                        </div>
                        <div className="steps__container">
                            <img className="steps__container-img" src={img.weightcar} alt="icon"/>
                            <p className="steps__container-text">Механизированная выгрузка и приемка товара на склад</p>
                            <img className="steps__container-point" src={img.pointblue} alt='point' />
                        </div>
                        <div className="steps__container">
                            <img className="steps__container-img" src={img.boxes} alt="icon"/>
                            <p className="steps__container-text">Печать этикеток, маркировка товара, подготовка отчета 
                                                                (с акцизной маркировкой осуществление помрочного учета)</p>
                            <img className="steps__container-point" src={img.pointblue} alt='point' />
                        </div>
                        <div className="steps__container">
                            <img className="steps__container-img" src={img.crossDockingCar} alt="icon"/>
                            <p className="steps__container-text">Механизированная погразка товара в транспортное средство</p>
                            <img className="steps__container-point" src={img.pointblue} alt='point' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
  }

  export default HowWeWork;