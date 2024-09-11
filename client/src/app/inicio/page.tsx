"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Landing from "@/components/Landing";

export default function Inicio() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [textOpasity, setTextOpacity] = useState(0);

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
          <div className="p-5 text-center">
            <Link
              href="/nosotros"
              className="border-2 border-solid border-black p-5"
            >
              Saber mas
            </Link>
          </div>
          <h2 className="text-center font-bold text-2xl font-sans m-8 p-4">
            ¿En qué podemos ayudarte?
          </h2>
          <div className="grid grid-cols-2 gap-4 justify-items-center">
            <div className="bg-[url('/imagenes/da.jpg')] bg-cover bg-center text-white text-center p-20 w-2/3 h-64 relative overflow-hidden hover:p-5 duration-1000 group">
              <h3 className="text-4xl underline relative z-20 transition-transform duration-1000 group-hover:translate-y-[-10px]">
                Administrativo
              </h3>
              <div className="absolute inset-0 bg-black bg-opacity-50 m-2 flex flex-col items-center justify-center transition-all duration-1000 opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 z-10">
                <p className="p-2">
                  Es la rama del Derecho público que regula la organización,
                  funcionamiento, poderes y deberes de la administración pública
                  y las consiguientes relaciones jurídicas entre la misma y
                  otros sujetos.
                </p>
                <div className="p-5 text-center">
                  <Link
                    href="/servicios"
                    className="border-2 border-solid border-black p-3"
                  >
                    Saber mas
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-[url('/imagenes/dc.jpg')] bg-cover bg-center text-white text-center p-20 w-2/3 h-64 relative overflow-hidden hover:p-5 duration-1000 group">
              <h3 className="text-4xl underline relative z-20 transition-transform duration-1000 group-hover:translate-y-[-10px]">
                Civil
              </h3>
              <div className="absolute inset-0 bg-black bg-opacity-50 m-2 flex flex-col items-center justify-center transition-all duration-1000 opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 z-10">
                <p className="p-2">
                  Es la rama del derecho que, en general, regula las relaciones
                  civiles o privadas de las personas. Es una de las ramas más
                  antiguas del derecho.
                </p>
                <div className="p-5 text-center">
                  <Link
                    href="/servicios"
                    className="border-2 border-solid border-black p-3"
                  >
                    Saber mas
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-[url('/imagenes/df.jpg')] bg-cover bg-center text-white text-center p-20 w-2/3 h-64 relative overflow-hidden hover:p-5 duration-1000 group">
              <h3 className="text-4xl underline relative z-20 transition-transform duration-1000 group-hover:translate-y-[-10px]">
                Familia
              </h3>
              <div className="absolute inset-0 bg-black bg-opacity-50 m-2 flex flex-col items-center justify-center transition-all duration-1000 opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 z-10">
                <p className="p-2">
                  Es el conjunto de normas e instituciones jurídicas que regulan
                  las relaciones personales y patrimoniales de los miembros que
                  integran la familia.
                </p>
                <div className="p-5 text-center">
                  <Link
                    href="/servicios"
                    className="border-2 border-solid border-black p-3"
                  >
                    Saber mas
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-[url('/imagenes/dl.jpg')] bg-cover bg-center text-white text-center p-20 w-2/3 h-64 relative overflow-hidden hover:p-5 duration-1000 group">
              <h3 className="text-4xl underline relative z-20 transition-transform duration-1000 group-hover:translate-y-[-10px]">
                Labral
              </h3>
              <div className="absolute inset-0 bg-black bg-opacity-50 m-2 flex flex-col items-center justify-center transition-all duration-1000 opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 z-10">
                <p className="p-2">
                  Es una rama del Derecho cuyos principios y normas jurídicas
                  tienen por objeto la tutela del trabajo humano realizado en
                  forma libre, por cuenta ajena, en relación de dependencia y a
                  cambio de una contraprestación.
                </p>
                <div className="p-5 text-center">
                  <Link
                    href="/servicios"
                    className="border-2 border-solid border-black p-3"
                  >
                    Saber mas
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-[url('/imagenes/dr.jpg')] bg-cover bg-center text-white text-center p-20 w-2/3 h-64 relative overflow-hidden hover:p-5 duration-1000 group">
              <h3 className="text-4xl underline relative z-20 transition-transform duration-1000 group-hover:translate-y-[-10px]">
                Reales
              </h3>
              <div className="absolute inset-0 bg-black bg-opacity-50 m-2 flex flex-col items-center justify-center transition-all duration-1000 opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 z-10">
                <p className="p-2">
                  Es un poder jurídico que ejerce una persona sobre una cosa;
                  regula la Propiedad, y los derechos y obligaciones
                  concernientes a la propiedad. Este poder puede ser directo e
                  inmediato o indirecto y mediato, y puede suponer un
                  aprovechamiento total o parcial, siendo este derecho oponible
                  a terceros.
                </p>
                <div className="p-5 text-center">
                  <Link
                    href="/servicios"
                    className="border-2 border-solid border-black p-3"
                  >
                    Saber mas
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-[url('/imagenes/ds.jpg')] bg-cover bg-center text-white text-center p-20 w-2/3 h-64 relative overflow-hidden hover:p-5 duration-1000 group">
              <h3 className="text-4xl underline relative z-20 transition-transform duration-1000 group-hover:translate-y-[-10px]">
                Sucesiones
              </h3>
              <div className="absolute inset-0 bg-black bg-opacity-50 m-2 flex flex-col items-center justify-center transition-all duration-1000 opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 z-10">
                <p className="p-2">
                  Es aquella parte del derecho privado que regula la sucesión
                  mortis causa y determina el destino de las titularidades y
                  relaciones jurídicas tanto activas como pasivas de una persona
                  después de su muerte.​
                </p>
                <div className="p-5 text-center">
                  <Link
                    href="/servicios"
                    className="border-2 border-solid border-black p-3"
                  >
                    Saber mas
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
