import React from 'react';
import './banner.scss';
import {TransparentButton} from '../../common/buttons/buttons'

function Text(props) {
    return (
        <div className="banner__content-text">    
                <p className="banner__content-name">
                    {props.contentName}
                </p>
            
            <div className="banner__content-block">
                <h1 className="banner__content-title">
                    {props.contentTitle}
                </h1>
                <h2 className="banner__content-subtitle">
                    {props.children}
                </h2>
                <TransparentButton className="transparent-banner">заказать звонок</TransparentButton>
            </div>

        </div>
    );
}

export default Text;