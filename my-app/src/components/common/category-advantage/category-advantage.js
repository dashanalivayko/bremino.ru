import React from 'react';
import { img } from '../../../assets/img';
import { BlueButton } from '../buttons/buttons';
import './category-advantage.scss';

function CategoryAdvantage() {
    return (
    <div className="categoryAdvantage">
        <div className="wrapper-row wrapper">
            <div className="categoryAdvantage__points">
                <div className="categoryAdvantage__points-item">
                    <img className="categoryAdvantage__points-item__img" src={img.one} alt='one' />
                    <p className="categoryAdvantage__points-item__text">
                        <span>
                            Экономия средств
                        </span>
                        Отпадает необходимость в размещении товара на 
                        склад и в оплате всех связанных с этим издержек
                    </p>
                </div>
                <div className="categoryAdvantage__points-item">
                    <img className="categoryAdvantage__points-item__img" src={img.two} alt='two' />
                    <p className="categoryAdvantage__points-item__text">
                        <span>
                            существенное снижение рисков
                        </span>
                        Отпадает необходимость в размещении товара на 
                        склад и в оплате всех связанных с этим издержек
                    </p>
                </div>
                <div className="categoryAdvantage__points-item">
                    <img className="categoryAdvantage__points-item__img" src={img.three} alt='three' />
                    <p className="categoryAdvantage__points-item__text">
                        <span>
                            упрощение и оптимизация
                        </span>
                        Отпадает необходимость в размещении товара на 
                        склад и в оплате всех связанных с этим издержек
                    </p>
                </div>
                <div className="categoryAdvantage__points-item">
                    <img className="categoryAdvantage__points-item__img" src={img.four} alt='four' />
                    <p className="categoryAdvantage__points-item__text">
                        <span>
                            значительная экономия времени
                        </span>
                        Отпадает необходимость в размещении товара на 
                        склад и в оплате всех связанных с этим издержек
                    </p>
                </div>
                <div className="categoryAdvantage__points-item">
                    <img className="categoryAdvantage__points-item__img" src={img.five} alt='five' />
                    <p className="categoryAdvantage__points-item__text">
                        <span>
                            оказание дополнительных услуг
                        </span>
                        Отпадает необходимость в размещении товара на 
                        склад и в оплате всех связанных с этим издержек
                    </p>
                </div>
            </div>
            <div className="categoryAdvantage__description">
                <p className="categoryAdvantage__description-title">Преимущества маркировки</p>
                <p className="categoryAdvantage__description-text">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it 
                    to make a type specimen book.
                    <br />
                    <br />
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it 
                    to make a type specimen book.
                    <br />
                    <br />
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it 
                    to make a type specimen book.</p>
                <BlueButton>заказать</BlueButton>
            </div>
        </div>
    </div>
    )};

export default CategoryAdvantage;
