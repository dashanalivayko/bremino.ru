import React from 'react';
import Header from '../../common/header/header';
import Banner from '../../common/banner/banner';
import Advantages from '../../common/advantages/advantages';
import Video from '../../pages/main/video/video';
import Reviews from '../../pages/main/reviews/reviews';
import Partners from '../../common/partners/partners';
import Map from '../../common/map/map';
import Footer from '../../common/footer/footer';
import { CallBanner } from '../../common/callBanner/callBanner';
import { img } from '../../../assets/img';

import './cross-docking.scss';
import Block from '../../common/block/block';
import { BlueButton, TransparentBlueButton } from '../../common/buttons/buttons';
import Additional from '../../common/additional/additional';
import Gallery from '../../common/gallery/gallery';
import Main from '../main/main';
import CategoryAbout from '../../common/category-about/category-about';
import CategoryAdvantage from '../../common/category-advantage/category-advantage';
import HowWeWork from '../../common/howWeWork/howWeWork';

function CrossDocking() {

    return (
        <div>
            <Header />
            <Banner
                contentVideo={<img src={img.bruzgi_tlc} alt='pic' />}
                contentName={'Услуга кросс-докинга'}
                contentTitle={'упрощение оптимизация экономия'}>
                ООО «Бремино групп» оказывает широкий комплекс услуг по маркировке продукции, от оклейки готовыми этикетками заказчика до получения кодов маркировки за импортера, разработки индивидуального макета этикетки и организации доставки отмаркированной продукции заказчику.
            </Banner>
            <CategoryAbout />
            <CategoryAdvantage />
            <HowWeWork />
            <Advantages />
            <Partners />
            <CallBanner />
            <Additional />
            <Footer />
        </div>
    );
  }
  
  export default CrossDocking;