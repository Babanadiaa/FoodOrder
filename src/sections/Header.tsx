import React, { useState } from 'react';
import Modal from './Modal';
import { useModal } from '../functions/useModal'; // Використовуємо кастомний хук

export default function Header() {
    const { isOpen, openModal, closeModal } = useModal(); // Використовуємо хук useModal
    const [formData, setFormData] = useState({ name: '', phone: '' }); // Стан для даних форми

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Дані форми:', formData);
        setFormData({ name: '', phone: '' }); // Очищаємо форму після відправки
        closeModal(); // Закриваємо модальне вікно
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

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
                    onClick={openModal} // Відкриваємо модальне вікно
                >
                    Зв'язатися з нами
                </button>
            </div>

            {/* Використовуємо універсальний компонент Modal */}
            <Modal isOpen={isOpen} onClose={closeModal}>
                <h2>Ми зв'яжемось з вами як найшвидше</h2>
                <form onSubmit={handleFormSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Ваше ім'я"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Ваш номер телефону"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                    />
                    <button type="submit" className="btn btn_dark">
                        Відправити
                    </button>
                </form>
            </Modal>
        </header>
    );
}
