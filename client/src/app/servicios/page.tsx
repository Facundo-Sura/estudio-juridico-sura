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
    {
      title: "+ Administrativo", content: [
        "Responsabilidad del Estado y demandas por daños.",
        "Procesos administrativos sancionadores.",
        "Impugnación de actos administrativos.",
        "Reclamos por falta de prestación de servicios públicos.",
        "Obtención y renovación de licencias y habilitaciones.",
        "Asesoramiento en contratos administrativos y licitaciones.",
        "Defensa en procedimientos de expropiación.",
        "Gestión de subsidios y beneficios estatales.",
        "Amparos por mora administrativa.",
        "Defensa en procesos de responsabilidad patrimonial.",
      ]
    },
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
    {
      title: "+ Reales", content: [
        "Acciones de reivindicación y protección de la posesión.",
        "Constitución y extinción de usufructos y servidumbres.",
        "Juicios por daños a la propiedad.",
        "Regulación y conflictos sobre medianería.",
        "Resolución de disputas por límites territoriales.",
        "Usucapión y regularización dominial.",
        "Constitución y ejecución de hipotecas.",
        "Asesoramiento en fideicomisos inmobiliarios.",
        "Reclamos por accesión y mejoras en inmuebles.",
        "Protección de derechos reales en bienes muebles e inmuebles.",
      ]
    },
    {
      title: "+ Sucesiones", content: [
        "Tramitación de sucesiones testamentarias y ab intestato.",
        "Ejecución y contestación de testamentos.",
        "Asesoramiento en herencias internacionales.",
        "Declaratorias de herederos judiciales y extrajudiciales.",
        "Resolución de conflictos entre coherederos.",
        "Liquidación y partición de bienes hereditarios.",
        "Administración de bienes en indivisión.",
        "Análisis y prevención de fraudes testamentarios.",
        "Sucesiones vacantes y reclamos de acreedores.",
        "Asistencia en donaciones anticipadas y pactos sucesorios.",
      ]
    },
    {
      title: "+ Violencia de género", content: [
        "Solicitudes de medidas de protección y restricción.",
        "Asesoramiento en denuncias por violencia doméstica.",
        "Acompañamiento legal en procesos penales por violencia de género.",
        "Representación en casos de violencia psicológica y económica.",
        "Asistencia en procesos por abuso sexual y acoso.",
        "Tramitación de órdenes de exclusión del hogar.",
        "Acciones legales por incumplimiento de medidas cautelares.",
        "Defensa de derechos en casos de discriminación por género.",
        "Asesoramiento en violencia digital y ciberacoso.",
        "Reclamos por incumplimiento de derechos laborales por cuestiones de género.",
      ]
    },
  ];

  return (
    <div>
      <Navbar showFullNavbar={true} />
      <div className="bg-white text-black">
        <div className="bg-[url('/imagenes/fontpage.jpg')] bg-cover bg-center h-full w-full my-20 py-44">
          <h1 className="text-4xl text-white text-center hover:text-slate-400 hover:cursor-pointer">Servicios</h1>
        </div>
        <p className="text-center h-46 w-11/12 mx-auto py-6 px-44 shadow-2xl border-2 border-r-slate-400 rounded-3xl">
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
                  className={`${activeIndex === index ? "block" : "hidden"
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
