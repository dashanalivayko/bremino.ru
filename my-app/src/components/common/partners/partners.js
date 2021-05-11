import React from 'react';
import './partners.scss';
import {img} from '../../../assets/img';

function Partners() {
    return (
        <section className="partners">
            <div className="wrapper">
                <h3 className="partners__title">нам доверяют</h3>
                <div className="partners__cards">
                    <img className="partners__cards-item" src={img.advantages}></img>
                    <img className="partners__cards-item" src={img.advantages}></img>
                    <img className="partners__cards-item" src={img.advantages}></img>
                    <img className="partners__cards-item" src={img.advantages}></img>
                    <img className="partners__cards-item" src={img.advantages}></img>
                    <img className="partners__cards-item" src={img.advantages}></img>
                    <img className="partners__cards-item" src={img.advantages}></img>
                    <img className="partners__cards-item" src={img.advantages}></img>
                    <img className="partners__cards-item" src={img.advantages}></img>
                    <img className="partners__cards-item" src={img.advantages}></img>
                    <img className="partners__cards-item" src={img.advantages}></img>
                    <img className="partners__cards-item" src={img.advantages}></img>
                    <img className="partners__cards-item" src={img.advantages}></img>
                </div>
            </div>
        </section>
    );
  }

  export default Partners;