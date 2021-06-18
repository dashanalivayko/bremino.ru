import React from 'react';
import Header from '../../common/header/header';
import Banner from './banner-slider/banner-slider';
import Services from './services/services';
import Advantages from '../../common/advantages/advantages';
import Video from '../../pages/main/video/video';
import Reviews from '../../pages/main/reviews/reviews';
import Partners from '../../common/partners/partners';
import Map from '../../common/map/map';
import LastNews from '../../pages/main/lastNews/lastNews';
import Footer from '../../common/footer/footer';
import { CallBannerBlue } from '../../common/callBanner/callBanner';

function Main() {
    return (
        <div>
            <Header />
            <Banner />
            <Services />
            <Advantages />
            <Video />
            <CallBannerBlue />
            <Reviews />
            <Partners />
            <Map />
            <LastNews />
            <Footer />
        </div>
    );
  }
  
  export default Main;