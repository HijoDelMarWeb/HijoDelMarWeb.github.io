# SEO Audit — Hijo del Mar (www.hijodelmar.cl)
**Fecha:** 21 de julio de 2026
**Tipo:** Full site audit (actualización del audit del 15 de julio)

---

## Resumen Ejecutivo

Desde el último audit (15/07), el sitio pasó de "base sólida sin schema" a **técnicamente completo**: se agregó JSON-LD (Article + FAQPage + BreadcrumbList) en las 75 páginas, se corrigieron los 4 errores de sintaxis JSON-LD que Search Console reportaba como críticos, se publicaron 12 guías nuevas (6 ES + 6 EN) cerrando casi todo el cluster de seguridad náutica, se limpió el sitemap y se optimizaron 12 títulos/descriptions que excedían el largo recomendado. El tráfico orgánico ya es el canal principal (65% de las sesiones) con un tiempo de interacción excelente (8 min 20 s promedio). La foto técnica es de las mejores posibles para un sitio de este tamaño.

Lo que falta ya no es técnico: es **autoridad de dominio** (cero backlinks détectables) y **volumen de tráfico** (85 sesiones/28 días). El sitio está listo para escalar contenido y visibilidad externa, pero aún no genera conversiones medibles (0 eventos clave en los últimos 7 días).

**Top 3 prioridades de mayor impacto ahora:**
1. **Conseguir los primeros backlinks/menciones** (MundoMaritimo.cl, foros y grupos de vela, Google Business Profile) — el cuello de botella real es autoridad, no técnica.
2. **Cerrar el cluster de contenido restante**: carta náutica SHOA, GPS/chartplotter, guía "cómo empezar a navegar en velero" (top of funnel amplio).
3. **Instrumentar el funnel de conversión**: confirmar que los eventos de WhatsApp/contacto disparan correctamente y agregar CTAs más visibles en las guías de mayor tráfico (asesoría-navegacion.html, sobre-mi.html).

**Valoración general:** Fundación técnica excelente. Fase actual: construir autoridad y volumen, no arreglar problemas.

---

## 1. Tabla de Oportunidades de Keywords

| Keyword | Dificultad Est. | Oportunidad | Estado actual | Intent | Tipo de Contenido |
|---------|----------------|-------------|----------------|--------|-------------------|
| survey náutico Chile | Baja | **Alta** | Página existe (survey-embarcacion.html), sin backlinks | Comercial | Reforzar landing + backlinks |
| asesoría náutica Chile | Muy baja | **Alta** | Homepage cubre el término | Comercial | Reforzar con GBP |
| comprar velero Chile | Baja-Media | **Alta** | Guía errores-comprar-velero existe | Comercial | Ampliar con casos reales |
| peritaje náutico Chile | Muy baja | **Alta** | No cubierto explícitamente | Comercial | Variante de landing survey |
| VHF marino Chile | Muy baja | **Cerrada ✅** | Guía publicada (ES+EN) | Informacional | — |
| AIS transponder velero | Muy baja | **Cerrada ✅** | Guía publicada (ES+EN) | Informacional | — |
| PLB baliza personal Chile | Muy baja | **Cerrada ✅** | Guía publicada (ES+EN) | Informacional | — |
| hombre al agua procedimiento velero | Muy baja | **Cerrada ✅** | Guía publicada (ES+EN) | Informacional | — |
| zarpe Chile requisitos documentos | Baja | **Cerrada ✅** | Guía publicada (ES+EN) | Informacional | — |
| meteorología náutica Chile | Baja | **Cerrada ✅** | Guía publicada (ES+EN) | Informacional | — |
| carta náutica Chile descarga SHOA | Baja | **Alta** | No cubierto | Informacional | Guía práctica con links directos |
| GPS chartplotter marino principiantes | Baja | **Media** | No cubierto | Informacional | Extensión de electrónica náutica |
| cómo empezar a navegar en velero Chile | Media | **Alta** | No cubierto | Informacional (TOFU) | Guía extensa, enlaza todo el cluster |
| curso patrón deportivo Chile | Media | **Media** | No cubierto — nicho de escuelas (competencia distinta) | Informacional | Guía comparativa de licencias |
| licencia náutica Chile requisitos | Media | **Cerrada ✅** | Guía existente | Informacional | — |
| antifouling mantenimiento casco velero | Baja | **Media** | Guía osmosis existe, falta la de mantenimiento anual | Informacional | Guía nueva |
| seguro embarcación Chile | Baja-Media | **Cerrada ✅** | Guía existente | Comercial | — |
| inscripción Directemar Chile | Baja | **Cerrada ✅** | Guía existente | Informacional | — |
| navegar Patagonia canales del sur | Baja-Media | **Media** | Guía existente, poco explotada en redes | Informacional | Promoción / backlinks |
| Beaufort escala viento navegación | Muy baja | **Media** | Cubierta dentro de guía meteorología | Informacional | Sub-sección ya cubierta |

