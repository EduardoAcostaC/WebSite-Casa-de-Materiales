/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import QuickInfoBar from './components/QuickInfoBar';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import QuoteForm from './components/QuoteForm';
import Footer from './components/Footer';

export default function App() {
  const [preFilledMaterials, setPreFilledMaterials] = useState('');

  // Sincronizar el clic de los servicios con la sección del formulario de cotización
  const handleSelectServiceForQuote = (materials: string) => {
    setPreFilledMaterials(materials);
    
    // Desplazamiento fluido hacia el formulario de cotización
    const element = document.getElementById('cotizar');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleClearPreFill = () => {
    setPreFilledMaterials('');
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans antialiased selection:bg-brand-orange selection:text-white">
      {/* 1. Header Fijo superior */}
      <Header />

      {/* 2. Sección Principal / Hero dramatico */}
      <Hero />

      {/* 3. Barra de Información Rápida (Abierto, Mapa, Contacto, LGBTQ+ Safe) */}
      <QuickInfoBar />

      {/* 4. Grid de Servicios Principales */}
      <Services onSelectServiceForQuote={handleSelectServiceForQuote} />

      {/* 5. Testimoniales y Panel Google Rating */}
      <Testimonials />

      {/* 6. Formulario Interactivo / Lista de Pre-carga */}
      <QuoteForm 
        preFilledMaterials={preFilledMaterials} 
        onClearPreFill={handleClearPreFill} 
      />

      {/* 7. Footer de Marca y Mapa Google Maps */}
      <Footer />
    </div>
  );
}

