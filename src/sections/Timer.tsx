import React, { useEffect, useState } from 'react'

export default function Timer() {
    const deadline: number = new Date('2025-04-29T00:00:00').getTime();

    interface TimeRemaining {
        timeLeft: number;
        days: number;
        hours: number;
        minutes: number;
        seconds: number;
    }

    const getTimeRemaining = (): TimeRemaining => {
        const now: number = new Date().getTime()
        const timeLeft: number = deadline - now;

        const days: number = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours: number = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
        const minutes: number = Math.floor((timeLeft / (1000 * 60)) % 60);
        const seconds: number = Math.floor((timeLeft / 1000) % 60);

        return { timeLeft, days, hours, minutes, seconds };
    }

    const [timer, setTimer] = useState<TimeRemaining>(getTimeRemaining());

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(getTimeRemaining());
        }, 1000);

        return () => clearInterval(interval); // Очистка інтервалу при видаленні компонента
    }, []);
    return (
        <section className="promotion">
            <div className="bgc_y" />
            <div className="container">
                <div className="promotion__text">
                    <div className="title">Акція для нових клієнтів!</div>
                    <div className="promotion__descr">
                        Ми цінуємо кожного клієнта і пропонуємо вам стати одним з них на дуже
                        вигідних умовах. Кожному, хто замовить доставку харчування на тиждень,
                        буде надано скидка в розмірі <span>20%!</span>
                        <br />
                        <br />
                        Акція закінчиться 20 травня в 00:00
                    </div>
                </div>
                <div className="promotion__timer">
                    <div className="title">Залишилось до кінця акції:</div>
                    <div className="timer">
                        <div className="timer__block">
                            <span id="days">{timer.days}</span>
                            днів
                        </div>
                        <div className="timer__block">
                            <span id="hours">{timer.hours}</span>
                            годин
                        </div>
                        <div className="timer__block">
                            <span id="minutes">{timer.minutes}</span>
                            хвилин
                        </div>
                        <div className="timer__block">
                            <span id="seconds">{timer.seconds}</span>
                            секунд
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
