import React from 'react';

import './callBanner.scss';
import { TransparentButton } from '../buttons/buttons';

function CallBannerBlue() {
    return (
        <section className="callBannerBlue">
            <div className="wrapper">
                <p className="callBannerBlue__title">Остались вопросы?</p>
                <p className="callBannerBlue__subtitle">закажите звонок и наш специалист перезвонит вам в кратчайшие сроки</p>
                <TransparentButton>Заказать звонок</TransparentButton>
            </div>
        </section>
    );
  }

  function CallBanner() {
    return (
        <section className="callBanner">
            <div className="wrapper">
                <p className="callBanner__title">Нужна доставка груза? <br />окажем содействие в этом вопросе</p>
                <TransparentButton>Заказать звонок</TransparentButton>
            </div>
        </section>
    );
  }
  
export { CallBannerBlue, CallBanner };