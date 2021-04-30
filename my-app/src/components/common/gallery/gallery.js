import React from 'react';

/* import orsha-mlic.png from '../../../assets/orsha-mlic.png'; */


import './gallery.scss';







function Gallery() {
    return (
        <div className="gallery">
            <div className="wrapper">
                <div className="gallery__container">
                    <div className="gallery__slider">
                        <div className="gallery__slider-wrapper">
                            <div className="gallery__slider-item">
                                <div className="gallery__slider-img">
                                    
                                    <h3 className="gallery__slider-title">
                                        Бремино-Орша
                                    </h3>
                                </div>
                            </div>

                            <div className="gallery__slider-item">
                                <div className="gallery__slider-img">
                                    <h3 className="gallery__slider-title">
                                        Бремино-Орша
                                    </h3>
                                </div>
                            </div>
                            <div className="gallery__slider-item">
                                <div className="gallery__slider-img">
                                    <h3 className="gallery__slider-title">
                                        Бремино-Орша
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="gallery__slider-container">
                            <a className="gallery__slider-control gallery__slider-control--left" href="#" role="button">назад</a>
                            <a className="gallery__slider-control gallery__slider-control--right" href="#" role="button">далее</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Gallery;