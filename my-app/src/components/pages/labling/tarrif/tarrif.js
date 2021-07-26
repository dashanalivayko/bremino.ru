import React from 'react';
import '../labling.scss';


function Tarrif(props) {

   const title =  props.title || 'тариф на маркировку';
    return (
        <section className="tarrif">
            <div className="wrapper">
    <h3 className="tarrif__title">{title}</h3>
                <div className="tarrif__cards">
                    {props.children}
                </div>
            </div>
        </section>
    );
  }

  export default Tarrif;