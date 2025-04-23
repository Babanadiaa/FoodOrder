import React, { useState } from "react";
import right from "../icons/right.svg";
import HandleSubmit from "../functions/HandleSubmit";
import ThankModal from "../components/ThankModal";

export default function Order() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
    });
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Отримуємо handleSubmit з функції HandleSubmit
    const { handleSubmit } = HandleSubmit({ formData, setFormData, setIsModalOpen });

    return (
        <section className="order">
            <div className="container">
                <div className="title">Замовляй пробний день прямо зараз!</div>
                <form className="order__form" onSubmit={handleSubmit}>
                    <input
                        required
                        placeholder="Ваше ім'я"
                        name="name"
                        type="text"
                        className="order__input"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <input
                        required
                        placeholder="Ваш номер телефону"
                        name="phone"
                        type="tel"
                        className="order__input"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                    <img src={right} alt="right" />
                    <button type="submit" className="btn btn_dark btn_min">Передзвоніть мені</button>
                </form>
            </div>

            <ThankModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
}
