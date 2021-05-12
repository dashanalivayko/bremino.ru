import React from 'react';
import './partners.scss';
import {img} from '../../../assets/img';

function Partners() {
    return (
        <section className="partners">
            <div className="wrapper">
                <h3 className="partners__title">нам доверяют</h3>
                <div className="partners__cards">
                    <a href="#"  className="partners__cards-link">
                        <img className="partners__cards-item" src={img.tels}></img>
                    </a>
                    <a href="#" className="partners__cards-link">
                        <img className="partners__cards-item" src={img.cargodc}></img>
                    </a>
                    <a href="#" className="partners__cards-link">
                        <img className="partners__cards-item" src={img.craftrans}></img>
                    </a>
                    <a href="#" className="partners__cards-link">
                        <img className="partners__cards-item" src={img.transitservice}></img>
                    </a>
                    <a href="#" className="partners__cards-link">
                        <img className="partners__cards-item" src={img.gec}></img>
                    </a>
                    <a href="#" className="partners__cards-link">
                        <img className="partners__cards-item" src={img.jenty}></img>
                    </a>
                    <a href="#" className="partners__cards-link">
                        <img className="partners__cards-item" src={img.belviat}></img>
                    </a>
                    <a href="#" className="partners__cards-link">
                        <img className="partners__cards-item" src={img.alesta}></img>
                    </a>
                </div>
            </div>
        </section>
    );
  }

  export default Partners;