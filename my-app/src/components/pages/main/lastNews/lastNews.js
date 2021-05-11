import React from 'react';
import { img } from '../../../../assets/img';
import './lastNews.scss';
import { NewsCard } from '../../../common/cards/cards';

function Partners() {
    return (
        <section className="lastNews">
            <div className="wrapper">
                <h3 className="lastNews__title">последние новости</h3>
                <div className="lastNews__cards">
                    <NewsCard src={img.news}
                    title={'заголовок новости заголовок новости заголовок новости заголовок новости заголовок новости'}>
                        тут много текста  тут много текста  тут много текста 
                        тут много текста  тут много текста  тут много текста 
                        тут много текста  тут много текста  тут много текста 
                    </NewsCard>
                    <NewsCard src={img.news}
                    title={'заголовок новости'}>
                        тут много текста  тут много текста  тут много текста 
                        тут много текста  тут много текста  тут много текста 
                        тут много текста  тут много текста  тут много текста 
                    </NewsCard>
                    <NewsCard src={img.news}
                    title={'заголовок новости'}>
                        тут много текста  тут много текста  тут много текста 
                        тут много текста  тут много текста  тут много текста 
                        тут много текста  тут много текста  тут много текста 
                    </NewsCard>
                </div>
            </div>
        </section>
    );
  }

  export default Partners;