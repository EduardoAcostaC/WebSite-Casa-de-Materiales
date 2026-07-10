import { useState, useEffect } from 'react';
import { Phone, MapPin, Menu, X, Hammer, MessageSquare } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
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

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800/80 py-3 shadow-lg'
          : 'bg-gradient-to-b from-zinc-950 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-zinc-900 border border-brand-orange/40 group-hover:border-brand-orange group-hover:shadow-[0_0_15px_rgba(255,94,0,0.3)] transition-all duration-300">
              <Hammer className="w-5 h-5 text-brand-orange group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute -inset-1 rounded-lg bg-brand-orange/5 blur-sm group-hover:bg-brand-orange/10 transition-all"></div>
            </div>
            
            <div className="leading-tight">
              <span className="font-display font-medium text-[11px] tracking-widest text-zinc-400 block">
                CASA DE MATERIALES
              </span>
              <span className="font-display font-bold text-lg sm:text-xl text-white tracking-tight group-hover:text-brand-orange transition-colors">
                SALCEDO
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-sm font-medium text-zinc-300 hover:text-brand-orange transition-colors cursor-pointer"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('servicios')}
              className="text-sm font-medium text-zinc-300 hover:text-brand-orange transition-colors cursor-pointer"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection('testimoniales')}
              className="text-sm font-medium text-zinc-300 hover:text-brand-orange transition-colors cursor-pointer"
            >
              Opiniones
            </button>
            <button
              onClick={() => scrollToSection('cotizar')}
              className="text-sm font-medium text-zinc-300 hover:text-brand-orange transition-colors cursor-pointer"
            >
              Pedir Cotización
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="text-sm font-medium text-zinc-300 hover:text-brand-orange transition-colors cursor-pointer"
            >
              Ubicación
            </button>
          </nav>

          {/* Desktop Call to Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:5556412757"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold bg-zinc-900 text-white border border-zinc-800 hover:border-brand-orange hover:bg-zinc-900 hover:shadow-inner transition-all duration-300"
            >
              <Phone className="w-4 h-4 text-brand-orange animation-pulse" />
              <span className="font-mono text-xs">55 5641 2757</span>
            </a>
            
            <a
              href="https://maps.google.com/?q=Prol.+División+del+Nte.+5098,+San+Lorenzo,+Xochimilco,+16040+CDMX"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold bg-brand-orange text-white hover:bg-brand-orange-dark shadow-[0_4px_20px_rgba(255,94,0,0.2)] hover:shadow-[0_4px_25px_rgba(255,94,0,0.4)] transition-all duration-300"
            >
              <MapPin className="w-4 h-4" />
              <span>Cómo Llegar</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 focus:outline-none focus:ring-1 focus:ring-brand-orange transition-all"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menú</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6 text-brand-orange" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-2 pt-2 pb-6 space-y-1 bg-zinc-950/98 backdrop-blur-xl border-b border-zinc-900 px-4 mt-2">
          <button
            onClick={() => scrollToSection('inicio')}
            className="block w-full text-left px-3 py-3 rounded-lg text-base font-semibold text-zinc-300 hover:text-white hover:bg-zinc-900 border-l-2 border-transparent hover:border-brand-orange transition-all"
          >
            Inicio
          </button>
          <button
            onClick={() => scrollToSection('servicios')}
            className="block w-full text-left px-3 py-3 rounded-lg text-base font-semibold text-zinc-300 hover:text-white hover:bg-zinc-900 border-l-2 border-transparent hover:border-brand-orange transition-all"
          >
            Servicios
          </button>
          <button
            onClick={() => scrollToSection('testimoniales')}
            className="block w-full text-left px-3 py-3 rounded-lg text-base font-semibold text-zinc-300 hover:text-white hover:bg-zinc-900 border-l-2 border-transparent hover:border-brand-orange transition-all"
          >
            Opiniones
          </button>
          <button
            onClick={() => scrollToSection('cotizar')}
            className="block w-full text-left px-3 py-3 rounded-lg text-base font-semibold text-zinc-300 hover:text-white hover:bg-zinc-900 border-l-2 border-transparent hover:border-brand-orange transition-all"
          >
            Pedir Cotización
          </button>
          <button
            onClick={() => scrollToSection('contacto')}
            className="block w-full text-left px-3 py-3 rounded-lg text-base font-semibold text-zinc-300 hover:text-white hover:bg-zinc-900 border-l-2 border-transparent hover:border-brand-orange transition-all"
          >
            Ubicación
          </button>

          <div className="pt-4 pb-2 border-t border-zinc-900 mt-4 flex flex-col gap-3">
            <a
              href="tel:5556412757"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-zinc-900 border border-zinc-800 text-white font-semibold transition-all hover:bg-zinc-900"
            >
              <Phone className="w-4 h-4 text-brand-orange" />
              <span className="font-mono text-sm">Llamar: 55 5641 2757</span>
            </a>
            
            <a
              href="https://maps.google.com/?q=Prol.+División+del+Nte.+5098,+San+Lorenzo,+Xochimilco,+16040+CDMX"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-brand-orange text-white font-semibold shadow-lg hover:bg-brand-orange-dark transition-all"
            >
              <MapPin className="w-4 h-4" />
              <span>Cómo Llegar (Google Maps)</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
