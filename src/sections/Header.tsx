import React, { useState } from 'react';
import Modal from './Modal';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false); // Стан для керування відкриттям модалки

    return (
        <header className="header">
            <div className="header__left-block">
                <div className="header__logo">
                    <img src="/path/to/logo.svg" alt="Логотип" />
                </div>
                <nav className="header__links">
                    <a href="#" className="header__link">
                        Доставка харчування
                    </a>
                    <a href="#" className="header__link">
                        Другий пункт
                    </a>
                </nav>
            </div>
            <div className="header__right-block">
                <button
                    className="btn btn_white"
                    onClick={() => setIsOpen(true)}  // Відкриваємо модалку при кліку
                >
                    Зв'язатися з нами
                </button>
            </div>

            {/* Передаємо isOpen та setIsOpen в Modal */}
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
        </header>
    );
}
