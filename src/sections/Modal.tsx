import React, { useState } from 'react';
import HandleSubmit from '../functions/HandleSubmit';

interface ModalProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setFormData: React.Dispatch<React.SetStateAction<{ name: string; phone: string }>>;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Modal({
    isOpen,
    setIsOpen,
    setFormData,
    setIsModalOpen
}: ModalProps) {
    if (!isOpen) return null; // Якщо модалка не відкрита, не рендеримо

    const [localFormData, setLocalFormData] = useState({
        name: '',
        phone: ''
    });

    const handleClose = () => {
        setIsOpen(false);  // Закриваємо модалку
    };

    // Викликаємо HandleSubmit з відповідними параметрами
    const { handleSubmit } = HandleSubmit({
        formData: localFormData,
        setFormData,
        setIsModalOpen
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocalFormData({ ...localFormData, [e.target.name]: e.target.value });
    };

    return (
        <div className={`modal ${isOpen ? 'active' : ''}`}>
            <div className="modal__dialog">
                <div className="modal__content">
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div
                            className="modal__close"
                            onClick={handleClose}  // Закриття модалки при кліку на хрестик
                        >
                            ✖
                        </div>
                        <div className="modal__title">Ми зв'яжемось з вами як найшвидше</div>
                        <input
                            placeholder="Ваше ім'я"
                            name="name"
                            type="text"
                            className="modal__input"
                            value={localFormData.name}  // Використовуємо локальний стан
                            onChange={handleChange}
                        />
                        <input
                            placeholder="Ваш номер телефону"
                            name="phone"
                            type="tel"
                            className="modal__input"
                            value={localFormData.phone}  // Використовуємо локальний стан
                            onChange={handleChange}
                        />
                        <button
                            className="btn btn_dark btn_min"
                            type="submit"
                        >
                            Передзвоніть мені
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
