"use client";
import Image from "next/image";
import logo from "@/assets/icono.png";

export default function Navbar() {
  return (
    <nav className="bg-white text-black flex flex-row justify-evenly justify-items-center items-center">
      <Image src={logo} alt="logo" className="m-1 p-1 h-36 w-36" />
      <h1 className="m-1 p-1 text-3xl font-bold">Estudio Juridico Sura </h1>
      <menu>
        <button className="hover:bg-gradient-to-r from-fuchsia-700 via-red-500 to-orange-600 hover:text-white rounded-md m-1 p-1 w-36 h-14">PERSONAL</button>
        <button className="hover:bg-gradient-to-r from-fuchsia-700 via-red-500 to-orange-600 hover:text-white rounded-md m-1 p-1 w-36 h-14">NOSOTROS</button>
        <button className="hover:bg-gradient-to-r from-fuchsia-700 via-red-500 to-orange-600 hover:text-white rounded-md m-1 p-1 w-36 h-14">CASOS</button>
        <button className="hover:bg-gradient-to-r from-fuchsia-700 via-red-500 to-orange-600 hover:text-white rounded-md m-1 p-1 w-36 h-14">AGENDAR</button>
        <button className="hover:bg-gradient-to-r from-fuchsia-700 via-red-500 to-orange-600 hover:text-white rounded-md m-1 p-1 w-36 h-14">CONSULTA</button>
      </menu>
    </nav>
  );
}
