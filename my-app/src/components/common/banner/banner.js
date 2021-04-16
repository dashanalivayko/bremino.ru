import React from 'react';
import Text from './text'

import './banner.scss';


function Banner(props) {
    return (
        <div>
            <div className="banner">
                <div className="wrapper">
                    <div className="banner__content">{/* 
                        <video   src={props.src} className="banner__content-video">
                            
                         

                        </video> */}
                        <div className="banner__content-video">
                            {props.contentVideo}
                        </div>
                        <Text contentName={'О компании'}
                              contentTitle={'Ведущий логистический оператор'}>                      
                            dsjfkgnhjsdfhgdsfgjhsdflj g</Text>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default Banner;