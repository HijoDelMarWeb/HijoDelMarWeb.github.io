(function () {
  var KEY = 'hdm_cookie_consent';
  var lang = document.documentElement.lang === 'en' ? 'en' : 'es';
  var isEn = lang === 'en';

  var stored = localStorage.getItem(KEY);

  function applyConsent(state) {
    if (typeof gtag === 'function') {
      gtag('consent', 'update', { analytics_storage: state });
    }
  }

  if (stored === 'granted') { applyConsent('granted'); return; }
  if (stored === 'denied') { return; }

  /* ── Banner ──────────────────────────────────────────────── */
  var policyUrl = isEn ? 'cookie-policy.html' : 'politica-cookies.html';

  var t = isEn ? {
    msg: 'We use Google Analytics cookies to understand how visitors use this site. No personal data is shared with third parties.',
    policy: 'Cookie policy',
    accept: 'Accept',
    reject: 'Decline'
  } : {
    msg: 'Usamos cookies de Google Analytics para entender cómo los visitantes usan el sitio. No se comparten datos personales con terceros.',
    policy: 'Política de cookies',
    accept: 'Aceptar',
    reject: 'Rechazar'
  };

  var style = document.createElement('style');
  style.textContent = [
    '#hdm-cb{position:fixed;bottom:0;left:0;right:0;z-index:9999;',
    'background:rgba(8,15,28,0.97);backdrop-filter:blur(10px);',
    '-webkit-backdrop-filter:blur(10px);',
    'border-top:1px solid rgba(196,162,100,0.25);',
    'padding:1rem 2rem;display:flex;align-items:center;gap:1.2rem;',
    'flex-wrap:wrap;font-family:"Nunito Sans",sans-serif;}',
    '#hdm-cb p{flex:1;font-size:13px;color:#8090a8;margin:0;line-height:1.5;}',
    '#hdm-cb a{color:#c4a264;text-decoration:underline;white-space:nowrap;}',
    '#hdm-cb .hdm-btns{display:flex;gap:8px;flex-shrink:0;}',
    '#hdm-cb button{font-family:inherit;font-size:11px;font-weight:700;',
    'letter-spacing:1.5px;text-transform:uppercase;padding:8px 18px;',
    'border-radius:2px;cursor:pointer;border:1px solid rgba(196,162,100,0.35);',
    'transition:background 0.2s,color 0.2s;}',
    '#hdm-cb .hdm-ok{background:#c4a264;color:#08131f;border-color:#c4a264;}',
    '#hdm-cb .hdm-ok:hover{background:#d8b878;}',
    '#hdm-cb .hdm-no{background:transparent;color:#6080a0;}',
    '#hdm-cb .hdm-no:hover{color:#c4a264;border-color:rgba(196,162,100,0.6);}'
  ].join('');
  document.head.appendChild(style);

  var bar = document.createElement('div');
  bar.id = 'hdm-cb';
  bar.innerHTML = [
    '<p>', t.msg, ' <a href="', policyUrl, '">', t.policy, '</a></p>',
    '<div class="hdm-btns">',
    '<button class="hdm-no" id="hdm-reject">', t.reject, '</button>',
    '<button class="hdm-ok" id="hdm-accept">', t.accept, '</button>',
    '</div>'
  ].join('');
  document.body.appendChild(bar);

  function dismiss(state) {
    localStorage.setItem(KEY, state);
    if (state === 'granted') applyConsent('granted');
    bar.style.transition = 'opacity 0.3s';
    bar.style.opacity = '0';
    setTimeout(function () { bar.remove(); }, 320);
  }

  document.getElementById('hdm-accept').addEventListener('click', function () { dismiss('granted'); });
  document.getElementById('hdm-reject').addEventListener('click', function () { dismiss('denied'); });
})();
