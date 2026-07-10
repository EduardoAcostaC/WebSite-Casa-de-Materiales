import { MapPin, Phone, Mail, Clock, Hammer, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contacto" className="bg-zinc-950 border-t border-zinc-900 pt-20 pb-8 relative overflow-hidden select-all">
      {/* Visual Accent */}
      <div className="absolute right-0 bottom-0 w-80 h-85 bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-zinc-900">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-2.5 group cursor-default mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-zinc-900 border border-brand-orange/40 text-brand-orange">
                <Hammer className="w-5 h-5 text-brand-orange" />
              </div>
              <div>
                <span className="font-display font-bold text-xs text-zinc-400 block tracking-widest leading-none">CASA DE MATERIALES</span>
                <span className="font-display font-bold text-xl text-white tracking-tight leading-normal">SALCEDO</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed mb-6">
              La proveedora industrial de mayor confianza en Xochimilco. Cimentando grandes proyectos de infraestructura y equipando cada herramienta para el mantenimiento de su hogar o negocio.
            </p>

            <div className="space-y-3.5">
              <a 
                href="https://maps.google.com/?q=Prol.+División+del+Nte.+5098,+San+Lorenzo,+Xochimilco,+16040+CDMX" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-start gap-3 group text-xs text-zinc-400 hover:text-white transition-colors"
              >
                <MapPin className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                <span className="leading-tight">
                  Prol. División del Nte. 5098, San Lorenzo, <br />
                  Xochimilco, 16040 Ciudad de México, CDMX <br />
                  <span className="text-[10px] text-brand-orange font-semibold flex items-center gap-1 mt-1 group-hover:underline">
                    Ver en Google Maps <ExternalLink className="w-3 h-3" />
                  </span>
                </span>
              </a>

              <a 
                href="tel:5556412757" 
                className="flex items-center gap-3 text-xs text-zinc-400 hover:text-white transition-colors group"
              >
                <Phone className="w-4 h-4 text-brand-orange" />
                <span className="font-mono text-zinc-300 group-hover:text-brand-orange transition-colors">
                  55 5641 2757 (Línea Fija / Móvil)
                </span>
              </a>

              <div className="flex items-center gap-3 text-xs text-zinc-400">
                <Mail className="w-4 h-4 text-brand-orange" />
                <span>contacto@materialessalcedo.com</span>
              </div>
            </div>
          </div>

          {/* Quick links list */}
          <div className="lg:col-span-3">
            <h4 className="font-display font-bold text-xs uppercase text-zinc-300 tracking-wider font-mono mb-6">
              Líneas Surtidas
            </h4>
            <ul className="space-y-3.5 text-xs text-zinc-400 font-mono">
              <li>
                <span className="hover:text-brand-orange transition-colors cursor-pointer">• Acero de Refuerzo, Alambrón y Varillas</span>
              </li>
              <li>
                <span className="hover:text-brand-orange transition-colors cursor-pointer">• Cemento, Cal, Yeso y Morteros por Saco</span>
              </li>
              <li>
                <span className="hover:text-brand-orange transition-colors cursor-pointer">• Arena, Grava, Piedra y agregados por Metro</span>
              </li>
              <li>
                <span className="hover:text-brand-orange transition-colors cursor-pointer">• Conexiones de Plomería Hidráulica y Gas</span>
              </li>
              <li>
                <span className="hover:text-brand-orange transition-colors cursor-pointer">• Material Eléctrico y Iluminación de Obra</span>
              </li>
              <li>
                <span className="hover:text-brand-orange transition-colors cursor-pointer">• Pinturas, Selladores e Impermeabilizantes</span>
              </li>
            </ul>
          </div>

          {/* Map Embedding Panel */}
          <div className="lg:col-span-5">
            <h4 className="font-display font-bold text-xs uppercase text-zinc-300 tracking-wider font-mono mb-6 flex items-center justify-between">
              <span>Ubicación Satelital (Plus Code: 7VGH+5Q)</span>
              <span className="px-1.5 py-0.5 rounded text-[10px] bg-brand-orange/10 text-brand-orange font-mono">Xochimilco, MX</span>
            </h4>
            
            <div className="relative group w-full h-64 rounded-xl border border-zinc-800 overflow-hidden shadow-2xl bg-zinc-900">
              <iframe
                title="Google Maps - Casa de Materiales Salcedo"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1882.6174824558235!2d-99.11703649999999!3d19.2938164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce01a88bb3e859%3A0xe54e153e7f9dd5a4!2sProl.%20Divisi%C3%B3n%2520del%2520Nte.%205098%2C%20San%20Lorenzo%2C%20Xochimilco%2C%2016040%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1700000000000!5m2!1ses-419!2smx"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 w-full h-full"
              ></iframe>
            </div>
          </div>

        </div>

        {/* Bottom Credits section */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-500 font-mono">
            © 2026 Casa de Materiales y Tlapalería Salcedo. Todos los derechos reservados.
          </p>
          <div className="flex gap-4 text-xs font-mono text-zinc-500">
            <span className="hover:text-brand-orange cursor-pointer transition-colors">Términos del Servicio</span>
            <span className="hover:text-brand-orange cursor-pointer transition-colors">Aviso de Privacidad</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
