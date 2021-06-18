import React from 'react';
import './SupplyForDM.scss';
// import {img} from '../../../assets/img';
import { AdditionalCard } from '../../../../common/cards/cards';
import { img } from '../../../../../assets/img';


function SupplyForDM() {
    return (
        <section className="supply">
            <div className="wrapper">
                <h3 className="supply__title">мы предлагаем:</h3>
                <div className="supply__cards">
                    <AdditionalCard className="additionalCardForDM"
                                    title="Маркировку обуви"
                                    subtitle={<><img className="icons" src={img.boxes}/>
                                    <img className="icons" src={img.boxes}/></>}
                                    to="/shoes-dm">
                                    МПЛК “Бремино-Орша” / ТЛЦ “Бремино-Брузги” / ТЛЦ “Бремино-Берестовица”
                    </AdditionalCard>
                    <AdditionalCard className="additionalCardForDM"
                                    title="Маркировку питьевой воды"
                                    subtitle={<><img className="icons" src={img.boxes}/>
                                    <img className="icons" src={img.boxes}/></>}
                                    to="/water-dm">
                                    МПЛК “Бремино-Орша” / ТЛЦ “Бремино-Брузги” / ТЛЦ “Бремино-Берестовица”
                    </AdditionalCard>
                    <AdditionalCard className="additionalCardForDM"
                                    title="Маркировку товаров легкой промышленности"
                                    subtitle={<><img className="icons" src={img.boxes}/>
                                    <img className="icons" src={img.boxes}/></>}
                                    to="/clothes-dm">
                                    МПЛК “Бремино-Орша” / ТЛЦ “Бремино-Брузги” / ТЛЦ “Бремино-Берестовица”
                    </AdditionalCard>
                    <AdditionalCard className="additionalCardForDM"
                                    title="Маркировку духов и парфюма"
                                    subtitle={<><img className="icons" src={img.boxes}/>
                                    <img className="icons" src={img.boxes}/></>}
                                    to="/parfum-dm">
                                    МПЛК “Бремино-Орша” / ТЛЦ “Бремино-Брузги” / ТЛЦ “Бремино-Берестовица”
                    </AdditionalCard>
                    <AdditionalCard className="additionalCardForDM"
                                    title="Маркировку молочной продукции"
                                    subtitle={<><img className="icons" src={img.boxes}/>
                                    <img className="icons" src={img.boxes}/></>}
                                    to="/milk-dm">
                                    МПЛК “Бремино-Орша” / ТЛЦ “Бремино-Брузги” / ТЛЦ “Бремино-Берестовица”
                    </AdditionalCard>
                    <AdditionalCard className="additionalCardForDM"
                                    title="Маркировку шин и покрышек"
                                    subtitle={<><img className="icons" src={img.boxes}/>
                                    <img className="icons" src={img.boxes}/></>}
                                    to="/tire-dm">
                                    МПЛК “Бремино-Орша” / ТЛЦ “Бремино-Брузги” / ТЛЦ “Бремино-Берестовица”
                    </AdditionalCard>
                </div>
                <p className="sostav">** Состав услуги: <br/> <br/> Размещение в зоне таможенного контроля | механизированная выгрузка товара | приемка на склад | хранение товара на складе | изготовление термотрансферных этикеток | маркировка товара | помарочный учет | упаковка товара | организация грузового места | отчет о нанесении маркировки | механизированная погрузка товара</p>

            </div>
        </section>
    );
  }

  export default SupplyForDM;