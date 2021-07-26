import React from 'react';
import Header from '../../common/header/header';
import Banner from '../../common/banner/banner';
import Partners from '../../common/partners/partners';
import Footer from '../../common/footer/footer';
import { CallBanner } from '../../common/callBanner/callBanner';
import { img } from '../../../assets/img';

import './warehouses.scss';
import Block from '../../common/block/block';
import { BlueButton, TransparentBlueButton, TransparentButton } from '../../common/buttons/buttons';
import Additional from '../../common/additional/additional';
import Gallery from '../../common/gallery/gallery';


function Warehouses() {

    return (
        <div>
            <Header />
            <Banner
                contentVideo={<iframe width="600" height="600" src="https://www.youtube.com/embed/2UXNdgC6O88" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>}
                contentName={'Хранение товаров'}
                contentTitle={'Качественно Надежно Недорого'}>
                ООО «Бремино групп» оказывает услуги по хранению товаров на разных типах складов, а также складскую обработку различного уровня
            </Banner>
            <div className="container">
                <div className="wrapper">
                    < Block title={'Склад временного хранения'} subtitle={'что-то напишем'} src={img.orsha}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap 
                        into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
                        passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        <div className="buttons">
                            <BlueButton>Заказать расчет</BlueButton>
                            <TransparentBlueButton to={'/svh'}>Узнать больше</TransparentBlueButton>
                        </div>
                    </ Block>
                    < Block title={'таможенный склад'} subtitle={'что-то напишем'} src={img.orsha}  className="row-reverse">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap 
                        into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
                        passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        <div className="buttons">
                            <BlueButton>Заказать расчет</BlueButton>
                            <TransparentBlueButton to={'/ts'}>Узнать больше</TransparentBlueButton>
                        </div>
                    </ Block>
                    < Block title={'склад общего пользования'} subtitle={'что-то напишем'} src={img.orsha}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap 
                        into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
                        passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        <div className="buttons">
                            <BlueButton>Заказать расчет</BlueButton>
                            <TransparentBlueButton to={'/sop'}>Узнать больше</TransparentBlueButton>
                        </div>
                    </ Block>
                    < Block title={'склад холодильник'} subtitle={'что-то напишем'} src={img.orsha}  className="row-reverse">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap 
                        into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
                        passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        <div className="buttons">
                            <BlueButton>Заказать расчет</BlueButton>
                            <TransparentBlueButton to={'/cold'}>Узнать больше</TransparentBlueButton>
                        </div>
                    </ Block>
                    < Block title={'открытая площадка'} subtitle={'что-то напишем'} src={img.orsha}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap 
                        into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
                        passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        <div className="buttons">
                            <BlueButton>Заказать расчет</BlueButton>
                            <TransparentBlueButton to={'/open'}>Узнать больше</TransparentBlueButton>
                        </div>
                    </ Block>
                </div>
            </div>
            <Partners />
            <CallBanner />
            <Additional />
            <Gallery />
            <Footer />
        </div>
    );
  }
  
  export default Warehouses;
