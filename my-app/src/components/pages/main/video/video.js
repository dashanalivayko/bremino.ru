import React from 'react';
import './video.scss';

function Video() {
    return (
        <section className="video">
            {/* <div className="wrapper"> */}
                <iframe className="video" src="https://www.youtube.com/embed/2UXNdgC6O88" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            {/* </div> */}
        </section>
    );
  }

  export default Video;