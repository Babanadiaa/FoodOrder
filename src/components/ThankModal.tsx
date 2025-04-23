import React from "react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ThankModal = ({ isOpen, onClose }: ModalProps) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold">Форма відправлена!</h2>
                <p>Ми зв'яжемося з вами найближчим часом.</p>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={onClose}>
                    Закрити
                </button>
            </div>
        </div>
    );
};

export default ThankModal;
