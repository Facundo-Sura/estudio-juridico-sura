"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
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
        className={`relative w-full h-screen transition-opacity duration-700 ${
          scrollPosition > 650 ? "opacity-0" : "opacity-100"
        }`}
      >
        <Landing />
      </div>

      {/* Navbar */}
      <div
        className={`fixed top-0 left-0 w-full z-20 transition-opacity ${
          scrollPosition < 600 ? "opacity-0" : "opacity-100 "
        }`}
      >
        <Navbar />
      </div>

      {/* Contenido debajo del video */}
      <div className="relative z-10 p-8 bg-white text-black">
        <div>
          <p className="text-black text-center text-base font-light m-8 p-20">
            Bienvenidos a Estudio Juridico Sura, donde la experiencia y la
            excelencia se unen para brindar soluciones integrales en el ámbito
            legal. Somos un grupo de profesionales altamente capacitados,
            compuesto por expertos en diversas áreas del derecho.
          </p>
          <h2 className="text-center font-bold text-2xl font-sans m-8 p-4">ASESORAMIENTO PROFESIONAL</h2>
          <p className="text-black text-center text-base font-light m-8 p-20">
            Comprendemos que cada situación legal es única, y trabajamos en
            estrecha colaboración con nuestros clientes para encontrar la mejor
            solución posible, siempre con el mayor cuidado y atención.
            Nuestra filosofía nos ha permitido ganar una reputación sólida como
            uno de los estudios de abogados más confiables y efectivos en nuestra
            área de práctica. Nos encantaría poder ayudarte en cualquier
            situación legal que puedas enfrentar. Agendá una cita con nosotros
          </p>
          <h2 className="text-center font-bold text-2xl font-sans m-8 p-4">¿En qué podemos ayudarte?</h2>
          <div className="grid grid-cols-2 gap-4 justify-items-center">
            <div className="border-2 border-black w-2/3 h-64">
              <h3>Administrativo</h3>
              <p></p>
            </div>
            <div className="border-2 border-black w-2/3 h-64">
              <h3>Civil (Daños)</h3>
              <p></p>
            </div>
            <div className="border-2 border-black w-2/3 h-64">
              <h3>Familia</h3>
              <p></p>
            </div>
            <div className="border-2 border-black w-2/3 h-64">
              <h3>Labral</h3>
              <p></p>
            </div>
            <div className="border-2 border-black w-2/3 h-64">
              <h3>Reales</h3>
              <p></p>
            </div>
            <div className="border-2 border-black w-2/3 h-64">
              <h3>Sucesiones</h3>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
