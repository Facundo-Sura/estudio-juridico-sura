import React from 'react';

const Landing: React.FC = () => {
  return (
    <div>
      <video loop autoPlay muted>
        <source src="/videos/landing.mp4" type="video/mp4" />
        Tu navegador no soporta la etiqueta de video.
      </video>
    </div>
  );
};

export default Landing;