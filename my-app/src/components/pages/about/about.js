import React from 'react';
import Banner from '../../common/banner/banner'

import './about.scss';


function About() {
    return (
        <div>
            <Banner 
            contentVideo={<iframe width="560" height="315" src="https://www.youtube.com/embed/2UXNdgC6O88" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>}
            contentName={'О компании'}
                    contentTitle={'ведущий логистический оператор'}>
                       Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text  </Banner>
        </div>
    );
  }
  
  export default About;