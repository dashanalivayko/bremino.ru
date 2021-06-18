import React from 'react';
import { img } from '../../../assets/img';
import { AboutCard } from '../cards/cards';
import { CategoryAboutCards, CategoryAboutImg } from './category-about-cards';
import './category-about.scss';

function CategoryAbout(props) {
    return (
    <div className="about__container">
        <div className="wrapper-row wrapper">
            <div className="about__items">
                <p className="about__items-title">
                    {props.title}
                </p>
                <p className="about__items-subtitle">
                    {props.subtitle}
                    {props.children}
                </p>
                <div className="about__items-link">
                    <img src={img.play} className="about__items-iconplay" alt="logo" />
                    <a className="about__items-link--video" href={props.video} target="_blank">посмотреть видео</a>
                </div>
            </div>
            { props.cards ? < CategoryAboutCards /> : <CategoryAboutImg src={props.src} /> }
        </div>
    </div>
    )};

export default CategoryAbout;
