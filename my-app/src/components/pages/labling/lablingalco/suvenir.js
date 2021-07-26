import React from 'react';
import Header from '../../../common/header/header';
import Footer from '../../../common/footer/footer';
import { img } from '../../../../assets/img';
import './lablingalco.scss';
import CategoryAbout from '../../../common/category-about/category-about';
import CategoryAdvantage from '../../../common/category-advantage/category-advantage';
import Additional from '../../../common/additional/additional';
import Tarrif from '../tarrif/tarrif';
import { ProductCard } from '../../../common/cards/cards';

function Suvenir() {
    return (
        <div>
            <Header />
            <p className="head-title">маркировка товаров молочной промышленности</p>
            <CategoryAbout cards={false} src={img.lablingDM} video={"https://www.youtube.com/watch?v=2UXNdgC6O88&ab_channel=BreminoGroup"}
            title={'осуществляем:'} subtitle='
            маркировку товаров с нанесением стикера на розничную упаковку;
            маркировку товаров без розничной упаковки с нанесением стикера на изделие или ярлык;
            маркировку товара с навесом ярлыков;
            маркировку товаров с установкой антикражных датчиков;
            иные варианты обработки товаров с последующей маркировкой.
                        маркировку товара с навесом ярлыков.'>
            <p> <br/>Код ТН ВЭД ЕАЭС товаров молочной промышленности, подлежащих маркировке: 
            <span className="numbers"> <br/>номера</span></p>
            </CategoryAbout>
            <Tarrif>
               <ProductCard title={'Комплексная услуга по маркировке товаров кодом DataMatrix на СВХ и ТС'} subtitle={'10₽ / ед.'} src={img.milk}>МПЛК “Бремино-Орша” / ТЛЦ “Бремино-Брузги” / ТЛЦ “Бремино-Берестовица”</ProductCard>
               <p style={{width: '1070px'}} className="sostav">** Состав услуги: <br/> <br/> Размещение ТС с грузом  
                с предоставлением места хранения в день размещения с уведомлением таможенных органов (хранение на ТС бесплатно в 
                первые сутки до получения разрешения таможенного органа на убытие)| Погрузка, выгрузка и перемещение | Приемка товара 
                на склад | Хранение товаров на складе 1 сутки | Хранение порожних ТС 1 сутки | Упаковка, сортировка и переупаковка | 
                Упаковка товара скотч-пленкой в коробе | Организация грузового места (укладка коробов или иных внутритарных мест на паллету) | 
                Упаковка товара стрейч-пленкой на паллете | Изготовление макета печатной формы | Изготовление термотрансферных / 
                полипропиленовых этикеток | Маркировка товара и валидация кода DataMatrix | отчет о наненсении кодов идентификации.
<               br/><br/><b>Коды маркировки предоставляются заказчиком. На упаковке товара присутствуют коды EAN/GTIN, нанесенные производителем</b></p>
            </Tarrif>
            <CategoryAdvantage 
                            //    onetitle={'Стоимость ниже'}
                               one={'Стоимость маркировки сопоставимо ниже, чем на складах Европы'}
                            //    twotitle={'Экономия средств'}
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
                               description={`
                               С начала 2019 года наша компания предлагает клиентам возможность осуществления маркировки Дата матрикс кодами согласно требованиям российского законодательства.
                               На сегодняшний день нашей компанией промаркировано уже более 300 тыс. изделий Дата Матрикс кодами. 
                               Компания использует собственное программное обеспечение, которое позволяет значительно упростить и ускорить процесс маркировки, мы можем по согласованию с клиентами вносить необходимые изменения и адаптировать программу, в том числе для целей создания разнообразных шаблонов этикеток с последующим выводом их на печать на собственном оборудовании. В индивидуальных случаях могут быть рассмотрены и варианты внедрения ПО клиента в рабочий процесс для соблюдения специфических требований по обработки товаров.
                               Наши комплексы также интегрированы в систему маркировки «Честный знак» в качестве сервис-провайдеров, что позволяет нам оптимизировать процесс передачи коды и механизм работы с клиентом.
                               `} 
                               add={`*терминалы, расположенные в примыкании к границе с Республикой Польша`}/>                          
            <Additional/>
            <Footer />
        </div>
    );
}

export default Suvenir;


