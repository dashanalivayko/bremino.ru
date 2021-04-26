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
                        <Text contentName={'О компании'}
                              contentTitle={'Ведущий логистический оператор'}>                      
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text </Text>
                            <TransparentButton className="transparent-banner">заказать звонок</TransparentButton>
                        </div>
                        
                            
                    </div>
                </div>

            </div>
        </div>
    );
  }
  
  export default Banner;