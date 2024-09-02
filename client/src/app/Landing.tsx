"use client";
import React, { useEffect, useState } from 'react';

const Landing: React.FC = () => {
  
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 500); // Retraso de 0.5 segundos antes de iniciar la animación
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video 
        className={`absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ${animate ? 'translate-y-0' : '-translate-y-full'}`} 
        autoPlay 
        loop 
        muted
      >
        <source src="/videos/landing.mp4" type="video/mp4" />
        Tu navegador no soporta la etiqueta de video.
      </video>
      <div className={`relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4  duration-1000 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'}`}>
        <h1 className="text-4xl md:text-6xl font-bold">Estudio Jurídico Sura</h1>
        <p className="text-lg md:text-2xl mt-4">Tu mejor defensa en cualquier situación</p>
      </div>
    </div>
  );
};

export default Landing;