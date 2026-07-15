/* lang-detect.js — Hijo del Mar · Auto-redirect by browser language */
(function () {
  /* Don't redirect bots/crawlers — let them index the original page */
  if (/bot|crawler|spider|crawling|googlebot|bingbot|yandexbot|baiduspider|slurp|duckduckbot|facebookexternalhit|semrushbot|ahrefsbot/i.test(navigator.userAgent)) return;

  /* Mapping ES page → EN page (relative to site root, no leading slash) */
  var ES_TO_EN = {
    '': 'en/',
    'index.html': 'en/index.html',
    'asesoria-navegacion.html': 'en/asesoria-navegacion.html',
    'asesoria-seguridad.html': 'en/asesoria-seguridad.html',
    'asesoria-compra-embarcacion.html': 'en/asesoria-compra-embarcacion.html',
    'asesoria-electronica.html': 'en/asesoria-electronica.html',
    'asesoria-supervivencia.html': 'en/asesoria-supervivencia.html',
    'como-funciona.html': 'en/how-it-works.html',
    'faq.html': 'en/faq.html',
    'guia-canales-sur-chile.html': 'en/guia-canales-sur-chile.html',
    'guia-como-planificar-travesia-velero.html': 'en/guia-como-planificar-travesia-velero.html',
    'guia-epirb-que-es.html': 'en/guia-epirb-que-es.html',
    'guia-errores-comprar-velero.html': 'en/guia-errores-comprar-velero.html',
    'guia-velero-vs-lancha.html': 'en/guia-velero-vs-lancha.html',
    'guias.html': 'en/guias.html',
    'precios.html': 'en/pricing.html',
    'sobre-mi.html': 'en/about.html',
    'contacto.html': 'en/contact.html',
    'politica-cookies.html': 'en/cookie-policy.html',
    'survey-embarcacion.html': 'en/survey-embarcacion.html',
    'guia-survey-nautico.html': 'en/guia-survey-nautico.html',
    'guia-sart-respondedor-radar.html': 'en/guia-sart-respondedor-radar.html',
    'guia-secado-casco-vacio-osmosis.html': 'en/guia-secado-casco-vacio-osmosis.html',
    'guia-como-comprar-velero-chile.html': 'en/guia-how-to-buy-sailboat-chile.html',
    'guia-navegar-en-chile.html': 'en/guia-sailing-chile.html',
    'guia-navegar-patagonia-chile.html': 'en/guia-sailing-patagonia.html',
    'guia-licencia-nautica-chile.html': 'en/guia-nautical-license-chile.html',
    'guia-seguro-embarcacion-chile.html': 'en/guia-boat-insurance-chile.html',
    'guia-equipamiento-seguridad-chile.html': 'en/guia-safety-equipment-chile.html',
    'guia-electronica-nautica-principiantes.html': 'en/guia-marine-electronics-beginners.html',
    'guia-inscripcion-directemar-chile.html': 'en/guia-directemar-registration-chile.html',
    'tarjeta.html': 'en/card.html',
    'guia-vhf-marino.html': 'en/guia-vhf-marine-radio.html',
    'guia-ais-sistema-identificacion.html': 'en/guia-ais-automatic-identification.html',
    'guia-plb-baliza-personal.html': 'en/guia-plb-personal-locator-beacon.html',
    'guia-hombre-al-agua.html': 'en/guia-man-overboard.html',
    'guia-zarpe-chile.html': 'en/guia-zarpe-sailing-chile.html',
    'guia-meteorologia-navegantes.html': 'en/guia-weather-sailing-chile.html'
  };

  /* Build reverse map EN → ES */
  var EN_TO_ES = {};
  for (var k in ES_TO_EN) EN_TO_ES[ES_TO_EN[k]] = k;

  /* If user manually picked a language (or was already auto-redirected), respect it */
  try {
    if (localStorage.getItem('langOverride')) return;
  } catch (e) { return; }

  /* Detect browser language (first 2 chars) */
  var lang = ((navigator.language || navigator.userLanguage || 'es') + '').toLowerCase().slice(0, 2);
  var wantsEN = (lang === 'en');

  /* Current page path relative to root, e.g. "en/faq.html" or "faq.html" */
  var path = location.pathname.replace(/^\//, '');
  /* Treat trailing slash as root */
  if (path === '' || path === 'en/') path = path;
  var isEN = path.startsWith('en/');

  if (wantsEN && !isEN) {
    /* User prefers English but is on an ES page → redirect to EN */
    var dest = ES_TO_EN[path];
    if (dest !== undefined) {
      try { localStorage.setItem('langOverride', 'en'); } catch (e) {}
      location.replace('/' + dest);
    }
  } else if (!wantsEN && isEN) {
    /* User prefers Spanish but is on an EN page → redirect to ES */
    var dest = EN_TO_ES[path];
    if (dest !== undefined) {
      try { localStorage.setItem('langOverride', 'es'); } catch (e) {}
      location.replace('/' + dest);
    }
  }
})();

/* ─── GA4 click event tracking — Hijo del Mar ─────────────────────────────
   Fires events for key interactions:
   · generate_lead    – GA4 key event: WA click or contact form submit
   · whatsapp_click   – custom detail event for WA clicks
   · email_click      – any mailto: link
   · file_download    – PDF / download links  (GA4 recommended event)
   · tarjeta_click    – links to /tarjeta or /card (digital business card)
   ───────────────────────────────────────────────────────────────────────── */
(function () {
  function onReady(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  onReady(function () {
    document.addEventListener('click', function (e) {
      var el = e.target.closest ? e.target.closest('a') : null;
      if (!el || !el.href) return;
      if (typeof window.gtag !== 'function') return;

      var href = el.href;
      var pageUrl = location.href;
      var btnText = (el.textContent || '').trim().slice(0, 60) || el.getAttribute('aria-label') || '';

      /* 1. WhatsApp */
      if (href.indexOf('wa.me') !== -1) {
        gtag('event', 'generate_lead', {
          method: 'whatsapp',
          page_location: pageUrl
        });
        gtag('event', 'whatsapp_click', {
          button_text: btnText,
          page_location: pageUrl
        });
        return;
      }

      /* 2. Email */
      if (href.indexOf('mailto:') === 0) {
        gtag('event', 'email_click', {
          email_address: href.replace('mailto:', '').split('?')[0],
          page_location: pageUrl
        });
        return;
      }

      /* 3. PDF / file download */
      if (href.indexOf('.pdf') !== -1 || el.hasAttribute('download')) {
        var fileName = decodeURIComponent(href.split('/').pop().split('?')[0]);
        gtag('event', 'file_download', {
          file_name: fileName,
          file_extension: 'pdf',
          link_text: btnText,
          page_location: pageUrl
        });
        return;
      }

      /* 4. Tarjeta digital */
      if (href.indexOf('/tarjeta') !== -1 || href.indexOf('/card') !== -1) {
        gtag('event', 'tarjeta_click', {
          link_text: btnText,
          page_location: pageUrl
        });
      }
    });
  });
})();