> Sin Ahrefs/Semrush conectados, los rankings y volúmenes siguen siendo estimados por investigación manual. La cobertura de contenido del cluster de seguridad ya está prácticamente completa — la oportunidad ahora está en autoridad y en contenido de "descubrimiento" (TOFU).

---

## 2. Problemas On-Page

| Página | Problema | Severidad | Estado |
|--------|----------|-----------|--------|
| Todas las páginas | Sin schema markup | ~~Alta~~ | ✅ **Resuelto** — Article + FAQPage + BreadcrumbList en las 75 páginas |
| 3 páginas (guia-hombre-al-agua, guia-man-overboard, guia-weather-sailing-chile) | JSON-LD con comillas sin escapar (error de parseo en GSC) | ~~Crítica~~ | ✅ **Resuelto** — corregido y en validación en Search Console |
| 12 páginas (guías nuevas) | Título/meta description excedían el largo recomendado | ~~Media~~ | ✅ **Resuelto** — acortados el 21/07 |
| hreflang ES/EN | Canonical/hreflang faltante o incorrecto | ~~Alta~~ | ✅ **Resuelto** — verificado en las 75 páginas |
| sitemap.xml | Páginas con `noindex` (cookies) incluidas en sitemap | ~~Baja~~ | ✅ **Resuelto** — removidas |
| Páginas de servicio EN | 5 páginas marcadas "canónica diferente" en GSC | Baja | Sin acción — comportamiento normal de hreflang, no es un error |
| Autor / E-E-A-T | Sin bloque de autor visible con credenciales en las guías | Media | **Pendiente** |
| Enlaces internos entre guías | Cluster de seguridad no está interlinkeado explícitamente | Media | **Pendiente** |
| Google Business Profile | No existe perfil de negocio en Google Maps | Alta | **Pendiente** |
| Backlinks | Cero backlinks externos detectables | Alta | **Pendiente** — mayor palanca de crecimiento actual |

---

## 3. Análisis de Brechas de Contenido (Content Gaps)

### ✅ Cerrado desde el último audit
El cluster completo de seguridad náutica que era la prioridad #1 del audit anterior ya está publicado en ambos idiomas: VHF, AIS, PLB, hombre al agua, zarpe, meteorología. Esto era el gap de mayor impacto y ya no existe.

### 🔴 Alta prioridad — lo que queda

**Cómo empezar a navegar en velero en Chile (guía TOFU)**
- Por qué importa: es el contenido de "descubrimiento" más amplio — capta a alguien antes de que sepa que necesita asesoría o survey. Ningún competidor (Krill, Imporlan, escuelas de vela) tiene una guía equivalente en formato educativo + bilingüe.
- Formato: guía extensa (1.500–2.000 palabras) que enlaza a todo el cluster de seguridad y a las páginas de servicio.
- Esfuerzo: sustancial (1 día).

**Carta náutica Chile — dónde descargar cartas SHOA gratis**
- Por qué importa: información dispersa y de mala UX en sitios oficiales; demanda constante entre navegantes nuevos.
- Formato: guía práctica con links directos.
- Esfuerzo: rápido (1-2 horas).

