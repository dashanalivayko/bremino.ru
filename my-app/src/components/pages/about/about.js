import React from 'react';
import Banner from '../../common/banner/banner';
import Map from '../../common/map/map';

import Gallery from '../../common/gallery/gallery'
import Header from '../../common/header/header'

import {img} from '../../../assets/img';


import './about.scss';



function About() {
    return (
        <div>
            <Header />
            <Banner
                contentVideo={<iframe width="600" height="600" src="https://www.youtube.com/embed/2UXNdgC6O88" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>}
                contentName={'О компании'}
                contentTitle={'ведущий логистический оператор'}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text  
            </Banner>
            <div className="wrapper">
                <div className="about">
                    <div className="about__container">
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
                        <div className="about__behold">
                            <div className="about__behold-box">
                                <div className="about__behold-item">
                                    <img src={img.label} className="about__behold-icon" alt="logo" />
                                    <p className="about__behols-title">
                                        Более 135 млн. промаркированных eдиниц товаров
                                </p>
                                </div>
                                <div className="about__behold-item">
                                    <img src={img.warehouse} className="about__behold-icon" alt="logo" />
                                    <p className="about__behols-title">
                                        Более 135 млн. промаркированных eдиниц товаров
                                </p>
                                </div>
                            </div>
                            <div className="about__behold-box">
                                <div className="about__behold-item">
                                    <img src={img.truck} className="about__behold-icon" alt="logo" />
                                    <p className="about__behols-title">
                                        Более 135 млн. промаркированных eдиниц товаров
                                </p>
                                </div>
                                <div className="about__behold-item">
                                    <img src={img.shelf} className="about__behold-icon" alt="logo" />
                                    <p className="about__behols-title">
                                        Более 135 млн. промаркированных eдиниц товаров
                                </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about__complex">
                    <h1 className="about__complex-title">
                        Бремино-Орша
                        </h1>
                    <h2 className="about__complex-subtitle">
                        Мультимодальный промышленно логиситический комплекс
                        </h2>
                    <div className="about__complex-desc">
                        <p className="about__complex-text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        <img src={img.orsha} className="about__items-img" alt="logo" />
                    </div>
                </div>
                <div className="about__complex">
                    <h1 className="about__complex-title">
                        бремино-брузги
                        </h1>
                    <h2 className="about__complex-subtitle">
                        транспортно-логистический центр
                        </h2>
                    <div className="about__complex-desc">
                        <img src={img.orsha} className="about__items-img" alt="logo" />
                        <p className="about__complex-text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>

                    </div>
                </div>
                <div className="about__complex">
                    <h1 className="about__complex-title">
                        бремино-берестовица
                        </h1>
                    <h2 className="about__complex-subtitle">
                        транспортно-логистический центр
                        </h2>
                    <div className="about__complex-desc">
                        <p className="about__complex-text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        <img src={img.orsha} className="about__items-img" alt="logo" />
                    </div>
                </div>
            </div>
            <Map/>
            <Gallery/>
        </div>


    );
}

export default About;


