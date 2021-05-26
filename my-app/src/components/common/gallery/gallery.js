import React from 'react';
import './gallery.scss';

import { img } from '../../../assets/img';
import { TransparentBlueButton } from '../buttons/buttons';


function Gallery() {
    return (
        < section id="gallery" >
            <div className="wrapper">
                <div className="gallery">
                    <div className="gallery__item-one">
                        <div className="gallery__item-desc">
                            <img src={img.berestovitcatlc} className="gallery__photo" alt="photo" />
                            <h2 className="gallery__item-title">
                                МПЛК "Бремино-Орша"
                            </h2>
                        </div>
                        <div className="gallery__item-desc">
                            <img src={img.berestovitcatlc} className="gallery__photo" alt="photo" />
                            <h2 className="gallery__item-title">
                                МПЛК "Бремино-Орша"
                            </h2>
                        </div>
                        <div className="gallery__item-desc">
                            <img src={img.berestovitcatlc} className="gallery__photo" alt="photo" />
                            <h2 className="gallery__item-title">
                                МПЛК "Бремино-Орша"
                            </h2>
                        </div>
                        <div className="gallery__item-desc">
                            <img src={img.berestovitcatlc} className="gallery__photo" alt="photo" />
                            <h2 className="gallery__item-title">
                                МПЛК "Бремино-Орша"
                            </h2>
                        </div>
                        <div className="gallery__item-desc">
                            <img src={img.berestovitcatlc} className="gallery__photo" alt="photo" />
                            <h2 className="gallery__item-title">
                                МПЛК "Бремино-Орша"
                            </h2>
                        </div>
                        <div className="gallery__item-desc">
                            <img src={img.berestovitcatlc} className="gallery__photo" alt="photo" />
                            <h2 className="gallery__item-title">
                                МПЛК "Бремино-Орша"
                            </h2>
                        </div>
                    </div>
                    <TransparentBlueButton>Показать еще</TransparentBlueButton>
                </div>
            </div>
        </section >
    );
}

export default Gallery;