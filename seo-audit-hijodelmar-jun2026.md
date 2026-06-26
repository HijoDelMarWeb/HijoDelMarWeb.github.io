# Auditoría SEO Completa — hijodelmar.cl
**Fecha:** Junio 2026 | **Dominio:** www.hijodelmar.cl | **Realizada por:** Claude / Cowork

---

## Resumen Ejecutivo

hijodelmar.cl es un sitio nuevo con una propuesta única y diferenciada: asesoría náutica personal de un Capitán de Marina Mercante con 30 años de experiencia, que no tiene equivalente directo en Chile. La mayor fortaleza del sitio es su contenido auténtico y especializado. Sin embargo, el problema crítico es que **el sitio aún no aparece indexado en Google** — la búsqueda `site:hijodelmar.cl` no devuelve resultados — lo que significa que todo el trabajo técnico y de contenido realizado aún no genera visibilidad orgánica. Las tres prioridades inmediatas son: (1) solicitar indexación manual en Google Search Console, (2) implementar hreflang para las páginas en inglés, y (3) acortar los títulos de 3 páginas que superan los 60 caracteres.

---

## 1. Oportunidades de Keywords

*Nota: Sin acceso a Ahrefs/Semrush, los volúmenes son estimaciones relativas basadas en búsquedas web y competencia observada.*

| Keyword | Dificultad est. | Oportunidad | Intención | Tipo de contenido recomendado |
|---------|----------------|-------------|-----------|-------------------------------|
| asesoría náutica Chile | Baja | **Alta** | Comercial | Página de servicios (home + landing) |
| comprar velero usado Chile | Baja | **Alta** | Transaccional | Landing page + artículo |
| errores al comprar velero usado Chile | Baja | **Alta** | Informacional | Artículo (ya existe ✓) |
| EPIRB qué es Chile | Baja | **Alta** | Informacional | Artículo (ya existe ✓) |
| planificación navegación canales sur Chile | Baja | **Alta** | Informacional | Landing + artículo |
| equipos seguridad náutica Chile | Baja-Media | **Alta** | Informacional/Comercial | Landing (ya existe ✓) |
| supervivencia en el mar Chile | Baja | **Alta** | Informacional | Landing (ya existe ✓) |
| capitán marino mercante Chile | Baja | **Alta** | Navegacional | Home / About |
| ayudas electrónicas navegación Chile | Baja | **Alta** | Informacional | Landing (ya existe ✓) |
| turismo náutico canales del sur Chile | Media | **Alta** | Informacional | Artículo / sección velero |
| velero vs lancha cuál comprar Chile | Baja | **Alta** | Informacional | Artículo nuevo |
| licencia náutica Chile | Media | Media | Informacional | Artículo nuevo |
| VHF náutica qué es Chile | Baja | Media | Informacional | Artículo nuevo |
| fiordos patagonia velero | Media | Media | Informacional | Artículo / sección |
| chalk navegación Chile | Baja | Media | Informacional | Artículo nuevo |
| ruta navegación Chiloé canales | Baja | Media | Informacional | Artículo nuevo |
| wellboat capitán Chile | Baja | Media | Navegacional | Sección historia |
| offshore DP capitán Chile | Baja | Baja | Navegacional | Sección historia |
| cursos navegación Chile online | Alta | Baja | Comercial | Fuera de foco actual |
| charter velero sur Chile | Alta | Baja | Transaccional | Futuro (velero) |

---

## 2. Auditoría On-Page

