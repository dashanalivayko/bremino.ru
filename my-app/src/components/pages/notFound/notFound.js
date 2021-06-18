import React from 'react';
import './notFound.scss';
import {img} from '../../../assets/img';
import { BlueButton } from '../../common/buttons/buttons';

function NotFound() {
    return (
        <section className="notFound">
            <div className="wrapper wrapper-row">
                <div className="notFound__text">
                    <h3 className="notFound__title">Еще чуть-чуть</h3>
                    <p className="notFound__subtitle">
                        Мы рады приветствовать Вас на нашем сайте! 
                        <br/>
                        Данная страница на стадии разработки, осталось недолго. 
                        <br/>
                        <br/>
                        Но, несмотря на это, мы всегда готовы ответить на Ваши вопросы
                    </p>
                    <BlueButton className="marginTop100">свяжитесь со мной</BlueButton>
                </div>
                <img src={img.developing} className="notFound__pic"/>
            </div>
        </section>
    );
  }

  export default NotFound;