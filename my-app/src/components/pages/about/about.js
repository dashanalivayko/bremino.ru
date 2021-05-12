import React from 'react';
import Banner from '../../common/banner/banner';
import Map from '../../common/map/map';
import Gallery from '../../common/gallery/gallery';
import Header from '../../common/header/header';
import Footer from '../../common/footer/footer';
import { img } from '../../../assets/img';
import './about.scss';
import Advantages from '../../common/advantages/advantages';
import Partners from '../../common/partners/partners';
import Footer from '../../common/footer/footer';
import Block from '../../common/block/block';

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
            <section id="about">
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
                                    <div className="about__behold-item about__behold-item--right about__behold-item--bottom">
                                        <img src={img.label} className="about__behold-icon" alt="logo" />
                                        <p className="about__behold-title">
                                            Более 135 млн. промаркированных eдиниц товаров
                                        </p>
                                    </div>
                                    <div className="about__behold-item about__behold-item--bottom">
                                        <img src={img.warehouse} className="about__behold-icon" alt="logo" />
                                        <p className="about__behold-title">
                                            Более 135 млн. промаркированных eдиниц товаров
                                        </p>
                                    </div>
                                </div>
                                <div className="about__behold-box">
                                    <div className="about__behold-item about__behold-item--right">
                                        <img src={img.truck} className="about__behold-icon" alt="logo" />
                                        <p className="about__behold-title">
                                            Более 135 млн. промаркированных eдиниц товаров
                                        </p>
                                    </div>
                                    <div className="about__behold-item">
                                        <img src={img.shelf} className="about__behold-icon" alt="logo" />
                                        <p className="about__behold-title">
                                            Более 135 млн. промаркированных eдиниц товаров
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                < Block title={'бремино-орша'} subtitle={'Мультимодальный промышленно логистический комплекс'} src={img.orsha}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </ Block>
                < Block title={'бремино-брузги'} subtitle={'транспортно-логистический центр'} src={img.orsha}  className="row-reverse">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </ Block>
                < Block title={'бремино-берестовица'} subtitle={'транспортно-логистический центр'} src={img.orsha}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </ Block>
            </section>
            <Map/>
            <Gallery/>
            <Partners />
            <Advantages />
            <Footer />
        </div>
    );
}

export default About;


