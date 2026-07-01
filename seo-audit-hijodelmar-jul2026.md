# SEO Audit — www.hijodelmar.cl
**Fecha:** Julio 2026 | **Auditor:** Claude (Cowork) | **Tipo:** Full Site Audit

---

## Resumen Ejecutivo

Hijo del Mar tiene una base técnica sólida (42 páginas, bilingüe ES/EN, canonical correcto, hreflang, OG tags completos, burger menu funcional) que supera claramente a sus competidores directos en infraestructura SEO. La fortaleza principal es la estrategia de contenido editorial: guías originales en ambos idiomas que no tienen equivalente en el mercado náutico chileno. Las tres prioridades de mayor impacto son: (1) implementar Schema markup (LocalBusiness + Article) para ganar SERP features, (2) crear una página de precios/tarifas que captura intención transaccional de alto valor, y (3) construir backlinks desde comunidades veleras y foros náuticos chilenos. Evaluación general: **fundación sólida, con oportunidad clara de escalar visibilidad orgánica**.

---

## 1. Oportunidades de Keywords

| Keyword | Dificultad Est. | Oportunidad | Ranking Actual | Intención | Contenido Recomendado |
|---------|----------------|-------------|----------------|-----------|----------------------|
| survey embarcación Chile | Baja | **Alta** | Sin datos | Transaccional | Landing page dedicada |
| asesoría náutica Chile | Media | **Alta** | Sin datos | Comercial | Homepage + blog |
| comprar velero Chile | Media | **Alta** | Sin datos | Comercial | Guía + landing |
| survey náutico Chile | Baja | **Alta** | Sin datos | Transaccional | `/survey-embarcacion.html` |
| errores al comprar velero | Baja | **Alta** | Sin datos | Informacional | Guía existente (optimizar) |
| velero vs lancha | Baja | **Alta** | Sin datos | Informacional | Guía existente (optimizar) |
| EPIRB qué es | Baja | **Alta** | Sin datos | Informacional | Guía existente (optimizar) |
| cómo planificar travesía velero | Baja | **Alta** | Sin datos | Informacional | Guía existente (optimizar) |
| canales sur Chile velero | Baja | **Alta** | Sin datos | Informacional | Guía existente (optimizar) |
| osmosis casco velero | Baja | **Alta** | Sin datos | Informacional | Guía existente (optimizar) |
| seguridad náutica Chile | Media | **Media** | Sin datos | Comercial | `/asesoria-seguridad.html` |
| electrónica náutica Chile | Media | **Media** | Sin datos | Comercial | `/asesoria-electronica.html` |
| supervivencia en el mar | Media | **Media** | Sin datos | Informacional/Comercial | `/asesoria-supervivencia.html` |
| balizas emergencia velero | Baja | **Media** | Sin datos | Informacional | Expandir guía EPIRB |
| precio surveyor náutico | Baja | **Media** | Sin datos | Transaccional | Página tarifas (FALTA) |
| asesoría compra embarcación | Baja | **Media** | Sin datos | Comercial | Landing existente |
| cruising Chile guide | Baja | **Alta** | Sin datos | Informacional (EN) | `/en/guia-sailing-chile.html` |
| Patagonia sailing routes | Media | **Alta** | Sin datos | Informacional (EN) | Expandir guía canales |
| marine survey Chile | Baja | **Alta** | Sin datos | Transaccional (EN) | `/en/survey-embarcacion.html` |
| nautical advisory Chile | Media | **Alta** | Sin datos | Comercial (EN) | EN homepage |
| sailing Patagonia tips | Media | **Media** | Sin datos | Informacional (EN) | Nueva guía EN |
| buy sailboat Chile | Baja | **Media** | Sin datos | Comercial (EN) | Nueva guía EN |

> **Nota:** Sin conexión a Ahrefs/Semrush no hay datos de volumen exactos. Para datos de ranking actuales en tiempo real, conecta Google Search Console o Ahrefs vía MCP.

