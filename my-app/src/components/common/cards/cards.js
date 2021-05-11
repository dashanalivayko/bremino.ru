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

  function AdvantagesCard(props) {
    return (
        <div className="advantage">
            <img className="advantage-icon" src = {props.src} />
            <h3 className="advantage-title">{props.title}</h3>
            <p className="advantage-subtitle">{props.children}</p>
        </div>
    );
  }

  function NewsCard(props) {
    return (
        <div className="news">
            <img className="news-icon" src = {props.src} />
            <p className="news-title">{props.title}</p>
            <p className="news-subtitle">{props.children}</p>
        </div>
    );
  }

  export { ServicesCard, AdvantagesCard, NewsCard };