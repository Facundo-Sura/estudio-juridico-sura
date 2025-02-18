import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import SGM from "../../../public/imagenes/SNG.png";
import secretaria from "../../../public/imagenes/secretaria.png";
import asistente from "../../../public/imagenes/asistente.png";
import asistente2 from "../../../public/imagenes/asistente2.png";

export default function Nosotros() {
  return (
    <div>
      <Navbar showFullNavbar={true} />
      <div className="bg-white text-black">
        <div className="bg-[url('/imagenes/fontpage.jpg')] bg-cover bg-center h-full w-full mt-20 py-44">
          <h1 className="text-4xl text-white text-center hover:text-slate-400 hover:cursor-pointer">Nosotros</h1>
        </div>

        <div className="p-10 flex justify-center items-center">
          <Image src={SGM} alt="Sura Norma Gladys" className="h-fit" />
          <div className="m-8 p-8 shadow-2xl border-2 border-r-slate-400 rounded-3xl">
            <h1 className="m-8 text-3xl font-bold border-b-2"><a href="https://sites.google.com/view/estudiosura/estudio-jur%C3%ADdico" target="blank">Gladys sura</a></h1>
            <h2 className="m-8 text-xl"><a href="https://sites.google.com/view/estudiosura/estudio-jur%C3%ADdico" target="blank">Abogada - Escribana - Grafóloga - Doctora en Ciencias políticas</a></h2>
            <h6 className="m-8 font-light">
            Matrícula Federal Tomo 508 - Folio 892
            </h6>
            <h6 className="m-8 font-light">
              Matrícula Provincial N° 1-41.031
            </h6>
            <h6 className="m-8 font-light">
              Matrícula de Abogada en Neuquén 3681.
            </h6>
            <p className="text-center h-auto w-11/12 mx-auto p-2 border-t-2">
              Abogada, egresada de la Universidad SigloXXI de Córdoba. En
              ejercicio de la profesión desde 2018, con más de 6 años de
              experiencia en Derecho de Familia, Civil, Administrativo, especialización en Daños por la UBA. Además cuenta
              con formación en Escribania, Mediación Derecho Procesal Laboral.
              Actualmente, estudiante en Doctorado en Derecho.
            </p>
          </div>
        </div>

        <div className="p-10 flex justify-center items-center">
        <Image src={asistente} alt="belen" className="h-96 w-64" />
          <div className="m-8 p-8 shadow-2xl border-2 border-r-slate-400 rounded-3xl">
            <h1 className="m-8 text-3xl font-bold border-b-2">Aldana Jazmín Rial</h1>
            <h2 className="m-8 text-xl">Estudiante de Derecho - UNC</h2>
            <h6 className="m-8 font-light">
            </h6>
            <h6 className="m-8 font-light">
            </h6>
            <p className="text-center h-auto w-11/12 mx-auto p-2 border-t-2">
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
