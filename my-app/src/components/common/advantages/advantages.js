import React from 'react';
import './advantages.scss';
import {img} from '../../../assets/img';
import { AdvantagesCard } from '../cards/cards';


function Advantages() {
    return (
        <section className="advantages">
            <div className="wrapper">
                <div className="advantages__header">
                    <img src={img.advantages} />
                    <h3 className="advantages__title">почему мы?</h3>
                    <p className="advantages__subtitle">эффективно решим любоую задачу по хранению
                     и обработке товаров на наших складах. Предоставим качественный сервис по доступным 
                     ценам с минимальными временными затратами для вас</p>
                </div>
                <div className="advantages__cards">
                    <AdvantagesCard title="оперативность в исполнении"
                                src={img.rocket}>
                                Lorem Ipsum is simply dummy
                    </AdvantagesCard>
                    <AdvantagesCard title="круглосуточная работа центров"
                                src={img.clock}>
                                Lorem Ipsum is simply dummy
                    </AdvantagesCard>
                    <AdvantagesCard title="расположение терминалов"
                                src={img.point}>
                                Lorem Ipsum is simply dummy
                    </AdvantagesCard>
                    <AdvantagesCard title="гибкое ценообразование"
                                src={img.money}>
                                Lorem Ipsum is simply dummy
                    </AdvantagesCard>
                </div>
            </div>
        </section>
    );
  }

  export default Advantages;