import React from 'react';

import './callBanner.scss';
import { TransparentButton } from '../buttons/buttons';

function CallBanner() {
    return (
        <section className="callBanner">
            <div className="wrapper">
                <p className="callBanner__title">Остались вопросы?</p>
                <p className="callBanner__subtitle">закажите звонок и наш специалист перезвонит вам в кратчайшие сроки</p>
                <TransparentButton>Заказать звонок</TransparentButton>
            </div>
        </section>
    );
  }

  
export default CallBanner;