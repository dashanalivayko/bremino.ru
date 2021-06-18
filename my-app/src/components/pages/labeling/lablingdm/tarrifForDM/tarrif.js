import React from 'react';
import '../../labeling.scss';
// import {img} from '../../../assets/img';
import { AdditionalCard, TarrifCard } from '../../../../common/cards/cards';
import { img } from '../../../../../assets/img';


function TarrifForDM() {
    return (
        <section className="tarrif">
            <div className="wrapper">
                <h3 className="tarrif__title">тариф на маркировку</h3>
                <div className="tarrif__cards">
                    <TarrifCard />
                </div>
                <p className="sostav">** Состав услуги: <br/> <br/> Размещение в зоне таможенного контроля | механизированная выгрузка товара | приемка на склад | хранение товара на складе | изготовление термотрансферных этикеток | маркировка товара | помарочный учет | упаковка товара | организация грузового места | отчет о нанесении маркировки | механизированная погрузка товара</p>
            </div>
        </section>
    );
  }

  export default TarrifForDM;