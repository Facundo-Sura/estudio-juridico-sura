"use client";
import Image from "next/image";
import logo from "../../public/imagenes/logo.png";
import copy from "../../public/imagenes/copyright.png";

export default function Footer() {
  return (
    <footer className="bg-gray-400 text-blue-950 text-center bottom-0 w-full h-60 pt-20">
      <main className="h-2/3 flex flex-row justify-evenly justify-items-center items-end">
        <Image src={logo} alt="logo" className="my-10 p-2 h-32 w-32" />
        <h2 className="my-20 p-1 text-xl">Arturo Umberto Ilia N°626</h2>
        <h2 className="my-20 p-1 text-xl">telefonos: 3547 427222 - 3547 519205</h2>
        <h2 className="my-20 p-1 text-xl">estudiojuridicosura02@gmail.com</h2>
      </main>
      <hr />
      <h4 className="m-1 p-1 flex justify-center items-center">
        Copyright 2024{" "}
        <Image src={copy} alt="copyright" className="h-4 w-4 m-1" /> | Powered
        by Facundo Sura
      </h4>
    </footer>
  );
}
