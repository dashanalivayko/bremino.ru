import React from 'react';
import './supply.scss';
// import {img} from '../../../assets/img';
import { AdditionalCard } from '../../../common/cards/cards';
import { img } from '../../../../assets/img';


function Supply(props) {
    return (
        <section className="supply">
            <div className="wrapper">
                <h3 className="supply__title">мы предлагаем:</h3>
                <div className="supply__cards">
                    <AdditionalCard className="additionalCardForDM"
                                    title={props.title1}
                                    subtitle={<><img className="icons" src={img.boxes}/>
                                    <img className="icons" src={img.boxes}/></>}
                                    to={props.link1}>
                                    МПЛК “Бремино-Орша” / ТЛЦ “Бремино-Брузги” / ТЛЦ “Бремино-Берестовица”
                    </AdditionalCard>
                    <AdditionalCard className="additionalCardForDM"
                                    title={props.title2}
                                    subtitle={<><img className="icons" src={img.boxes}/>
                                    <img className="icons" src={img.boxes}/></>}
                                    to={props.link2}>
                                    МПЛК “Бремино-Орша” / ТЛЦ “Бремино-Брузги” / ТЛЦ “Бремино-Берестовица”
                    </AdditionalCard>
                    <AdditionalCard className="additionalCardForDM"
                                    title={props.title3}
                                    subtitle={<><img className="icons" src={img.boxes}/>
                                    <img className="icons" src={img.boxes}/></>}
                                    to={props.link3}>
                                    МПЛК “Бремино-Орша” / ТЛЦ “Бремино-Брузги” / ТЛЦ “Бремино-Берестовица”
                    </AdditionalCard>
                    <AdditionalCard className="additionalCardForDM"
                                    title={props.title4}
                                    subtitle={<><img className="icons" src={img.boxes}/>
                                    <img className="icons" src={img.boxes}/></>}
                                    to={props.link4}>
                                    МПЛК “Бремино-Орша” / ТЛЦ “Бремино-Брузги” / ТЛЦ “Бремино-Берестовица”
                    </AdditionalCard>
                    <AdditionalCard className="additionalCardForDM"
                                    title={props.title5}
                                    subtitle={<><img className="icons" src={img.boxes}/>
                                    <img className="icons" src={img.boxes}/></>}
                                    to={props.link5}>
                                    МПЛК “Бремино-Орша” / ТЛЦ “Бремино-Брузги” / ТЛЦ “Бремино-Берестовица”
                    </AdditionalCard>
                    <AdditionalCard className="additionalCardForDM"
                                    title={props.title6}
                                    subtitle={<><img className="icons" src={img.boxes}/>
                                    <img className="icons" src={img.boxes}/></>}
                                    to={props.link6}>
                                    МПЛК “Бремино-Орша” / ТЛЦ “Бремино-Брузги” / ТЛЦ “Бремино-Берестовица”
                    </AdditionalCard>
                </div>
                <p  className="sostav">** Состав услуги: <br/> <br/> Размещение ТС с грузом  
                с предоставлением места хранения в день размещения с уведомлением таможенных органов (хранение на ТС бесплатно в 
                первые сутки до получения разрешения таможенного органа на убытие)| Погрузка, выгрузка и перемещение | Приемка товара 
                на склад | Хранение товаров на складе 1 сутки | Хранение порожних ТС 1 сутки | Упаковка, сортировка и переупаковка | 
                Упаковка товара скотч-пленкой в коробе | Организация грузового места (укладка коробов или иных внутритарных мест на паллету) | 
                Упаковка товара стрейч-пленкой на паллете | Изготовление макета печатной формы | Изготовление термотрансферных / 
                полипропиленовых этикеток | Маркировка товара и валидация кода DataMatrix | отчет о наненсении кодов идентификации.
<               br/><br/><b>Коды маркировки предоставляются заказчиком. На упаковке товара присутствуют коды EAN/GTIN, нанесенные производителем</b></p>
                {/* <p className="sostav">** Состав услуги: <br/> <br/> Размещение в зоне таможенного контроля | механизированная выгрузка товара | приемка на склад | хранение товара на складе | изготовление термотрансферных этикеток | маркировка товара | помарочный учет | упаковка товара | организация грузового места | отчет о нанесении маркировки | механизированная погрузка товара</p> */}

            </div>
        </section>
    );
  }

  export default Supply;