**Peritaje náutico Chile (landing complementaria a survey-embarcacion.html)**
- Por qué importa: "peritaje náutico" es una variante de búsqueda de "survey náutico" con casi cero competencia y directamente comercial.
- Formato: landing o sección ampliada dentro de la página de survey existente.
- Esfuerzo: rápido.

### 🟡 Media prioridad

**GPS / chartplotter marino para principiantes** — extiende la guía de electrónica náutica ya existente. Esfuerzo moderado.

**Antifouling y mantenimiento anual del casco** — complementa la guía de osmosis. Esfuerzo moderado.

**Curso patrón deportivo Chile — guía comparativa de licencias** — nicho distinto (escuelas de vela como Chile Navegantes, Albatros, Puerto Deportivo), pero relevante para quien recién compra un velero y necesita licencia. Esfuerzo moderado.

### 🟢 Baja prioridad / largo plazo
- Regatas en Chile — calendario y cómo participar
- Directorio de marinas y puertos de Chile
- Fondeaderos favoritos canales del sur

---

## 4. Checklist Técnico SEO

| Check | Estado | Detalles |
|-------|--------|----------|
| JSON-LD válido (75 páginas) | ✅ Pass | Verificado programáticamente — 0 errores |
| Canonical tags | ✅ Pass | Presentes y correctos en las 75 páginas |
| hreflang ES/EN | ✅ Pass | Verificado — cada página EN apunta a sí misma + ES, x-default a ES |
| Sitemap XML | ✅ Pass | Limpio, sin páginas noindex, todas las URLs verificadas contra archivos reales |
| Enlaces y recursos internos | ✅ Pass | 0 links o imágenes rotas en auditoría completa |
| Títulos y meta descriptions | ✅ Pass | 0 duplicados, 0 que excedan el largo tras la corrección del 21/07 |
| H1 único por página | ✅ Pass | Verificado |
| Alt text en imágenes | ✅ Pass | Verificado |
| HTTPS | ✅ Pass | GitHub Pages + dominio propio con SSL |
| Google Analytics (GA4) | ✅ Pass | Vinculado con Search Console, eventos clave configurados |
| Indexación | ⚠️ Warning | 47 indexadas, 14 en proceso (7 solicitadas manualmente, 5 "canónica diferente" normal, 1 redirect normal, 1 crawled-sin-indexar ya solicitada) |
| Datos estructurados (validación GSC) | ⚠️ Warning | Corrección enviada el 17/07, validación de Google en curso |
| Backlinks | ❌ Fail | Sin backlinks externos detectables — sigue siendo el cuello de botella principal |
| Google Business Profile | ❌ Fail | No existe — oportunidad de búsquedas locales sin explotar |
| Eventos de conversión (uso real) | ⚠️ Warning | Configurados en GA4 pero 0 disparos en los últimos 7 días — bajo volumen, no error técnico |

---

## 5. Comparación con Competidores

| Dimensión | Hijo del Mar | Krill.cl | Imporlan.cl | Escuelas de vela (Chile Navegantes, Albatros) |
|-----------|-------------|---------|-------------|------------------------------------------------|
| Tipo de negocio | Asesor personal náutico + contenido | Compra/venta + survey de embarcaciones deportivas | Venta de veleros usados + inspección/importación | Cursos y licencias de navegación |
| Contenido informacional (guías) | **Sí — 20+ guías, cluster de seguridad completo** | Mínimo | Mínimo | Mínimo (temario de cursos, no guías SEO) |
| Bilingüe ES/EN | **Sí** | No | Parcial | No |
| Schema markup / rich snippets | **Sí (Article, FAQ, Breadcrumb)** | Sin datos | Sin datos | Sin datos |
| Survey / peritaje | **Sí** | Sí (para privados y aseguradoras) | Sí (parte de su servicio de importación) | No |
| Autoridad de dominio | Baja (nuevo, sin backlinks) | Media (más años en el mercado) | Media-alta (importador establecido) | Media (escuelas con más tráfico de marca) |
| Presencia en búsquedas "qué es X" (informacional) | **Alta y creciendo** | Baja | Baja | Baja |
| Tráfico estimado | Bajo (85 sesiones/28 días) | Medio | Medio-alto | Medio |

