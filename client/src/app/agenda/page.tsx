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
        <Navbar />
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/tu-url-de-calendly"
        style={{ minWidth: '320px', height: '630px' }}
      ></div>
    </div>
  );
};

export default CalendlyWidget;
