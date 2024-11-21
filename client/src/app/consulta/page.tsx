"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Location from "@/components/Location";

export default function Consulta() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        alert("Se ha enviado su consulta");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.error}`);
      }
    } catch (error) {
      console.error("Error al enviar la consulta:", error);
      alert("Error al enviar la consulta.");
    }
  };
  

  return (
    <div className="bg-white text-black">
      <Navbar showFullNavbar={true} />
      <div className="grid grid-cols-2">
        <form
          onSubmit={handleSubmit}
          className="p-32 flex flex-col flex-nowrap justify-center items-center space-y-4"
        >
          <h2 className="text-black text-2xl font-bold">
            Contáctese con nosotros
          </h2>
          <p>Nuestros Horarios: Lunes a Viernes de 09:00 a 13:00hs</p>
          <input
            className="p-4 w-full text-base bg-gray-600 focus:bg-gray-900 focus:text-white"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nombre y Apellido"
            required
          />
          <input
            className="p-4 w-full text-base bg-gray-600 focus:bg-gray-900 focus:text-white"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Mail"
            required
          />
          <input
            className="p-4 w-full text-base bg-gray-600 focus:bg-gray-900 focus:text-white"
            type="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Teléfono"
            required
          />
          <input
            className="p-4 w-full text-base bg-gray-600 focus:bg-gray-900 focus:text-white"
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Asunto"
            required
          />
          <textarea
            className="p-4 w-full h-48 bg-gray-600 focus:bg-gray-900 focus:text-white"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Deje aquí su consulta y nos comunicaremos a la brevedad"
            required
          ></textarea>
          <input
            className="p-4 text-base text-white hover:cursor-pointer bg-gray-600 hover:bg-gray-900 hover:text-white"
            type="submit"
            value="Enviar consulta"
          />
        </form>
        <div className="my-52">
          <Location />
        </div>
      </div>
    </div>
  );
}
