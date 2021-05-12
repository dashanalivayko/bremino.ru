import React from 'react';
import { Link } from 'react-router-dom';
import { ReadMoreButton } from '../buttons/buttons';
import './cards.scss';

  function ServicesCard(props) {
    return (
        <Link to="/labeling" className="service" duration={1}>
            <img className="service-icon" src = {props.src} />
            <h3 className="service-title">{props.title}</h3>
            <p className="service-subtitle">{props.children}</p>
        </Link>
    );
  }

  function AdvantagesCard(props) {
    return (
        <Link className="advantage">
            <img className="advantage-icon" src = {props.src} />
            <h3 className="advantage-title">{props.title}</h3>
            <p className="advantage-subtitle">{props.children}</p>
        </Link>
    );
  }

  function NewsCard(props) {
    return (
        <Link className="news">
            <img className="news-icon" src = {props.src} />
            <p className="news-title">{props.title}</p>
            <p className="news-subtitle">{props.children}</p>
            <ReadMoreButton>Читать дальше</ReadMoreButton>
        </Link>
    );
  }

  export { ServicesCard, AdvantagesCard, NewsCard };