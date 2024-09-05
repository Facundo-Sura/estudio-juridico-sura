"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";// Ajusta la ruta según sea necesario
import Landing from "@/components/Landing";

export default function Inicio() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      {/* Video de fondo */}
      <div
        className={`relative w-full h-screen transition-opacity duration-700 ${scrollPosition > 425 ? 'opacity-0' : 'opacity-100'}`}
      >
        <Landing />
      </div>

      {/* Navbar */}
      <div
        className={`fixed top-0 left-0 w-full z-20 transition-opacity ${scrollPosition < 200 ? 'opacity-0' : 'opacity-100 ' }`}
      >
        <Navbar />
      </div>

      {/* Contenido debajo del video */}
      <div className="relative z-10 p-8 bg-white text-black">
        {" "}
        {/* Espacio para el scroll */}
        <div >
          <p className="text-black text-center text-base font-light m-8 p-20">
            Bienvenidos a Estudio Juridico Sura, donde la experiencia y la
            excelencia se unen para brindar soluciones integrales en el ámbito
            legal. Somos un grupo de profesionales altamente capacitados,
            compuesto por expertos en diversas áreas del derecho.
          </p>
        </div>
      </div>
    </div>
  );
};
