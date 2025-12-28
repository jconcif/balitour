document.addEventListener('DOMContentLoaded', () => {
    // Translations
    const translations = {
        es: {
            'nav.home': 'Inicio',
            'nav.tours': 'Tours',
            'nav.reviews': 'Reseñas',
            'nav.faq': 'FAQ',
            'nav.about': 'Nosotros',
            'nav.contact': 'Contacto',
            'hero.badge': 'Agenda abierta Enero / Febrero 2026',
            'hero.title': 'Bali no se visita, se vive.',
            'hero.subtitle': 'Descubre la esencia de la isla a través de guías locales que conocen cada rincón y te muestran un Bali auténtico, cercano y sin prisas.',
            'hero.cta': 'Planear mi viaje a Bali',
            'hero.cta_micro': 'Respuesta en menos de 24h · Grupos reducidos para una experiencia real',
            'value.guides.title': 'Guías Locales Expertos',
            'value.guides.desc': 'Nuestros guías conocen Bali a fondo tras años recorriendo la isla, explorando rutas, templos y rincones menos turísticos, para ofrecerte una experiencia auténtica y cercana.',
            'value.friendly.title': 'Servicio Personalizado',
            'value.friendly.desc': 'Viajes diseñados a tu ritmo, con flexibilidad y atención real. Te acompañamos como lo haría un amigo local, cuidando cada detalle para que solo te preocupes de disfrutar.',
            'value.safety.title': 'Seguridad y Tranquilidad',
            'value.safety.desc': 'Conductores profesionales, vehículos cómodos y una organización pensada para tu bienestar. Explora Bali con calma, confianza y total tranquilidad.',
            'trust.certified': 'Guías Certificados',
            'trust.rating': '4.9★ Valoración',
            'trust.travelers': '5000+ Viajeros',
            'trust.satisfaction': '100% Satisfacción',
            'tours.title': 'Nuestras Rutas Recomendadas',
            'tours.subtitle': 'Selección de los mejores itinerarios, personalizables para ti.',
            'trust.message': '✨ Reserva ahora y paga al finalizar el tour.',
            'tour1.title': 'Corazón de Bali (Ubud Clásico)',
            'tour1.desc': 'Explora impresionantes terrazas de arroz, el sagrado bosque de los monos y templos antiguos en el corazón cultural de Bali.',
            'tour2.title': 'Puertas del Cielo (Ruta Este)',
            'tour2.desc': 'Captura la icónica foto del templo Lempuyang, visita el palacio de agua Tirta Gangga y descubre playas de arena negra.',
            'tours.title': 'Nuestras Rutas Exclusivas',
            'tours.subtitle': 'Selección de los mejores itinerarios, personalizables para ti.',
            'tour1.title': 'El Corazón de Bali',
            'tour1.desc': 'Siente la humedad de la selva, el susurro de los templos al amanecer y el verde infinito de las terrazas de arroz en un día sin prisas.',
            'tour2.title': 'Puertas del Cielo y Magia del Este',
            'tour2.desc': 'Camina entre el agua sagrada de Tirta Gangga y contempla la majestuosidad de Lempuyang antes de que lleguen las multitudes.',
            'tour3.title': 'Atardeceres y Acantilados',
            'tour3.desc': 'El rugido del océano en Uluwatu, la mística danza Kecak y una cena bajo las estrellas en la arena de Jimbaran.',
            'tour4.title': 'Naturaleza Salvaje del Norte',
            'tour4.desc': 'Cascadas escondidas donde solo llega el sonido del agua y templos flotantes que parecen suspendidos en el tiempo.',
            'tour.price': 'desde 60€ / día',
            'tour.btn': 'Consultar Disponibilidad',
            'btn.book': 'Consultar disponibilidad',
            'reviews.title': 'Historias de nuestros viajeros',
            'review1.text': '"Increíble. Wayan no solo fue un guía, sino el amigo que nos abrió las puertas de su cultura. Fue el alma de nuestro viaje."',
            'review1.meta': 'Carlos & Maria — Luna de miel, España',
            'review2.text': '"La tranquilidad de viajar con expertos. Coche impecable y un trato humano que ya no se encuentra en las agencias grandes."',
            'review2.meta': 'Familia López — Viaje familiar, México',
            'review3.text': '"Uluwatu fue mágico. Las recomendaciones locales nos hicieron evitar las trampas para turistas. Un 10."',
            'review3.meta': 'Alejandro R. — Viajero solo, Argentina',
            'review4.text': '"Seguridad y calidez. Como mujer viajando sola, buscaba confianza y encontré una familia en Bali."',
            'review4.meta': 'Elena G. — Viajera solo, España',
            'review5.text': '"Bali auténtico. Las cascadas del norte sin nadie alrededor fueron el momento más especial de nuestra vida."',
            'review5.meta': 'Pablo & Ana — Aniversario, Chile',
            'review6.text': '"Un servicio boutique a un precio honesto. No es un tour, es una experiencia diseñada con el corazón."',
            'review6.meta': 'Laura M. — Grupo de amigas, España',
            'faq.title': 'Resolvemos tus Dudas',
            'faq.q1': '¿Las entradas están incluidas?',
            'faq.a1': 'No, el precio cubre transporte privado y servicio de guía. Las entradas a los templos se pagan por separado (aproximadamente 3-5€ por sitio).',
            'faq.q2': '¿Cómo realizo el pago?',
            'faq.a2': 'El pago se realiza en efectivo (Rupias Indonesias o Euros) directamente a tu guía al final del tour. También aceptamos transferencias bancarias.',
            'faq.q3': '¿Puedo personalizar mi tour?',
            'faq.a3': '¡Por supuesto! Todos nuestros tours son privados y flexibles. Podemos adaptar el itinerario según tus intereses y preferencias.',
            'faq.q4': '¿En qué idioma se realizan los tours?',
            'faq.a4': 'Los tours se realizan en inglés. Español disponible bajo solicitud mediante traductor.',
            'about.title': 'Nuestra Esencia',
            'about.p1': 'No vendemos transporte, compartimos nuestro hogar. Cantik Tours nació para rescatar el turismo humano: sin prisas, con propósito y con el respeto que solo un local puede enseñarte.',
            'about.p2': 'Creemos en los grupos pequeños, en las conversaciones reales y en mostrarte el Bali que no sale en las postales genéricas. Diseñado en Bali, guiado por locales.',
            'footer.desc': 'Tu puerta de entrada a la magia de Indonesia. Expertos en crear recuerdos imborrables.',
            'footer.contact': 'Hablemos de tu Viaje',
            'footer.btn': 'Chat en WhatsApp',
            'footer.rights': 'Todos los derechos reservados.',
            'footer.links': 'Enlaces Rápidos',
            'footer.brand_desc': 'Tours privados auténticos en Bali con guías locales que hablan español e inglés.',
            'modal.title': 'Comienza tu Aventura',
            'modal.subtitle': 'Confirmaremos los detalles contigo. Para reservar tu día, se solicita un pequeño depósito; el resto se paga al finalizar el tour.',
            'modal.label.tour': 'Ruta o Interés',
            'modal.label.name': 'Nombre Completo',
            'modal.label.date': 'Fecha Tentativa',
            'modal.label.pax': 'Nº Personas',
            'modal.label.hotel': 'Hotel / Lugar de Recogida',
            'modal.label.lang': 'Idioma Preferido',
            'lang.es': 'Español',
            'lang.en': 'Inglés',
            'nav.guide': 'Bali Guía 2026',
            'modal.label.coupon': 'Cupón (Opcional)',
            'modal.placeholder.coupon': 'Ej: BALILOVER',
            'modal.btn.send': 'Enviar Solicitud',
            'modal.placeholder.hotel': 'Ej: Hotel W, Seminyak',
            'modal.placeholder.name': 'Tu nombre',
            'gallery.title': 'Momentos en el Paraíso',
            'gallery.subtitle': 'Síguenos en @CantikToursBali',
            'gallery.btn': 'Ver Instagram',
            // Guide Page - ES
            'guide.hero.title': 'Guía Esencial de Bali',
            'guide.hero.subtitle': 'Todo lo que necesitas saber antes de aterrizar en la Isla de los Dioses. Visados, zonas y consejos locales.',
            'guide.visa.title': '🛂 Visado para entrar a Indonesia (2025)',
            'guide.visa.p1': 'Para la mayoría de nacionalidades (España, Chile, México, Argentina, etc.), el proceso es muy sencillo. Tienes dos opciones principales:',
            'guide.visa.voa.title': '1. Visa on Arrival (VoA) - En el Aeropuerto',
            'guide.visa.voa.desc': 'Es lo más común. Al aterrizar en Bali, vas al mostrador de "Visa on Arrival".',
            'guide.visa.voa.cost': '<strong>Costo:</strong> 500.000 IDR (aprox. 30€ / 35 USD).',
            'guide.visa.voa.pay': '<strong>Pago:</strong> Efectivo (Euros, Dólares o Rupias) o Tarjeta.',
            'guide.visa.voa.duration': '<strong>Duración:</strong> 30 días (extensible una vez por otros 30).',
            'guide.visa.evisa.title': '2. e-Visa (Online) - Recomendado',
            'guide.visa.evisa.desc': 'Puedes tramitarlo antes de viajar en la web oficial de inmigración. Te ahorras la cola de pago en el aeropuerto.',
            'guide.visa.evisa.tip': '<strong>Tip Pro:</strong> Asegúrate de usar solo la web oficial (molina.imigrasi.go.id) para evitar estafas.',
            'guide.visa.req': '<strong>Requisito Importante:</strong> Tu pasaporte debe tener al menos 6 meses de validez desde el día de entrada y una página en blanco.',
            'guide.levy.title': '💸 Impuesto Turístico (Bali Levy)',
            'guide.levy.desc': 'Desde 2024, existe una tasa turística obligatoria para entrar a la isla de Bali.',
            'guide.levy.cost': '<strong>Costo:</strong> 150.000 IDR (aprox. 9€) por persona.',
            'guide.levy.rec': 'Se recomienda pagarlo online antes de viajar a través de la web oficial "Love Bali" para agilizar tu salida del aeropuerto.',
            'guide.zones.title': '📍 ¿Dónde alojarse? Zonas principales',
            'guide.zones.desc': 'Bali es más grande de lo que parece y el tráfico puede ser lento. Elegir bien tu base es clave.',
            'guide.zone.ubud.title': '🌿 Ubud (Centro/Cultura)',
            'guide.zone.ubud.desc': 'Selva, terrazas de arroz, yoga y templos. Es el corazón cultural. Ideal para estar tranquilo y conectar con la naturaleza.',
            'guide.zone.ubud.for': 'Perfecto para: Parejas, familias, amantes del yoga.',
            'guide.zone.ulu.title': '🌊 Uluwatu (Sur/Playas)',
            'guide.zone.ulu.desc': 'Las mejores playas de agua turquesa y acantilados impresionantes. Ambiente surfero y relajado. Necesitas moto o transporte.',
            'guide.zone.ulu.for': 'Perfecto para: Surfers, amantes de la playa, atardeceres.',
            'guide.zone.canggu.title': '🍹 Canggu / Seminyak (Oeste/Moda)',
            'guide.zone.canggu.desc': 'Tiendas de diseño, beach clubs, cafeterías "aesthetic" y mucha vida nocturna. Mucho tráfico pero mucha acción.',
            'guide.zone.canggu.for': 'Perfecto para: Jóvenes, nómadas digitales, fiesta y compras.',
            'guide.zone.nusa.title': '🏖️ Nusa Dua / Sanur (Relax/Lujo)',
            'guide.zone.nusa.desc': 'Resorts grandes a pie de playa. Sanur es muy tranquilo y familiar. Nusa Dua es lujo y seguridad.',
            'guide.zone.nusa.for': 'Perfecto para: Familias con niños, lunas de miel relax.',
            'guide.tips.title': '💡 Tips Rápidos de Supervivencia',
            'guide.tip.currency': '<strong>💰 Moneda:</strong> Rupia Indonesia (IDR). 1€ ≈ 17.000 IDR. Trae billetes de 50€/100€ en perfecto estado (sin roturas) para cambiar, o usa cajeros (ATM) fiables dentro de bancos.',
            'guide.tip.plugs': '<strong>🔌 Enchufes:</strong> Tipo C y F (los mismos que en España/Europa). No necesitas adaptador.',
            'guide.tip.transport': '<strong>🛵 Transporte:</strong> No existe transporte público eficiente. Usa apps como Grab/Gojek (tipo Uber) para trayectos cortos o contrata un <strong>conductor privado</strong> para excursiones de día (¡como nosotros! 😉).',
            'guide.tip.water': '<strong>💧 Agua:</strong> Nunca bebas agua del grifo. Usa siempre agua embotellada, incluso para lavarte los dientes si tienes estómago sensible.',
            'guide.cta.title': '¿Listo para explorar la isla?',
            'guide.cta.desc': 'Deja que nos encarguemos del transporte y los detalles.',
            'guide.cta.btn': 'Ver Tours Disponibles',
            'guide.cta.btn_hero': 'Empezar a leer',
            'guide.internet.title': '🌐 Internet: ¿Cómo estar conectado?',
            'guide.internet.esim_title': 'eSIM (Airalo / Holafly)',
            'guide.internet.esim_desc': 'Lo más cómodo. La instalas antes de viajar y tienes internet nada más aterrizar. Ideal si tu teléfono es moderno.',
            'guide.internet.sim_title': 'SIM Física (Telkomsel)',
            'guide.internet.sim_desc': 'Lo más económico. Busca tiendas oficiales de Telkomsel. Ojo: por ley hay que registrar el IMEI del teléfono si te quedas más de 90 días.',
            'guide.money.title': '🏧 Dinero, Cajeros y Estafas',
            'guide.money.atms': 'Usa preferiblemente cajeros **dentro** de bancos (BNI, Mandiri, BCA). Evita cajeros aislados en la calle para prevenir clonaciones.',
            'guide.money.exchange': 'Casas de Cambio: No confíes en locales con "No Commission" y tasas demasiado buenas. Busca locales autorizados (BMC o Central Kuta) para evitar que te "desaparezcan" billetes al contar.',
            'guide.apps.title': '📲 Apps Imprescindibles',
            'guide.apps.grab_desc': 'Los "Uber" de Bali. Imprescindibles para pedir transporte (moto o coche) y comida a domicilio a precios locales.',
            'guide.apps.maps_desc': 'Funciona muy bien. Te recomendamos descargar el mapa de la isla offline antes de salir.'
        },
        en: {
            'nav.home': 'Home',
            'nav.tours': 'Experiences',
            'nav.reviews': 'Testimonials',
            'nav.faq': 'Q&A',
            'nav.about': 'About Us',
            'nav.contact': 'Contact',
            'hero.badge': 'Open Booking January 2026',
            'hero.title': 'Bali isn’t just visited, it’s lived.',
            'hero.subtitle': 'Discover the essence of the island through local guides who know every corner and show you an authentic, close, and unhurried Bali.',
            'hero.cta': 'Plan my Bali trip',
            'hero.cta_micro': 'Response in under 24h · Small groups for a real experience',
            'value.guides.title': 'Expert Local Guides',
            'value.guides.desc': 'Our guides know Bali deeply after years of exploring the island, discovering routes, temples, and hidden gems to offer you an authentic and close experience.',
            'value.friendly.title': 'Personalized Service',
            'value.friendly.desc': 'Trips designed at your pace, with flexibility and genuine attention. We accompany you like a local friend would, taking care of every detail so you only worry about enjoying.',
            'value.safety.title': 'Safety and Peace of Mind',
            'value.safety.desc': 'Professional drivers, comfortable vehicles, and an organization designed for your well-being. Explore Bali with calm, confidence, and total peace.',
            'trust.certified': 'Certified Guides',
            'trust.rating': '4.9★ Rating',
            'trust.travelers': '5000+ Travelers',
            'trust.satisfaction': '100% Satisfaction',
            'tours.title': 'Our Recommended Routes',
            'tours.subtitle': 'Selection of the best itineraries, customizable for you.',
            'trust.message': '✨ Book now and pay at the end of the tour.',
            'tour1.title': 'The Heart of Bali',
            'tour1.desc': 'Feel the jungle’s breath and the whisper of ancient temples at dawn. An unhurried day through infinite rice terraces.',
            'tour2.title': 'Gates of Heaven & Eastern Magic',
            'tour2.desc': 'Walk through the sacred waters of Tirta Gangga and witness the majesty of Lempuyang as it was meant to be seen.',
            'tour3.title': 'Sunsets & Dramatic Cliffs',
            'tour3.desc': 'The roar of the ocean in Uluwatu, the mystical Kecak dance, and a seafood dinner under the stars in Jimbaran.',
            'tour4.title': 'Northern Wild Nature',
            'tour4.desc': 'Hidden waterfalls where only the sound of water remains, and floating temples that seem suspended in time.',
            'tour.price': 'from 60€ / day',
            'tour.btn': 'Check Availability',
            'btn.book': 'Check availability',
            'reviews.title': 'Traveler Stories',
            'review1.text': '"Incredible. Wayan was not just a guide, but a friend. He was the soul of our trip."',
            'review1.meta': 'Carlos & Maria — Honeymoon, Spain',
            'review2.text': '"Peace of mind. Brand new car and a human touch you just don’t find with big agencies anymore."',
            'review2.meta': 'Family López — Family Trip, Mexico',
            'review3.text': '"Uluwatu was magical. Local recommendations helped us avoid all the tourist traps. 10/10."',
            'review3.meta': 'Alejandro R. — Solo Traveler, Argentina',
            'review4.text': '"As a solo female traveler, Wayan made me feel like family. Safe, respected, and truly cared for."',
            'review4.meta': 'Elena G. — Solo Traveler, Spain',
            'review5.text': '"Authentic Bali. The northern waterfalls with no one else around was the highlight of our lives."',
            'review5.meta': 'Pablo & Ana — Anniversary, Chile',
            'review6.text': '"Boutique service at an honest price. It’s not a tour, it’s a memory created with heart."',
            'review6.meta': 'Laura M. — Group of friends, Spain',
            'faq.title': 'Common Questions',
            'faq.q1': 'Are entrance fees included?',
            'faq.a1': 'No, the price covers private transportation and guide service. Temple entrance fees are paid separately (approximately 3-5€ per site).',
            'faq.q2': 'How do I make payment?',
            'faq.a2': 'Payment is made in cash (Indonesian Rupiah or Euros) directly to your guide at the end of the tour. We also accept bank transfers.',
            'faq.q3': 'Can I customize my tour?',
            'faq.a3': 'Absolutely! All our tours are private and flexible. We can adapt the itinerary to match your interests and preferences.',
            'faq.q4': 'What language are the tours conducted in?',
            'faq.a4': 'Tours are conducted in English. Spanish available upon request with a translator.',
            'about.title': 'Our Essence',
            'about.p1': 'We don’t sell transportation; we share our home. Cantik Tours was born to rescue human tourism: unhurried, purposeful, and with the respect only a local can show you.',
            'about.p2': 'We believe in small groups, real conversations, and showing you the Bali that doesn’t fit on a generic postcard. Designed in Bali, guided by locals.',
            'footer.desc': 'Your gateway to the magic of Indonesia. Experts in creating unforgettable memories.',
            'footer.contact': 'Let\'s Talk Travel',
            'footer.btn': 'Chat on WhatsApp',
            'footer.links': 'Quick Links',
            'footer.rights': 'All rights reserved.',
            'footer.brand_desc': 'Authentic private tours in Bali with local Spanish & English speaking guides.',
            'modal.title': 'Start Your Adventure',
            'modal.subtitle': 'We’ll confirm the details with you. To secure your day, a small deposit is required; the rest is paid at the end of the tour.',
            'modal.label.tour': 'Route or Interest',
            'modal.label.name': 'Full Name',
            'modal.label.date': 'Tentative Date',
            'modal.label.pax': 'Number of Travelers',
            'modal.label.hotel': 'Hotel / Pickup Location',
            'modal.label.lang': 'Preferred Language',
            'lang.es': 'Spanish',
            'lang.en': 'English',
            'nav.guide': 'Bali Guide 2026',
            'modal.label.coupon': 'Coupon (Optional)',
            'modal.placeholder.coupon': 'Ex: BALILOVER',
            'modal.btn.send': 'Send Request',
            'modal.placeholder.hotel': 'Ex: W Hotel, Seminyak',
            'modal.placeholder.name': 'Your name',
            'gallery.title': 'Moments in Paradise',

            // Guide Page - EN
            'guide.hero.title': 'Essential Bali Guide',
            'guide.hero.subtitle': 'Everything you need to know before landing on the Island of Gods. Visas, zones, and local tips.',
            'guide.visa.title': '🛂 Visa for Indonesia (2025)',
            'guide.visa.p1': 'For most nationalities, the process is very simple. You have two main options:',
            'guide.visa.voa.title': '1. Visa on Arrival (VoA) - At the Airport',
            'guide.visa.voa.desc': 'The most common option. Upon landing in Bali, go to the "Visa on Arrival" counter.',
            'guide.visa.voa.cost': '<strong>Cost:</strong> 500,000 IDR (approx. 30€ / 35 USD).',
            'guide.visa.voa.pay': '<strong>Payment:</strong> Cash (Euros, Dollars, or Rupiah) or Card.',
            'guide.visa.voa.duration': '<strong>Duration:</strong> 30 days (extendable once for another 30).',
            'guide.visa.evisa.title': '2. e-Visa (Online) - Recommended',
            'guide.visa.evisa.desc': 'You can apply before traveling on the official immigration website. Save time skipping the payment queue at the airport.',
            'guide.visa.evisa.tip': '<strong>Pro Tip:</strong> Ensure you use only the official website (molina.imigrasi.go.id) to avoid scams.',
            'guide.visa.req': '<strong>Important Requirement:</strong> Your passport must be valid for at least 6 months from the date of entry and have one blank page.',
            'guide.levy.title': '💸 Tourism Levy (Bali Levy)',
            'guide.levy.desc': 'Since 2024, there is a mandatory tourism levy to enter the island of Bali.',
            'guide.levy.cost': '<strong>Cost:</strong> 150,000 IDR (approx. 9€ / 10 USD) per person.',
            'guide.levy.rec': 'It is recommended to pay online before traveling via the "Love Bali" website or app to speed up the airport exit, though counters are available.',
            'guide.zones.title': '📍 Where to Stay? Main Zones',
            'guide.zones.desc': 'Bali is bigger than it looks and traffic can be slow. Choosing your base wisely is key.',
            'guide.zone.ubud.title': '🌿 Ubud (Center/Culture)',
            'guide.zone.ubud.desc': 'Jungle, rice terraces, yoga, and temples. The cultural heart. Ideal for tranquility and connecting with nature.',
            'guide.zone.ubud.for': 'Perfect for: Couples, families, yoga lovers.',
            'guide.zone.ulu.title': '🌊 Uluwatu (South/Beaches)',
            'guide.zone.ulu.desc': 'Best turquoise water beaches and stunning cliffs. Surfer vibes and relaxed atmosphere. You need a scooter or transport.',
            'guide.zone.ulu.for': 'Perfect for: Surfers, beach lovers, sunsets.',
            'guide.zone.canggu.title': '🍹 Canggu / Seminyak (West/Trend)',
            'guide.zone.canggu.desc': 'Design shops, beach clubs, aesthetic cafes, and nightlife. Heavy traffic but lots of action.',
            'guide.zone.canggu.for': 'Perfect for: Youth, digital nomads, partying, and shopping.',
            'guide.zone.nusa.title': '🏖️ Nusa Dua / Sanur (Relax/Luxury)',
            'guide.zone.nusa.desc': 'Large beachfront resorts. Sanur is very quiet and family-friendly. Nusa Dua is luxury and security.',
            'guide.zone.nusa.for': 'Perfect for: Families with kids, relaxing honeymoons.',
            'guide.tips.title': '💡 Quick Survival Tips',
            'guide.tip.currency': '<strong>💰 Currency:</strong> Indonesian Rupiah (IDR). 1€ ≈ 17,000 IDR. Bring pristine 50€/100€ bills (no tears) to exchange, or use reliable ATMs inside banks.',
            'guide.tip.plugs': '<strong>🔌 Plugs:</strong> Type C and F (European standard). You might need an adapter if coming from US/UK.',
            'guide.tip.transport': '<strong>🛵 Transport:</strong> No efficient public transport exists. Use apps like Grab/Gojek (like Uber) for short trips or hire a <strong>private driver</strong> for day tours (like us! 😉).',
            'guide.tip.water': '<strong>💧 Water:</strong> Never drink tap water. Always use bottled water, even for brushing teeth if you have a sensitive stomach.',
            'guide.cta.title': 'Ready to explore the island?',
            'guide.cta.desc': 'Let us handle the transport and details.',
            'guide.cta.btn': 'View Available Tours',
            'guide.cta.btn_hero': 'Start Reading',
            'guide.internet.title': '🌐 Internet: How to Stay Connected?',
            'guide.internet.esim_title': 'eSIM (Airalo / Holafly)',
            'guide.internet.esim_desc': 'The most convenient. Install it before traveling and have internet as soon as you land. Best for modern phones.',
            'guide.internet.sim_title': 'Physical SIM (Telkomsel)',
            'guide.internet.sim_desc': 'The most economical. Look for official Telkomsel shops. Note: by law, you must register your phone\'s IMEI if staying over 90 days.',
            'guide.money.title': '🏧 Money, ATMs, and Scams',
            'guide.money.atms': 'Preferably use ATMs **inside** banks (BNI, Mandiri, BCA). Avoid isolated street ATMs to prevent skimming.',
            'guide.money.exchange': 'Money Changers: Don\'t trust "No Commission" shops with too-good-to-be-true rates. Look for authorized ones (BMC or Central Kuta).',
            'guide.apps.title': '📲 Essential Apps',
            'guide.apps.grab_desc': 'The "Uber" of Bali. Essential for ordering transport (bike or car) and food delivery at local prices.',
            'guide.apps.maps_desc': 'Works great. We recommend downloading the island map offline before heading out.'
        },
        id: {
            'nav.home': 'Beranda',
            'nav.tours': 'Tur',
            'nav.reviews': 'Ulasan',
            'nav.faq': 'FAQ',
            'nav.about': 'Tentang Kami',
            'nav.contact': 'Kontak',
            'hero.badge': 'Agenda Terbuka Januari 2026',
            'hero.title': 'Bali bukan sekadar dikunjungi, tapi dihidupi.',
            'hero.subtitle': 'Temukan esensi pulau ini melalui pemandu lokal yang mengenal setiap sudut dan menunjukkan Bali yang autentik, dekat, dan santai.',
            'hero.cta': 'Jelajahi Tur',
            'hero.cta_micro': 'Respon kurang dari 24 jam · Grup kecil untuk pengalaman nyata',
            'value.guides.title': 'Pemandu Lokal Ahli',
            'value.guides.desc': 'Pemandu kami mengenal Bali secara mendalam setelah bertahun-tahun menjelajahi pulau, menemukan rute, pura, dan sudut-sudut rahasia untuk menawarkan pengalaman yang autentik dan dekat.',
            'value.friendly.title': 'Layanan Personal',
            'value.friendly.desc': 'Perjalanan yang dirancang sesuai ritme Anda, dengan fleksibilitas dan perhatian nyata. Kami menemani Anda layaknya teman lokal, menjaga setiap detail agar Anda hanya fokus menikmati.',
            'value.safety.title': 'Keamanan dan Ketenangan',
            'value.safety.desc': 'Pengemudi profesional, kendaraan nyaman, dan organisasi yang dirancang untuk kesejahteraan Anda. Agar Anda menjelajahi Bali dengan tenang, percaya diri, dan penuh kedamaian.',
            'trust.certified': 'Pemandu Bersertifikat',
            'trust.rating': '4.9★ Rating',
            'trust.travelers': '5000+ Wisatawan',
            'trust.satisfaction': '100% Kepuasan',
            'tours.title': 'Rute Rekomendasi Kami',
            'tours.subtitle': 'Pilihan itinerary terbaik, dapat disesuaikan untuk Anda.',
            'trust.message': '✨ Pesan sekarang dan bayar di akhir tur.',
            'tour1.title': 'Jantung Bali (Ubud Klasik)',
            'tour1.desc': 'Jelajahi sawah terasering yang menakjubkan, hutan monyet suci, dan pura kuno di jantung budaya Bali.',
            'tour2.title': 'Gerbang Surga (Rute Timur)',
            'tour2.desc': 'Ambil foto ikonik pura Lempuyang, kunjungi istana air Tirta Gangga, dan temukan pantai pasir hitam.',
            'tour3.title': 'Matahari Terbenam & Ombak (Rute Selatan)',
            'tour3.desc': 'Rasakan tebing Uluwatu yang dramatis, tari api Kecak tradisional saat matahari terbenam, dan makan malam seafood segar di Jimbaran.',
            'tour4.title': 'Keajaiban Utara (Alam)',
            'tour4.desc': 'Temukan air terjun yang menakjubkan, danau kembar yang tenang, dan pura terapung ikonik Ulun Danu Beratan.',
            'btn.book': 'Pesan Sekarang',
            'reviews.title': 'Apa Kata Wisatawan Kami',
            'review1.text': '"Pengalaman luar biasa! Pemandu kami Wayan berbicara bahasa Spanyol dengan sempurna dan membawa kami ke permata tersembunyi yang tidak akan pernah kami temukan sendiri. Sangat direkomendasikan!"',
            'review2.text': '"Keputusan terbaik perjalanan kami! Pemandu profesional, kendaraan nyaman, dan layanan luar biasa. Tidak bisa meminta lebih!"',
            'review3.text': '"Kami melakukan rute selatan dan itu ajaib. Matahari terbenam di Uluwatu dan makan malam seafood yang mereka atur di Jimbaran tak terlupakan!"',
            'review4.text': '"Sebagai pelancong wanita solo, keamanan adalah kunci. Wayan membuat saya merasa sangat nyaman dan aman."',
            'review5.text': '"Berkat mereka kami menghindari jebakan turis dan melihat Bali yang asli."',
            'review6.text': '"Nilai uang yang luar biasa. Layanan mewah dengan harga pantas."',
            'faq.title': 'Pertanyaan yang Sering Diajukan',
            'faq.q1': 'Apakah biaya masuk sudah termasuk?',
            'faq.a1': 'Tidak, harga mencakup transportasi pribadi dan layanan pemandu. Biaya masuk pura dibayar terpisah (sekitar 3-5€ per lokasi).',
            'faq.q2': 'Bagaimana cara pembayaran?',
            'faq.a2': 'Pembayaran dilakukan secara tunai (Rupiah Indonesia atau Euro) langsung kepada pemandu Anda di akhir tur. Kami juga menerima transfer bank.',
            'faq.q3': 'Bisakah saya menyesuaikan tur saya?',
            'faq.a3': 'Tentu saja! Semua tur kami bersifat pribadi dan fleksibel. Kami dapat menyesuaikan itinerary sesuai minat dan preferensi Anda.',
            'faq.q4': 'Bahasa apa yang digunakan untuk tur?',
            'faq.a4': 'Tur dilakukan dalam bahasa Inggris. Bahasa Spanyol tersedia atas permintaan dengan penerjemah.',
            'about.title': 'Tentang Kami',
            'about.p1': 'Kami adalah tim pemandu Bali yang berdedikasi untuk berbagi keindahan dan budaya pulau kami. Dengan pengalaman bertahun-tahun menyambut wisatawan dari seluruh dunia, kami menciptakan <strong>Bali Tour</strong> untuk menawarkan pengalaman autentik dan personal.',
            'about.p2': 'Misi kami sederhana: membantu Anda menemukan esensi sejati Bali sambil merasa nyaman dan terawat dengan baik. Tanpa terburu-buru, hanya senyuman, koneksi tulus, dan kenangan tak terlupakan.',
            'footer.desc': 'Pertanyaan? Mengobrol dengan kami langsung untuk merencanakan perjalanan sempurna Anda.',
            'footer.contact': 'Hubungi Kami',
            'footer.btn': 'Chat di WhatsApp',
            'footer.links': 'Tautan Cepat',
            'footer.rights': 'Hak cipta dilindungi.',
            'footer.brand_desc': 'Tur pribadi otentik di Bali dengan pemandu lokal berbahasa Spanyol & Inggris.',
            'modal.title': 'Pesan Petualangan Anda',
            'modal.label.tour': 'Tur Dipilih',
            'modal.label.name': 'Nama Lengkap',
            'modal.label.date': 'Tanggal Pilihan',
            'modal.label.pax': 'Jumlah Wisatawan',
            'modal.label.hotel': 'Hotel / Lokasi Penjemputan',
            'modal.label.lang': 'Bahasa Tur',
            'lang.es': 'Spanyol (Tergantung ketersediaan)',
            'lang.en': 'Inggris',
            'modal.btn.send': 'Kirim ke WhatsApp',
            'modal.placeholder.name': 'Nama Anda',
            'modal.placeholder.hotel': 'Cth: Hotel W, Seminyak',
            'gallery.title': 'Momen di Surga',
            'gallery.subtitle': 'Ikuti kami @CantikToursBali',
            'gallery.btn': 'Lihat Instagram',
            // Guide Page - ID
            'guide.hero.title': 'Panduan Penting Bali',
            'guide.hero.subtitle': 'Segala hal yang perlu Anda ketahui sebelum mendarat di Pulau Dewata. Visa, zona, dan tips lokal.',
            'guide.visa.title': '🛂 Visa Masuk Indonesia (2025)',
            'guide.visa.p1': 'Untuk sebagian besar kebangsaan, prosesnya sangat sederhana. Anda memiliki dua opsi utama:',
            'guide.visa.voa.title': '1. Visa on Arrival (VoA) - Di Bandara',
            'guide.visa.voa.desc': 'Paling umum. Saat mendarat di Bali, kunjungi loket "Visa on Arrival".',
            'guide.visa.voa.cost': '<strong>Biaya:</strong> 500.000 IDR (sekitar 30€ / 35 USD).',
            'guide.visa.voa.pay': '<strong>Pembayaran:</strong> Tunai (Euro, Dolar, atau Rupiah) atau Kartu.',
            'guide.visa.voa.duration': '<strong>Durasi:</strong> 30 hari (dapat diperpanjang satu kali untuk 30 hari lagi).',
            'guide.visa.evisa.title': '2. e-Visa (Online) - Direkomendasikan',
            'guide.visa.evisa.desc': 'Anda bisa mengurusnya sebelum bepergian di web resmi imigrasi. Hemat waktu tanpa antre bayar di bandara.',
            'guide.visa.evisa.tip': '<strong>Info Pro:</strong> Pastikan hanya menggunakan web resmi (molina.imigrasi.go.id) untuk menghindari penipuan.',
            'guide.visa.req': '<strong>Syarat Penting:</strong> Paspor Anda harus berlaku setidaknya 6 bulan dari tanggal masuk dan memiliki satu halaman kosong.',
            'guide.levy.title': '💸 Retribusi Wisatawan (Bali Levy)',
            'guide.levy.desc': 'Sejak 2024, ada retribusi wajib bagi wisatawan asing untuk masuk ke Bali.',
            'guide.levy.cost': '<strong>Biaya:</strong> 150.000 IDR per orang.',
            'guide.levy.rec': 'Disarankan bayar online sebelum berangkat via web atau aplikasi "Love Bali" untuk mempercepat keluar bandara, meski ada loket di sana.',
            'guide.zones.title': '📍 Menginap Di Mana? Zona Utama',
            'guide.zones.desc': 'Bali lebih besar dari kelihatannya dan macet bisa parah. Memilih basis yang tepat adalah kunci.',
            'guide.zone.ubud.title': '🌿 Ubud (Pusat/Budaya)',
            'guide.zone.ubud.desc': 'Hutan, sawah terasering, yoga, dan pura. Jantung budaya Bali. Ideal untuk ketenangan dan alam.',
            'guide.zone.ubud.for': 'Cocok untuk: Pasangan, keluarga, pecinta yoga.',
            'guide.zone.ulu.title': '🌊 Uluwatu (Selatan/Pantai)',
            'guide.zone.ulu.desc': 'Pantai air turkis terbaik dan tebing memukau. Suasana surfer dan santai. Butuh motor atau transportasi.',
            'guide.zone.ulu.for': 'Cocok untuk: Peselancar, pecinta pantai, matahari terbenam.',
            'guide.zone.canggu.title': '🍹 Canggu / Seminyak (Barat/Tren)',
            'guide.zone.canggu.desc': 'Toko desain, beach club, kafe estetik, dan kehidupan malam. Macet tapi banyak aksi.',
            'guide.zone.canggu.for': 'Cocok untuk: Anak muda, digital nomad, pesta dan belanja.',
            'guide.zone.nusa.title': '🏖️ Nusa Dua / Sanur (Santai/Mewah)',
            'guide.zone.nusa.desc': 'Resor besar tepi pantai. Sanur sangat tenang dan ramah keluarga. Nusa Dua adalah kemewahan dan keamanan.',
            'guide.zone.nusa.for': 'Cocok untuk: Keluarga dengan anak, bulan madu santai.',
            'guide.tips.title': '💡 Tips Bertahan Hidup Singkat',
            'guide.tip.currency': '<strong>💰 Mata Uang:</strong> Rupiah Indonesia (IDR). 1€ ≈ 17.000 IDR. Gunakan ATM terpercaya di dalam bank untuk tarik tunai.',
            'guide.tip.plugs': '<strong>🔌 Colokan:</strong> Tipe C dan F (standar Eropa). Tidak perlu adaptor bagi sebagian besar turis Eropa.',
            'guide.tip.transport': '<strong>🛵 Transportasi:</strong> Tidak ada transportasi umum yang efisien. Gunakan aplikasi Grab/Gojek atau sewa <strong>supir pribadi</strong> untuk tur harian (seperti kami! 😉).',
            'guide.tip.water': '<strong>💧 Air:</strong> Jangan minum air keran. Selalu gunakan air kemasan, bahkan untuk gosok gigi jika perut sensitif.',
            'guide.cta.title': 'Siap menjelajahi pulau?',
            'guide.cta.desc': 'Biar kami yang urus transportasi dan detailnya.',
            'guide.cta.btn': 'Lihat Tur Tersedia',
            'guide.cta.btn_hero': 'Mulai Membaca',
            'guide.internet.title': '🌐 Internet: Cara Tetap Terhubung?',
            'guide.internet.esim_title': 'eSIM (Airalo / Holafly)',
            'guide.internet.esim_desc': 'Paling praktis. Instal sebelum berangkat dan langsung aktif saat mendarat.',
            'guide.internet.sim_title': 'SIM Fisik (Telkomsel)',
            'guide.internet.sim_desc': 'Paling hemat. Cari toko resmi Telkomsel.',
            'guide.money.title': 'ATM, Uang & Penipuan',
            'guide.money.atms': 'Gunakan ATM di dalam bank (BNI, Mandiri, BCA) untuk keamanan.',
            'guide.money.exchange': 'Penukaran Uang: Gunakan tempat resmi (BMC atau Central Kuta).',
            'guide.apps.title': '📲 Aplikasi Penting',
            'guide.apps.grab_desc': 'Pesan transportasi dan makanan dengan mudah.',
            'guide.apps.maps_desc': 'Navigasi terbaik untuk keliling pulau.'
        }
    };

    // Language Detection & Persistence
    let currentLang = localStorage.getItem('selectedLang');

    // If no stored preference, fallback to browser language or default to 'es'
    if (!currentLang) {
        currentLang = 'es'; // Default
        const userLang = navigator.language || navigator.userLanguage;
        if (userLang.startsWith('en')) {
            currentLang = 'en';
        } else if (userLang.startsWith('id')) {
            currentLang = 'id';
        }
    }

    const langSwitch = document.getElementById('lang-switch');
    if (langSwitch) {
        langSwitch.value = currentLang;
    }

    // Apply Translations
    const updateLanguage = (lang) => {
        currentLang = lang;
        localStorage.setItem('selectedLang', lang); // Persist selection
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    // Handle placeholders if needed
                } else {
                    element.innerHTML = translations[lang][key];
                }
            }
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            if (translations[lang][key]) {
                element.placeholder = translations[lang][key];
            }
        });

        // Update WhatsApp links with localized messages
        const contactLinks = document.querySelectorAll('.whatsapp-float, .contact-link');
        const phoneNumber = '6285940365407';
        let waText = "Hola, vi su página web y me gustaría más información sobre sus tours.";

        if (lang === 'en') {
            waText = "Hi, I saw your website and would like more information about your tours.";
        } else if (lang === 'id') {
            waText = "Halo, saya melihat situs web Anda dan ingin informasi lebih lanjut tentang tur Anda.";
        }

        const encodedWaText = encodeURIComponent(waText);
        const newWaUrl = `https://wa.me/${phoneNumber}?text=${encodedWaText}`;

        contactLinks.forEach(link => {
            link.href = newWaUrl;
            link.target = "_blank"; // Ensure it opens in new tab
        });

        // Track language change
        if (window.Analytics) {
            Analytics.trackLanguageChange(lang);
        }
    };

    // Initialize Language
    updateLanguage(currentLang);

    // Language Switcher Event
    langSwitch.addEventListener('change', (e) => {
        updateLanguage(e.target.value);
    });

    // Mobile Menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = hamburger.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.querySelector('i').classList.remove('fa-times');
            hamburger.querySelector('i').classList.add('fa-bars');
        });
    });

    // Scroll Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });

    // Modal Logic
    const modal = document.getElementById('bookingModal');
    const closeBtn = document.querySelector('.close-modal');
    const bookButtons = document.querySelectorAll('.btn-book');
    const tourInput = document.getElementById('tourInput');
    const bookingForm = document.getElementById('bookingForm');

    // Set minimum date to today (prevent past dates)
    const dateInputInit = document.getElementById('date');
    if (dateInputInit) {
        const today = new Date().toISOString().split('T')[0];
        dateInputInit.min = today;
    }

    // ===== BLOCKED DATES CONFIGURATION =====
    // Option 1: Block individual dates (YYYY-MM-DD format)
    // Example: ['2026-01-15', '2026-02-20', '2026-03-10']
    const blockedDates = [
        // Add your blocked dates here
        // '2026-02-20',
    ];

    // Option 2: Block date ranges
    // Each range is an object with 'start' and 'end' dates
    // Example: { start: '2026-12-20', end: '2026-12-31' } blocks from Dec 20 to Dec 31
    const blockedDateRanges = [
        // Add your date ranges here
        // { start: '2025-12-20', end: '2026-01-10' },  // Christmas holidays
        { start: '2026-06-14', end: '2026-06-16' },  // Javier's birthday
    ];

    // Helper function to check if a date is blocked
    function isDateBlocked(dateString) {
        // Check individual blocked dates
        if (blockedDates.includes(dateString)) {
            return true;
        }

        // Check blocked date ranges
        const selectedDate = new Date(dateString);
        for (const range of blockedDateRanges) {
            const startDate = new Date(range.start);
            const endDate = new Date(range.end);

            if (selectedDate >= startDate && selectedDate <= endDate) {
                return true;
            }
        }

        return false;
    }

    // Initialize Flatpickr on the date input for visual date blocking
    const dateInput = document.getElementById('date');

    // Generate array of all blocked dates (individual + ranges)
    function getAllBlockedDates() {
        const allBlocked = [...blockedDates];

        // Add all dates from ranges
        blockedDateRanges.forEach(range => {
            const start = new Date(range.start);
            const end = new Date(range.end);

            for (let date = new Date(start); date <= end; date.setDate(date.getDate() + 1)) {
                const dateString = date.toISOString().split('T')[0];
                if (!allBlocked.includes(dateString)) {
                    allBlocked.push(dateString);
                }
            }
        });

        return allBlocked;
    }

    // Initialize Flatpickr
    const flatpickrInstance = flatpickr(dateInput, {
        minDate: "today",
        dateFormat: "Y-m-d",
        disable: getAllBlockedDates(),
        locale: {
            firstDayOfWeek: 1 // Monday
        },
        onChange: function (selectedDates, dateStr, instance) {
            // Additional validation (backup)
            if (isDateBlocked(dateStr)) {
                instance.clear();
            }
        }
    });

    // Open Modal
    bookButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const tourName = btn.getAttribute('data-tour');
            tourInput.value = tourName;

            modal.classList.add('active');
            document.body.style.overflow = 'hidden';

            // Track booking start
            if (window.Analytics) {
                Analytics.trackBookingStart(tourName);
            }
        });
    });

    // Close Modal
    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    };

    closeBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // WhatsApp Integration
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const tour = document.getElementById('tourInput').value;
        const date = document.getElementById('date').value;
        const pax = document.getElementById('pax').value;
        const hotel = document.getElementById('hotel').value;
        const coupon = document.getElementById('coupon').value.trim().toUpperCase();

        let intro = `Hola Cantik Tours!`;
        if (currentLang === 'en') intro = `Hello Cantik Tours!`;
        if (currentLang === 'id') intro = `Halo Cantik Tours!`;

        let couponText = "";
        if (coupon) {
            couponText = `\n• Cupón: ${coupon}`;
            if (currentLang === 'en') couponText = `\n• Code: ${coupon}`;
            if (currentLang === 'id') couponText = `\n• Kode: ${coupon}`;
        }

        let messageBody = "";
        if (currentLang === 'es') {
            messageBody = `\n\nMe gustaría recibir más información sobre este tour:\n\n• Tour: ${tour}\n• Nombre: ${name}\n• Fecha tentativa: ${date}\n• Pasajeros: ${pax}\n• Hotel: ${hotel}${couponText}\n\nQuedo a la espera de los detalles. ¡Gracias!`;
        } else if (currentLang === 'en') {
            messageBody = `\n\nI would like more information about this tour:\n\n• Tour: ${tour}\n• Name: ${name}\n• Tentative Date: ${date}\n• Travelers: ${pax}\n• Hotel: ${hotel}${couponText}\n\nLooking forward to the details. Thanks!`;
        } else {
            messageBody = `\n\nSaya ingin informasi lebih lanjut tentang tur ini:\n\n• Tour: ${tour}\n• Nama: ${name}\n• Tanggal: ${date}\n• Wisatawan: ${pax}\n• Hotel: ${hotel}${couponText}\n\nMenunggu konfirmasi. Terima kasih!`;
        }

        // Build the complete message
        const fullMessage = intro + messageBody;

        // WhatsApp URL - Simple and reliable encoding
        const phoneNumber = '6285940365407';
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(fullMessage)}`;

        // Track booking submission
        if (window.Analytics) {
            Analytics.trackBookingSubmit(tour, pax, date);
            Analytics.trackWhatsAppClick(tour);
        }

        // Open in new tab
        window.open(whatsappUrl, '_blank');

        closeModal();
        bookingForm.reset();
    });

    // Track tour card views on scroll
    const tourCards = document.querySelectorAll('.tour-card');
    const tourObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && window.Analytics) {
                const tourName = entry.target.querySelector('h3').textContent;
                Analytics.trackTourView(tourName);
                tourObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    tourCards.forEach(card => {
        tourObserver.observe(card);
    });

    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    revealElements.forEach(el => revealObserver.observe(el));

    // Reviews Slider Logic
    const slider = document.querySelector('.reviews-slider');
    const prevBtn = document.querySelector('.btn-prev');
    const nextBtn = document.querySelector('.btn-next');

    if (slider && prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            slider.scrollBy({ left: -360, behavior: 'smooth' });
        });

        nextBtn.addEventListener('click', () => {
            slider.scrollBy({ left: 360, behavior: 'smooth' });
        });
    }
});