| Página | Problema | Severidad | Fix recomendado |
|--------|----------|-----------|-----------------|
| `guia-canales-sur-chile.html` | Título de 83 caracteres — Google lo trunca | **Crítico** | Acortar a ≤60 chars, ej: "Cómo Navegar los Canales del Sur · Capitán Rodrigo" |
| `guia-epirb-que-es.html` | Título de 87 caracteres | **Crítico** | Ej: "¿Qué es un EPIRB? Guía Náutica Chile · Hijo del Mar" |
| `asesoria-electronica.html` | Título de 65 caracteres | **Alto** | Ej: "Ayudas Electrónicas para Navegar · Hijo del Mar" |
| Todas las páginas | Sin etiquetas `hreflang` para ES/EN | **Crítico** | Añadir `<link rel="alternate" hreflang="es">` y `hreflang="en">` en las 20 páginas |
| `sitemap.xml` | Las 10 páginas `/en/` no están incluidas | **Alto** | Agregar todas las URLs de `/en/` al sitemap |
| `index.html` (footer) | LinkedIn apunta a `alexistroncosomaster` (nombre incorrecto) | **Alto** | Verificar y corregir la URL de LinkedIn |
| Todas las páginas | H1 del home dice solo "Experiencia Náutica" sin keyword geográfica | **Alto** | Evaluar cambio a "Asesoría Náutica en Chile" o incluir keyword en subtítulo |
| Páginas de asesoría | FAQ Schema solo en `index.html`, no en páginas de servicio | **Medio** | Agregar FAQ Schema a las 5 páginas de asesoría |
| `guias.html` | Meta description genérica, no incluye keywords específicas | **Medio** | Reescribir con keywords: "guías náuticas Chile, EPIRB, canales, velero" |
| Todas las páginas EN | Meta descriptions en inglés sin revisar keyword targeting en inglés | **Medio** | Revisar y optimizar las 10 metas EN con keywords en inglés |
| `asesoria-compra-embarcacion.html` | Breadcrumb aún podría decir "Compra" en algún lugar | **Bajo** | Verificar consistencia total del nombre |
| Todas las páginas | No hay internal linking desde artículos de guía hacia páginas de asesoría relacionadas | **Medio** | Agregar CTA "¿Necesitas ayuda? Ver asesoría de…" al final de cada guía |

---

## 3. Análisis Técnico SEO

