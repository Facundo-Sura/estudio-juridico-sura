"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/imagenes/icono.png";

export default function Navbar() {
  return (
    <nav className="bg-white text-black flex flex-row justify-evenly justify-items-center items-center ">
      <Link href="/" className="flex items-center">
        <Image src={logo} alt="logo" className="m-1 p-1 h-20 w-20" />
        <h1 className="m-1 p-1 text-3xl font-bold">Estudio Juridico Sura </h1>
      </Link>
      <menu className="font-semibold">
        <Link href="/nosotros">
          <button className="hover:bg-gradient-to-r from-fuchsia-700 via-red-500 to-orange-600 hover:text-white rounded-md m-1 p-1 w-36 h-14">
            NOSOTROS
          </button>
        </Link>
        <Link href="/servicios">
          <button className="hover:bg-gradient-to-r from-fuchsia-700 via-red-500 to-orange-600 hover:text-white rounded-md m-1 p-1 w-36 h-14">
            SERVICIOS
          </button>
        </Link>
        <Link href="/agenda">
          <button className="hover:bg-gradient-to-r from-fuchsia-700 via-red-500 to-orange-600 hover:text-white rounded-md m-1 p-1 w-36 h-14">
            AGENDAR
          </button>
        </Link>
        <Link href="/consulta">
          <button className="hover:bg-gradient-to-r from-fuchsia-700 via-red-500 to-orange-600 hover:text-white rounded-md m-1 p-1 w-36 h-14">
            CONSULTA
          </button>
        </Link>
      </menu>
    </nav>
  );
}
