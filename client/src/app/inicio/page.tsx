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
        className={`relative w-full h-screen transition-opacity duration-100 ${
          scrollPosition > 500 ? "opacity-0" : "opacity-100"
        }`}
      >
        <Landing />
      </div>

      {/* Navbar */}
      <div
        className={`transition-opacity ${
          scrollPosition < 50 ? "opacity-0" : "opacity-100 duration-1000"
        }`}
      >
        <Navbar />
      </div>

      {/* Contenido debajo del video */}
      <div className="relative z-10 p-8 bg-white text-black">
        <div>
          <p className="text-center text-base font-light m-8 p-20">
            Bienvenidos a Estudio Juridico Sura, donde la experiencia y la
            excelencia se unen para brindar soluciones integrales en el ámbito
            legal. Somos un grupo de profesionales altamente capacitados,
            compuesto por expertos en diversas áreas del derecho.
          </p>
          <h2 className="text-center font-bold text-2xl font-sans m-8 p-4">
            ASESORAMIENTO PROFESIONAL
          </h2>
          <p className="text-center text-base font-light m-8 p-20">
            Comprendemos que cada situación legal es única, y trabajamos en
            estrecha colaboración con nuestros clientes para encontrar la mejor
            solución posible, siempre con el mayor cuidado y atención. Nuestra
            filosofía nos ha permitido ganar una reputación sólida como uno de
            los estudios de abogados más confiables y efectivos en nuestra área
            de práctica. Nos encantaría poder ayudarte en cualquier situación
            legal que puedas enfrentar. Agendá una cita con nosotros
          </p>
          <h2 className="text-center font-bold text-2xl font-sans m-8 p-4">
            ¿En qué podemos ayudarte?
          </h2>
          <div className="grid grid-cols-2 gap-4 justify-items-center">
            <div className="bg-[url('/imagenes/da.jpg')] bg-cover bg-center text-white text-center p-20 w-2/3 h-64 hover:p-5 duration-1000">
              <h3 className="text-4xl underline">Administrativo</h3>
              <p>
                es la rama del Derecho público que regula la organización,
                funcionamiento, poderes y deberes de la administración pública y
                las consiguientes relaciones jurídicas entre la misma y otros
                sujetos.
              </p>
            </div>
            <div className="bg-[url('/imagenes/dc.jpg')] bg-cover bg-center text-white text-center p-20 w-2/3 h-64 hover:p-5 duration-1000">
              <h3 className="text-4xl underline">Civil</h3>
              <p></p>
            </div>
            <div className="bg-[url('/imagenes/df.jpg')] bg-cover bg-center text-white text-center p-20 w-2/3 h-64 hover:p-5 duration-1000">
              <h3 className="text-4xl underline">Familia</h3>
              <p></p>
            </div>
            <div className="bg-[url('/imagenes/dl.jpg')] bg-cover bg-center text-white text-center p-20 w-2/3 h-64 hover:p-5 duration-1000">
              <h3 className="text-4xl underline">Labral</h3>
              <p></p>
            </div>
            <div className="bg-[url('/imagenes/dr.jpg')] bg-cover bg-center text-white text-center p-20 w-2/3 h-64 hover:p-5 duration-1000">
              <h3 className="text-4xl underline">Reales</h3>
              <p></p>
            </div>
            <div className="bg-[url('/imagenes/ds.jpg')] bg-cover bg-center text-white text-center p-20 w-2/3 h-64 hover:p-5 duration-1000">
              <h3 className="text-4xl underline">Sucesiones</h3>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
