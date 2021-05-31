import React from 'react';
import Header from '../../common/header/header';
import Banner from './banner-slider/banner-slider';
import Services from './services/services';
import './main.scss';
import Advantages from '../../common/advantages/advantages';
import Video from '../../pages/main/video/video';
import Reviews from '../../pages/main/reviews/reviews';
import Partners from '../../common/partners/partners';
import Map from '../../common/map/map';
import LastNews from '../../pages/main/lastNews/lastNews';
import Footer from '../../common/footer/footer';
import { CallBannerBlue } from '../../common/callBanner/callBanner';
import HowWeWork from '../../common/howWeWork/howWeWork';
import {img} from '../../../assets/img';
import CategoryAdvantage from '../../common/category-advantage/category-advantage';
import CategoryAbout from '../../common/category-about/category-about';

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