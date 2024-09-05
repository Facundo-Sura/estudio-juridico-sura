import React from "react";
import Navbar from "@/components/Navbar";

export default function Consulta() {
  return (
    <div >
      <Navbar />
      <form action="submit" className="bg-white text-black flex flex-col flex-nowrap justify-center items-center space-y-4 p-8">
        <h2 className="text-black text-2xl font-bold">CONSULTA</h2>
        <input className="p-4 w-2/5 text-base bg-black" type="text" placeholder="Nombre y Apellido" />
        <input className="p-4 w-2/5 text-base bg-black" type="mail" placeholder="Mail" />
        <input className="p-4 w-2/5 text-base bg-black" type="phone" placeholder="Teléfono" />
        <input className="p-4 w-2/5 text-base bg-black" type="text" placeholder="Asunto" />
        <textarea className="p-4 w-2/5 h-48 bg-black" placeholder="Deje aquí su consulta y nos comunicaremos a la brevedad"></textarea>
        <input className="p-4 text-base bg-black" type="submit" value="Enviar consulta" />
      </form>
    </div>
  );
}