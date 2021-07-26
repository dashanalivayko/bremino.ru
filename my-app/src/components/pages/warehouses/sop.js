import React from 'react';
import Banner from '../../common/banner/banner';
import Header from '../../common/header/header';
import Footer from '../../common/footer/footer';
import { img } from '../../../assets/img';
import './warehouses.scss';
import Advantages from '../../common/advantages/advantages';
import Partners from '../../common/partners/partners';
import CategoryAbout from '../../common/category-about/category-about';
import CategoryAdvantage from '../../common/category-advantage/category-advantage';
import HowWeWork from '../../common/howWeWork/howWeWork';
import { CallBanner } from '../../common/callBanner/callBanner';
import Supply from '../../pages/labling/supply/supply';
import { ProductCard } from '../../common/cards/cards';
import Tarrif from '../labling/tarrif/tarrif';

function WarehouseSOP() {
    return (
        <div>
            <Header />
            <Banner
                contentVideo={<img src={img.labeldm} alt='img' />}
                contentName={'DataMatrix маркировка'}
                contentTitle={'быстро качественно выгодно'}>
                Маркировка товаров DataMatrix кодами для импортеров в Российскую Федерацию и Республику Беларусь.
            </Banner>
            <CategoryAbout cards={false} src={img.lbdm} video={"https://www.youtube.com/watch?v=2UXNdgC6O88&ab_channel=BreminoGroup"}
            title={'самое сложное мы готовы взять на себя'} subtitle={'ООО «Бремино групп» оказывает широкий комплекс услуг по маркировке продукции, от оклейки готовыми этикетками заказчика до получения кодов маркировки за импортера, разработки индивидуального макета этикетки и организации доставки отмаркированной продукции заказчику. Опыт, квалификация сотрудников и надежные партнерские отношения позволяют предлагать клиентам разнообразные готовые решения для их бизнеса, в том числе организовывать совместно с заказчиком проработку новых направлений или товарных групп.'}/>
            <CategoryAdvantage 
                              //  onetitle={'Стоимость ниже'}
                               one={'Стоимость маркировки сопоставимо ниже, чем на складах Европы'}
                              //  twotitle={'Экономия средств'}
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
            <HowWeWork />
            <Tarrif title='тариф на хранение'>
                <ProductCard title={'Комплексная услуга по маркировке товаров кодом DataMatrix на СВХ и ТС'} subtitle={'10₽ / ед.'} src={img.duhi}>МПЛК “Бремино-Орша” / ТЛЦ “Бремино-Брузги” / ТЛЦ “Бремино-Берестовица”</ProductCard>
                <ProductCard className="row-reverse" title={'Комплексная услуга по маркировке товаров кодом DataMatrix на СВХ и ТС'} subtitle={'10₽ / ед.'} src={img.duhi}>МПЛК “Бремино-Орша” / ТЛЦ “Бремино-Брузги” / ТЛЦ “Бремино-Берестовица”</ProductCard>
                <ProductCard title={'Комплексная услуга по маркировке товаров кодом DataMatrix на СВХ и ТС'} subtitle={'10₽ / ед.'} src={img.duhi}>МПЛК “Бремино-Орша” / ТЛЦ “Бремино-Брузги” / ТЛЦ “Бремино-Берестовица”</ProductCard>
                <ProductCard className="row-reverse" title={'Комплексная услуга по маркировке товаров кодом DataMatrix на СВХ и ТС'} subtitle={'10₽ / ед.'} src={img.duhi}>МПЛК “Бремино-Орша” / ТЛЦ “Бремино-Брузги” / ТЛЦ “Бремино-Берестовица”</ProductCard>
            </Tarrif>
            <Partners />
            <CallBanner />
            <Advantages />
            <Footer />
        </div>
    );
}

export default WarehouseSOP;


