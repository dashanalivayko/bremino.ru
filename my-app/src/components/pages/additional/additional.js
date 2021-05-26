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

import './warehouses.scss';
import Block from '../../common/block/block';
import { BlueButton, TransparentBlueButton, TransparentButton } from '../../common/buttons/buttons';
import Additional from '../../common/additional/additional';
import Gallery from '../../common/gallery/gallery';
import Main from '../main/main';

function AdditionalPage() {

    // const onAlcoLabling = () => {return < Main />};

    return (
        <div>
            <Header />
            {/* <Banner
                contentVideo={<iframe width="600" height="600" src="https://www.youtube.com/embed/2UXNdgC6O88" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>}
                contentName={'Маркировка товаров'}
                contentTitle={'Акциз Этикетка Datamatrix'}>
                ООО «Бремино групп» оказывает широкий комплекс услуг по маркировке продукции, от оклейки готовыми этикетками заказчика до получения кодов маркировки за импортера, разработки индивидуального макета этикетки и организации доставки отмаркированной продукции заказчику.
            </Banner> */}
            <div className="container">
                <div className="wrapper">
                    < Block title={'маркировка алкогольных напитков'} subtitle={'с помарочным учетом'} src={img.orsha}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap 
                        into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
                        passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        <div className="buttons">
                            <BlueButton>Заказать расчет</BlueButton>
                            <TransparentBlueButton to={'/alco-labling'}>Узнать больше</TransparentBlueButton>
                        </div>
                    </ Block>
                    < Block title={'маркировка DataMatrix кодами'} subtitle={'алкогольных напитков с помарочным учетом'} src={img.orsha}  className="row-reverse">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap 
                        into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
                        passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        <div className="buttons">
                            <BlueButton>Заказать расчет</BlueButton>
                            <TransparentBlueButton>Узнать больше</TransparentBlueButton>
                        </div>
                    </ Block>
                    < Block title={'маркировка этикетками'} subtitle={'алкогольных напитков с помарочным учетом'} src={img.orsha}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap 
                        into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
                        passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        <div className="buttons">
                            <BlueButton>Заказать расчет</BlueButton>
                            <TransparentBlueButton>Узнать больше</TransparentBlueButton>
                        </div>
                    </ Block>
                </div>
            </div>
            <Advantages />
            <Partners />
            <CallBanner />
            <Additional />
            <Gallery />
            <Footer />
        </div>
    );
  }
  
  export default AdditionalPage;