import React from 'react';
import { Link } from 'react-router-dom';
import './buttons.scss';

function TransparentButton(props) {
    return (
      <Link to={props.to}>
          <button className={`transparent ${props.className}`}>
              <p className="transparent-text">{props.children}</p>
          </button>
       </Link>
    );
  }

  function TransparentBlueButton(props) {
    return (
      <Link to={props.to}>
          <button className={`transparentBlue ${props.className}`}>
              <p className="transparentBlue-text">{props.children}</p>
          </button>
       </Link>
    );
  }

  function BlueButton(props) {
    return (
        <Link className={props.className} to={props.to}>
          <button className={`blue ${props.className}`}>
              <p className="blue-text">{props.children}</p>
          </button>
        </Link>
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

  function ReadExactlyButton(props) {
    return (
      <Link className = "borded" to={props.to}>
        <button className="readExactly">
            <p className="readExactly-text">{props.children}</p>
        </button>
      </Link>
    );
  }

  export {TransparentButton, BlueButton, ReadMoreButton, TransparentBlueButton, ReadExactlyButton}