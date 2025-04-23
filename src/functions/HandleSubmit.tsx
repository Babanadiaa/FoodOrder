import React from 'react';
import { postRequest } from "../services/api";

interface HandleSubmitProps {
    formData: { name: string; phone: string };
    setFormData: React.Dispatch<React.SetStateAction<{ name: string; phone: string }>>;
}

const HandleSubmit = ({ formData, setFormData }: HandleSubmitProps) => {
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const requestData = {
            ...formData,
            id: Math.random().toString(36).substring(2, 6), // Генеруємо унікальний ID
        };

        try {
            await postRequest("requests", requestData); // Використовуємо централізовану функцію
            console.log("Дані успішно відправлено!");
            setFormData({ name: "", phone: "" }); // Очищаємо форму після успішної відправки
        } catch (error) {
            console.error("Фатальна помилка запиту:", error);
        }
    };

    return { handleSubmit };
};

export default HandleSubmit;
