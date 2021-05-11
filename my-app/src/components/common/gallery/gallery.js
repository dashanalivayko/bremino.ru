import React from 'react';
import './gallery.scss';

import { img } from '../../../assets/img';










function Gallery() {
    return (
        <div className="gallery">
            <div className="wrapper">
                <div className="gallery__list">
                    <div className="gallery__list-pic">
                        <div className="gallery__list-block">
                            <div className="gallery__list-item">
                                <img src={img.berestovitcatlc} className="gallery__list-photo col-bg" alt="photo" />
                                <div className="gallery__list-box">
                                    <img src={img.berestovitcatlc} className="gallery__list-photo col-sm" alt="photo" />
                                    <img src={img.berestovitcatlc} className="gallery__list-photo col-sm" alt="photo" />
                                </div>
                            </div>
                            <div className="gallery__list-item">
                                <img src={img.berestovitcatlc} className="gallery__list-photo col-sm" alt="photo" />
                                <img src={img.berestovitcatlc} className="gallery__list-photo col-md" alt="photo" />
                            </div>
                        </div>


                    </div>

                    <div className="gallery__list-pic">
                        <img src={img.berestovitcatlc} className="gallery__list-photo col-sq" alt="photo" />
                        <img src={img.berestovitcatlc} className="gallery__list-photo col-lg" alt="photo" />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Gallery;