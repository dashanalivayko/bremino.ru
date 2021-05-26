import React from 'react';
import Text from './text'


import './banner.scss';


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
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text </Text>
                            
                        </div>
                        
                            
                    </div>
                </div>
            </section>
        </div>
    );
  }
  
  export default Banner;