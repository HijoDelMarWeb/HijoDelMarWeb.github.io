# Informe de Analítica Digital — Hijo del Mar
**Período:** 9 jun – 6 jul 2026 (últimos 28 días)
**Fuentes:** Google Search Console · Google Analytics 4 · Instagram Insights
**Fecha del informe:** 7 de julio de 2026

---

## Resumen Ejecutivo

El sitio acaba de arrancar. En 28 días recibió **32 usuarios reales** (5 de Chile con alto engagement), generó **281 impresiones** en Google y apareció en la primera página para queries sobre EPIRB. El contenido de mayor tracción es la guía sobre EPIRB (`guia-epirb-que-es.html`) con 111 impresiones y 2 clics orgánicos — el mejor rendimiento SEO del sitio hasta la fecha.

**El problema central no es el contenido — es la invisibilidad.** El sitemap tiene 64 URLs pero Google solo ha indexado 12. El 97% de la actividad real proviene de 5 usuarios chilenos; los 15 "usuarios" de EE.UU. son bots (0 segundos de engagement, datacenter de Ashburn, Virginia). Instagram está prácticamente inactivo: 11 seguidores, 6 posts, 35 views en 28 días.

**Top 3 acciones inmediatas:**
1. Solicitar indexación manual de las páginas clave en Search Console
2. Publicar al menos 2-3 reels/posts en Instagram esta semana
3. Implementar schema FAQ en las páginas de servicio (impacto SEO inmediato)

---

## 1. Google Search Console

### Métricas generales — últimos 28 días

| Métrica | Valor |
|---------|-------|
| Clics totales | 7 |
| Impresiones totales | 281 |
| CTR medio | 2.5% |
| Posición media | 10.5 |
| Páginas indexadas | 12 de 64 |

### Consultas principales

| Consulta | Clics | Impresiones | Posición est. |
|---------|-------|------------|--------------|
| epirb como funciona | 1 | 7 | ~10 |
| epirb | 0 | 28 | ~10 |
| guia-canales-sur-chile | 0 | 67 | ~10 |
| guia-velero-vs-lancha | 0 | 21 | ~11 |
| canal de navegación | 0 | 3 | — |
| que es un epirb | 0 | 6 | — |
| sart significado | 0 | 2 | — |
| respondedor de radar | 0 | 2 | — |
| canales del sur de chile | 0 | 3 | — |

**Observación:** EPIRB domina las impresiones — confirma que la guía de EPIRB es el contenido con más potencial SEO a corto plazo. Con schema FAQ y una mejora de title tag podría capturar el featured snippet para "qué es EPIRB Chile".

### Páginas con más visibilidad

| Página | Clics | Impresiones |
|--------|-------|------------|
| www.hijodelmar.cl/ | 3 | 15 |
| /guia-epirb-que-es.html | 2 | 111 |
| /asesoria-seguridad.html | 1 | 8 |
| /guia-errores-comprar-velero.html | 1 | 4 |
| /guia-canales-sur-chile.html | 0 | 67 |
| /guia-velero-vs-lancha.html | 0 | 21 |
| /guia-sart-respondedor-radar.html | 0 | 11 |
| /guia-inscripcion-directemar-chile.html | 0 | 11 |
| /en/guia-sart-respondedor-radar.html | 0 | 9 |
| /asesoria-supervivencia.html | 0 | 8 |

**Observación clave:** `guia-canales-sur-chile.html` tiene 67 impresiones y 0 clics — CTR del 0%. El title o description no está atrayendo clics. Revisar y reescribir la meta description con un hook más fuerte.

### Países y dispositivos

**Países:** Chile (6 clics), Venezuela (1), EE.UU. (12 impresiones, 0 clics), España, Argentina, México, Perú — 33 países en total.

**Dispositivos:** Móvil (4 clics, 63%), Escritorio (3 clics, 37%), Tablet (0).

### Estado de indexación

| Estado | Páginas |
|--------|---------|
| Indexadas | 12 |
| Sin indexar (redirección) | 1 |
| En sitemap pero no indexadas | ~52 |

El sitemap (`sitemap.xml`) fue enviado el 1 de julio y tiene **64 URLs descubiertas**. Solo 12 están indexadas. Esto es esperable para un sitio nuevo, pero se puede acelerar solicitando rastreo manual en Search Console para las páginas prioritarias.