| Verificación | Estado | Detalle |
|-------------|--------|---------|
| HTTPS / SSL | ✅ PASA | GitHub Pages con SSL, redirige a www |
| Canonical tags | ✅ PASA | Presentes en todas las páginas |
| robots.txt | ✅ PASA | Allow: / + referencia al sitemap |
| Sitemap XML | ⚠️ PARCIAL | Existe, incluye las 10 páginas ES, pero **falta todas las páginas /en/** |
| Indexación Google | ❌ FALLA CRÍTICA | `site:hijodelmar.cl` no devuelve resultados — el sitio **no está indexado** aún |
| hreflang ES/EN | ❌ FALLA CRÍTICA | No implementado en ninguna página — Google no sabe de la versión EN |
| Meta descriptions | ✅ PASA | Presentes y con buena longitud en páginas ES |
| OG Tags (redes) | ✅ PASA | og:title, og:description, og:image en todas las páginas |
| Twitter Card | ✅ PASA | summary_large_image configurado |
| Schema LocalBusiness | ✅ PASA | En index.html con nombre, teléfono, dirección, URLs sociales |
| Schema FAQPage | ⚠️ PARCIAL | Solo en index.html. Falta en páginas de asesoría |
| Schema Person | ✅ PASA | En index.html |
| Schema Article | ✅ PASA | En las 3 guías |
| Schema BreadcrumbList | ✅ PASA | En páginas de asesoría y guías |
| Longitud de títulos | ⚠️ PARCIAL | 2 páginas con >80 chars, 1 con 65 chars |
| Responsive / mobile | ✅ PASA | Media queries presentes, diseño adaptable |
| Velocidad de carga | ✅ PASA | HTML estático en GitHub Pages = muy rápido (no hay WordPress, no hay PHP) |
| Imágenes alt text | ✅ PASA | Sin atributos alt vacíos detectados |
| URL structure | ✅ PASA | URLs limpias con slugs semánticos en español |
| Internal linking | ⚠️ PARCIAL | Nav funciona bien, pero artículos no enlazan a páginas de asesoría |
| Broken links | ✅ PASA | No detectados |
| Core Web Vitals | ✅ PROBABLE | HTML estático sin JS bloqueante pesado, imágenes externas CDN |

---

## 4. Brechas de Contenido

| Tema / Keyword | Por qué importa | Formato recomendado | Prioridad | Esfuerzo |
|---------------|-----------------|---------------------|-----------|----------|
| "Velero vs lancha: cuál comprar en Chile" | Intención comercial alta, nadie lo cubre bien, enlaza a asesoría de compra | Artículo 1.200 palabras | **Alta** | Medio (3-4 hrs) |
| "Licencia náutica Chile: cómo obtenerla" | Patagoniaservicios.cl lo tiene, tú no. Alto volumen para navegantes nuevos | Artículo + CTA contacto | **Alta** | Medio (3-4 hrs) |
| "VHF marino: para qué sirve y cómo usarlo" | Complementa asesoría de seguridad, keyword informacional baja competencia | Artículo corto 800 palabras | **Alta** | Rápido (2 hrs) |
| "Rutas de navegación en los canales de Chiloé" | Diferenciador clave de Rodrigo, nadie ofrece guías de rutas específicas | Artículo / guía 1.500 palabras | **Alta** | Sustancial (1 día) |
| "Qué llevar en un bote antes de zarpar (checklist)" | Alta búsqueda, formato de lista = fácil de posicionar, CTA a asesoría seguridad | Artículo + checklist descargable | **Alta** | Medio (3-4 hrs) |
| "Emergencia en el mar: qué hacer" | Nadie lo cubre desde la perspectiva de un capitán profesional | Artículo 1.000 palabras | Media | Medio |
| "Turismo náutico en los canales del sur de Chile" | Anticipa el proyecto del velero, captura tráfico futuro | Artículo + sección home | Media | Medio |
| "Comprar velero en USA vs Chile: diferencias" | Imporlan.cl y SailsChile lo abordan parcialmente, pero sin perspectiva de capitán | Artículo comparativo | Media | Medio |
| "¿Qué es el posicionamiento dinámico (DP)?" | Credencial única de Rodrigo, nadie en Chile lo explica en español | Artículo de autoridad | Baja | Rápido |
| Páginas de guías en inglés | Las páginas /en/ son solo traducciones, sin artículos en inglés | 2-3 artículos EN (EPIRB, safety, canals) | Media | Sustancial |

---

## 5. Comparativa con Competidores

| Dimensión | **hijodelmar.cl** | **sailschile.cl** | **patagoniaservicios.cl** | **nauticasermak.cl** |
|-----------|-----------------|-----------------|--------------------------|---------------------|
| Propuesta única | Asesoría personal de capitán con 30 años offshore | Venta/importación veleros + asesoría compra | Trámites, licencias, seguridad, equipo | Mantenimiento, muelles, buceo |
| Indexado en Google | ❌ No indexado aún | ✅ Indexado | ✅ Indexado | ✅ Indexado |
| Contenido informacional | ✅ 3 artículos buenos | ❌ Casi ninguno | ⚠️ Mínimo | ❌ Ninguno |
| Blog / publicaciones | ✅ Sección guías | ❌ No | ❌ No | ❌ No |
| Schema markup | ✅ Completo | ⚠️ Básico | ❌ No visible | ❌ No visible |
| Sitio en inglés | ✅ Sección /en/ | ❌ No | ❌ No | ❌ No |
| Velocidad | ✅ Muy alta (estático) | ⚠️ WordPress | ⚠️ HTML antiguo | ⚠️ WordPress/Elementor |
| Diseño visual | ✅ Premium, diferenciado | ⚠️ Funcional | ⚠️ Desactualizado | ⚠️ Básico |
| Redes sociales | ✅ Instagram + YouTube | ⚠️ Facebook/IG | ⚠️ Facebook/IG | ⚠️ Instagram |
| Contenido en inglés | ✅ Única con versión EN | ❌ No | ❌ No | ❌ No |
| Ganador | **Mejor contenido + diseño** | Más catálogo | Más trámites | Más técnico local |

**Conclusión competitiva:** Hijodelmar.cl no tiene competidor directo en el nicho de asesoría personal de capitán. La brecha más explotable es el contenido informacional: los competidores no publican artículos, y Google favorece al que educa.

---

## 6. Plan de Acción Priorizado

### Gana Rápido — Esta Semana

| Acción | Impacto | Esfuerzo | Notas |
|--------|---------|----------|-------|
| **Registrar el sitio en Google Search Console y solicitar indexación manual** | 🔴 Crítico | 15 min | Sin esto, nada del resto importa. URL: search.google.com/search-console |
| **Enviar el sitemap a Google Search Console** | 🔴 Crítico | 5 min | Copiar URL: https://www.hijodelmar.cl/sitemap.xml |
| **Implementar hreflang ES/EN en las 20 páginas** | 🔴 Crítico | 1-2 hrs | Añadir en `<head>`: `<link rel="alternate" hreflang="es" href="URL_ES">` + `hreflang="en"` |
| **Agregar las 10 páginas /en/ al sitemap.xml** | Alto | 20 min | Añadir 10 entradas `<url>` al sitemap |
| **Acortar títulos de guia-canales (83 chars) y guia-epirb (87 chars)** | Alto | 30 min | Ej: "Cómo Navegar los Canales del Sur · Hijo del Mar" (49 chars) |
| **Verificar y corregir URL de LinkedIn en el footer** | Alto | 10 min | Confirmar que el perfil existe y es el correcto |
| **Crear perfil en Google Business Profile** | Alto | 30 min | Permite aparecer en búsquedas locales "asesoría náutica Chile" |
| **Crear perfil en Bing Webmaster Tools** | Medio | 15 min | Bing representa ~15% de búsquedas en Latinoamérica |

### Inversión Estratégica — Este Trimestre

| Acción | Impacto | Esfuerzo | Notas |
|--------|---------|----------|-------|
| **Publicar 1 artículo por semana en /guias/** | Muy alto | Continuo | Empezar con "Velero vs lancha", "VHF marino", "Checklist antes de zarpar" |
| **Agregar FAQ Schema a las 5 páginas de asesoría** | Alto | 2 hrs | Aumenta probabilidad de rich snippets en Google |
| **Crear página "¿Quién soy?" / About separada** | Alto | 3 hrs | Consolida autoridad de autor, crucial para E-E-A-T (Google valora experiencia real) |
| **Conseguir 3-5 backlinks de calidad** | Muy alto | Largo plazo | Contactar: Imporlan.cl, foros náuticos, clubes de vela, medios como Naútica Magazine |
| **Registrar en directorios náuticos chilenos** | Medio | 1 hr | Armada de Chile, Federvela, Federación Náutica de Chile |
| **Agregar internal links desde guías a asesorías** | Alto | 1 hr | Ej: al final de "7 Errores al Comprar Velero" → CTA a asesoria-compra-embarcacion.html |
| **Artículo largo: "Rutas de navegación en Chiloé"** | Alto | 1 día | Diferenciador absoluto, nadie lo ofrece desde experiencia real de capitán |
| **Añadir 2-3 artículos en inglés en /en/** | Medio | Medio | Para capturar tráfico anglófono de veleros que visitan Chile (cruceristas extranjeros) |

---

## Notas de Seguimiento

Conectar Ahrefs o Semrush vía MCP permitirá:
- Ver volúmenes de búsqueda reales para Chile
- Rastrear posiciones exactas en Google.cl
- Identificar qué keywords empiezan a generar clics
- Monitorear si los competidores publican contenido nuevo

La siguiente auditoría debería realizarse **3 meses después de indexación confirmada** para evaluar el avance de posicionamiento.

---

*Auditoría generada con Claude / Cowork — hijodelmar.cl — Junio 2026*
