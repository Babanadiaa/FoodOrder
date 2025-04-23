import React from "react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ThankModal = ({ isOpen, onClose }: ModalProps) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/80 flex align-center justify-center z-50">
            <div className="bg-white  rounded-lg shadow-2xl max-w-sm w-full relative h-[200px] flex flex-col justify-between ">
                <button
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
                    onClick={onClose}
                >
                    ✖
                </button>

                <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
                    Дякуємо за ваше замовлення!
                </h2>

                <p className="text-gray-600 text-center mb-6">
                    Ми зв'яжемося з вами найближчим часом, щоб підтвердити деталі.
                </p>

                <button
                    className="block mx-auto px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 h-[50px] bottom-0"
                    onClick={onClose}
                >
                    Закрити
                </button>
            </div>
        </div >
    );
};

export default ThankModal;
