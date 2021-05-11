import React from 'react';
import './banner.scss';


function Text(props) {
    return (
        <div className="banner__content-text">
            <p className="banner__content-name">
                {props.contentName}
            </p>
            <h1 className="banner__content-title">
                {props.contentTitle}
            </h1>
            <h2 className="banner__content-subtitle">
                {props.children}
            </h2>
        </div>
    );
}

export default Text;