---

## 2. Google Analytics 4

### Métricas generales — últimos 28 días (9 jun – 6 jul 2026)

| Métrica | Valor |
|---------|-------|
| Usuarios activos | 32 |
| Usuarios nuevos | 31 (97%) |
| Sesiones con engagement | 51 |
| Tasa de engagement | 56.7% |
| Tiempo medio por usuario activo | 8 min 57s |
| Tiempo medio por sesión | 3 min 32s |
| Vistas de página totales | 1,419 |
| Eventos totales | 3,232 |
| Descargas de archivos | 2 |

> **⚠️ Nota importante:** 15 de los 32 "usuarios" son de EE.UU. con 0 segundos de engagement y 46 eventos totales. Provienen de Ashburn, Virginia (datacenter AWS/bots). **Los usuarios reales son aproximadamente 17**, con Chile como fuente de casi todo el engagement real.

### Audiencia real por país (engagement como filtro de calidad)

| País | Usuarios | Sesiones engageadas | Avg. tiempo/usuario | Eventos |
|------|----------|--------------------|--------------------|---------|
| 🇨🇱 Chile | 5 | 49 | **56 min 20s** | 3,146 (97.3%) |
| 🇫🇷 Francia | 1 | 1 | 15s | 4 |
| 🇵🇪 Perú | 1 | 0 | 4 min 15s | 4 |
| 🇺🇸 EE.UU. | 15 | 1 | 0s | 46 |
| 🇩🇪 Alemania | 3 | 0 | 5s | 11 |
| Otros | 7 | 0 | — | 21 |

**Conclusión:** El 97% del tráfico de valor viene de Chile. Los 5 usuarios chilenos tienen un tiempo de engagement promedio de casi **1 hora** — señal de un contenido muy relevante para su audiencia objetivo. Las ciudades principales son Santiago (4), Quillota (2) y Viña del Mar (2).

### Páginas más visitadas (últimos 28 días)

| Ruta | Vistas | Usuarios activos | Tiempo medio/usuario |
|------|--------|-----------------|---------------------|
| /index.html | 516 | 3 | 46 min 52s |
| / | 190 | 30 | 1 min 33s |
| /guias.html | 146 | 3 | 5 min 43s |
| /asesoria-navegacion.html | 103 | 2 | 7 min |
| /en/index.html | 82 | 2 | 4 min 55s |
| /sobre-mi.html | 79 | 3 | 6 min 18s |
| /contacto.html | 70 | 3 | 1 min 43s |
| /asesoria-seguridad.html | 41 | 2 | 1 min 28s |
| /asesoria-compra-embarcacion.html | 28 | 3 | 59s |
| /asesoria-electronica.html | 24 | 2 | 33s |

> **Nota técnica:** `/index.html` y `/` son la misma página pero registradas con dos rutas. Juntas suman **706 vistas** — el 50% de todo el tráfico.

**Observaciones:**
- `/asesoria-navegacion.html` tiene el mejor tiempo de lectura entre páginas de servicio: 7 minutos — indica alta intención
- `/contacto.html` tiene 70 vistas pero 0 eventos clave — no hay conversiones configuradas aún
- `/asesoria-compra-embarcacion.html` tiene solo 59s de engagement — puede necesitar revisión de contenido o CTA más fuerte

### Eventos principales

| Evento | Ocurrencias |
|--------|------------|
| page_view | 1,400 |
| user_engagement | 1,300 |
| scroll | 320 |
| session_start | 89 |
| first_visit | 31 |
| click | 21 |
| file_download | 2 |

**Observación:** 21 clics registrados — no se sabe a qué elementos corresponden (WhatsApp, links, etc.) porque los eventos de conversión no están configurados. Configurar eventos clave es la próxima acción prioritaria en GA4.

### Canales de tráfico (últimos 7 días, referencia)

| Canal | Sesiones |
|-------|---------|
| Organic Search | 15 |
| Direct | 5 |
| Unassigned | 2 |

El tráfico orgánico ya es el canal dominante, lo que confirma que el SEO está empezando a dar sus primeros frutos.

---

## 3. Instagram — @hijodelmar.cl

### Estado de la cuenta

