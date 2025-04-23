import { useState } from "react";

// export default function Form() {
//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//     });

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();

//         const response = await fetch("http://localhost:3000/requests", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(formData),
//         });

//         if (response.ok) {
//             console.log("Дані успішно відправлено!");
//         } else {
//             console.error("Помилка відправки!");
//         }
//     };

    // return (
    //     <form onSubmit= { handleSubmit } >
    //     <input type="text" name = "name" placeholder = "Ім'я" onChange = { handleChange } />
    //         <input type="email" name = "email" placeholder = "Email" onChange = { handleChange } />
    //             <button type="submit" > Надіслати </button>
    //                 </form>
    // );
}
