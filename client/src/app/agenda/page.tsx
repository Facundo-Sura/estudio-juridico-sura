"use client";
import Navbar from '@/components/Navbar';
import { useEffect } from 'react';

const CalendlyWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div>
        <Navbar showFullNavbar={true} />
      <div
        className="calendly-inline-widget mt-10 bg-white"
        data-url="https://calendly.com/estudiojuridicosura"
        style={{ minWidth: '100%', height: '680px' }}
      ></div>
    </div>
  );
};

export default CalendlyWidget;
