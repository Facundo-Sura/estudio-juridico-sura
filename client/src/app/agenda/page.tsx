import Navbar from "@/components/Navbar";
import React from "react";

export default function Agenda() {
    return (
        <div>
            <Navbar />
            <form action="submit" className="bg-white text-black flex flex-col flex-nowrap justify-center items-center space-y-4 p-8">
                <h1 className="text-2xl font-bold">Agenda un turno</h1>
                <input className="bg-black text-white w-2/5 p-4" type="text" placeholder="Nombre y Apellido" />
                <input className="bg-black text-white w-2/5 p-4" type="mail" placeholder="Mail" />
                <input className="bg-black text-white w-2/5 p-4" type="phone" placeholder="Telefono" />
                <input className="bg-black text-white text-center w-2/5 p-4 " type="date" />
            </form>
        </div>
    )
}