import React from 'react';
import { Link } from 'react-router-dom';
import { ReadMoreButton, TransparentBlueButton, ReadExactlyButton } from '../buttons/buttons';
import { img } from '../../../assets/img';
import './cards.scss';

  function ServicesCard(props) {
    return (
        <Link to={props.to} className={`service ${props?.className}`} duration={1} style={props?.style}>
            <img className="service-icon" src = {props?.src} />
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

  function AboutCard(props) {
    return (
    <div className="aboutCard">
      <img src={img.shelf} className="aboutCard-icon" alt="logo" />
      <p className="aboutCard-title">Более 135 млн. промаркированных eдиниц товаров</p>
    </div>
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

  function AdditionalCard(props) {
    return (
        <Link to={props.to} className={`additionalCard ${props?.className}`}>
          <div className="additionalCard__header">
            <p className="additionalCard__header-title">{props.title}</p>
            <p className="additionalCard__header-subtitle">{props.subtitle}</p>
          </div>
          <p className="additionalCard__places">
            Место оказания услуг:
            <p className="additionalCard__places-item">
              {props.children}
            </p>
          </p>
          <div className="buttons">
            <TransparentBlueButton>заказать</TransparentBlueButton>
            <ReadExactlyButton to={props.to}>подробнее</ReadExactlyButton>
          </div>
        </Link>
    );
  }

  function TarrifCard(props) {
    return (
        <Link to={props.to} className={`service ${props?.className}`} duration={1} style={props?.style}>
            <img className="service-icon" src = {props?.src} />
            <h3 className="service-title">{props.title}</h3>
            <p className="service-subtitle">{props.children}</p>
        </Link>
    );
  }

  export { ServicesCard, AdvantagesCard, NewsCard, AdditionalCard, AboutCard, TarrifCard};