---

## 2. Auditoría On-Page

| Página | Problema | Severidad | Corrección Recomendada |
|--------|----------|-----------|----------------------|
| Todas las páginas | Sin Schema markup (LocalBusiness, Service, Article) | **Alta** | Agregar JSON-LD en head |
| index.html | H1 genérico, no incluye keyword principal | **Alta** | Incluir "asesoría náutica Chile" en el H1 |
| survey-embarcacion.html | Página clave sin keyword "survey náutico" en title | **Media** | Optimizar title tag |
| guia-*.html (todas) | Sin fecha de publicación visible / schema Article | **Media** | Agregar `datePublished`, schema Article |
| Todas las páginas | Sin preguntas estructuradas con schema FAQ | **Media** | Agregar FAQ schema a páginas de servicios |
| guias.html | Página índice sin internal linking desde homepage | **Media** | Agregar link desde nav o sección destacada |
| en/ (todas) | Inglés correcto pero sin targeting geográfico explícito | **Baja** | Añadir "Chile" en más H2 y texto EN |
| asesoria-*.html | Páginas sin testimonios ni prueba social en texto | **Baja** | Agregar 1-2 testimonios en texto visible |

---

## 3. Content Gaps

### Página de Precios / Tarifas
- **Por qué importa:** Keywords "precio surveyor Chile", "cuánto cuesta asesoría náutica" tienen intención transaccional alta y cero competencia directa
- **Formato:** Landing page dedicada `/precios.html` + `/en/pricing.html` ✅ (ya existe — verificar que esté bien optimizada con keywords de precio)
- **Prioridad:** Alta
- **Esfuerzo:** Quick win (1-2h revisar y añadir keyword targeting de precios)

### Guía: ¿Qué es un Surveyor Náutico?
- **Por qué importa:** "Marine surveyor" y "surveyor náutico" tienen búsquedas educacionales. Krill y SailsChile no tienen este contenido. Es el top-of-funnel para el servicio más diferenciado del sitio
- **Formato:** Guía 800-1200 palabras + FAQ schema
- **Prioridad:** Alta
- **Esfuerzo:** Moderado (medio día)

### Checklist de Compra de Embarcación (descargable)
- **Por qué importa:** Lead magnet natural. Nadie en Chile lo ofrece. Genera backlinks y emails capturados
- **Formato:** PDF descargable + página landing
- **Prioridad:** Alta
- **Esfuerzo:** Moderado (medio día)

### Guía: Marcas de Velero Recomendadas para Chile
- **Por qué importa:** "mejores veleros para patagonia", "veleros recomendados Chile" — informacional de alta intención comercial
- **Formato:** Guía comparativa 1000+ palabras
- **Prioridad:** Media
- **Esfuerzo:** Sustancial (1-2 días con investigación)

### Guía EN: Sailing Patagonia — Practical Tips
- **Por qué importa:** Comunidad internacional de veleros muy activa buscando info en inglés. Competencia desde sitios genéricos (cruiserswiki, noonsite) que no tienen advisory local
- **Formato:** Guía 1200+ palabras en inglés con practical tips locales
- **Prioridad:** Media
- **Esfuerzo:** Moderado (medio día)

### Guía EN: How to Buy a Sailboat in Chile
- **Por qué importa:** Extranjeros comprando veleros en Chile antes de zarpar a Patagonia. Cero competencia en inglés
- **Formato:** Guía informacional + CTA a servicios
- **Prioridad:** Media
- **Esfuerzo:** Moderado (medio día)

### Página de Casos de Éxito / Testimonios
- **Por qué importa:** Conversión y prueba social. Ningún competidor tiene esto como página dedicada
- **Formato:** Página `/casos.html` con 3-5 historias de clientes
- **Prioridad:** Media
- **Esfuerzo:** Sustancial (requiere recopilar casos reales)

