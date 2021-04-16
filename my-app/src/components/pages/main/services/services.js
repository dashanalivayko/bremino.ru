import React from 'react';
import './services.scss';
import { ServicesCard } from '../../../common/cards/cards';
import warehouse from '../../../../assets/warehouse.svg';
import labling from '../../../../assets/labling.svg';
import crossDocking from '../../../../assets/cross-docking.svg';
import transport from '../../../../assets/transport.svg';
import avia from '../../../../assets/avia.svg';
import others from '../../../../assets/others.svg';
import ekspeditor from '../../../../assets/ekspeditor.svg';
import importer from '../../../../assets/import.svg';
import exporter from '../../../../assets/export.svg';

function Services(props) {
    return (
        <div className="services">
            <div className="wrapper">
                <div className="services-cards">
                    <ServicesCard src = {warehouse} title={'Складское хранение'}>
                    Таможенные склады, склады временного хранения и общего пользования
                    </ServicesCard>
                    <ServicesCard src = {labling} title={'Маркировка товаров'}>
                    Алкогольные напитки, одежда, обувь, парфюм и духи, мороженное и сыры, 
                    продукты питания и напитки
                    </ServicesCard>
                    <ServicesCard src = {crossDocking} title={'Услуги кросс-докинга'}>
                    Таможенные склады, склады временного хранения и общего пользования
                    </ServicesCard>
                    <ServicesCard src = {transport} title={'Транспортные услуги'}>
                    Таможенные склады, склады временного хранения и общего пользования
                    </ServicesCard>
                    <ServicesCard src = {avia} title={'Обслуживание авиа-грузов и транспорта'}>
                    Таможенные склады, склады временного хранения и общего пользования
                    </ServicesCard>
                    <ServicesCard src = {others} title={'Дополнительные услуги'}>
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
                    <ServicesCard src = {ekspeditor} title={'Экспедиторам'}>
                    Таможенные склады, склады временного хранения и общего пользования
                    </ServicesCard>
                    <ServicesCard src = {importer} title={'Импортерам'}>
                    Таможенные склады, склады временного хранения и общего пользования
                    </ServicesCard>
                    <ServicesCard src = {exporter} title={'Экспортерам'}>
                    Таможенные склады, склады временного хранения и общего пользования
                    </ServicesCard>
                </div>
            </div>
    );
  }

  export default Services;