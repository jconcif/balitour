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
            'hero.badge': '🔥 Plazas Limitadas',
            'hero.title': 'Descubre Bali a Tu Manera',
            'hero.subtitle': 'Experiencias auténticas con guías locales expertos. Tours privados adaptados a tus intereses en tu idioma preferido.',
            'hero.cta': 'Explorar Tours',
            'value.guides.title': 'Guías Multilingües',
            'value.guides.desc': 'Guías locales expertos que hablan español, inglés e indonesio con fluidez. Sin barreras de idioma, solo conexiones auténticas.',
            'value.friendly.title': 'Servicio Personalizado',
            'value.friendly.desc': 'Te tratamos como familia. Itinerarios flexibles y hospitalidad cálida en el corazón de Bali.',
            'value.safety.title': 'Seguridad Garantizada',
            'value.safety.desc': 'Conductores profesionales, vehículos cómodos con aire acondicionado y seguro completo para tu tranquilidad.',
            'trust.certified': 'Guías Certificados',
            'trust.rating': '4.9★ Valoración',
            'trust.travelers': '5000+ Viajeros',
            'trust.satisfaction': '100% Satisfacción',
            'tours.title': 'Nuestros Tours Más Populares',
            'tours.subtitle': 'Experiencias cuidadosamente diseñadas para descubrir la magia de Bali',
            'trust.message': '✨ Reserva ahora y paga al finalizar el tour. Sin depósitos.',
            'tour1.title': 'Corazón de Bali (Ubud Clásico)',
            'tour1.desc': 'Explora impresionantes terrazas de arroz, el sagrado bosque de los monos y templos antiguos en el corazón cultural de Bali.',
            'tour2.title': 'Puertas del Cielo (Ruta Este)',
            'tour2.desc': 'Captura la icónica foto del templo Lempuyang, visita el palacio de agua Tirta Gangga y descubre playas de arena negra.',
            'tours.title': 'Nuestras Rutas Exclusivas',
            'tours.subtitle': 'Selección de los mejores itinerarios, personalizables para ti.',
            'tour1.title': 'El Corazón de Bali (Ubud)',
            'tour1.desc': 'Sumérgete en la espiritualidad y naturaleza. Bosque de los Monos, Terrazas de Tegalalang y Templos Sagrados.',
            'tour2.title': 'Templo Madre & Volcanes',
            'tour2.desc': 'La majestuosidad del Monte Batur y el sagrado templo de Besakih. Vistas que cortan la respiración.',
            'tour3.title': 'Playas del Sur & Uluwatu',
            'tour3.desc': 'Arena blanca, acantilados dramáticos y la danza de fuego Kecak al atardecer.',
            'tour4.title': 'Magia del Norte (Naturaleza)',
            'tour4.desc': 'Descubre cascadas impresionantes, lagos gemelos serenos y el icónico templo flotante Ulun Danu Beratan.',
            'tour.price': 'desde 60€ / día',
            'tour.btn': 'Consultar Disponibilidad',
            'btn.book': 'Reservar Ahora',
            'reviews.title': 'Experiencias de Nuestros Viajeros',
            'review1.text': '"Increíble. Wayan no solo fue un guía, fue un amigo. Nos explicó la cultura balinesa con una pasión contagiosa. 10/10."',
            'review2.text': '"El coche era nuevísimo y muy cómodo. Nos sentimos seguros y cuidados en todo momento. ¡Gracias Cantik Tours!"',
            'review3.text': '"Hicimos la ruta de las playas y fue mágico. La cena en Jimbaran que nos recomendaron fue el broche de oro."',
            'review4.text': '"Como viajera sola, la seguridad era mi prioridad. Wayan me hizo sentir súper cómoda y protegida. ¡Una experiencia inolvidable!"',
            'review5.text': '"Gracias a ellos evitamos las trampas turísticas y vimos el Bali auténtico. El templo en la selva fue lo mejor."',
            'review6.text': '"Excelente relación calidad-precio. Un servicio de lujo a precio justo. Sin duda repetiremos."',
            'faq.title': 'Resolvemos tus Dudas',
            'faq.q1': '¿Las entradas están incluidas?',
            'faq.a1': 'No, el precio cubre transporte privado y servicio de guía. Las entradas a los templos se pagan por separado (aproximadamente 3-5€ por sitio).',
            'faq.q2': '¿Cómo realizo el pago?',
            'faq.a2': 'El pago se realiza en efectivo (Rupias Indonesias o Euros) directamente a tu guía al final del tour. También aceptamos transferencias bancarias.',
            'faq.q3': '¿Puedo personalizar mi tour?',
            'faq.a3': '¡Por supuesto! Todos nuestros tours son privados y flexibles. Podemos adaptar el itinerario según tus intereses y preferencias.',
            'faq.q4': '¿Qué idiomas hablan los guías?',
            'faq.a4': 'Nuestros guías hablan español, inglés e indonesio con fluidez. Solo indícanos tu idioma preferido al reservar.',
            'about.title': 'Nuestra Esencia',
            'about.p1': 'Somos "Cantik Tours", un colectivo de guías balineses apasionados por mostrar el alma de nuestra isla. Cantik significa "Hermoso" en indonesio, y eso es lo que queremos compartir contigo.',
            'about.p2': 'Huimos del turismo de masas. Preferimos las conexiones reales, los templos tranquilos y las sonrisas genuinas. Viajar con nosotros es viajar con amigos locales.',
            'footer.desc': 'Tu puerta de entrada a la magia de Indonesia. Expertos en crear recuerdos imborrables.',
            'footer.contact': 'Hablemos de tu Viaje',
            'footer.btn': 'Chat en WhatsApp',
            'footer.rights': 'Todos los derechos reservados.',
            'footer.links': 'Enlaces Rápidos',
            'footer.brand_desc': 'Tours privados auténticos en Bali con guías locales que hablan español e inglés.',
            'modal.title': 'Comienza tu Aventura',
            'modal.label.tour': 'Ruta o Interés',
            'modal.label.name': 'Nombre Completo',
            'modal.label.date': 'Fecha Tentativa',
            'modal.label.pax': 'Nº Personas',
            'modal.label.hotel': 'Hotel / Zona (Opcional)',
            'modal.label.lang': 'Idioma Preferido',
            'lang.es': 'Español',
            'lang.en': 'Inglés',
            'nav.guide': 'Bali Guía 2026',
            'modal.label.coupon': 'Cupón (Si tienes)',
            'modal.placeholder.coupon': 'Ej: BALILOVER',
            'modal.btn.send': 'Enviar Solicitud',
            'modal.placeholder.hotel': 'Ej: Hotel W, Seminyak',
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
            'guide.levy.rec': 'Se recomienda pagarlo online antes de viajar a través de la web o app "Love Bali" para agilizar la salida del aeropuerto, aunque también suelen haber mostradores allí.',
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
            'hero.badge': '🔥 Limited Availability for 2025',
            'hero.title': 'Bali: Luxury, Culture & Freedom',
            'hero.subtitle': 'Experience the "Island of Gods" at your own pace with private drivers and local experts.',
            'hero.cta': 'Design My Trip',
            'value.1.title': '100% Flexibility',
            'value.1.desc': 'Your trip, your rules. You decide the timing and stops. We make it happen.',
            'value.2.title': 'Local Experts',
            'value.2.desc': 'Deep cultural connection without language barriers. Friendly & knowledgeable.',
            'value.3.title': 'Premium Transport',
            'value.3.desc': 'Modern vehicles with AC, full comfort, and unlimited refreshments.',
            'trust.certified': 'Certified Guides',
            'trust.rating': '4.9★ Rating',
            'trust.travelers': '5000+ Travelers',
            'trust.satisfaction': '100% Satisfaction',
            'tours.title': 'Exclusive Itineraries',
            'tours.subtitle': 'Curated selection of the best routes, fully customizable.',
            'trust.message': '✨ Book now, pay later. No deposit required.',
            'tour1.title': 'The Heart of Bali (Ubud)',
            'tour1.desc': 'Immerse in spirituality. Monkey Forest, Rice Terraces, and Sacred Temples.',
            'tour2.title': 'Mother Temple & Volcanoes',
            'tour2.desc': 'Majestic Mt. Batur views and the sacred Besakih Temple. Breath-taking scenery.',
            'tour3.title': 'South Beaches & Uluwatu',
            'tour3.desc': 'White sands, dramatic cliffs, and the Kecak fire dance at sunset.',
            'tour4.title': 'Northern Magic (Nature)',
            'tour4.desc': 'Discover breathtaking waterfalls, serene twin lakes, and the iconic floating temple Ulun Danu Beratan.',
            'tour.price': 'from 60€ / day',
            'tour.btn': 'Check Availability',
            'btn.book': 'Book Now',
            'reviews.title': 'Traveler Stories',
            'review1.text': '"Incredible. Wayan was not just a guide, but a friend. He explained Balinese culture with contagious passion."',
            'review2.text': '"The car was brand new and super comfortable. We felt safe and cared for every moment. Thanks Cantik Tours!"',
            'review3.text': '"We did the south beaches route and it was magical. The sunset dinner recommendation was the highlight."',
            'review4.text': '"As a solo female traveler, safety was key. Wayan made me feel totally comfortable and safe. Unforgettable!"',
            'review5.text': '"Thanks to them we avoided tourist traps and saw the real Bali. The jungle temple was the highlight."',
            'review6.text': '"Excellent value for money. Luxury service at a fair price. Will definitely book again."',
            'faq.title': 'Common Questions',
            'faq.q1': 'Are entrance fees included?',
            'faq.a1': 'No, the price covers private transportation and guide service. Temple entrance fees are paid separately (approximately 3-5€ per site).',
            'faq.q2': 'How do I make payment?',
            'faq.a2': 'Payment is made in cash (Indonesian Rupiah or Euros) directly to your guide at the end of the tour. We also accept bank transfers.',
            'faq.q3': 'Can I customize my tour?',
            'faq.a3': 'Absolutely! All our tours are private and flexible. We can adapt the itinerary to match your interests and preferences.',
            'faq.q4': 'What languages do guides speak?',
            'faq.a4': 'Our guides are fluent in Spanish, English, and Indonesian. Just let us know your preferred language when booking.',
            'about.title': 'Our Essence',
            'about.p1': 'We are "Cantik Tours", a collective of Balinese guides passionate about showing the soul of our island. Cantik means "Beautiful", and that is what we share.',
            'about.p2': 'We avoid mass tourism. We prefer real connections, quiet temples, and genuine smiles.',
            'footer.desc': 'Your gateway to the magic of Indonesia. Experts in creating unforgettable memories.',
            'footer.contact': 'Let\'s Talk Travel',
            'footer.btn': 'Chat on WhatsApp',
            'footer.links': 'Quick Links',
            'footer.rights': 'All rights reserved.',
            'footer.brand_desc': 'Authentic private tours in Bali with local Spanish & English speaking guides.',
            'modal.title': 'Book Your Adventure',
            'modal.label.tour': 'Selected Tour',
            'modal.label.name': 'Full Name',
            'modal.label.date': 'Preferred Date',
            'modal.label.pax': 'Number of Travelers',
            'modal.label.hotel': 'Hotel / Pickup Location',
            'modal.label.lang': 'Tour Language',
            'lang.es': 'Spanish',
            'lang.en': 'English',
            'nav.guide': 'Bali Guide 2026',
            'modal.label.coupon': 'Promo Code (Optional)',
            'modal.placeholder.coupon': 'Ex: BALILOVER',
            'modal.btn.send': 'Send to WhatsApp',
            'modal.placeholder.hotel': 'Ex: W Hotel, Seminyak',
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
            'hero.badge': '🔥 Tempat Terbatas',
            'hero.title': 'Temukan Bali dengan Cara Anda',
            'hero.subtitle': 'Pengalaman autentik dengan pemandu lokal ahli. Tur pribadi disesuaikan dengan minat Anda dalam bahasa pilihan Anda.',
            'hero.cta': 'Jelajahi Tur',
            'value.guides.title': 'Pemandu Multibahasa',
            'value.guides.desc': 'Pemandu lokal ahli yang fasih berbahasa Spanyol, Inggris, dan Indonesia. Tanpa hambatan bahasa, hanya koneksi autentik.',
            'value.friendly.title': 'Layanan Personal',
            'value.friendly.desc': 'Kami memperlakukan Anda seperti keluarga. Itinerary fleksibel dan keramahan hangat di jantung Bali.',
            'value.safety.title': 'Keamanan Terjamin',
            'value.safety.desc': 'Pengemudi profesional, kendaraan ber-AC yang nyaman, dan asuransi penuh untuk ketenangan pikiran Anda.',
            'trust.certified': 'Pemandu Bersertifikat',
            'trust.rating': '4.9★ Rating',
            'trust.travelers': '5000+ Wisatawan',
            'trust.satisfaction': '100% Kepuasan',
            'tours.title': 'Tur Paling Populer Kami',
            'tours.subtitle': 'Pengalaman yang dirancang dengan hati-hati untuk menemukan keajaiban Bali',
            'trust.message': '✨ Pesan sekarang, bayar nanti. Tanpa deposit.',
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
            'faq.q4': 'Bahasa apa yang digunakan pemandu?',
            'faq.a4': 'Pemandu kami fasih berbahasa Spanyol, Inggris, dan Indonesia. Beri tahu kami bahasa pilihan Anda saat memesan.',
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
    const dateInput = document.getElementById('date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;
    }

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
        const lang = document.getElementById('tourLang').value;
        const coupon = document.getElementById('coupon').value.trim().toUpperCase();

        // Fallback to simple text symbols to guarantee compatibility
        // Emoticons are removed to ensure clean message delivery first
        const emojiWave = "👋";
        const emojiMap = "🗺️";
        const emojiUser = "👤";
        const emojiDate = "📅";
        const emojiGroup = "👥";
        const emojiHotel = "🏨";
        const emojiSpeak = "🗣️";
        const emojiTicket = "🎟️";

        let intro = `Hello Cantik Tours! ${emojiWave}`;
        if (currentLang === 'es') intro = `Hola Cantik Tours! ${emojiWave}`;
        if (currentLang === 'id') intro = `Halo Cantik Tours! ${emojiWave}`;

        let couponText = "";
        if (coupon) {
            // Add coupon line if exists
            couponText = `\n${emojiTicket} *Cupón:* ${coupon}`;
            if (currentLang === 'en') couponText = `\n${emojiTicket} *Code:* ${coupon}`;
            if (currentLang === 'id') couponText = `\n${emojiTicket} *Kode:* ${coupon}`;
        }

        let messageBody = "";
        if (currentLang === 'es') {
            messageBody = `\n\nHola, me gustaría recibir más información sobre este tour:\n${emojiMap} *Tour:* ${tour}\n${emojiUser} *Nombre:* ${name}\n${emojiDate} *Fecha tentativa:* ${date}\n${emojiGroup} *Pasajeros:* ${pax}\n${emojiHotel} *Hotel:* ${hotel}\n${emojiSpeak} *Idioma:* ${lang}${couponText}\n\nQuedo a la espera de los detalles. ¡Gracias!`;
        } else if (currentLang === 'en') {
            messageBody = `\n\nHi, I would like more information about this tour:\n${emojiMap} *Tour:* ${tour}\n${emojiUser} *Name:* ${name}\n${emojiDate} *Tentative Date:* ${date}\n${emojiGroup} *Travelers:* ${pax}\n${emojiHotel} *Hotel:* ${hotel}\n${emojiSpeak} *Language:* ${lang}${couponText}\n\nLooking forward to the details. Thanks!`;
        } else {
            messageBody = `\n\nHalo, saya ingin informasi lebih lanjut tentang tur ini:\n${emojiMap} *Tour:* ${tour}\n${emojiUser} *Nama:* ${name}\n${emojiDate} *Tanggal:* ${date}\n${emojiGroup} *Wisatawan:* ${pax}\n${emojiHotel} *Hotel:* ${hotel}\n${emojiSpeak} *Bahasa:* ${lang}${couponText}\n\nMenunggu konfirmasi. Terima kasih!`;
        }

        // Encode the entire message
        const fullMessage = intro + messageBody;
        const finalMessage = encodeURIComponent(fullMessage);

        // WhatsApp URL
        const phoneNumber = '6285940365407';
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${finalMessage}`;

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