**Ventaja competitiva clara:** Hijo del Mar sigue siendo el único actor chileno que combina asesoría personal + contenido educativo completo + bilingüe + schema markup técnico. Krill e Imporlan compiten en el mismo servicio (survey, compra) pero sin la capa de contenido; las escuelas de vela cubren un nicho adyacente (licencias) sin superponerse directamente.

**Desventaja principal — sin cambios respecto al audit anterior:** autoridad de dominio. La brecha técnica se cerró; la brecha de autoridad sigue abierta y es ahora la única palanca real de crecimiento a corto plazo.

---

## 6. Plan de Acción Priorizado

### ⚡ Quick Wins (esta semana)

**1. Crear Google Business Profile**
- Qué hacer: perfil de negocio en Google Maps como servicio profesional de asesoría náutica, área de servicio Chile.
- Impacto: **Alto** — visibilidad en búsquedas locales tipo "asesor náutico Chile".
- Esfuerzo: 1 hora.

**2. Enlazar el cluster de seguridad entre sí**
- Qué hacer: cada guía (EPIRB, SART, AIS, PLB, hombre al agua, VHF) debe enlazar a las demás con anchor text descriptivo.
- Impacto: **Alto** — mejora tiempo en sitio y crawl interno.
- Esfuerzo: 1-2 horas.

**3. Añadir bloque de autor con credenciales en cada guía**
- Qué hacer: "Capitán Rodrigo Troncoso, Marina Mercante" con foto/bio corta al final de cada guía.
- Impacto: **Medio** — señal de E-E-A-T ante Google.
- Esfuerzo: 1-2 horas.

**4. Publicar guía "Carta náutica Chile — dónde descargar SHOA gratis"**
- Impacto: **Medio-alto**, esfuerzo mínimo.
- Esfuerzo: 1-2 horas.

### 📈 Inversiones Estratégicas (este trimestre)

**5. Guía "Cómo empezar a navegar en velero en Chile" (TOFU)**
- Impacto: **Muy alto** — capta tráfico de descubrimiento antes del funnel comercial.
- Esfuerzo: sustancial (1 día).
- Dependencia: ninguna.

**6. Link building activo**
- Contactar MundoMaritimo.cl para nota o colaboración de contenido; publicar en grupos de Facebook de vela en Chile; registrar el sitio en directorios náuticos.
- Impacto: **Muy alto** — resuelve el cuello de botella #1 (autoridad de dominio).
- Esfuerzo: 2-4 horas de outreach, resultados en 4-8 semanas.

**7. Landing "Peritaje Náutico Chile"**
- Ampliar survey-embarcacion.html o crear página hermana apuntando a la variante de búsqueda "peritaje".
- Impacto: **Alto** para captar clientes de compra.
- Esfuerzo: medio día.

**8. Instrumentar mejor el funnel de conversión**
- Revisar por qué 0 eventos clave en 7 días: confirmar que los botones de WhatsApp/contacto disparan el evento en todas las páginas, no solo en algunas.
- Impacto: **Alto** — sin esto, no hay forma de medir si el tráfico se convierte.
- Esfuerzo: rápido (1 hora de revisión).

**9. Guías de nicho adyacente: GPS/chartplotter y mantenimiento de casco**
- Impacto: medio, completa la cobertura del cluster técnico.
- Esfuerzo: moderado, medio día cada una.

---

## ¿Qué sigue?

¿Quieres que:
- Revise ahora mismo por qué no se están disparando los eventos clave en GA4?
- Redacte la guía "Cómo empezar a navegar en velero en Chile"?
- Prepare el texto para el Google Business Profile?
- Escriba un mensaje de contacto/outreach para MundoMaritimo.cl?
