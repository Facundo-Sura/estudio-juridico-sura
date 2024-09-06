import Navbar from "@/components/Navbar";
import React from "react";

export default function Servicioe() {
  return (
    <div className="bg-white text-black">
      <Navbar />
      <h1 className="text-center p-8">SERVICIOS</h1>
      <p className="px-64 ">
        Ofrecemos un trato personalizado para atender las necesidades de
        nuestros clientes. Ponemos a disposición entrevistas presenciales y
        virtuales, asesorías online pre y post sentencia, y mediaciones.
        <br />
        Nuestro valor es garantizar la pronta respuesta a tus necesidades desde
        un enfoque integrado, creativo y con el compromiso para lograr la
        efectividad de nuestros servicios. Mantenerte informado sobre la
        evolución de tu caso es nuestra prioridad.
        <br />
        Dale un vistazo a nuestras áreas de práctica para ayudarte a resolver
        tus problemas.
      </p>
      <ol className="px-64 py-8">
        <li className="p-2">Administrativo</li>
        <li className="p-2">Civil</li>
        <li className="p-2">Familia</li>
        <li className="p-2">Laboral</li>
        <li className="p-2">Reales</li>
        <li className="p-2">Suseciones</li>
        <li className="p-2">Violencia de genero</li>
      </ol>
    </div>
  );
}
