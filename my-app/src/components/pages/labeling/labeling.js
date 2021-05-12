import React from 'react';
import Header from '../../common/header/header';
import Banner from '../../common/banner/banner';
import Advantages from '../../common/advantages/advantages';
import Video from '../../pages/main/video/video';
import Reviews from '../../pages/main/reviews/reviews';
import Partners from '../../common/partners/partners';
import Map from '../../common/map/map';
import Footer from '../../common/footer/footer';
import CallBanner from '../../common/callBanner/callBanner';

import './labeling.scss';

function Labeling() {

    return (
        <div>
            <Header />
            <Banner
                contentVideo={<iframe width="600" height="600" src="https://www.youtube.com/embed/2UXNdgC6O88" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>}
                contentName={'Маркировка товаров'}
                contentTitle={'акциз этикетка datamatrix'}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text  
            </Banner>
            <Advantages />
            <Video />
            <CallBanner />
            <Reviews />
            <Partners />
            <Map />
            <Footer />
        </div>
    );
  }
  
  export default Labeling;