---

## 4. Technical SEO Checklist

| Check | Estado | Detalle |
|-------|--------|---------|
| HTTPS / SSL | ✅ Pass | Certificado válido, sin mixed content |
| Viewport / Mobile | ✅ Pass | `width=device-width` en todas las páginas |
| Burger menu mobile | ✅ Pass | CSS + JS completo en 42 páginas |
| Canonical tags | ✅ Pass | Presentes y con www en todas las páginas |
| hreflang ES/EN/x-default | ✅ Pass | Configurado correctamente, incluyendo páginas de un solo idioma |
| OG tags completos | ✅ Pass | og:title/description/image/url/type/locale en todo el sitio |
| Meta descriptions | ✅ Pass | Presentes, únicas, ≤160 chars |
| Title tags | ✅ Pass | Presentes, únicos, ≤70 chars |
| GA4 | ✅ Pass | G-KRJ42YBH5N en todas las páginas |
| Consent mode cookies | ✅ Pass | cookies.js con banner GDPR/LPD |
| Sitemap.xml | ✅ Pass | URLs completas con www, sin entradas rotas |
| lang attribute HTML | ✅ Pass | `lang="es"` / `lang="en"` según corresponde |
| Links internos rotos | ✅ Pass | Ninguno detectado |
| Imágenes con alt | ✅ Pass | Todas las imágenes tienen atributo alt |
| loading= en imágenes | ✅ Pass | eager/lazy según posición en página |
| `</body></html>` | ✅ Pass | Corregido (faltaba en index.html y en/index.html) |
| Schema markup | ❌ Fail | **Ningún JSON-LD** en el sitio — LocalBusiness, Service, Article ausentes |
| FAQ Schema | ❌ Fail | Páginas de FAQ sin schema estructurado |
| Breadcrumb Schema | ❌ Fail | Guías sin breadcrumb schema |
| Robots.txt | ⚠️ Warning | No verificado — confirmar que no bloquea /en/ ni guías |
| Core Web Vitals — LCP | ⚠️ Warning | Video hero en homepage puede retrasar LCP en móvil. Verificar con PageSpeed Insights |
| Structured data — Article | ❌ Fail | Guías sin `datePublished`, `author`, `publisher` en schema |
| Google Search Console | ⚠️ Warning | Verificar si el sitio está indexado y sin errores de cobertura |
| Backlinks externos | ⚠️ Warning | Sin datos — probablemente bajo (sitio relativamente nuevo) |
| YouTube / video embed | ⚠️ Warning | Sin contenido video embebido que amplíe tiempo en página |

---

## 5. Comparación con Competidores

| Dimensión | hijodelmar.cl | sailschile.cl | krill.cl |
|-----------|--------------|--------------|---------|
| Contenido editorial / guías | ✅ **Líder** (8 guías ES, 8 EN) | ❌ Sin guías | ❌ Sin guías |
| SEO técnico | ✅ Excelente | ⚠️ Medio (WP, GTM) | ⚠️ Básico (Webflow, sin meta desc) |
| Bilingüe | ✅ Completo ES+EN | ❌ Solo ES | ❌ Solo ES |
| Schema markup | ❌ Ausente | ❌ Ausente | ❌ Ausente |
| Backlinks / DA | ⚠️ Bajo (estimado) | ⚠️ Medio | ⚠️ Bajo |
| Presencia social | ⚠️ Instagram | ✅ Facebook + Instagram | ✅ Instagram |
| Blog activo | ❌ Sin fechas/frecuencia visible | ❌ No | ❌ No |
| Velocidad estimada | ⚠️ Video hero pesa | ⚠️ WP con plugins | ✅ Webflow rápido |
| Precio/tarifas visible | ✅ Página /precios | ❌ No | ❌ No |
| Testimonios | ⚠️ En homepage | ❌ No | ❌ No |

