import React, { useEffect, useState } from 'react';
interface MenuItem {
    id: string;
    img: string;
    altimg: string;
    title: string;
    descr: string;
    price: number;
}


export default function Menuu() {
    const [menuItems, setMenuItems] = useState<MenuItem[] | null>(null);

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const response = await fetch('http://localhost:3000/menu'); // URL JSON сервера
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }
                const data = await response.json();
                setMenuItems(data); // Беремо лише масив menu
            } catch (error) {
                console.error('Error fetching menu:', error);
                setMenuItems([]); // Щоб не було undefined
            }
        };

        fetchMenu();
    }, []);

    return (
        <section className="menu">
            <h2 className="title">Наше меню на день</h2>
            <div className="menu__field">
                <div className="container">
                    {menuItems === null ? <p>Завантаження...</p> : null}
                    {menuItems?.map((item) => (
                        <div className="menu__item" key={item.id}>
                            <img src={item.img} alt={item.altimg} />
                            <h3 className="menu__item-subtitle">{item.title}</h3>
                            <div className="menu__item-descr">{item.descr}</div>
                            <div className="menu__item-divider"></div>
                            <div className="menu__item-price">
                                <div className="menu__item-cost">Ціна:</div>
                                <div className="menu__item-total">
                                    <span>{item.price * 42}</span> грн/день
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
