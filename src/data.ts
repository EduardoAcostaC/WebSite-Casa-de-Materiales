import { Service, Testimonial } from './types';

export const SERVICES_DATA: Service[] = [
  {
    id: 'construccion',
    title: 'Materiales para la Construcción',
    description: 'Todo lo indispensable para cimentar obras de cualquier escala. Suministramos por bulto, metro o camión completo.',
    items: [
      'Varilla corrugada (3/8", 1/2", etc.) y alambrón',
      'Cemento gris Tolteca, Cruz Azul y cal hidratada',
      'Arena de mina, grava de 3/4" y piedra de cantera',
      'Block de concreto, tabique rojo y vigueta/bovedilla',
      'Yeso de alta pureza, pegazulejo y morteros listos'
    ],
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800',
    icon: 'Hammer'
  },
  {
    id: 'ferreteria',
    title: 'Tlapalería y Ferretería',
    description: 'Un catálogo masivo de herramientas de alta duración, pinturas de alto tráfico, conexiones y herrajes industriales.',
    items: [
      'Herramientas manuales y eléctricas (Truper, DeWalt, Makita)',
      'Plomería técnica: conexiones de PVC, CPVC, cobre y Tuboplus',
      'Material eléctrico: cableado de alta gama, mufas, apagadores',
      'Pinturas vinílicas, esmaltes anticorrosivos e impermeabilizantes',
      'Tornillería especializada, clavos, taquetes y candados'
    ],
    image: 'https://images.unsplash.com/photo-1581147036324-c17ac41dfa6c?auto=format&fit=crop&q=80&w=800',
    icon: 'Wrench'
  },
  {
    id: 'entrega',
    title: 'Entrega a Domicilio',
    description: 'Logística optimizada para entregar sus materiales directamente a pie de obra en tiempo récord, con maniobra segura.',
    items: [
      'Entregas urgentes el mismo día en Xochimilco y alcaldías vecinas',
      'Flotilla propia de camión de volteo y camionetas de carga pesada',
      'Tarifas sumamente accesibles de flete o envío gratis según volumen',
      'Coordinación directa via telefónica y WhatsApp con el chofer',
      'Descarga coordinada y respetuosa de señalizaciones de obra'
    ],
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800',
    icon: 'Truck'
  },
  {
    id: 'retiro',
    title: 'Retiro en Tienda',
    description: 'Ahorre tiempo cotizando con anticipación. Preparamos su pedido para que pase por él de manera veloz sin hacer filas.',
    items: [
      'Surtido ágil garantizado en menos de 2 horas tras confirmar cotización',
      'Carga directa a su vehículo asistido por nuestro personal',
      'Estacionamiento cómodo para camionetas y vehículos particulares',
      'Pago cómodo al retirar (Efectivo, Tarjetas, Transferencia)',
      'Atención personalizada de Don Mario y equipo técnico experto'
    ],
    image: 'https://images.unsplash.com/photo-1534224039826-c7a0eda0e6b3?auto=format&fit=crop&q=80&w=800',
    icon: 'Store'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'r1',
    name: 'Ana María M.',
    rating: 5,
    text: 'Excelente servicio, muy rápida su entrega, buen precio y calidad.',
    date: 'Hace 2 semanas'
  },
  {
    id: 'r2',
    name: 'Gabriel R.',
    rating: 5,
    text: 'Muy buen surtido y trato cordial, especialmente don Mario.',
    date: 'Hace 1 mes'
  },
  {
    id: 'r3',
    name: 'Anónimo',
    rating: 5,
    text: 'Excelente trato, precios accesibles, confiables y puntuales con la entrega de material.',
    date: 'Hace 3 semanas'
  }
];

export const POPULAR_ITEMS = [
  'Varilla de 3/8"',
  'Bulto de Cemento Tolteca (50kg)',
  'Bulco de Yeso Max (40kg)',
  'Metro de Arena de mina',
  'Metro de Grava de 3/4"',
  'Alambre Recocido',
  'Tubo Tuboplus Hidráulico 1/2"',
  'Pintura Acrílica Blanca (19L)',
  'Cinta Tefrón Truper',
  'Caja de Cable Eléctrico Calibre 12'
];
