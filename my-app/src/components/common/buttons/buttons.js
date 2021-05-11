import React from 'react';
import './buttons.scss';

function TransparentButton(props) {
    return (
       <button className="transparent">
           <p className="transparent-text">{props.children}</p>
       </button>
    );
  }

  function BlueButton(props) {
    return (
       <button className="blue">
           <p className="blue-text">{props.children}</p>
       </button>
    );
  }

  export {TransparentButton, BlueButton}