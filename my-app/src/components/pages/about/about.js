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
import Block from '../../common/block/block';
import CategoryAbout from '../../common/category-about/category-about';

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
                        < CategoryAbout title='о нас' subtitle='ООО “Бремино групп” — динамично развивающаяся компания. Основной миссией нашей команды является формирование инновационной среды для повышения конкурентоспособности наших клиентов. 
                        Главная цель — создание уникальных решений в сфере логистики для Вашего бизнеса.'
                        cards='true'/>
                        < Block title={'бремино-орша'} subtitle={'Мультимодальный промышленно логистический комплекс'} src={img.orsha}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </ Block>
                        < Block title={'бремино-брузги'} subtitle={'транспортно-логистический центр'} src={img.orsha}  className="row-reverse">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </ Block>
                        < Block title={'бремино-берестовица'} subtitle={'транспортно-логистический центр'} src={img.orsha}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </ Block>
                    </div>
                </div>
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


