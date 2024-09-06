"use client";
import Image from "next/image";
import logo from "../../public/imagenes/icono.png";
import copy from "../../public/imagenes/copyright.png";

export default function Footer() {
  return (
    <footer className="bg-white text-black text-center w-full h-80 pt-20">
      <main className="h-2/3 flex flex-row justify-evenly justify-items-center items-center">
        <h2 className="m-1 p-1 text-xs font-bold flex flex-col items-center">
          <Image src={logo} alt="logo" className="m-1 p-1 h-16 w-16" />
          Estudio Juridico Sura
        </h2>
        <h2 className="m-1 p-1 text-xl">Artuto Umberto Ilia N°626</h2>
        <h2 className="m-1 p-1 text-xl">telefono</h2>
        <h2 className="m-1 p-1 text-xl">estudiojuridicosura02@gmail.com</h2>
      </main>
      <h4 className="m-6 p-4 flex justify-center items-center">
        Copyright 2024{" "}
        <Image src={copy} alt="copyright" className="h-4 w-4 m-1" /> | Powered
        by Facundo Sura
      </h4>
    </footer>
  );
}
