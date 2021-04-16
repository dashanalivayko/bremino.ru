import React from 'react';
import './cards.scss';

function ServicesCard(props) {
    return (
        <div className="service">
            <img className="service-icon" src = {props.src} />
            <h3 className="service-title">{props.title}</h3>
            <p className="service-subtitle">{props.children}</p>
        </div>
    );
  }

  export { ServicesCard };