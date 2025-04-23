import React, { useState, useEffect } from 'react'


export default function Calculator() {

    const [gender, setGender] = useState<"female" | "male">(() =>
        (localStorage.getItem('gender') as 'female' | 'male') || 'male');
    const [height, setHeight] = useState<number>(0);
    const [weight, setWeight] = useState<number>(0);
    const [age, setAge] = useState<number>(0);
    const [activity, setActivity] = useState<number>(() =>
        Number(localStorage.getItem('activity') as 1.2 | 1.375 | 1.55 | 1.725) || 1.55);
    const [calories, setCalories] = useState<number | string>("_____");
    const [ageError, setAgeError] = useState<boolean>(false);
    const [weightError, setWeightError] = useState<boolean>(false);
    const [heightError, setHeightError] = useState<boolean>(false);

    useEffect(() => localStorage.setItem('gender', gender), [gender]);
    useEffect(() => localStorage.setItem('activity', activity), [activity]);
    useEffect(() => {
        if (!age || !weight || !height) {
            setCalories('______')
        }
    }, [height, weight, age]);

    useEffect(() => {
        setAgeError(isNaN(age) || age < 0);
        setWeightError(isNaN(weight) || weight < 0);
        setHeightError(isNaN(height) || height < 0);
    }, [age, weight, height]);


    useEffect(() => {
        if (weight > 0 && height > 0 && age > 0) {
            const result =
                gender === "female"
                    ? Math.round((447.6 + 9.2 * weight + 3.1 * height - 4.3 * age) * activity)
                    : Math.round((88.36 + 13.4 * weight + 4.8 * height - 5.7 * age) * activity);
            setCalories(result);
        }
    }, [gender, height, weight, age, activity]);


    return (
        <section className="calculating">
            <div className="container">
                <h2 className="title">Pозрахуємо вашу потребу в калоріях</h2>
                <div className="calculating__field">
                    <div className="calculating__subtitle">Ваша стать</div>
                    <div className="calculating__choose" id="gender">
                        <div
                            className={`calculating__choose-item ${gender === 'female' ? 'calculating__choose-item_active' : ''}`}
                            onClick={() => setGender('female')}
                        >
                            Жінка
                        </div>
                        <div
                            className={`calculating__choose-item ${gender === 'male' ? 'calculating__choose-item_active' : ''}`}
                            onClick={() => setGender('male')}
                        >
                            Чоловік
                        </div>
                    </div>
                    <div className="calculating__subtitle">Ваша конституція</div>
                    <div className="calculating__choose calculating__choose_medium">
                        <input
                            type="text"
                            // inputMode='numeric'
                            // pattern='[0-9]*'
                            placeholder="Введіть ріст"
                            className={`calculating__choose-item ${heightError ? 'error' : ''}`}
                            onChange={(e) => setHeight(e.target.value || 0)}
                        />
                        <input
                            type="text"
                            inputMode='numeric'
                            pattern='[0-9]*'
                            placeholder="Введіть вагу"
                            className={`calculating__choose-item ${weightError ? 'error' : ''}`}
                            onChange={(e) => setWeight(e.target.value || 0)}
                        />
                        <input
                            type="text"
                            inputMode='numeric'
                            pattern='[0-9]*'
                            placeholder="Введіть вік"
                            className={`calculating__choose-item ${ageError ? 'error' : ''}`}
                            onChange={(e) => setAge(e.target.value || 0)}
                        />
                    </div>
                    <div className="calculating__subtitle">
                        Виберіть вашу фізичну активність
                    </div>
                    <div className="calculating__choose calculating__choose_big">
                        <div data-ratio="1.2"
                            onClick={(e) => setActivity(Number(e.currentTarget.dataset.ratio))}
                            className={`calculating__choose-item ${activity === 1.2 ? 'calculating__choose-item_active ' : ''}`}
                        >
                            Низька активність
                        </div>
                        <div
                            data-ratio="1.375"
                            onClick={(e) => setActivity(Number(e.currentTarget.dataset.ratio))}
                            className={`calculating__choose-item ${activity === 1.375 ? 'calculating__choose-item_active ' : ''}`}

                        >
                            Невисока активність
                        </div>
                        <div data-ratio="1.55"
                            onClick={(e) => setActivity(Number(e.currentTarget.dataset.ratio))}
                            className={`calculating__choose-item ${activity === 1.55 ? 'calculating__choose-item_active ' : ''}`}

                        >
                            Помірна активність
                        </div>
                        <div data-ratio="1.725"
                            onClick={(e) => setActivity(Number(e.currentTarget.dataset.ratio))}
                            className={`calculating__choose-item ${activity === 1.725 ? 'calculating__choose-item_active ' : ''}`}

                        >
                            Висока активність
                        </div>
                    </div>
                    <div className="calculating__divider" />
                    <div className="calculating__total">
                        <div className="calculating__subtitle">Ваша добова норма калорій:</div>
                        <div className="calculating__result">
                            <span>{calories}</span> ккал
                        </div>
                    </div>
                </div>
            </div>
        </section >

    )

    // const calculator = () => {
    //     const calcResult: HTMLElement | null = document.querySelector('.calculating__result span');

    //     let sex: string, height: number | undefined, weight: number | undefined, age: number | undefined, ratio: number;

    //     if (localStorage.getItem('sex')) {
    //         sex = localStorage.getItem('sex') as string;
    //     } else {
    //         sex = 'female';
    //         localStorage.setItem('sex', 'female');
    //     };

    //     if (localStorage.getItem('ratio')) {
    //         ratio = parseFloat(localStorage.getItem('ratio') as string);
    //     } else {
    //         ratio = 1.375;
    //         localStorage.setItem('ratio', '1.375');
    //     };

    //     function initLocalSettings(selector: string, activeClass: string): void {
    //         const elements: NodeListOf<HTMLElement> = document.querySelectorAll(selector);

    //         elements.forEach(elem => {
    //             elem.classList.remove(activeClass);
    //             if (elem.getAttribute('id') === localStorage.getItem('sex')) {
    //                 elem.classList.add(activeClass);
    //             };
    //             if (elem.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
    //                 elem.classList.add(activeClass);
    //             };
    //         });
    //     };

    //     initLocalSettings('#gender div', 'calculating__choose-item_active');
    //     initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');

    //     function calcTotal(): void {
    //         if (!sex || !height || !weight || !age || !ratio) {
    //             if (calcResult) calcResult.textContent = '____';
    //             return;
    //         };

    //         if (sex === 'female') {
    //             if (calcResult) calcResult.textContent = Math.round((447.6 + (9.2 * weight!) + (3.1 * height!) - (4.3 * age!)) * ratio).toString();
    //         } else {
    //             if (calcResult) calcResult.textContent = Math.round((88.36 + (13.4 * weight!) + (4.8 * height!) - (5.7 * age!)) * ratio).toString();
    //         };
    //     };

    //     calcTotal();

    //     function getStaticInfo(selector: string, activeClass: string): void {
    //         const elements: NodeListOf<HTMLElement> = document.querySelectorAll(selector);

    //         elements.forEach(elem => {
    //             elem.addEventListener('click', (e) => {
    //                 const target = e.target as HTMLElement;
    //                 if (target.getAttribute('data-ratio')) {
    //                     ratio = parseFloat(target.getAttribute('data-ratio') as string);
    //                     localStorage.setItem('ratio', target.getAttribute('data-ratio') as string);
    //                 } else {
    //                     sex = target.getAttribute('id') as string;
    //                     localStorage.setItem('sex', target.getAttribute('id') as string);
    //                 };

    //                 elements.forEach(elem => {
    //                     elem.classList.remove(activeClass);
    //                 });
    //                 target.classList.add(activeClass);

    //                 calcTotal();
    //             });
    //         });
    //     };

    //     getStaticInfo('#gender div', 'calculating__choose-item_active');
    //     getStaticInfo('.calculating__choose_big div', 'calculating__choose-item_active');

    //     function getDynamicInfo(selector: string): void {
    //         const input: HTMLInputElement | null = document.querySelector(selector);

    //         input?.addEventListener('input', () => {

    //             if (input.value.match(/\D/g)) {
    //                 input.style.border = '1px solid red';
    //             } else {
    //                 input.style.border = 'none';
    //             };

    //             switch (input.getAttribute('id')) {
    //                 case 'height':
    //                     height = +input.value;
    //                     break;
    //                 case 'weight':
    //                     weight = +input.value;
    //                     break;
    //                 case 'age':
    //                     age = +input.value;
    //                     break;
    //             };

    //             calcTotal();
    //         });
    //     };

    //     getDynamicInfo('#height');
    //     getDynamicInfo('#weight');
    //     getDynamicInfo('#age');
    // };



}
