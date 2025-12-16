// Analytics Configuration
// Replace these placeholder IDs with your actual tracking IDs

const ANALYTICS_CONFIG = {
    // Google Analytics 4 - Replace with your GA4 Measurement ID
    GA4_MEASUREMENT_ID: 'G-HSVS7RPZP7',

    // Enable/disable tracking (set to true when you have real IDs)
    ENABLED: true
};

// Google Analytics 4 Integration
function initGA4() {
    if (!ANALYTICS_CONFIG.ENABLED || !ANALYTICS_CONFIG.GA4_MEASUREMENT_ID) {
        console.log('GA4 tracking disabled - add your Measurement ID to enable');
        return;
    }

    // Load GA4 script
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_CONFIG.GA4_MEASUREMENT_ID}`;
    document.head.appendChild(script1);

    // Initialize GA4
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', ANALYTICS_CONFIG.GA4_MEASUREMENT_ID);
}

// Meta Pixel Integration
function initMetaPixel() {
    if (!ANALYTICS_CONFIG.ENABLED || !ANALYTICS_CONFIG.META_PIXEL_ID) {
        console.log('Meta Pixel tracking disabled - add your Pixel ID to enable');
        return;
    }

    !function (f, b, e, v, n, t, s) {
        if (f.fbq) return; n = f.fbq = function () {
            n.callMethod ?
                n.callMethod.apply(n, arguments) : n.queue.push(arguments)
        };
        if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
        n.queue = []; t = b.createElement(e); t.async = !0;
        t.src = v; s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s)
    }(window, document, 'script',
        'https://connect.facebook.net/en_US/fbevents.js');

    fbq('init', ANALYTICS_CONFIG.META_PIXEL_ID);
    fbq('track', 'PageView');
}

// Custom Event Tracking
const Analytics = {
    // Track tour view
    trackTourView: function (tourName) {
        if (!ANALYTICS_CONFIG.ENABLED) return;

        if (window.gtag) {
            gtag('event', 'view_tour', {
                'tour_name': tourName,
                'event_category': 'engagement'
            });
        }

        if (window.fbq) {
            fbq('track', 'ViewContent', {
                content_name: tourName,
                content_category: 'Tour'
            });
        }

        console.log('Analytics: Tour viewed -', tourName);
    },

    // Track booking modal open
    trackBookingStart: function (tourName) {
        if (!ANALYTICS_CONFIG.ENABLED) return;

        if (window.gtag) {
            gtag('event', 'begin_booking', {
                'tour_name': tourName,
                'event_category': 'conversion'
            });
        }

        if (window.fbq) {
            fbq('track', 'InitiateCheckout', {
                content_name: tourName,
                content_category: 'Tour'
            });
        }

        console.log('Analytics: Booking started -', tourName);
    },

    // Track form submission
    trackBookingSubmit: function (tourName, passengers, date) {
        if (!ANALYTICS_CONFIG.ENABLED) return;

        if (window.gtag) {
            gtag('event', 'booking_submit', {
                'tour_name': tourName,
                'passengers': passengers,
                'booking_date': date,
                'event_category': 'conversion'
            });
        }

        if (window.fbq) {
            fbq('track', 'Lead', {
                content_name: tourName,
                value: passengers,
                currency: 'EUR'
            });
        }

        console.log('Analytics: Booking submitted -', tourName);
    },

    // Track WhatsApp click
    trackWhatsAppClick: function (tourName) {
        if (!ANALYTICS_CONFIG.ENABLED) return;

        if (window.gtag) {
            gtag('event', 'whatsapp_click', {
                'tour_name': tourName,
                'event_category': 'engagement'
            });
        }

        if (window.fbq) {
            fbq('track', 'Contact', {
                content_name: tourName
            });
        }

        console.log('Analytics: WhatsApp clicked -', tourName);
    },

    // Track language change
    trackLanguageChange: function (language) {
        if (!ANALYTICS_CONFIG.ENABLED) return;

        if (window.gtag) {
            gtag('event', 'language_change', {
                'language': language,
                'event_category': 'engagement'
            });
        }

        console.log('Analytics: Language changed to', language);
    },

    // Track scroll depth
    trackScrollDepth: function (percentage) {
        if (!ANALYTICS_CONFIG.ENABLED) return;

        if (window.gtag) {
            gtag('event', 'scroll_depth', {
                'percentage': percentage,
                'event_category': 'engagement'
            });
        }

        console.log('Analytics: Scroll depth -', percentage + '%');
    }
};

// Initialize analytics on page load
document.addEventListener('DOMContentLoaded', function () {
    initGA4();
    initMetaPixel();

    // Scroll depth tracking
    let scrollDepths = [25, 50, 75, 100];
    let trackedDepths = [];

    window.addEventListener('scroll', function () {
        const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

        scrollDepths.forEach(depth => {
            if (scrollPercent >= depth && !trackedDepths.includes(depth)) {
                trackedDepths.push(depth);
                Analytics.trackScrollDepth(depth);
            }
        });
    });
});

// Export for use in main.js
window.Analytics = Analytics;
