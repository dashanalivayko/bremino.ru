import React from 'react';
import Text from './text'
import {TransparentButton} from '../../common/buttons/buttons'

import './banner.scss';


function Banner(props) {
    return (
        <div>
            <div className="banner">
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

            </div>
        </div>
    );
  }
  
  export default Banner;