import { motion } from 'motion/react';
import { Hammer, Wrench, Truck, Store, Check, ArrowRight, ArrowDownRight } from 'lucide-react';
import { SERVICES_DATA } from '../data';
import { Service } from '../types';

interface ServicesProps {
  onSelectServiceForQuote: (materials: string) => void;
}

export default function Services({ onSelectServiceForQuote }: ServicesProps) {
  // Map string icon names to Lucide icon components
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Hammer':
        return <Hammer className="w-6 h-6 text-brand-orange" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-brand-orange" />;
      case 'Truck':
        return <Truck className="w-6 h-6 text-brand-orange" />;
      case 'Store':
        return <Store className="w-6 h-6 text-brand-orange" />;
      default:
        return <Hammer className="w-6 h-6 text-brand-orange" />;
    }
  };

  const handleQuoteClick = (service: Service) => {
    // Format a pre-filled list for the contact form
    const formatedValue = `--- Cotización: ${service.title} ---\nPor favor, cotícenme sobre los siguientes artículos:\n${service.items.map(item => `- ${item}`).join('\n')}\n---`;
    onSelectServiceForQuote(formatedValue);
  };

  return (
    <section id="servicios" className="py-24 bg-zinc-950 relative">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 select-all">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs text-brand-orange uppercase tracking-widest font-bold bg-brand-orange/5 px-3 py-1 rounded-full border border-brand-orange/15">
            Áreas de Especialidad
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight mt-4 mb-4">
            Nuestro Compromiso Sólido
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
            Abastecemos con rigor técnico ferretero y logística inmediata para que sus proyectos particulares, comerciales o residenciales nunca se detengan.
          </p>
        </div>

        {/* Dynamic Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col bg-zinc-900 border border-zinc-800/80 hover:border-brand-orange/40 rounded-2xl overflow-hidden transition-all duration-300 group hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
            >
              {/* Card Image Cover with overlay */}
              <div className="h-56 relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 bg-zinc-900"
                />
                <div className="absolute inset-0 bg-zinc-950/40 group-hover:bg-zinc-950/20 transition-all duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent"></div>
                
                {/* Floating Category Icon Badge */}
                <div className="absolute bottom-4 left-4 flex items-center justify-center w-12 h-12 rounded-xl bg-zinc-950/90 border border-zinc-800 text-brand-orange backdrop-blur-sm shadow-xl">
                  {getIcon(service.icon)}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-xl text-white mb-3 group-hover:text-brand-orange transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-2.5 mb-8">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-zinc-500 uppercase block mb-1">
                      Catálogo Popular
                    </span>
                    {service.items.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                        <Check className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                        <span className="leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pre-fill Action */}
                <div className="pt-4 border-t border-zinc-850/60 mt-auto flex items-center justify-between">
                  <span className="text-[10px] font-mono text-zinc-500 font-medium">
                    Servicio en Xochimilco y CDMX
                  </span>
                  
                  <button
                    onClick={() => handleQuoteClick(service)}
                     className="inline-flex items-center gap-2 text-xs font-semibold text-brand-orange group-hover:text-brand-orange-light transition-colors hover:underline tracking-wide bg-zinc-950 hover:bg-zinc-900/60 border border-brand-orange/20 hover:border-brand-orange/60 px-3.5 py-2 rounded-lg cursor-pointer"
                  >
                    Cotizar Lista
                    <ArrowDownRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Construction Quick Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 bg-zinc-900 border border-zinc-800/80 p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden"
        >
          <div className="absolute right-0 bottom-0 top-0 w-1/3 bg-radial-gradient from-brand-orange/5 via-transparent to-transparent pointer-events-none"></div>
          <div>
            <span className="px-2 py-0.5 rounded text-[9px] bg-brand-orange/10 text-brand-orange font-mono font-bold uppercase tracking-widest">
              Atención Telefónica Directa
            </span>
            <h3 className="text-white font-display font-bold text-lg sm:text-xl mt-2">
              ¿No encuentra algún material o medida en la lista?
            </h3>
            <p className="text-xs text-zinc-400 mt-1 max-w-2xl leading-relaxed">
              Trabajamos sobre pedido y surtimos marcas comerciales de todo tipo. Contáctenos hoy mismo y nuestro personal de mostrador le conseguirá lo que necesite de inmediato.
            </p>
          </div>
          <a
            href="tel:5556412757"
            className="flex items-center gap-2 px-5 py-3 rounded-lg text-xs font-semibold bg-brand-orange text-white hover:bg-brand-orange-dark transition-all shadow-md group-hover:scale-102 flex-shrink-0"
          >
            Soporte Directo
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
