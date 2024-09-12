import React from "react";
import Navbar from "@/components/Navbar";
import Location from "@/components/Location";

export default function Consulta() {
  return (
    <div className="bg-white text-black">
      <Navbar />
      <div className="grid grid-cols-2">
        <form
          action="submit"
          className="p-32 flex flex-col flex-nowrap justify-center items-center space-y-4"
        >
          <h2 className="text-black text-2xl font-bold">
            Contactacte con nosotros
          </h2>
          <p>Nuestros Horarios: Lunes a Viernes de 09:00 a 13:00hs</p>
          <input
            className="p-4 w-full text-base bg-gray-600 focus:bg-gray-900 focus:text-white"
            type="text"
            placeholder="Nombre y Apellido"
          />
          <input
            className="p-4 w-full text-base bg-gray-600 focus:bg-gray-900 focus:text-white"
            type="mail"
            placeholder="Mail"
          />
          <input
            className="p-4 w-full text-base bg-gray-600 focus:bg-gray-900 focus:text-white"
            type="phone"
            placeholder="Teléfono"
          />
          <input
            className="p-4 w-full text-base bg-gray-600 focus:bg-gray-900 focus:text-white"
            type="text"
            placeholder="Asunto"
          />
          <textarea
            className="p-4 w-full h-48 bg-gray-600 focus:bg-gray-900 focus:text-white"
            placeholder="Deje aquí su consulta y nos comunicaremos a la brevedad"
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
