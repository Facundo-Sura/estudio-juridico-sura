"use client";
import Image from "next/image";
import logo from "@/assets/icono.png"

export default function Navbar() {
  return (
    <nav>
        <Image src={logo} alt="logo" className="" />
      <h1>Estudio Juridico Sura </h1>
      <menu >
        <button className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">NOSOTROS</button>
        <button className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">PERSONAL</button>
        <button className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">CASOS</button>
        <button className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">AGENDAR</button>
        <button className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">CONSULTA</button>
      </menu>
    </nav>
  );
}
