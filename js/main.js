document.addEventListener('DOMContentLoaded', () => {
    // Translations
    const translations = {
        es: {
            'nav.home': 'Inicio',
            'nav.tours': 'Tours',
            'nav.reviews': 'Reseñas',
            'nav.faq': 'FAQ',
            'nav.about': 'Sobre Nosotros',
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
            'tour1.title': 'Corazón de Bali (Ubud Clásico)',
            'tour1.desc': 'Explora impresionantes terrazas de arroz, el sagrado bosque de los monos y templos antiguos en el corazón cultural de Bali.',
            'tour2.title': 'Puertas del Cielo (Ruta Este)',
            'tour2.desc': 'Captura la icónica foto del templo Lempuyang, visita el palacio de agua Tirta Gangga y descubre playas de arena negra.',
            'tour3.title': 'Atardecer y Olas (Ruta Sur)',
            'tour3.desc': 'Experimenta los dramáticos acantilados de Uluwatu, la tradicional danza del fuego Kecak al atardecer y cena de mariscos frescos en Jimbaran.',
            'tour4.title': 'Magia del Norte (Naturaleza)',
            'tour4.desc': 'Descubre cascadas impresionantes, lagos gemelos serenos y el icónico templo flotante Ulun Danu Beratan.',
            'btn.book': 'Reservar Ahora',
            'reviews.title': 'Lo Que Dicen Nuestros Viajeros',
            'review1.text': '"¡Experiencia increíble! Nuestro guía Wayan hablaba perfecto español y nos llevó a joyas escondidas que nunca habríamos encontrado por nuestra cuenta. ¡Muy recomendable!"',
            'review2.text': '"¡La mejor decisión de nuestro viaje! El guía fue profesional, el vehículo cómodo y el servicio excepcional. ¡No se puede pedir más!"',
            'review3.text': '"Hicimos la ruta sur y fue mágico. El atardecer en Uluwatu y la cena de mariscos que organizaron en Jimbaran fueron inolvidables!"',
            'faq.title': 'Preguntas Frecuentes',
            'faq.q1': '¿Las entradas están incluidas?',
            'faq.a1': 'No, el precio cubre transporte privado y servicio de guía. Las entradas a los templos se pagan por separado (aproximadamente 3-5€ por sitio).',
            'faq.q2': '¿Cómo realizo el pago?',
            'faq.a2': 'El pago se realiza en efectivo (Rupias Indonesias o Euros) directamente a tu guía al final del tour. También aceptamos transferencias bancarias.',
            'faq.q3': '¿Puedo personalizar mi tour?',
            'faq.a3': '¡Por supuesto! Todos nuestros tours son privados y flexibles. Podemos adaptar el itinerario según tus intereses y preferencias.',
            'faq.q4': '¿Qué idiomas hablan los guías?',
            'faq.a4': 'Nuestros guías hablan español, inglés e indonesio con fluidez. Solo indícanos tu idioma preferido al reservar.',
            'about.title': 'Sobre Nosotros',
            'about.p1': 'Somos un equipo de guías balineses apasionados dedicados a compartir la belleza y cultura de nuestra isla. Con años de experiencia recibiendo viajeros de todo el mundo, creamos <strong>Bali Tour</strong> para ofrecer experiencias auténticas y personalizadas.',
            'about.p2': 'Nuestra misión es simple: ayudarte a descubrir la verdadera esencia de Bali mientras te sientes cómodo y bien cuidado. Sin prisas, solo sonrisas, conexiones genuinas y recuerdos inolvidables.',
            'footer.desc': 'Tu conexión local en la Isla de los Dioses.',
            'footer.quicklinks': 'Enlaces Rápidos',
            'footer.follow': 'Síguenos',
            'footer.rights': 'Todos los derechos reservados.',
            'modal.title': 'Reserva Tu Aventura',
            'modal.label.tour': 'Tour Seleccionado',
            'modal.label.name': 'Nombre Completo',
            'modal.label.date': 'Fecha Preferida',
            'modal.label.pax': 'Número de Viajeros',
            'modal.label.hotel': 'Hotel / Lugar de Recogida',
            'modal.label.lang': 'Idioma del Tour',
            'lang.es': 'Español (Sujeto a disponibilidad)',
            'lang.en': 'Inglés',
            'lang.id': 'Indonesio',
            'modal.btn.send': 'Enviar a WhatsApp',
            'modal.placeholder.name': 'Tu nombre',
            'modal.placeholder.hotel': 'Ej: Hotel W, Seminyak'
        },
        en: {
            'nav.home': 'Home',
            'nav.tours': 'Tours',
            'nav.reviews': 'Reviews',
            'nav.faq': 'FAQ',
            'nav.about': 'About Us',
            'nav.contact': 'Contact',
            'hero.badge': '🔥 Limited Spots Available',
            'hero.title': 'Discover Bali Your Way',
            'hero.subtitle': 'Authentic experiences with expert local guides. Private tours tailored to your interests in your preferred language.',
            'hero.cta': 'Explore Tours',
            'value.guides.title': 'Multilingual Guides',
            'value.guides.desc': 'Expert local guides fluent in Spanish, English, and Indonesian. No language barriers, just authentic connections.',
            'value.friendly.title': 'Personalized Service',
            'value.friendly.desc': 'We treat you like family. Flexible itineraries and warm hospitality in the heart of Bali.',
            'value.safety.title': 'Safety Guaranteed',
            'value.safety.desc': 'Professional drivers, comfortable air-conditioned vehicles, and full insurance for your peace of mind.',
            'trust.certified': 'Certified Guides',
            'trust.rating': '4.9★ Rating',
            'trust.travelers': '5000+ Travelers',
            'trust.satisfaction': '100% Satisfaction',
            'tours.title': 'Our Most Popular Tours',
            'tours.subtitle': 'Carefully crafted experiences to discover the magic of Bali',
            'tour1.title': 'Heart of Bali (Classic Ubud)',
            'tour1.desc': 'Explore stunning rice terraces, sacred monkey forest, and ancient temples in Bali\'s cultural heart.',
            'tour2.title': 'Gates of Heaven (East Route)',
            'tour2.desc': 'Capture the iconic Lempuyang temple photo, visit Tirta Gangga water palace, and discover black sand beaches.',
            'tour3.title': 'Sunset & Waves (South Route)',
            'tour3.desc': 'Experience dramatic Uluwatu cliffs, traditional Kecak fire dance at sunset, and fresh seafood dinner in Jimbaran.',
            'tour4.title': 'Northern Magic (Nature)',
            'tour4.desc': 'Discover breathtaking waterfalls, serene twin lakes, and the iconic floating temple Ulun Danu Beratan.',
            'btn.book': 'Book Now',
            'reviews.title': 'What Our Travelers Say',
            'review1.text': '"Amazing experience! Our guide Wayan spoke perfect Spanish and took us to hidden gems we would never have found on our own. Highly recommend!"',
            'review2.text': '"Best decision of our trip! The guide was professional, the vehicle was comfortable, and the service was exceptional. Couldn\'t ask for more!"',
            'review3.text': '"We did the south route and it was magical. The sunset at Uluwatu and the seafood dinner they arranged in Jimbaran were unforgettable!"',
            'faq.title': 'Frequently Asked Questions',
            'faq.q1': 'Are entrance fees included?',
            'faq.a1': 'No, the price covers private transportation and guide service. Temple entrance fees are paid separately (approximately 3-5€ per site).',
            'faq.q2': 'How do I make payment?',
            'faq.a2': 'Payment is made in cash (Indonesian Rupiah or Euros) directly to your guide at the end of the tour. We also accept bank transfers.',
            'faq.q3': 'Can I customize my tour?',
            'faq.a3': 'Absolutely! All our tours are private and flexible. We can adapt the itinerary to match your interests and preferences.',
            'faq.q4': 'What languages do guides speak?',
            'faq.a4': 'Our guides are fluent in Spanish, English, and Indonesian. Just let us know your preferred language when booking.',
            'about.title': 'About Us',
            'about.p1': 'We are a team of passionate Balinese guides dedicated to sharing the beauty and culture of our island. With years of experience welcoming travelers from around the world, we created <strong>Bali Tour</strong> to offer authentic, personalized experiences.',
            'about.p2': 'Our mission is simple: help you discover the true essence of Bali while feeling comfortable and well-cared for. No rush, just smiles, genuine connections, and unforgettable memories.',
            'footer.desc': 'Your local connection to the Island of Gods.',
            'footer.quicklinks': 'Quick Links',
            'footer.follow': 'Follow Us',
            'footer.rights': 'All rights reserved.',
            'modal.title': 'Book Your Adventure',
            'modal.label.tour': 'Selected Tour',
            'modal.label.name': 'Full Name',
            'modal.label.date': 'Preferred Date',
            'modal.label.pax': 'Number of Travelers',
            'modal.label.hotel': 'Hotel / Pickup Location',
            'modal.label.lang': 'Tour Language',
            'lang.es': 'Spanish (Subject to availability)',
            'lang.en': 'English',
            'lang.id': 'Indonesian',
            'modal.btn.send': 'Send to WhatsApp',
            'modal.placeholder.name': 'Your name',
            'modal.placeholder.hotel': 'Ex: W Hotel, Seminyak'
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
            'footer.desc': 'Koneksi lokal Anda di Pulau Dewata.',
            'footer.quicklinks': 'Tautan Cepat',
            'footer.follow': 'Ikuti Kami',
            'footer.rights': 'Hak cipta dilindungi.',
            'modal.title': 'Pesan Petualangan Anda',
            'modal.label.tour': 'Tur Dipilih',
            'modal.label.name': 'Nama Lengkap',
            'modal.label.date': 'Tanggal Pilihan',
            'modal.label.pax': 'Jumlah Wisatawan',
            'modal.label.hotel': 'Hotel / Lokasi Penjemputan',
            'modal.label.lang': 'Bahasa Tur',
            'lang.es': 'Spanyol (Tergantung ketersediaan)',
            'lang.en': 'Inggris',
            'lang.id': 'Indonesia',
            'modal.btn.send': 'Kirim ke WhatsApp',
            'modal.placeholder.name': 'Nama Anda',
            'modal.placeholder.hotel': 'Cth: Hotel W, Seminyak'
        }
    };

    // Language Detection & Switching
    // Language Detection & Switching
    let currentLang = 'es'; // Default to Spanish as requested
    const userLang = navigator.language || navigator.userLanguage;
    const langSwitch = document.getElementById('lang-switch');

    // Optional: Only switch if explicitly another supported language, otherwise keep Spanish
    if (userLang.startsWith('en')) {
        currentLang = 'en';
    } else if (userLang.startsWith('id')) {
        currentLang = 'id';
    }

    // Set initial value of selector
    langSwitch.value = currentLang;

    // Apply Translations
    const updateLanguage = (lang) => {
        currentLang = lang;
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
        const lang = document.querySelector('input[name="language"]:checked').value;

        // Create raw message with newlines using Unicode escapes for safe encoding
        // 👋 = \uD83D\uDC4B (or \u{1F44B})
        // 🗺️ = \uD83D\uDDFA\uFE0F
        // 👤 = \uD83D\uDC64
        // 📅 = \uD83D\uDCC5
        // 👥 = \uD83D\uDC65
        // 🏨 = \uD83C\uDFE8
        // 🗣️ = \uD83D\uDDE3\uFE0F

        // Use fromCodePoint to generate emojis dynamically, bypassing any file encoding issues
        const emojiWave = String.fromCodePoint(0x1F44B);
        const emojiMap = String.fromCodePoint(0x1F5FA);
        const emojiUser = String.fromCodePoint(0x1F464);
        const emojiDate = String.fromCodePoint(0x1F4C5);
        const emojiGroup = String.fromCodePoint(0x1F465);
        const emojiHotel = String.fromCodePoint(0x1F3E8);
        const emojiSpeak = String.fromCodePoint(0x1F5E3);

        let intro = `Hello Bali Tour! ${emojiWave}`;
        if (currentLang === 'es') intro = `Hola Bali Tour! ${emojiWave}`;
        if (currentLang === 'id') intro = `Halo Bali Tour! ${emojiWave}`;

        let messageBody = "";
        if (currentLang === 'es') {
            messageBody = `\n\nQuiero reservar un tour:\n\n${emojiMap} *Tour:* ${tour}\n${emojiUser} *Nombre:* ${name}\n${emojiDate} *Fecha:* ${date}\n${emojiGroup} *Pasajeros:* ${pax}\n${emojiHotel} *Hotel:* ${hotel}\n${emojiSpeak} *Idioma:* ${lang}\n\nEspero su confirmación. ¡Gracias!`;
        } else if (currentLang === 'en') {
            messageBody = `\n\nI want to book a tour:\n\n${emojiMap} *Tour:* ${tour}\n${emojiUser} *Name:* ${name}\n${emojiDate} *Date:* ${date}\n${emojiGroup} *Travelers:* ${pax}\n${emojiHotel} *Hotel:* ${hotel}\n${emojiSpeak} *Language:* ${lang}\n\nAwaiting confirmation. Thanks!`;
        } else {
            messageBody = `\n\nSaya ingin memesan tur:\n\n${emojiMap} *Tour:* ${tour}\n${emojiUser} *Nama:* ${name}\n${emojiDate} *Tanggal:* ${date}\n${emojiGroup} *Wisatawan:* ${pax}\n${emojiHotel} *Hotel:* ${hotel}\n${emojiSpeak} *Bahasa:* ${lang}\n\nMenunggu konfirmasi. Terima kasih!`;
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
});