| Métrica | Valor |
|---------|-------|
| Seguidores | 11 |
| Siguiendo | 35 |
| Posts publicados | 6 |
| Bio | "Asesorías náuticas y navegación ⚓, seguridad básica" |
| Link en bio | www.hijodelmar.cl ✅ |

### Actividad últimos 28 días

| Métrica total | Valor |
|--------------|-------|
| Vistas totales | 35 |
| Likes totales | 6 |
| Comentarios | 0 |
| Compartidos | 0 |
| Guardados | 0 |
| Cuentas engageadas (pico) | 1-3/día |

**Días con actividad:** Solo 6 días de los 28 tuvieron alguna vista (9, 10, 11, 13, 14, 27, 28 de junio; 4 de julio).

### Último post publicado (27 junio 2026)

- **Tipo:** Carrusel
- **Tema:** Ósmosis en fibra de vidrio — cómo interpretar el medidor de humedad
- **Caption:** Muy bien escrito, con CTA a WhatsApp y link a guía completa en hijodelmar.cl ✅
- **Métricas:** 7 vistas, 0 engagement, 3 alcance
- **Hashtags usados:** #velero #navegacion #osmosis #fibra #nautical

**Observación:** El contenido es bueno pero el alcance es casi nulo por el bajo número de seguidores y la baja frecuencia de publicación. Con 6 posts en toda la historia de la cuenta, el algoritmo de Instagram no está distribuyendo el contenido.

---

## 4. Diagnóstico Consolidado

### Lo que está funcionando ✅

- El sitio ya aparece en Google para búsquedas de nicho náutico (EPIRB, canales sur, SART)
- Los usuarios chilenos que llegan leen mucho (56 minutos promedio) — señal de contenido relevante
- `guia-epirb-que-es.html` es la estrella del momento: 111 impresiones en 28 días con sitio recién indexado
- Tráfico orgánico ya supera al tráfico directo — el SEO está arrancando
- La página de navegación (`asesoria-navegacion.html`) retiene lectores 7 minutos

### Lo que necesita atención ⚠️

| Problema | Impacto | Urgencia |
|---------|---------|---------|
| 52 páginas en sitemap no indexadas | Alto | Esta semana |
| 0 eventos clave configurados en GA4 | Alto | Esta semana |
| Instagram casi inactivo (6 posts, 11 seguidores) | Alto | Esta semana |
| guia-canales-sur-chile: 67 impresiones, 0 clics | Medio | Próximos días |
| Sin schema FAQ en páginas de servicio | Medio | Esta semana |
| /asesoria-compra-embarcacion.html: solo 59s engagement | Medio | Próximas 2 semanas |
| Bots de EE.UU. inflando las cifras de GA4 | Bajo | Crear filtro de IP |

---

## 5. Plan de Acción

### Esta semana

**Search Console:**
- Solicitar indexación manual para las 10 páginas de servicio más importantes directamente en Search Console → Inspección de URL → Solicitar indexación
- Reescribir la meta description de `guia-canales-sur-chile.html` para mejorar CTR desde 0%

**Google Analytics:**
- Configurar eventos clave: clic en WhatsApp, clic en email, clic en tarjeta digital, descarga de PDF
- Filtrar tráfico de bots (crear segmento excluyendo países con 0s engagement)

**Instagram:**
- Publicar 3 posts esta semana (reels cortos o carruseles) para activar el algoritmo
- Usar los mismos temas de las guías más visitadas: EPIRB, canales del sur, compra de embarcaciones
- Incluir siempre CTA a WhatsApp y link en bio → hijodelmar.cl

**SEO:**
- Implementar schema FAQ en `asesoria-navegacion.html`, `asesoria-compra-embarcacion.html`, `asesoria-seguridad.html`
- Añadir `precios.html` a la navegación principal

### Próximas 2–4 semanas

- Añadir schema Article a las 16 guías
- Implementar schema Organization y Person en la homepage
- Optimizar `asesoria-compra-embarcacion.html` — revisar CTA y tiempo en página
- Crear contenido en Instagram basado en los temas del sitio (EPIRB, ósmosis, canales)
- Conectar GA4 con los eventos de WhatsApp para medir conversiones reales

---

*Próxima revisión recomendada: agosto 2026 — en ese punto habrán pasado ~60 días desde el lanzamiento y habrá datos suficientes para medir tendencias reales.*
