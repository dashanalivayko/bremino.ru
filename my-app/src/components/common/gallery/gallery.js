import React from 'react';

import one from '../../../assets/one.png'

import './gallery.scss';



/* var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("gallery__slides");
        var dots = document.getElementsByClassName("gallery__img-demo");
        var captionText = document.getElementById("gallery__caption");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block"
        dots[slideIndex - 1].className += " active"
        captionText.innerHTML = dots[slideIndex - 1].alt
    } */



function Gallery () {
    return ( 
        <div className="gallery">
            <div className="gallery__slides">
                <div className="gallery__number">1</div>
                <img src={one} className="gallery__img" alt="logo" />
            </div>
            <div className="gallery__slides">
                <div className="gallery__number">2</div>
                <img src={one} className="gallery__img" alt="logo" />
            </div>
            <div className="gallery__slides">
                <div className="gallery__number">3</div>
                <img src={one} className="gallery__img" alt="logo" />
            </div>
            <div className="gallery__slides">
                <div className="gallery__number">4</div>
                <img src={one} className="gallery__img" alt="logo" />
            </div>
            <div className="gallery__slides">
                <div className="gallery__number">5</div>
                <img src={one} className="gallery__img" alt="logo" />
            </div>
            <div className="gallery__slides">
                <div className="gallery__number">6</div>
                <img src={one} className="gallery__img" alt="logo" />
            </div>
            <a className="gallery__prev" onclick="plusSlides(-1)">назад</a>
            <a className="galleyr__next" onclick="plusSlides(1)">далее</a>

            <div className="gallery__caption-container">
                <p Id="gallery__caption"></p>
            </div>

            <div className="gallery__row">
                <div className="gallery__column" onClick="currentSlide(1)">
                    <img src={one} className="gallery__img-demo cursor" alt="logo" />
                </div>
                <div className="gallery__column" onClick="currentSlide(2)">
                    <img src={one} className="gallery__img-demo cursor" alt="logo" />
                </div>
                <div className="gallery__column" onClick="currentSlide(3)">
                    <img src={one} className="gallery__img-demo cursor" alt="logo" />
                </div>
                <div className="gallery__column" onClick="currentSlide(4)">
                    <img src={one} className="gallery__img-demo cursor" alt="logo" />
                </div>
                <div className="gallery__column" onClick="currentSlide(5)">
                    <img src={one} className="gallery__img-demo cursor" alt="logo" />
                </div>
                <div className="gallery__column" onClick="currentSlide(6)">
                    <img src={one} className="gallery__img-demo cursor" alt="logo" />
                </div>
            </div>
        </div>
    );
}

export default Gallery;