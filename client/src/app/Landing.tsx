"use client";
import React, { useEffect, useState } from 'react';

const Landing: React.FC = () => {
  
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowText(true);
    }, 500); // Retraso de 0.5 segundos antes de iniciar la transición
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video 
        className="absolute inset-0 w-full h-full object-cover" 
        autoPlay 
        loop 
        muted
      >
        <source src="/videos/landing.mp4" type="video/mp4" />
        Tu navegador no soporta la etiqueta de video.
      </video>
      <div className={`relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4 transition-opacity duration-1000 ${showText ? 'opacity-100' : 'opacity-0'}`}>
        <h1 className="text-4xl md:text-6xl font-bold">Estudio Jurídico Sura</h1>
        <p className="text-lg md:text-2xl mt-4">Tu mejor defensa en cualquier situación</p>
      </div>
    </div>
  );
};

export default Landing;