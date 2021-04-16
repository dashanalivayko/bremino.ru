import React from 'react';
import './banner.scss';

import {TransparentButton} from '../../../common/buttons/buttons';

function Banner() {
    return (
        <section className="banner">
            <div className="wrapper">
                <h1 className="title">Складские услуги премиум-класса</h1>
                <TransparentButton className="transparent"/>
            </div>
        </section>
    );
  }

  export default Banner;