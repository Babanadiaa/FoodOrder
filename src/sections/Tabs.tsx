import React, { useEffect, useState } from 'react'
import vegy from '../img/tabs/vegy.jpg'
import elite from '../img/tabs/elite.jpg'
import post from '../img/tabs/post.jpg'


const btnName = ['Фітнес', 'Преміум', 'Пісне', 'Збалансоване'];
const tabsBlock = [

    <div className="tabcontent" >
        <img src={vegy} alt="vegy" />
        <div className="tabcontent__descr">
            Меню "Фітнес" - це новий підхід до приготування страв: більше свіжих
            овочі і фруктів. Для людей, які цікавляться споротом; активних і
            здорових. Це абсолютно новий продукт з оптимальною ціною і високою
            якістю!
        </div>
    </div >
    ,


    <div className="tabcontent ">
        <img src={elite} alt="elite" />
        <div className="tabcontent__descr">
            Меню "Преміум" - ми використовуємо не тільки красивий дизайн упаковки,
            але й якісне приготування страв. Червона риба, морепродукти, фрукти -
            ресторанне меню без походу в ресторан!
        </div>
    </div>
    ,

    <div className="tabcontent ">
        <img src={post} alt="post" />
        <div className="tabcontent__descr ">
            Наше спеціальне "Пісне меню" - це ретельний підбір інградієнтів: повна
            відстуність продуктів тваринного походження. Повна гармонія з собою і
            природою в кожному елементі! Все буде Ом!
        </div>
    </div>
    ,

    <div className="tabcontent ">
        <img src={vegy} alt="vegy" />
        <div className="tabcontent__descr">
            Меню "Збалансоване" - це відповідність вашого раціону всім науковим
            рекомандаціям. Ми ретельно прораховуємо вашу потребність в б/ж/в і
            створюємо найкращі страви для вас.
        </div>
    </div>
]



export default function Tabs() {
    const [activeIndex, setActiveIndex] = useState(3);
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setActiveIndex((prev) => (prev - 1));
    //     }, 3000); // Перемикання кожні 3 секунди

    //     return () => clearInterval(interval); // Очищення при розмонтуванні компонента
    // })
    // console.log(activeIndex.length)

    return (
        <section className="preview">
            <div className="bgc_blue" />
            <div className="container">
                <div className="tabcontainer">
                    {tabsBlock[activeIndex]}
                    <div className="tabheader">
                        <h3>Виберіть стиль харчування</h3>
                        <div className="tabheader__items">
                            {
                                [...Array(4)].map((_, index) => (
                                    <div key={index}
                                        className={index === activeIndex ? "tabheader__item tabheader__item_active" : 'tabheader__item'}
                                        onClick={() => setActiveIndex(index)}
                                    >
                                        {btnName[index]}
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
                <div className="preview__life">Живи повним життям!</div>
            </div>
        </section >

    )
}
