import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, Send, Phone, User, Clipboard, CheckCircle, Plus, Info, MessageCircleCode } from 'lucide-react';
import { POPULAR_ITEMS } from '../data';
import { QuoteRequest } from '../types';

interface QuoteFormProps {
  preFilledMaterials: string;
  onClearPreFill: () => void;
}

export default function QuoteForm({ preFilledMaterials, onClearPreFill }: QuoteFormProps) {
  const [formData, setFormData] = useState<QuoteRequest>({
    name: '',
    phone: '',
    materialsList: '',
    preferredContact: 'whatsapp',
    deliveryRequired: false,
    deliveryAddress: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [whatsappLink, setWhatsappLink] = useState('');
  const [copied, setCopied] = useState(false);

  // Sync pre-filled materials if passed down
  useEffect(() => {
    if (preFilledMaterials) {
      setFormData(prev => ({
        ...prev,
        materialsList: preFilledMaterials
      }));
    }
  }, [preFilledMaterials]);

  // Handle inputs change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({
        ...prev,
        [name]: checked,
        // Reset address if delivery is untoggled
        ...(name === 'deliveryRequired' && !checked ? { deliveryAddress: '' } : {})
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  // Add popular items to list
  const addPopularItem = (item: string) => {
    setFormData(prev => {
      const currentList = prev.materialsList.trim();
      const prefix = currentList ? `${currentList}\n` : '';
      return {
        ...prev,
        materialsList: `${prefix}- 1 unidad de: ${item}`
      };
    });
  };

  // Compile WhatsApp link
  const generateWhatsAppString = (data: QuoteRequest) => {
    const deliveryText = data.deliveryRequired 
      ? `🚚 Envío a Domicilio requerido:\n📍 Dirección: ${data.deliveryAddress || 'No especificada'}`
      : `🏪 Retiro en tienda física`;

    const text = `🛠️ *Nueva Solicitud de Cotización (Casa Salcedo Web)*
--------------------------------------------
👤 *Nombre:* ${data.name}
📞 *Teléfono:* ${data.phone}
📞 *Contacto de preferencia:* ${data.preferredContact === 'whatsapp' ? 'WhatsApp' : 'Llamada telefónica'}

📝 *Lista de Materiales:*
${data.materialsList}

${deliveryText}
--------------------------------------------
_Enviado desde el portal oficial de Tlapalería Salcedo en 2026_`;

    return `https://wa.me/525556412757?text=${encodeURIComponent(text)}`;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.materialsList) {
      alert('Por favor complete los campos obligatorios (*).');
      return;
    }

    setIsSubmitting(true);

    // Simulate database write / network pipeline latency
    setTimeout(() => {
      const compiledUrl = generateWhatsAppString(formData);
      setWhatsappLink(compiledUrl);
      setIsSubmitting(false);
      setIsSuccess(true);
      onClearPreFill();
    }, 1500);
  };

  const copyToClipboard = () => {
    const deliveryText = formData.deliveryRequired 
      ? `🚚 Envío a Domicilio:\n📍 Dirección: ${formData.deliveryAddress}`
      : `🏪 Retiro en tienda`;

    const summary = `CASA DE MATERIALES Y TLAPALERÍA SALCEDO - NUEVA SOLICITUD
Nombre: ${formData.name}
Teléfono: ${formData.phone}
Lista de Materiales:
${formData.materialsList}
Opción de entrega: ${deliveryText}`;

    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      materialsList: '',
      preferredContact: 'whatsapp',
      deliveryRequired: false,
      deliveryAddress: ''
    });
    setIsSuccess(false);
  };

  return (
    <section id="cotizar" className="py-24 bg-zinc-950 border-t border-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Info Column */}
          <div className="lg:col-span-5 flex flex-col items-start select-all">
            <span className="font-mono text-xs text-brand-orange uppercase tracking-widest font-bold bg-brand-orange/5 px-3 py-1 rounded-full border border-brand-orange/15 mb-4">
              Cotizaciones en Minutos
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight mb-4">
              ¿Qué material necesitas hoy?
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed mb-8">
              Completa nuestro formulario inteligente. Puedes escribir tu propia lista o seleccionar los materiales más demandados con un toque para agregarlos al instante.
            </p>

            {/* Steps Visual Guidance */}
            <div className="space-y-6 w-full mb-8">
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 text-brand-orange font-mono flex items-center justify-center text-xs font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-white">Ingresa tus datos de contacto</h4>
                  <p className="text-xs text-zinc-400 leading-normal mt-0.5">Asignaremos un personal de mostrador específico para tu seguimiento comercial.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 text-brand-orange font-mono flex items-center justify-center text-xs font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-white">Detalla tus materiales</h4>
                  <p className="text-xs text-zinc-400 leading-normal mt-0.5">Agrega bultos, varillas u otros accesorios. Usa nuestros accesos rápidos para agilizar tu pedido.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 text-brand-orange font-mono flex items-center justify-center text-xs font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-white">Envía y chatea en tiempo real</h4>
                  <p className="text-xs text-zinc-400 leading-normal mt-0.5">El sistema preconfigurará un mensaje de WhatsApp directo a nuestro contacto oficial para iniciar la cotización.</p>
                </div>
              </div>
            </div>

            {/* Info Alerts */}
            <div className="w-full p-4 rounded-xl bg-brand-orange/5 border border-brand-orange/15 flex gap-3 text-zinc-300 font-sans">
              <Info className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
              <p className="text-xs leading-normal">
                <span className="font-semibold text-white">Atención especial por volumen:</span> Mejoramos presupuestos superiores a $15,000 MXN en acero y cemento para obras en San Lorenzo y el centro de Xochimilco.
              </p>
            </div>
          </div>

          {/* Form and Interaction Column */}
          <div className="lg:col-span-7">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="quote-form-element"
                    onSubmit={handleFormSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name input */}
                      <div>
                        <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2 font-mono">
                          Nombre Completo *
                        </label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-zinc-400">
                            <User className="w-4 h-4" />
                          </span>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Ej. Ing. Juan Pérez"
                            className="block w-full pl-10 pr-4 py-3 bg-zinc-950 border border-zinc-800 rounded-xl text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-brand-orange transition-colors font-sans"
                          />
                        </div>
                      </div>

                      {/* Phone input */}
                      <div>
                        <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2 font-mono">
                          Teléfono de Contacto (10 dígitos) *
                        </label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-zinc-400">
                            <Phone className="w-4 h-4" />
                          </span>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            maxLength={10}
                            placeholder="Ej. 5512345678"
                            className="block w-full pl-10 pr-4 py-3 bg-zinc-950 border border-zinc-800 rounded-xl text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-brand-orange transition-colors font-mono"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Preferred Contact Mode */}
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2 font-mono">
                        Preferencia de Recepción
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, preferredContact: 'whatsapp' }))}
                          className={`py-3 px-4 rounded-xl text-xs font-semibold border flex items-center justify-center gap-2 transition-all cursor-pointer ${
                            formData.preferredContact === 'whatsapp'
                              ? 'bg-zinc-950 text-white border-brand-orange/60 shadow-md shadow-brand-orange/5'
                              : 'bg-zinc-950/60 text-zinc-400 border-zinc-800 hover:text-zinc-300'
                          }`}
                        >
                          <MessageCircleCode className="w-4 h-4 text-emerald-400" />
                          Chat WhatsApp
                        </button>
                        
                        <button
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, preferredContact: 'phone' }))}
                          className={`py-3 px-4 rounded-xl text-xs font-semibold border flex items-center justify-center gap-2 transition-all cursor-pointer ${
                            formData.preferredContact === 'phone'
                              ? 'bg-zinc-950 text-white border-brand-orange/60 shadow-md shadow-brand-orange/5'
                              : 'bg-zinc-950/60 text-zinc-400 border-zinc-800 hover:text-zinc-300'
                          }`}
                        >
                          <Phone className="w-4 h-4 text-brand-orange" />
                          Llamada de Oficina
                        </button>
                      </div>
                    </div>

                    {/* Popular Tags Fast Adder */}
                    <div>
                      <span className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2.5 font-mono">
                        + Añadir Materiales Populares (Un Toque)
                      </span>
                      <div className="flex flex-wrap gap-2 max-h-36 overflow-y-auto p-1 border border-zinc-800 rounded-xl bg-zinc-950/50">
                        {POPULAR_ITEMS.map((item, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => addPopularItem(item)}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 hover:border-brand-orange/30 text-zinc-300 hover:text-white transition-all cursor-pointer font-sans"
                          >
                            <Plus className="w-3.5 h-3.5 text-brand-orange" />
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* List area */}
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2 font-mono">
                        Especificación de Materiales *
                      </label>
                      <div className="relative">
                        <textarea
                          name="materialsList"
                          value={formData.materialsList}
                          onChange={handleChange}
                          required
                          rows={4}
                          placeholder="Ej.&#10;- 10 bultos de cemento&#10;- 4 varillas de 3/8&#10;- 2 metros de arena cernida"
                          className="block w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-xl text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-brand-orange transition-colors font-mono leading-relaxed"
                        />
                      </div>
                    </div>

                    {/* Delivery Options */}
                    <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 border-dashed">
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          id="deliveryRequired"
                          name="deliveryRequired"
                          checked={formData.deliveryRequired}
                          onChange={handleChange}
                          className="w-4.5 h-4.5 rounded border-zinc-800 text-brand-orange focus:ring-brand-orange bg-zinc-950 bg-none focus:outline-none focus:ring-1 cursor-pointer"
                        />
                        <label htmlFor="deliveryRequired" className="text-xs font-semibold text-white uppercase tracking-wider select-none cursor-pointer font-mono">
                          ¿Requiere entrega a domicilio a pie de obra?
                        </label>
                      </div>

                      <AnimatePresence>
                        {formData.deliveryRequired && (
                          <motion.div
                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                            animate={{ opacity: 1, height: 'auto', marginTop: 12 }}
                            exit={{ opacity: 0, height: 0, marginTop: 0 }}
                            className="overflow-hidden"
                          >
                            <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-1.5 font-mono">
                              Dirección de Entrega Exacta (Calles, Colonia) *
                            </label>
                            <input
                              type="text"
                              name="deliveryAddress"
                              value={formData.deliveryAddress || ''}
                              onChange={handleChange}
                              required={formData.deliveryRequired}
                              placeholder="Ej. Av. División del Nte S/N Col. San Lorenzo, Xochimilco"
                              className="block w-full px-3.5 py-2.5 bg-zinc-900 border border-zinc-800 rounded-lg text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-brand-orange transition-all font-sans"
                            />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl text-sm font-semibold bg-brand-orange text-white hover:bg-brand-orange-dark shadow-lg hover:shadow-[0_4px_20px_rgba(255,94,0,0.3)] transition-all flex items-center justify-center gap-3 select-none disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/35 border-t-white rounded-full animate-spin"></div>
                          <span>Procesando Cotización Industrial...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4.5 h-4.5" />
                          <span>Generar Cotización y Chatear</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  /* Success Screen layout */
                  <motion.div
                    key="quote-success-state"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 px-2 text-center flex flex-col items-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-6">
                      <CheckCircle className="w-8 h-8" />
                    </div>

                    <h3 className="font-display font-bold text-2xl text-white mb-2">
                      ¡Cotización Generada Exitosamente!
                    </h3>
                    <p className="text-sm text-zinc-400 max-w-sm mb-8 leading-relaxed">
                      El pedido ha sido depurado y formateado con éxito. Elige una de las siguientes opciones para ponerte en contacto y dar seguimiento:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md mb-8">
                      {/* WhatsApp trigger */}
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-4 px-6 rounded-xl text-sm font-semibold bg-emerald-500 hover:bg-emerald-600 text-neutral-950 flex items-center justify-center gap-2.5 transition-all shadow-lg hover:shadow-emerald-500/10 cursor-pointer animate-pulse"
                      >
                        <MessageCircleCode className="w-5 h-5" />
                        Enviar por WhatsApp
                      </a>

                      {/* Copy summary */}
                      <button
                        onClick={copyToClipboard}
                        className="py-4 px-6 rounded-xl text-sm font-semibold bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 text-white flex items-center justify-center gap-2 transition-all cursor-pointer"
                      >
                        <Clipboard className="w-4.5 h-4.5 text-zinc-400" />
                        {copied ? '¡Copiado!' : 'Copiar Texto'}
                      </button>
                    </div>

                    {/* Reset Button */}
                    <button
                      onClick={handleReset}
                      className="text-xs text-zinc-500 hover:text-brand-orange hover:underline font-mono uppercase tracking-widest cursor-pointer"
                    >
                      ← Generar Otra Solicitud de Materiales
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
