import React from 'react';
import './additional.scss';
import {img} from '../../../assets/img';
import { AdditionalCard } from '../cards/cards';


function Additional() {
    return (
        <section className="additional">
            <div className="wrapper">
                <h3 className="additional__title">возможно вас заинтересует</h3>
                <div className="additional__cards">
                    <AdditionalCard title="от 4.3 ₽ / 1 ед."
                                    subtitle="Акцизная маркировка с помарочным учетом">
                                    МПЛК “Бремино-Орша” <br/> ТЛЦ “Бремино-Брузги” <br /> ТЛЦ “Бремино-Берестовица”
                    </AdditionalCard>
                    <AdditionalCard title="от 4.3 ₽ / 1 ед."
                                    subtitle="Акцизная маркировка с помарочным учетом"
                                    className="highlight">
                                    МПЛК “Бремино-Орша” <br/> ТЛЦ “Бремино-Брузги” <br /> ТЛЦ “Бремино-Берестовица”
                    </AdditionalCard>
                    <AdditionalCard title="от 4.3 ₽ / 1 ед."
                                    subtitle="Акцизная маркировка с помарочным учетом">
                                    МПЛК “Бремино-Орша” <br/> ТЛЦ “Бремино-Брузги” <br /> ТЛЦ “Бремино-Берестовица”
                    </AdditionalCard>
                </div>
            </div>
        </section>
    );
  }

  export default Additional;