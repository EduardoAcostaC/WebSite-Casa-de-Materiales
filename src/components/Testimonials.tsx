import { motion } from 'motion/react';
import { Star, MessageSquareCode, HeartHandshake, BadgeCheck } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data';

export default function Testimonials() {
  return (
    <section id="testimoniales" className="py-24 bg-zinc-950 border-y border-zinc-900/65 relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-orange/5 rounded-full blur-[110px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs text-brand-orange uppercase tracking-widest font-bold bg-brand-orange/5 px-3 py-1 rounded-full border border-brand-orange/15">
            Testimonios de Clientes
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight mt-4 mb-4">
            La Confianza Que Nos Respalda
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
            Nuestros clientes avalan la seriedad, puntualidad y precios cómodos de Casa Salcedo, consolidándonos como su tlapalería y proveedora predilecta.
          </p>
        </div>

        {/* Rating Grid Outline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Aggregate Rating Side Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 bg-zinc-900 border border-zinc-800 p-6 sm:p-8 rounded-2xl flex flex-col justify-between"
          >
            <div>
              <h3 className="font-display font-medium text-white text-lg tracking-tight mb-4">
                Calificación Comercial
              </h3>
              
              {/* Massive Number */}
              <div className="flex items-baseline gap-2 mb-2">
                <span className="font-display font-bold text-5xl sm:text-6xl text-white tracking-tight">
                  4.9
                </span>
                <span className="text-sm text-zinc-400 font-mono">/ 5.0</span>
              </div>

              {/* Stars representation */}
              <div className="flex items-center gap-1 text-amber-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-500" />
                ))}
              </div>

              <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                Calificaciones consolidadas basadas en reseñas de Google Maps e histórico de cotizaciones realizadas en San Lorenzo, Xochimilco.
              </p>

              {/* Rating split indicators */}
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-4 text-xs font-mono text-zinc-400">
                  <span className="w-8">5★</span>
                  <div className="flex-grow h-2 rounded bg-zinc-950 overflow-hidden">
                    <div className="h-full bg-brand-orange w-[94%] rounded"></div>
                  </div>
                  <span className="w-8 text-right">94%</span>
                </div>
                <div className="flex items-center gap-4 text-xs font-mono text-zinc-400">
                  <span className="w-8">4★</span>
                  <div className="flex-grow h-2 rounded bg-zinc-950 overflow-hidden">
                    <div className="h-full bg-brand-orange w-[6%] rounded"></div>
                  </div>
                  <span className="w-8 text-right">6%</span>
                </div>
                <div className="flex items-center gap-4 text-xs font-mono text-zinc-400">
                  <span className="w-8">3★</span>
                  <div className="flex-grow h-2 rounded bg-zinc-950 overflow-hidden">
                    <div className="h-full bg-brand-orange/0 w-0"></div>
                  </div>
                  <span className="w-8 text-right">0%</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-zinc-800/80 flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-brand-orange/5 border border-brand-orange/20 text-brand-orange flex items-center justify-center">
                <HeartHandshake className="w-4.5 h-4.5" />
              </div>
              <div>
                <span className="text-xs text-white font-semibold block leading-tight">Servicio Honesto</span>
                <span className="text-[10px] text-zinc-400 font-mono leading-none">Don Mario y equipo Salcedo</span>
              </div>
            </div>
          </motion.div>

          {/* Testimonial Cards Column */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS_DATA.map((testimonial, idx) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.15 }}
                className="bg-zinc-900 border border-zinc-800/80 p-6 rounded-2xl flex flex-col justify-between group hover:border-brand-orange/20 hover:shadow-black transition-all"
              >
                <div>
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 text-amber-500 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500" />
                    ))}
                  </div>

                  {/* Quote Body */}
                  <div className="relative">
                    <p className="text-xs sm:text-sm text-zinc-300 italic font-light leading-relaxed mb-6">
                      "{testimonial.text}"
                    </p>
                  </div>
                </div>

                {/* Profile Detail Card */}
                <div className="flex items-center justify-between pt-4 border-t border-zinc-800/60 mt-auto">
                  <div className="flex items-center gap-3">
                    {/* Generates a nice initials badge */}
                    <div className="w-9 h-9 rounded-full bg-zinc-950 flex items-center justify-center border border-zinc-800 text-xs font-semibold text-brand-orange">
                      {testimonial.name === 'Anónimo' ? 'A' : testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-white block">
                        {testimonial.name}
                      </span>
                      <span className="text-[10px] text-zinc-500 font-mono block leading-none">
                        Cliente Verificado
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-zinc-950 border border-zinc-800">
                    <BadgeCheck className="w-3.5 h-3.5 text-brand-orange" />
                    <span className="text-[9px] text-zinc-400 font-mono uppercase tracking-wider">{testimonial.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Google review placeholder card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-zinc-900 border border-zinc-800/60 dashed-border border-dashed p-6 rounded-2xl flex flex-col items-center justify-center text-center group min-h-[180px]"
            >
              <div className="w-10 h-10 rounded-full bg-zinc-950 flex items-center justify-center border border-zinc-800 mb-3 text-zinc-400 group-hover:border-brand-orange/40 group-hover:text-brand-orange transition-colors">
                <MessageSquareCode className="w-5 h-5" />
              </div>
              <h4 className="text-white text-xs font-semibold">¿Has comprado con nosotros?</h4>
              <p className="text-[11px] text-zinc-400 mt-1 max-w-[200px] leading-relaxed">
                Compártenos tu valiosa opinión sobre el servicio y la velocidad de entrega en Google Maps.
              </p>
              <a
                href="https://maps.google.com/?q=Prol.+División+del+Nte.+5098,+San+Lorenzo,+Xochimilco,+16040+CDMX"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] text-brand-orange hover:underline font-mono uppercase mt-3 tracking-wider font-semibold block"
              >
                Escribir Reseña
              </a>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
