import React from 'react';
import './reviews.scss';
import {img} from '../../../../assets/img';
import { BlueButton } from '../../../common/buttons/buttons';

function Reviews() {
    return (
        <section className="reviews">
            <div className="wrapper">
                <h3 className="reviews__title">клиенты о нас</h3>
                <div className="reviews__cards">
                    <img className="reviews__cards-item" src={img.review}></img>
                    <img className="reviews__cards-item" src={img.review}></img>
                    <img className="reviews__cards-item" src={img.review}></img>
                    <img className="reviews__cards-item" src={img.review}></img>
                    <img className="reviews__cards-item" src={img.review}></img>
                    <img className="reviews__cards-item" src={img.review}></img>
                </div>
                <BlueButton className="blue">оставить отзыв</BlueButton>
            </div>
        </section>
    );
  }

  export default Reviews;