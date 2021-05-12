import React from 'react';
import {img} from '../../../assets/img';
import './block.scss';

function Block(props) {
    return (
        <div className="block">
            <h1 className="block-title">
                {props.title}
            </h1>
            <h2 className="block-subtitle">
                {props.subtitle}
            </h2>
            <div className="block-desc">
                <p className="block-text">
                    {props.children}
                </p>
                <img src={props.src} className="block-img" />
            </div>
        </div>
    );
  }

export default Block