import React from 'react';
import Banner from '../../../common/banner/banner';
import Header from '../../../common/header/header';
import Footer from '../../../common/footer/footer';
import { img } from '../../../../assets/img';
import './lablingdm.scss';
import Advantages from '../../../common/advantages/advantages';
import Partners from '../../../common/partners/partners';
import CategoryAbout from '../../../common/category-about/category-about';
import CategoryAdvantage from '../../../common/category-advantage/category-advantage';
import HowWeWork from '../../../common/howWeWork/howWeWork';
import { CallBanner } from '../../../common/callBanner/callBanner';
import SupplyForDM from './SupplyForDM/SupplyForDM';
import Additional from '../../../common/additional/additional';
import TarrifForDM from './tarrifForDM/tarrif';

function ShoesDM() {
    return (
        <div>
            <Header />
            <p className="head-title">маркировка обуви</p>
            <CategoryAbout cards={false} src={img.lbdm} video={"https://www.youtube.com/watch?v=2UXNdgC6O88&ab_channel=BreminoGroup"}
            title={'осуществляем:'} subtitle='маркировку товаров с нанесением стикера на розничную упаковку;
            маркировку товаров без розничной упаковки с нанесением стикера на изделие или ярлык;
            маркировку товара с навесом ярлыков;
            маркировку товаров с установкой антикражных датчиков;
            иные варианты обработки товаров с последующей маркировкой.'>
            <p> <br/>Код ТН ВЭД ЕАЭС Обувных товаров, подлежащих маркировке:
            <span className="numbers"> <br/>6401, 6402, 6403, 6404, 6405 </span></p>
            </CategoryAbout>
            <TarrifForDM />
            {/* <SupplyForDM/> */}
            <CategoryAdvantage 
                               onetitle={'Стоимость ниже'}
                               one={'Стоимость маркировки сопоставимо ниже, чем на складах Европы'}
                               twotitle={'Экономия средств'}
                               two={'Маркировка на территории ЕАЭС (стоимость услуг не включается в таможенную стоимость)'}
                            //    threetitle={'заголовок'}
                               three={'Среднее время маркировки 30 тыс ед. до 24 часов (возможность маркировки до 15 партий товара единовременно)'}
                            //    fourtitle={'заголовок'}
                               four={'Комплексная услуга «под ключ»'}
                            //    fivetitle={'заголовок'}
                               five={'Бестранзитная технология (ускоренное прохождение границы с Европейским союзом)*'}
                            //    sixtitle={'заголовок'}
                               six={'Маркировка на складе временного хранения'}
                            //    seventitle={'заголовок'}
                               seven={'Наличие всего необходимого оборудования для маркировки'}
                            //    eighttitle={'заголовок'}
                               eight={'Наличие всего необходимого оборудования для маркировки'}
                               description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                               when an unknown printer took a galley of type and scrambled it 
                               to make a type specimen book.
                               Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                               when an unknown printer took a galley of type and scrambled it 
                               to make a type specimen boo.
                               Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                               when an unknown printer took a galley of type and scrambled it 
                               to make a type specimen book.`} 
                               add={`*терминалы, расположенные в примыкании к границе с Республикой Польша`}/>                          
            <Additional/>
            <Footer />
        </div>
    );
}

export default ShoesDM;