**Ventaja competitiva clara de Hijo del Mar:** es el único sitio del nicho en Chile con contenido editorial bilingüe, estructura SEO técnica completa y targeting explícito al velero/crucero. Ningún competidor tiene guías de contenido real.

---

## 6. Plan de Acción Priorizado

### Quick Wins — hacer esta semana

**1. Agregar Schema LocalBusiness en index.html**
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Hijo del Mar",
  "url": "https://www.hijodelmar.cl",
  "telephone": "+56923956367",
  "address": {"@type": "PostalAddress", "addressCountry": "CL"},
  "description": "Asesoría náutica profesional en Chile...",
  "sameAs": ["https://www.instagram.com/hijodelmar..."]
}
```
- **Impacto:** Alto — puede activar Knowledge Panel y rich results
- **Esfuerzo:** 30 minutos

**2. Agregar Schema Article en todas las guías**
- Añadir `datePublished`, `author`, `publisher` en JSON-LD a los 8+ artículos ES y EN
- **Impacto:** Alto — habilita rich results para artículos en Google
- **Esfuerzo:** 1-2 horas con script

**3. Agregar Schema FAQ en páginas de servicios**
- `/asesoria-compra-embarcacion.html`, `/survey-embarcacion.html`, `/faq.html`
- **Impacto:** Alto — SERP feature con preguntas desplegables que aumenta CTR
- **Esfuerzo:** 1-2 horas

**4. Optimizar H1 de homepage con keyword principal**
- Incluir "asesoría náutica Chile" o "navegación en Chile" en el H1 visible
- **Impacto:** Medio — mejora relevancia para búsquedas principales
- **Esfuerzo:** 15 minutos

**5. Verificar robots.txt y Google Search Console**
- Confirmar cobertura de indexación, errores y clicks reales en GSC
- **Impacto:** Alto — puede revelar páginas no indexadas o errores silenciosos
- **Esfuerzo:** 30 minutos

---

### Inversiones Estratégicas — este trimestre

**6. Crear guía: "¿Qué es un Surveyor Náutico y cuándo contratarlo?"**
- Top-of-funnel para el servicio más diferenciado. 800-1200 palabras ES + EN
- Keywords objetivo: "surveyor náutico", "survey embarcación", "inspección pre-compra velero"
- **Impacto:** Alto | **Esfuerzo:** Medio día

**7. Crear checklist PDF descargable: "50 puntos para inspeccionar al comprar un velero"**
- Lead magnet que captura emails + genera backlinks naturales desde foros y blogs veleros
- **Impacto:** Alto (largo plazo) | **Esfuerzo:** Medio día

**8. Campaña de backlinks — comunidades náuticas**
- Publicar en: ClubNáutico.cl, foros de veleros latinoamericanos, Noonsite.com (EN), Cruiserswiki (EN)
- Objetivo: 5-10 backlinks de calidad desde sitios náuticos relevantes
- **Impacto:** Alto (dominio) | **Esfuerzo:** 1-2 semanas

**9. Guía EN: "Sailing Patagonia — Practical Tips from a Local Expert"**
- Targeting internacional. Competencia débil desde sitios genéricos sin conocimiento local
- **Impacto:** Medio-Alto | **Esfuerzo:** Medio día

**10. Guía EN: "How to Buy a Sailboat in Chile"**
- Cero competencia en inglés. Atrae extranjeros pre-compra antes de Patagonia
- **Impacto:** Medio | **Esfuerzo:** Medio día

---

## Notas de Seguimiento

- Conectar **Google Search Console** para datos de ranking reales (clicks, impresiones, posición media por keyword)
- Conectar **Ahrefs o Semrush** vía MCP para volumen de búsqueda exacto y tracking de posiciones
- Revisar **PageSpeed Insights** para mobile LCP score (video hero)
- Publicar nuevas guías con **frecuencia mínima mensual** para señal de contenido fresco a Google
