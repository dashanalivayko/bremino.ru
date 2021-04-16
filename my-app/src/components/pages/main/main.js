import React from 'react';
import Header from '../../common/header/header';
import Banner from './banner/banner';
import Services from './services/services';
import './main.scss';


function Main() {
    return (
        <div>
            <Header />
            <Banner />
            <Services />
        </div>
    );
  }
  
  export default Main;