import React from 'react';
import { img } from '../../../assets/img';
import { AboutCard } from '../cards/cards';
import { CategoryAboutCards, CategoryAboutImg } from './category-about-cards';
import './category-about.scss';

function CategoryAbout() {
    return (
    <div className="about__container">
        <div className="wrapper-row wrapper">
            <div className="about__items">
                <p className="about__items-title">
                    О нас
                </p>
                <p className="about__items-subtitle">
                    ООО “Бремино групп” — динамично развивающаяся компания. Основной миссией нашей команды является формирование инновационной среды для повышения конкурентоспособности наших клиентов.
                </p>
                <p className="about__items-subtitle">
                    Главная цель — создание уникальных решений в сфере логистики для Вашего бизнеса.
                </p>
                <div className="about__items-link">
                    <img src={img.play} className="about__items-iconplay" alt="logo" />
                    <p className="about__items-link--video">посмотреть видео</p>
                </div>
            </div>
            {/* { props.cards ?  */}
            < CategoryAboutCards /> 
            {/* :  */}
            {/* <CategoryAboutImg src={img.lablingpng} />  */}
            {/* } */}
        </div>
    </div>
    )};

export default CategoryAbout;
