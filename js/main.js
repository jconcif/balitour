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
            'hero.title': 'Bali en tu idioma',
            'hero.subtitle': 'Experiencias auténticas y guías 100% en español diseñadas para viajeros latinos que buscan magia y comodidad.',
            'hero.cta': 'Ver Tours',
            'value.guides.title': 'Guías 100% Español',
            'value.guides.desc': 'Olvídate de las barreras del idioma. Nuestros guías locales hablan tu lengua con fluidez.',
            'value.friendly.title': 'Trato Cercano',
            'value.friendly.desc': 'Te tratamos como familia. Flexibilidad y calidez latina en el corazón de Indonesia.',
            'value.safety.title': 'Seguridad Garantizada',
            'value.safety.desc': 'Conductores profesionales y vehículos cómodos con aire acondicionado para tu tranquilidad.',
            'tours.title': 'Nuestros Tours Favoritos',
            'tours.subtitle': 'Rutas diseñadas para enamorarte de la isla de los dioses',
            'tour1.title': 'El Corazón de Bali (Ubud Clásico)',
            'tour1.desc': 'Explora terrazas de arroz, el bosque de los monos y templos sagrados en el centro cultural de la isla.',
            'tour2.title': 'Puerta al Cielo (Ruta Este)',
            'tour2.desc': 'La foto icónica en Lempuyang, el palacio de agua Tirta Gangga y playas de arena negra.',
            'tour3.title': 'Atardecer y Olas (Ruta Sur)',
            'tour3.desc': 'Acantilados de Uluwatu, danza Kecak al atardecer y cena de mariscos en Jimbaran.',
            'tour4.title': 'Magia del Norte (Naturaleza)',
            'tour4.desc': 'Cascadas impresionantes, lagos gemelos y el templo flotante Ulun Danu Beratan.',
            'btn.book': 'Reservar',
            'reviews.title': 'Lo que dicen nuestros viajeros',
            'review1.text': '"Increíble experiencia. Nuestro guía Wayan hablaba perfecto español y nos llevó a lugares que no hubiéramos encontrado solos."',
            'review2.text': '"La mejor decisión de nuestro viaje. Seguridad, comodidad y un trato super amable. ¡Recomendadísimo!"',
            'review3.text': '"Hicimos la ruta sur y fue mágico. La cena en Jimbaran organizada por ellos fue el broche de oro."',
            'faq.title': 'Preguntas Frecuentes',
            'faq.q1': '¿El precio incluye entradas?',
            'faq.a1': 'No, el precio es por el servicio de transporte privado y guía. Las entradas se pagan aparte en cada templo (aprox 3-5€).',
            'faq.q2': '¿Cómo se realiza el pago?',
            'faq.a2': 'El pago se realiza en efectivo (Rupias o Euros) directamente al guía al finalizar el tour.',
            'faq.q3': '¿Puedo personalizar la ruta?',
            'faq.a3': '¡Claro! Nuestros tours son privados y flexibles. Podemos adaptar la ruta a tus preferencias.',
            'about.title': 'Sobre Nosotros',
            'about.p1': 'Somos un equipo de guías balineses enamorados de la cultura hispana. Después de años aprendiendo español y recibiendo amigos de España y Latinoamérica, decidimos crear <strong>Bali Tour Latino</strong>.',
            'about.p2': 'Nuestra misión es simple: que descubras la verdadera esencia de Bali sintiéndote tan cómodo como en casa. Sin prisas, con sonrisas y con la seguridad de que alguien te entiende perfectamente.',
            'footer.desc': 'Tu conexión local en la isla de los dioses.',
            'footer.quicklinks': 'Enlaces Rápidos',
            'footer.follow': 'Síguenos',
            'footer.rights': 'Todos los derechos reservados.',
            'modal.title': 'Reserva tu Aventura',
            'modal.label.tour': 'Tour Seleccionado',
            'modal.label.name': 'Nombre Completo',
            'modal.label.date': 'Fecha Deseada',
            'modal.label.pax': 'Número de Pasajeros',
            'modal.label.hotel': 'Hotel / Zona de recogida',
            'modal.label.lang': 'Idioma del Tour',
            'lang.es': 'Español',
            'lang.en': 'Inglés',
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
            'hero.title': 'Bali in Your Language',
            'hero.subtitle': 'Authentic experiences and local guides designed for travelers seeking magic and comfort.',
            'hero.cta': 'View Tours',
            'value.guides.title': 'Local Guides',
            'value.guides.desc': 'Forget language barriers. Our local guides speak your language fluently.',
            'value.friendly.title': 'Friendly Service',
            'value.friendly.desc': 'We treat you like family. Flexibility and warmth in the heart of Indonesia.',
            'value.safety.title': 'Safety Guaranteed',
            'value.safety.desc': 'Professional drivers and comfortable air-conditioned vehicles for your peace of mind.',
            'tours.title': 'Our Favorite Tours',
            'tours.subtitle': 'Routes designed to make you fall in love with the Island of Gods',
            'tour1.title': 'Heart of Bali (Classic Ubud)',
            'tour1.desc': 'Explore rice terraces, the monkey forest, and sacred temples in the cultural center of the island.',
            'tour2.title': 'Gate to Heaven (East Route)',
            'tour2.desc': 'The iconic photo at Lempuyang, Tirta Gangga water palace, and black sand beaches.',
            'tour3.title': 'Sunset & Waves (South Route)',
            'tour3.desc': 'Uluwatu cliffs, Kecak dance at sunset, and seafood dinner in Jimbaran.',
            'tour4.title': 'Magic of the North (Nature)',
            'tour4.desc': 'Stunning waterfalls, twin lakes, and the floating temple Ulun Danu Beratan.',
            'btn.book': 'Book Now',
            'reviews.title': 'What Our Travelers Say',
            'review1.text': '"Incredible experience. Our guide Wayan spoke perfect Spanish and took us to places we wouldn\'t have found alone."',
            'review2.text': '"The best decision of our trip. Safety, comfort, and super friendly service. Highly recommended!"',
            'review3.text': '"We did the south route and it was magical. The dinner in Jimbaran organized by them was the finishing touch."',
            'faq.title': 'Frequently Asked Questions',
            'faq.q1': 'Does the price include tickets?',
            'faq.a1': 'No, the price is for private transport and guide service. Tickets are paid separately at each temple (approx 3-5€).',
            'faq.q2': 'How is payment made?',
            'faq.a2': 'Payment is made in cash (Rupiah or Euros) directly to the guide at the end of the tour.',
            'faq.q3': 'Can I customize the route?',
            'faq.a3': 'Of course! Our tours are private and flexible. We can adapt the route to your preferences.',
            'about.title': 'About Us',
            'about.p1': 'We are a team of Balinese guides in love with Hispanic culture. After years of learning Spanish and welcoming friends from Spain and Latin America, we decided to create <strong>Bali Tour Latino</strong>.',
            'about.p2': 'Our mission is simple: for you to discover the true essence of Bali while feeling as comfortable as at home. No rush, with smiles, and the certainty that someone understands you perfectly.',
            'footer.desc': 'Your local connection on the Island of Gods.',
            'footer.quicklinks': 'Quick Links',
            'footer.follow': 'Follow Us',
            'footer.rights': 'All rights reserved.',
            'modal.title': 'Book Your Adventure',
            'modal.label.tour': 'Selected Tour',
            'modal.label.name': 'Full Name',
            'modal.label.date': 'Desired Date',
            'modal.label.pax': 'Number of Passengers',
            'modal.label.hotel': 'Hotel / Pickup Area',
            'modal.label.lang': 'Tour Language',
            'lang.es': 'Spanish',
            'lang.en': 'English',
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
            'hero.title': 'Bali dalam Bahasa Anda',
            'hero.subtitle': 'Pengalaman otentik dan pemandu lokal untuk wisatawan yang mencari keajaiban dan kenyamanan.',
            'hero.cta': 'Lihat Tur',
            'value.guides.title': 'Pemandu Lokal',
            'value.guides.desc': 'Lupakan kendala bahasa. Pemandu lokal kami berbicara bahasa Anda dengan lancar.',
            'value.friendly.title': 'Layanan Ramah',
            'value.friendly.desc': 'Kami memperlakukan Anda seperti keluarga. Fleksibilitas dan kehangatan di jantung Indonesia.',
            'value.safety.title': 'Keamanan Terjamin',
            'value.safety.desc': 'Pengemudi profesional dan kendaraan nyaman ber-AC untuk ketenangan pikiran Anda.',
            'tours.title': 'Tur Favorit Kami',
            'tours.subtitle': 'Rute yang dirancang untuk membuat Anda jatuh cinta dengan Pulau Dewata',
            'tour1.title': 'Jantung Bali (Ubud Klasik)',
            'tour1.desc': 'Jelajahi sawah terasering, hutan monyet, dan pura suci di pusat budaya pulau ini.',
            'tour2.title': 'Gerbang Surga (Rute Timur)',
            'tour2.desc': 'Foto ikonik di Lempuyang, istana air Tirta Gangga, dan pantai pasir hitam.',
            'tour3.title': 'Matahari Terbenam & Ombak (Rute Selatan)',
            'tour3.desc': 'Tebing Uluwatu, tari Kecak saat matahari terbenam, dan makan malam seafood di Jimbaran.',
            'tour4.title': 'Keajaiban Utara (Alam)',
            'tour4.desc': 'Air terjun yang menakjubkan, danau kembar, dan pura terapung Ulun Danu Beratan.',
            'btn.book': 'Pesan Sekarang',
            'reviews.title': 'Apa Kata Wisatawan Kami',
            'review1.text': '"Pengalaman luar biasa. Pemandu kami Wayan berbicara bahasa Spanyol dengan sempurna dan membawa kami ke tempat-tempat yang tidak akan kami temukan sendiri."',
            'review2.text': '"Keputusan terbaik perjalanan kami. Keamanan, kenyamanan, dan layanan super ramah. Sangat direkomendasikan!"',
            'review3.text': '"Kami melakukan rute selatan dan itu ajaib. Makan malam di Jimbaran yang diatur oleh mereka adalah sentuhan akhir."',
            'faq.title': 'Pertanyaan yang Sering Diajukan',
            'faq.q1': 'Apakah harga termasuk tiket?',
            'faq.a1': 'Tidak, harga adalah untuk layanan transportasi pribadi dan pemandu. Tiket dibayar terpisah di setiap pura (sekitar 3-5€).',
            'faq.q2': 'Bagaimana pembayaran dilakukan?',
            'faq.a2': 'Pembayaran dilakukan secara tunai (Rupiah atau Euro) langsung kepada pemandu di akhir tur.',
            'faq.q3': 'Bisakah saya menyesuaikan rute?',
            'faq.a3': 'Tentu saja! Tur kami bersifat pribadi dan fleksibel. Kami dapat menyesuaikan rute dengan preferensi Anda.',
            'about.title': 'Tentang Kami',
            'about.p1': 'Kami adalah tim pemandu Bali yang mencintai budaya Hispanik. Setelah bertahun-tahun belajar bahasa Spanyol dan menyambut teman-teman dari Spanyol dan Amerika Latin, kami memutuskan untuk membuat <strong>Bali Tour Latino</strong>.',
            'about.p2': 'Misi kami sederhana: agar Anda menemukan esensi sejati Bali sambil merasa senyaman di rumah. Tanpa terburu-buru, dengan senyuman, dan kepastian bahwa seseorang mengerti Anda dengan sempurna.',
            'footer.desc': 'Koneksi lokal Anda di Pulau Dewata.',
            'footer.quicklinks': 'Tautan Cepat',
            'footer.follow': 'Ikuti Kami',
            'footer.rights': 'Hak cipta dilindungi undang-undang.',
            'modal.title': 'Pesan Petualangan Anda',
            'modal.label.tour': 'Tur Dipilih',
            'modal.label.name': 'Nama Lengkap',
            'modal.label.date': 'Tanggal Diinginkan',
            'modal.label.pax': 'Jumlah Penumpang',
            'modal.label.hotel': 'Hotel / Area Penjemputan',
            'modal.label.lang': 'Bahasa Tur',
            'lang.es': 'Spanyol',
            'lang.en': 'Inggris',
            'modal.btn.send': 'Kirim ke WhatsApp',
            'modal.placeholder.name': 'Nama Anda',
            'modal.placeholder.hotel': 'Cth: Hotel W, Seminyak'
        }
    };

    // Language Detection & Switching
    let currentLang = 'es'; // Default
    const userLang = navigator.language || navigator.userLanguage;
    const langSwitch = document.getElementById('lang-switch');

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

        // Construct message manually to avoid encoding issues with newlines
        // We use %0A for new lines directly
        let intro = "Hola Bali Tour Latino! 👋";
        if (currentLang === 'en') intro = "Hello Bali Tour Latino! 👋";
        if (currentLang === 'id') intro = "Halo Bali Tour Latino! 👋";

        let body = "";
        if (currentLang === 'es') {
            body = `%0A%0AQuiero reservar un tour:%0A%0A🗺️ *Tour:* ${tour}%0A👤 *Nombre:* ${name}%0A📅 *Fecha:* ${date}%0A👥 *Pasajeros:* ${pax}%0A🏨 *Hotel:* ${hotel}%0A🗣️ *Idioma:* ${lang}%0A%0AEspero su confirmación. Gracias!`;
        } else if (currentLang === 'en') {
            body = `%0A%0AI want to book a tour:%0A%0A🗺️ *Tour:* ${tour}%0A👤 *Name:* ${name}%0A📅 *Date:* ${date}%0A👥 *Pax:* ${pax}%0A🏨 *Hotel:* ${hotel}%0A🗣️ *Language:* ${lang}%0A%0AAwaiting confirmation. Thanks!`;
        } else {
            body = `%0A%0ASaya ingin memesan tur:%0A%0A🗺️ *Tour:* ${tour}%0A👤 *Nama:* ${name}%0A📅 *Tanggal:* ${date}%0A👥 *Pax:* ${pax}%0A🏨 *Hotel:* ${hotel}%0A🗣️ *Bahasa:* ${lang}%0A%0AMenunggu konfirmasi. Terima kasih!`;
        }

        // Encode only the dynamic values if needed, but here we are constructing the URL string manually.
        // Ideally, we should encodeURIComponent the user inputs to be safe, but keep the structure clean.
        // The safest way is to build the string with placeholders and then replace, 
        // BUT to fix the specific "" issue which often comes from double encoding or charset mismatch,
        // we will build the URL parts separately.

        const encodedName = encodeURIComponent(name);
        const encodedTour = encodeURIComponent(tour);
        const encodedHotel = encodeURIComponent(hotel);

        // Re-construct with encoded values
        if (currentLang === 'es') {
            body = `%0A%0AQuiero reservar un tour:%0A%0A🗺️ *Tour:* ${encodedTour}%0A👤 *Nombre:* ${encodedName}%0A📅 *Fecha:* ${date}%0A👥 *Pasajeros:* ${pax}%0A🏨 *Hotel:* ${encodedHotel}%0A🗣️ *Idioma:* ${lang}%0A%0AEspero su confirmación. Gracias!`;
        } else if (currentLang === 'en') {
            body = `%0A%0AI want to book a tour:%0A%0A🗺️ *Tour:* ${encodedTour}%0A👤 *Name:* ${encodedName}%0A📅 *Date:* ${date}%0A👥 *Pax:* ${pax}%0A🏨 *Hotel:* ${encodedHotel}%0A🗣️ *Language:* ${lang}%0A%0AAwaiting confirmation. Thanks!`;
        } else {
            body = `%0A%0ASaya ingin memesan tur:%0A%0A🗺️ *Tour:* ${encodedTour}%0A👤 *Nama:* ${encodedName}%0A📅 *Tanggal:* ${date}%0A👥 *Pax:* ${pax}%0A🏨 *Hotel:* ${encodedHotel}%0A🗣️ *Bahasa:* ${lang}%0A%0AMenunggu konfirmasi. Terima kasih!`;
        }

        const finalMessage = encodeURIComponent(intro) + body;

        // WhatsApp URL
        const phoneNumber = '6285940365407';
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${finalMessage}`;

        // Open in new tab
        window.open(whatsappUrl, '_blank');

        closeModal();
        bookingForm.reset();
    });
});
