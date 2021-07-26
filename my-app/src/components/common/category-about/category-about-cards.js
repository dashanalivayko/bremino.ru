import React from 'react';
import { img } from '../../../assets/img';
import { AboutCard } from '../cards/cards';
import './category-about.scss';

function CategoryAboutCards() {
    return (
        <div className="about__behold">
            < AboutCard src={img.boxes}/>
            < AboutCard src={img.boxes}/>
            < AboutCard src={img.boxes}/>
            < AboutCard src={img.boxes}/>
        </div>
    )};

function CategoryAboutImg(props) {
    return (
        <img className="CategoryAboutImg" src={props.src} alt='pic' />
    )};

export { CategoryAboutCards, CategoryAboutImg };
