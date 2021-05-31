import React from 'react';
import { img } from '../../../assets/img';
import { AboutCard } from '../cards/cards';
import './category-about.scss';

function CategoryAboutCards() {
    return (
        <div className="about__behold">
            < AboutCard />
            < AboutCard />
            < AboutCard />
            < AboutCard />
        </div>
    )};

function CategoryAboutImg() {
    return (
        <img className="CategoryAboutImg" src={img.banneralco} alt='pic' />
    )};

export { CategoryAboutCards, CategoryAboutImg };
