"use client";
import React from "react";
import { useState } from "react";
import Navbar from "@/components/Navbar";

export default function Servicioe() {
  // Estado que almacena el índice de la lista activa
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Función para alternar la lista activa
  const toggleList = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const sections = [
    { title: "+ Administrativo", content: [] }, // No tiene contenido
    {
      title: "+ Civil",
      content: [
        "Procesos Sucesorios.",
        "Declaratorias de herederos.",
        "Adjudicación y venta de bienes.",
        "Desalojos.",
        "Cobro de alquileres.",
        "División de condominios.",
        "Accidentes de tránsito.",
        "Malas Praxis.",
        "Incumplimientos contractuales.",
        "Ejecución de contratos.",
        "Juicios de Escrituración. Usucapiones.",
        "Demandas en relaciones de consumo.",
        "Constitución de sociedades comerciales y civiles.",
        "Ejecución de acuerdos de mediación.",
        "Honorarios regulados judicialmente.",
      ],
    },
    {
      title: "+ Familia",
      content: [
        "Divorcios unilaterales y bilaterales.",
        "Acuerdos de distribución de bienes.",
        "Uniones convivenciales.",
        "Reclamos patrimoniales del cese de la unión.",
        "Responsabilidad parental integral.",
        "Reclamos de filiación.",
        "Régimen de comunicación.",
        "Cuotas alimentarias.",
        "Impedimento de contacto.",
        "Reclamo de prestación alimentaria e incidentes de aumento de prestaciones alimentarias.",
        "Responsabilidad subsidiaria y complementaria de abuelos.",
      ],
    },
    {
      title: "+ Laboral",
      content: [
        "Te acompañamos en despidos sin causa.",
        "Indemnizaciones por despido.",
        "Despido discriminatorio.",
        "Demandas contra Aseguradoras de Riego del Trabajo por accidentes de trabajo y enfermedades laborales.",
        "Maltrato laboral.",
        "Accidentes laborales.",
        "Trabajo no registrado.",
        "Diferencia salarial.",
        "Trámites ante la Comisión Médica de la Superintendencia de Trabajo de la Nación.",
        "Reincorporación al puesto de trabajo.",
        "Despido indirecto.",
      ],
    },
    { title: "+ Reales", content: [] },
    { title: "+ Sucesiones", content: [] },
    { title: "+ Violencia de género", content: [] },
  ];

  return (
    <div>
      <Navbar />
      <div className="bg-white text-black">
        <div className="bg-[url('/imagenes/fontpage.jpg')] bg-cover bg-center h-full w-full my-20 py-44">
          <h1 className="text-4xl text-white text-center">Servicios</h1>
        </div>
        <p className="px-44 ">
          Ofrecemos un trato personalizado para atender las necesidades de
          nuestros clientes. Ponemos a disposición entrevistas presenciales y
          virtuales, asesorías online pre y post sentencia, y mediaciones.
          <br />
          Nuestro valor es garantizar la pronta respuesta a tus necesidades
          desde un enfoque integrado, creativo y con el compromiso para lograr
          la efectividad de nuestros servicios. Mantenerte informado sobre la
          evolución de tu caso es nuestra prioridad.
          <br />
          Dale un vistazo a nuestras áreas de práctica para ayudarte a resolver
          tus problemas.
        </p>
        <ol className="px-64 py-8">
          {sections.map((section, index) => (
            <li
              key={index}
              className="bg-gray-400 hover:bg-gray-900 hover:text-white cursor-pointer p-2"
              onClick={() => toggleList(index)} // Cambia la lista activa
            >
              {section.title}
              {/* Si la lista está activa, se muestra el contenido */}
              {section.content.length > 0 && (
                <ol
                  className={`${
                    activeIndex === index ? "block" : "hidden"
                  } ml-4 mt-2 list-disc`}
                >
                  {section.content.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ol>
              )}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
