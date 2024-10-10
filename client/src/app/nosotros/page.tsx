import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import SGM from "../../../public/imagenes/SNG.png";

export default function Nosotros() {
  return (
    <div>
      <Navbar showFullNavbar={true} />
      <div className="bg-white text-black">
        <div className="bg-[url('/imagenes/fontpage.jpg')] bg-cover bg-center h-full w-full my-20 py-44">
          <h1 className="text-4xl text-white text-center hover:text-slate-400 hover:cursor-pointer">Nosotros</h1>
        </div>
        <p className="text-center h-40 w-11/12 mx-auto py-6 px-44 shadow-2xl border-2 border-r-slate-400 rounded-3xl">
          Somos un estudio jurídico donde el ejercicio del derecho no es sólo
          una profesión, sino una vocación. Abordamos cada caso garantizando un
          enfoque integrado y preventivo, con el compromiso y la responsabilidad
          de que trabajamos con personas, no expedientes. Nuestra misión es
          promover el desarrollo de una sociedad que garantice los derechos
          fundamentales de las personas y la visión de una sociedad más justa y
          equitativa.
        </p>
        <div className="p-20 flex justify-center ">
          <Image src={SGM} alt="Sura Norma Gladys" />
          <div className="m-8 p-8">
            <h1 className="m-8 text-2xl font-bold">Gladys sura</h1>
            <h6 className="m-8">
              MP 1-37569 / MAT. FED. Tº 506 Fº 962 / MAT. MED. 876
            </h6>
            <p>
              Abogada, egresado de la Universidad SigloXXI de Córdoba. En
              ejercicio de la profesión desde 2018, con más de 10 años de
              experiencia en Derecho de Familia, Civil y Laboral. Además cuenta
              con formación en Escribania, Mediación Derecho Procesal Laboral.
              Actualmente, estudiante del Doctorado en .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
