import { useState, useEffect } from 'react';
import { Clock, MapPin, Phone, Heart } from 'lucide-react';

export default function QuickInfoBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTimeText, setCurrentTimeText] = useState('');

  useEffect(() => {
    const checkStoreStatus = () => {
      // CDMX usually operates on America/Mexico_City (UTC-6 or UTC-5 depending on local rules, but modern Mexico doesn't have daylight savings since 2023).
      // Let's calculate CDMX local time from UTC.
      const nowUtc = new Date();
      const localTime = new Date(nowUtc.getTime() - (6 * 60 * 60 * 1000)); // Approx UTC-6 for Mexico City
      
      const day = localTime.getUTCDay(); // 0 is Sunday, 1 is Monday, ..., 6 is Saturday
      const hour = localTime.getUTCHours();
      const min = localTime.getUTCMinutes();
      const formattedMin = min < 10 ? `0${min}` : min;
      
      const isWeekDayOrSaturday = day >= 1 && day <= 6; // Mon - Sat
      const isOpenHour = hour >= 8 && hour < 18; // 8:00 AM to 6:00 PM
      
      const openStatus = isWeekDayOrSaturday && isOpenHour;
      setIsOpen(openStatus);

      // Create a nice localized string
      const daysStr = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
      const ampm = hour >= 12 ? 'PM' : 'AM';
      const displayHour = hour % 12 === 0 ? 12 : hour % 12;
      setCurrentTimeText(`Hora CDMX: ${daysStr[day]} ${displayHour}:${formattedMin} ${ampm}`);
    };

    checkStoreStatus();
    // Update every minute
    const interval = setInterval(checkStoreStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="quick-info" 
      className="relative z-20 -mt-10 sm:-mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.6)] backdrop-blur-xl overflow-hidden p-6 sm:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-center">
          
          {/* Horario de Atención Grid Section */}
          <div className="lg:col-span-4 flex items-start gap-4 p-3 rounded-xl hover:bg-zinc-950/40 transition-colors">
            <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-brand-orange/5 border border-brand-orange/25 text-brand-orange flex-shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-xs text-zinc-400 uppercase tracking-widest font-mono">
                  Horario Comercial
                </span>
                {isOpen ? (
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/15 text-emerald-400 animate-pulse">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    Abierto
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                    Cerrado
                  </span>
                )}
              </div>
              <h4 className="text-white font-semibold text-[14px] mt-1">
                Lunes a Sábado desde las 8:00 AM
              </h4>
              <p className="text-xs text-zinc-400 font-mono mt-0.5">
                {isOpen ? 'Abierto hasta las 6:00 PM • ¡Visítanos!' : 'Cerramos a las 6:00 PM • Te esperamos mañana'}
              </p>
            </div>
          </div>

          {/* Dirección Grid Section */}
          <a 
            href="https://maps.google.com/?q=Prol.+División+del+Nte.+5098,+San+Lorenzo,+Xochimilco,+16040+CDMX" 
            target="_blank" 
            rel="noopener noreferrer"
            className="lg:col-span-5 flex items-start gap-4 p-3 rounded-xl hover:bg-zinc-950/60 transition-all group"
          >
            <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-zinc-950 border border-zinc-800 text-brand-orange flex-shrink-0 group-hover:border-brand-orange transition-all">
              <MapPin className="w-5 h-5 text-brand-orange" />
            </div>
            <div>
              <span className="font-display font-bold text-xs text-zinc-400 uppercase tracking-widest font-mono">
                Ubicación Física
              </span>
              <h4 className="text-white font-semibold text-[14px] mt-1 group-hover:text-brand-orange transition-colors">
                San Lorenzo, Xochimilco
              </h4>
              <p className="text-xs text-zinc-400 mt-0.5 leading-relaxed">
                Prol. División del Nte. 5098, C.P. 16040, Ciudad de México
              </p>
            </div>
          </a>

          {/* Contacto Directo Grid Section */}
          <a 
            href="tel:5556412757"
            className="lg:col-span-3 flex items-start gap-4 p-3 rounded-xl hover:bg-zinc-950/60 transition-all group"
          >
            <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-zinc-950 border border-zinc-800 text-brand-orange flex-shrink-0 group-hover:border-brand-orange transition-all">
              <Phone className="w-5 h-5 text-brand-orange" />
            </div>
            <div>
              <span className="font-display font-bold text-xs text-zinc-400 uppercase tracking-widest font-mono">
                Atención Telefónica
              </span>
              <h4 className="text-white font-semibold text-[15px] mt-1 font-mono tracking-wide group-hover:text-brand-orange transition-colors">
                55 5641 2757
              </h4>
              <p className="text-xs text-zinc-400 mt-0.5">
                Línea Directa / WhatsApp
              </p>
            </div>
          </a>

        </div>

        {/* Separator and Inclusivity Space */}
        <div className="mt-6 pt-4 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-[10px] sm:text-xs text-zinc-500 font-mono">
            {currentTimeText || 'Servicio Profesional en el Corazón de Xochimilco'}
          </div>
          
          {/* LGBTQ+ Inclusivity Badge */}
          <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-zinc-950 border border-zinc-800/60 select-none group hover:border-brand-orange/20 transition-all">
            <div className="flex items-center -space-x-1">
              <span className="w-2 h-2 rounded-full bg-[#E40303]"></span>
              <span className="w-2 h-2 rounded-full bg-[#FF8C00]"></span>
              <span className="w-2 h-2 rounded-full bg-[#FFED00]"></span>
              <span className="w-2 h-2 rounded-full bg-[#008026]"></span>
              <span className="w-2 h-2 rounded-full bg-[#004CFF]"></span>
              <span className="w-2 h-2 rounded-full bg-[#732982]"></span>
            </div>
            <div className="text-right">
              <span className="text-[10px] text-zinc-300 font-bold uppercase tracking-wide block">
                Espacio Amigable LGBTQ+
              </span>
              <span className="text-[8px] text-zinc-500 block leading-none font-mono">
                Diversidad y Respeto Absoluto
              </span>
            </div>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500/20 group-hover:scale-110 transition-transform" />
          </div>
        </div>
      </div>
    </section>
  );
}
