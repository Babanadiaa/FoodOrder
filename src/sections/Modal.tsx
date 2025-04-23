import React, { useState } from 'react';
import HandleSubmit from '../functions/HandleSubmit';
import ThankModal from '../components/ThankModal';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const Modal = ({ isOpen, onClose }: ModalProps) => {
    const [localFormData, setLocalFormData] = useState({
        name: "",
        phone: "",
    });

    const { handleSubmit } = HandleSubmit({
        formData: localFormData,
        setFormData: setLocalFormData,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLocalFormData((prev) => ({ ...prev, [name]: value }));
    };

    if (!isOpen) return null;

    return (
        <div className="modal active">
            <div className="modal__dialog">
                <div className="modal__content">
                    <button className="modal__close" onClick={onClose}>
                        ✖
                    </button>
                    <h2>Ми зв'яжемось з вами як найшвидше</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Ваше ім'я"
                            value={localFormData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Ваш номер телефону"
                            value={localFormData.phone}
                            onChange={handleChange}
                            required
                        />
                        <button type="submit" className="btn btn_dark">
                            Відправити
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modal;

const ParentComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isThankModalOpen, setIsThankModalOpen] = useState(false); // Стан для ThankModal

    const handleClose = () => {
        setIsOpen(false); // Закриваємо основну модалку
    };

    return (
        <>
            <Modal isOpen={isOpen} onClose={handleClose} />
            <ThankModal
                isOpen={isThankModalOpen}
                onClose={() => setIsThankModalOpen(false)} // Закриття ThankModal
            />
        </>
    );
};
