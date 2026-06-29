/* lang-detect.js — Hijo del Mar · Auto-redirect by browser language */
(function () {
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
    'politica-cookies.html': 'en/cookie-policy.html'
  };

  /* Build reverse map EN → ES */
  var EN_TO_ES = {};
  for (var k in ES_TO_EN) EN_TO_ES[ES_TO_EN[k]] = k;

  /* If user manually picked a language, respect it — never auto-redirect */
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
      location.replace('/' + dest);
    }
  } else if (!wantsEN && isEN) {
    /* User prefers Spanish but is on an EN page → redirect to ES */
    var dest = EN_TO_ES[path];
    if (dest !== undefined) {
      location.replace('/' + dest);
    }
  }
})();
