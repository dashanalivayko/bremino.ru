import React from 'react';
import Banner from '../../../common/banner/banner';
import Map from '../../../common/map/map';
import Gallery from '../../../common/gallery/gallery';
import Header from '../../../common/header/header';
import Footer from '../../../common/footer/footer';
import { img } from '../../../../assets/img';
import '../labeling.scss';
import Advantages from '../../../common/advantages/advantages';
import Partners from '../../../common/partners/partners';
import Block from '../../../common/block/block';
import CategoryAbout from '../../../common/category-about/category-about';
import CategoryAdvantage from '../../../common/category-advantage/category-advantage';
import HowWeWork from '../../../common/howWeWork/howWeWork';
import { CallBanner } from '../../../common/callBanner/callBanner';

function Lablingdm() {
    return (
        <div>
            <Header />
            <Banner
                contentVideo={<img src={img.labeldm} alt='img' />}
                contentName={'DataMatrix маркировка'}
                contentTitle={'быстро качественно выгодно'}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
            </Banner>
            <CategoryAbout />
            <CategoryAdvantage />
            <HowWeWork />
            <Advantages />
            <Partners />
            <CallBanner />
            <Advantages />
            <Footer />
        </div>
    );
}

export default Lablingdm;


