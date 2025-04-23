import React, { useEffect, useState } from 'react'
import left from '../icons/left.svg'
import right from '../icons/right.svg'
import pepper from '../img/slider/pepper.jpg'
import food from '../img/slider/food-12.jpg'
import oil from '../img/slider/olive-oil.jpg'
import paprika from '../img/slider/paprika.jpg'

const slides = [

    <img src={pepper} alt="pepper" />
    ,


    <img src={food} alt="food" />
    ,


    <img src={oil} alt="oil" />
    ,


    <img src={paprika} alt="paprika" />


]

export default function Offer() {
    const [slide, setSlide] = useState(2)
    useEffect(() => {
        if (slide == slides.length) {
            setSlide(0)
        } else if (slide < 0) {
            setSlide(slides.length - 1)
        };

        const interval = setInterval(() => {
            setSlide((prev) => (prev + 1) % slides.length);
        }, 3000); // Перемикання кожні 3 секунди

        return () => clearInterval(interval); // Очищення при розмонтуванні компонента


    }, [slide])
    return (
        <section className="offer">
            <div className="bgc_y" />
            <div className="container">
                <div className="offer__text">
                    <h2 className="title">Що ми можемо вам запропонувати?</h2>
                    <div className="offer__descr">
                        Наша основна ідея - це правильне харчування. Воно може бути простим і
                        смачним. Ми не просто доставка, ми сервіс! Ми взяли на себе розрахунки
                        БЖВ, калорійність, об'єми порцій і інші важливі, але нудні аспекти. Вам
                        залишається тільки корисна, ситна і правильна їжа, яку ми привозимо
                        прямо під двері.
                    </div>
                </div>
                <div className="offer__action">
                    <button data-modal="" className="btn btn_dark">
                        Зв'язатися з нами
                    </button>
                </div>
            </div>


            <div className="container">
                <div className="offer__advantages">
                    <h2>Швидко і корисно</h2>
                    <div className="offer__advantages-text">
                        Готування вдома займає багато сил, часу і нервів. Ми привозимо їжу
                        одразу на цілий день, і ти можеш діяти так, як тобі зручно, не
                        підлаштовуючись ні під кого, і бути впевненим в якості продукта!
                    </div>
                    <h2>Правильний раціон</h2>
                    <div className="offer__advantages-text">
                        Ми розробили спеціальне меню, де враховані всі нюанси правильного
                        харчування, від балансу БЖВ до їх приготування і дроблення раціону.
                    </div>
                </div>


                <div className="offer__slider">
                    <div className="offer__slider-counter">
                        <div className="offer__slider-prev"
                            onClick={() => { setSlide(slide - 1) }} >
                            <img src={left} alt="prev"
                            />
                        </div>
                        <span id="current">0{slide + 1}</span>/<span id="total">0{slides.length}</span>
                        <div className="offer__slider-next"
                            onClick={() => { setSlide(slide + 1) }}>
                            <img src={right} alt="next"
                            />
                        </div>
                    </div>
                    <div className="offer__slider-wrapper">
                        <div className="offer__slider-inner">
                            {slides.map((curr, index) => (
                                <div
                                    className={`offer__slide ${index === slide ? 'active' : ''}`}
                                    key={index}
                                    style={{ transform: `translateX(${slide * -100}%)`, transition: "transform 0.5s ease-in-out" }}>
                                    {/* {slides[index]} */}
                                    {curr}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>


        </section >

    )
}
