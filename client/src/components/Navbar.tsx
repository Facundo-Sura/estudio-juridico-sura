"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/imagenes/icono.png";

interface NavbarProps {
  showFullNavbar: boolean; // Prop para controlar si se muestra toda la navbar
}

const Navbar: React.FC<NavbarProps> = ({ showFullNavbar }) => {
  return (
    <nav
      className={`fixed top-0 left-0 w-full z-20 transition-all duration-700 ${
        showFullNavbar
          ? "bg-gray-300 text-blue-950 flex flex-row justify-evenly items-center"
          : "flex justify-center bg-transparent text-white"
      }`}
    >
      {showFullNavbar && (
        <Link href="/" className="flex items-center">
          <Image src={logo} alt="logo" className="m-1 p-1 h-20 w-20 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 500 duration-300" />
          <h1 className="m-1 p-1 text-3xl font-bold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-gray-500 duration-300">
            Estudio Jurídico Sura
          </h1>
        </Link>
      )}

      <menu
        className={`font-semibold flex ${
          showFullNavbar ? "justify-center" : "justify-between"
        } gap-4`}
      >
        <Link href="/nosotros">
          <button className={showFullNavbar ? "m-1 p-1 w-36 h-14 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-gray-500 duration-300" : "relative m-1 p-1 w-36 h-14 hover:text-blue-400 transition-colors duration-300"}>
              NOSOTROS
          </button>
        </Link>
        <Link href="/servicios">
          <button className={showFullNavbar ? "m-1 p-1 w-36 h-14 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-gray-500 duration-300" : "relative m-1 p-1 w-36 h-14 hover:text-blue-400 transition-colors duration-300"}>
              SERVICIOS
          </button>
        </Link>
        <Link href="/agenda">
          <button className={showFullNavbar ? "m-1 p-1 w-36 h-14 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-gray-500 duration-300" : "relative m-1 p-1 w-36 h-14 hover:text-blue-400 transition-colors duration-300"}>
              AGENDAR
          </button>
        </Link>
        <Link href="/consulta">
          <button className={showFullNavbar ? "m-1 p-1 w-36 h-14 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-gray-500 duration-300" : "relative m-1 p-1 w-36 h-14 hover:text-blue-400 transition-colors duration-300"}>
              CONSULTA
          </button>
        </Link>
      </menu>
    </nav>
  );
};

export default Navbar;
