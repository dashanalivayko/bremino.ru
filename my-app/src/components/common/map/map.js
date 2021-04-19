import React from 'react';
import './map.scss';

function Map() {
    return (
        <div>
            <div className="map">
                <div className="wrapper">
                    <h1 className="map__title">
                        Наша логистическая сеть
                    </h1>
                </div>
                <iframe className="map__item" src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa4c8d4ad6227120b6b3aefc94f4a794057f604427afddf84a8b7139d5ec55c3e&amp;source=constructor" width="100%" height="500" frameborder="0"></iframe>
            </div>
        </div>
    );
}

export default Map;