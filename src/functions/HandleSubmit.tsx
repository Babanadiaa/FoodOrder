import React from 'react';

interface HandleSubmitProps {
    formData: { name: string, phone: string };
    setFormData: React.Dispatch<React.SetStateAction<{ name: string; phone: string }>>;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const HandleSubmit = ({ formData, setFormData, setIsModalOpen }: HandleSubmitProps) => {
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted");

        const requestData = {
            ...formData,
            id: Math.random().toString(36).substring(2, 6),
        };

        try {
            const response = await fetch("http://localhost:3000/requests", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestData),
            });

            if (response.ok) {
                console.log("Дані успішно відправлено!");
                setIsModalOpen(true);

                // Очищуємо форму після успішної відправки
                setFormData({
                    name: '',
                    phone: '',
                });
            } else {
                console.error("Помилка відправки! Статус:", response.status);
            }
        } catch (error) {
            console.error("Фатальна помилка запиту:", error);
        }
    };

    return { handleSubmit };
};

export default HandleSubmit;
