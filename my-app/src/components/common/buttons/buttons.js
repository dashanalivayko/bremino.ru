import React from 'react';
import { Link } from 'react-router-dom';
import './buttons.scss';

function TransparentButton(props) {
    return (
      <div className={props.className}>
          <button className="transparent">
              <p className="transparent-text">{props.children}</p>
          </button>
       </div>
    );
  }

  function BlueButton(props) {
    return (
      <div className={props.className}>
        <button className="blue">
            <p className="blue-text">{props.children}</p>
        </button>
       </div>
    );
  }

  function ReadMoreButton(props) {
    const newsId = "12793719823"
    return (
      <Link className = "borded" to={`/news/${newsId}`} exact>
        <button className="readMore">
            <p className="readMore-text">{props.children}</p>
        </button>
      </Link>
    );
  }

  export {TransparentButton, BlueButton, ReadMoreButton}