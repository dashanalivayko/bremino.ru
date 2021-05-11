import React from 'react';
import './services.scss';
import { ServicesCard } from '../../../common/cards/cards';
import {img} from '../../../../assets/img';


function Services(props) {
    return (
        <div className="services">
            <div className="wrapper">
                <div className="services-cards">
                    <ServicesCard src = {img.warehouse} title={'Складское хранение'}>
                    Таможенные склады, склады временного хранения и общего пользования
                    </ServicesCard>
                    <ServicesCard src = {img.labling} title={'Маркировка товаров'}>
                    Алкогольные напитки, одежда, обувь, парфюм и духи, мороженное и сыры, 
                    продукты питания и напитки
                    </ServicesCard>
                    <ServicesCard src = {img.crossDocking} title={'Услуги кросс-докинга'}>
                    Таможенные склады, склады временного хранения и общего пользования
                    </ServicesCard>
                    <ServicesCard src = {img.transport} title={'Транспортные услуги'}>
                    Таможенные склады, склады временного хранения и общего пользования
                    </ServicesCard>
                    <ServicesCard src = {img.avia} title={'Обслуживание авиа-грузов и транспорта'}>
                    Таможенные склады, склады временного хранения и общего пользования
                    </ServicesCard>
                    <ServicesCard src = {img.others} title={'Дополнительные услуги'}>
                    Таможенные склады, склады временного хранения и общего пользования
                    </ServicesCard>
                </div>
                <Solutions />
            </div>
        </div>
    );
  }

  function Solutions(props) {
    return (
            <div >
                <h3 className="services-title">Отраслевые решения</h3>
                <div className="services-cards">
                    <ServicesCard src = {img.ekspeditor} title={'Экспедиторам'}>
                    Таможенные склады, склады временного хранения и общего пользования
                    </ServicesCard>
                    <ServicesCard src = {img.importer} title={'Импортерам'}>
                    Таможенные склады, склады временного хранения и общего пользования
                    </ServicesCard>
                    <ServicesCard src = {img.exporter} title={'Экспортерам'}>
                    Таможенные склады, склады временного хранения и общего пользования
                    </ServicesCard>
                </div>
            </div>
    );
  }

  export default Services;