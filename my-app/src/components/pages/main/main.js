import React from 'react';
import Header from '../../common/header/header';
import Banner from './banner/banner';
import Services from './services/services';
import './main.scss';
import Advantages from '../../common/advantages/advantages';
import Video from '../../pages/main/video/video';
import Reviews from '../../pages/main/reviews/reviews';
import Partners from '../../common/partners/partners';
import Map from '../../common/map/map';
import LastNews from '../../pages/main/lastNews/lastNews';

function Main() {
    return (
        <div>
            <Header />
            <Banner />
            <Services />
            <Advantages />
            <Video />
            <Reviews />
            <Partners />
            <Map />
            <LastNews />
        </div>
    );
  }
  
  export default Main;