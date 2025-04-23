import React, { useState } from "react";
import HandleSubmit from "../functions/HandleSubmit";
import ThankModal from "../components/ThankModal";

export default function Order() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
    });
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { handleSubmit } = HandleSubmit({
        formData,
        setFormData,
        setIsModalOpen, // Передаємо функцію для відкриття ThankModal
    });

    return (
        <section className="order">
            <div className="container">
                <form className="order__form" onSubmit={handleSubmit}>
                    <input
                        required
                        placeholder="Ваше ім'я"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                    />
                    <input
                        required
                        placeholder="Ваш номер телефону"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                    />
                    <button type="submit">Передзвоніть мені</button>
                </form>
            </div>

            <ThankModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
}
