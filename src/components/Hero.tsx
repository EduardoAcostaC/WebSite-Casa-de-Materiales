import { motion } from 'motion/react';
import { Phone, MapPin, Award, ShieldCheck, Truck, ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToCotizar = () => {
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

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-zinc-950"
    >
      {/* Background Graphic with Dark & Orange Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1600&auto=format&fit=crop"
          alt="Casa Salcedo Construction Materials Background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-30 select-none scale-105"
        />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-zinc-950/70 to-zinc-950"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/30 to-transparent"></div>
      </div>

      {/* Decorative Glowing Elements */}
      <div className="absolute top-1/4 right-[5%] w-96 h-96 bg-brand-orange/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-[5%] w-80 h-80 bg-zinc-800/20 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Content wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Typography Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block bg-brand-orange text-black text-[10px] font-black uppercase px-2 py-0.5 mb-4 tracking-widest font-mono"
            >
              Líderes en Construcción • Calidad Industrial
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6"
            >
              CASA DE MATERIALES Y <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-brand-orange-light to-amber-400 font-extrabold relative">
                TLAPALERÍA SALCEDO
                <span className="absolute left-0 bottom-1 w-full h-[3px] bg-brand-orange/25 blur-[1px]"></span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-xl text-zinc-300 max-w-xl font-light leading-relaxed mb-8"
            >
              "Cimentando tus proyectos, equipando tus ideas." <br />
              <span className="text-zinc-400 text-sm sm:text-base">
                Más de dos décadas proveyendo materiales pesados, ferretería especializada y consumibles técnicos en San Lorenzo, Xochimilco. 
              </span>
            </motion.p>

            {/* Primary Action Buttons */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-12 sm:mb-16"
            >
              <a
                href="tel:5556412757"
                id="hero-call-cta"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-semibold bg-brand-orange text-white hover:bg-brand-orange-dark shadow-[0_4px_25px_rgba(255,94,0,0.35)] hover:shadow-[0_4px_30px_rgba(255,94,0,0.5)] transition-all hover:translate-y-[-2px] duration-200"
              >
                <Phone className="w-5 h-5 text-white animate-bounce" />
                <span className="font-mono text-sm tracking-wide">Llamar Ahora • 55 5641 2757</span>
              </a>

              <a
                href="https://maps.google.com/?q=Prol.+División+del+Nte.+5098,+San+Lorenzo,+Xochimilco,+16040+CDMX"
                target="_blank"
                rel="noopener noreferrer"
                id="hero-map-cta"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-semibold bg-zinc-900 text-white border border-zinc-800 hover:border-brand-orange hover:bg-zinc-900/80 transition-all hover:translate-y-[-2px] duration-200"
              >
                <MapPin className="w-5 h-5 text-brand-orange" />
                <span>Cómo Llegar</span>
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-6 border-t border-zinc-950 pt-8 w-full max-w-lg"
            >
              <div className="flex flex-col">
                <span className="font-display font-bold text-2xl text-brand-orange block">25+</span>
                <span className="text-xs text-zinc-400 uppercase tracking-widest mt-1 font-mono">Años de Confianza</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-2xl text-brand-orange block">100%</span>
                <span className="text-xs text-zinc-400 uppercase tracking-widest mt-1 font-mono">Garantizado</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-2xl text-brand-orange block">CDMX</span>
                <span className="text-xs text-zinc-400 uppercase tracking-widest mt-1 font-mono">Envío Express</span>
              </div>
            </motion.div>
          </div>

          {/* Right Card / Interactive Prompt Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 hidden lg:block"
          >
            <div className="relative group p-1.5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-xl shadow-2xl overflow-hidden">
              {/* Colored border highlight */}
              <div className="absolute inset-0 bg-gradient-to-b from-brand-orange/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative bg-zinc-950 p-6 rounded-[14px]">
                {/* Visual Accent */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs text-zinc-400 font-bold uppercase tracking-widest">
                    • Cotizador Rápido
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/10 text-emerald-400 font-mono">
                    ONLINE
                  </span>
                </div>

                <h3 className="font-display font-semibold text-lg text-white mb-2">
                  ¿Listo para comenzar su obra?
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                  Evite filas y contratiempos. Envíenos su lista de materiales directamente desde la web y le responderemos con su cotización formal en minutos.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-zinc-900/60 border border-zinc-800/40">
                    <Award className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-semibold text-white">Precios Altamente Competitivos</h4>
                      <p className="text-[11px] text-zinc-400">Mejoramos presupuestos formales para compras por volumen.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-lg bg-zinc-900/60 border border-zinc-800/40">
                    <Truck className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-semibold text-white">Entregas el Mismo Día</h4>
                      <p className="text-[11px] text-neutral-400">Despacho ágil directo a su dirección en Xochimilco.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-lg bg-zinc-900/60 border border-zinc-800/40">
                    <ShieldCheck className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-semibold text-white">Atención 100% Personalizada</h4>
                      <p className="text-[11px] text-zinc-400">Asesoría experta para calcular las cantidades precisas.</p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={scrollToCotizar}
                  className="w-full py-3.5 rounded-lg text-sm font-semibold bg-zinc-900 hover:bg-brand-orange text-white border border-zinc-800 hover:border-brand-orange hover:shadow-lg transition-all duration-300 pointer-events-auto cursor-pointer"
                >
                  Cotizar Materiales Ahora
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bounce Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
        <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mb-2">Deslizar para más</span>
        <ChevronDown 
          onClick={() => {
            const nextSec = document.getElementById('quick-info');
            if (nextSec) nextSec.scrollIntoView({ behavior: 'smooth' });
          }}
          className="w-5 h-5 text-zinc-400 hover:text-brand-orange transition-colors cursor-pointer animate-bounce" 
        />
      </div>
    </section>
  );
}
