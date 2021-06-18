import React from 'react';
import Text from './text'


import './banner.scss';
import { TransparentButton } from '../buttons/buttons';


function Banner(props) {
    return (
        <div>
            <section className="banner">
                <div className="wrapper">
                    <div className="banner__content">
                        <div className="banner__content-video">
                            {props.contentVideo}
                        </div>
                        
                        <div className="banner__content-item">
                            <Text contentName={props.contentName}
                                contentTitle={props.contentTitle}>                      
                                {props.children} </Text>
                            <TransparentButton className="transparent-banner">заказать звонок</TransparentButton>
                        </div>
                        
                            
                    </div>
                </div>
            </section>
        </div>
    );
  }
  
  export default Banner;