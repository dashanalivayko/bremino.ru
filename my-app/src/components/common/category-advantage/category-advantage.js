import React from 'react';
import { img } from '../../../assets/img';
import { BlueButton } from '../buttons/buttons';
import './category-advantage.scss';

function CategoryAdvantage(props) {
    return (
    <div className="categoryAdvantage">
        <div className="wrapper-row wrapper">
            <div className="categoryAdvantage__points">
                <div className="categoryAdvantage__points-item">
                    <p className="categoryAdvantage__points-item__img" >1</p>
                    <p className="categoryAdvantage__points-item__text">
                        <span>
                        {props.onetitle}
                        </span>
                        {props.one}
                    </p>
                </div>
                <div className="categoryAdvantage__points-item">
                    <p className="categoryAdvantage__points-item__img" >2</p>
                    <p className="categoryAdvantage__points-item__text">
                        <span>
                        {props.twotitle}
                        </span>
                        {props.two}
                    </p>
                </div>
                <div className="categoryAdvantage__points-item">
                    <p className="categoryAdvantage__points-item__img">3</p>
                    <p className="categoryAdvantage__points-item__text">
                        <span>
                        {props.threetitle}
                        </span>
                        {props.three}
                    </p>
                </div>
                <div className="categoryAdvantage__points-item">
                    <p className="categoryAdvantage__points-item__img">4</p>
                    <p className="categoryAdvantage__points-item__text">
                        <span>
                        {props.fourtitle}
                        </span>
                        {props.four}
                    </p>
                </div>
                <div className="categoryAdvantage__points-item">
                    <p className="categoryAdvantage__points-item__img">5</p>
                    <p className="categoryAdvantage__points-item__text">
                        <span>
                        {props.fivetitle}
                        </span>
                        {props.five}
                    </p>
                </div>
                <div className="categoryAdvantage__points-item">
                    <p className="categoryAdvantage__points-item__img">6</p>
                    <p className="categoryAdvantage__points-item__text">
                        <span>
                        {props.sixtitle}
                        </span>
                        {props.six}
                    </p>
                </div>
                <div className="categoryAdvantage__points-item">
                    <p className="categoryAdvantage__points-item__img">7</p>
                    <p className="categoryAdvantage__points-item__text">
                        <span>
                        {props.seventitle}
                        </span>
                        {props.seven}
                    </p>
                </div>
                <div className="categoryAdvantage__points-item">
                    <p className="categoryAdvantage__points-item__img">8</p>
                    <p className="categoryAdvantage__points-item__text">
                        <span>
                        {props.eighttitle}
                        </span>
                        {props.eight}
                    </p>
                </div>
            </div>
            <div className="categoryAdvantage__description">
                <p className="categoryAdvantage__description-title">Преимущества маркировки</p>
                <p className="categoryAdvantage__description-text">
                    {props.description}</p>
                <p className="categoryAdvantage__description-text">{props.add}</p>
                <BlueButton>заказать</BlueButton>
            </div>
        </div>
    </div>
    )};

export default CategoryAdvantage;
