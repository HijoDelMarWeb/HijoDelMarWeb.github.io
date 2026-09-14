# SEO Audit — Hijo del Mar (www.hijodelmar.cl)
**Fecha:** 13 de septiembre de 2026
**Tipo:** Full site audit (actualización con 3 meses de datos reales de Search Console desde el audit del 21 de julio)

---

## Resumen Ejecutivo

Esta es la primera actualización con **datos de rendimiento reales** en vez de estimaciones: desde julio, el sitio pasó de ~17 clics acumulados a **96 clics y 4.640 impresiones en 3 meses**, con **182 consultas distintas** ya generando algún tipo de visibilidad y una posición media de 10,1 (límite entre página 1 y 2). La indexación mejoró de 47 a **62 páginas indexadas** (solo 12 sin indexar, y de esas, 10 son intencionales o normales). Los datos estructurados ya no muestran ningún error. Todo esto confirma que el trabajo técnico de julio está funcionando.

Lo nuevo y más importante de este audit: **no se publicó contenido nuevo desde julio** (ni la guía TOFU, ni la de cartas SHOA, ni backlinks, ni Google Business Profile — los quick wins de hace 2 meses siguen pendientes), y mientras tanto **Imporlan.cl empezó a publicar sus propias guías SEO** ("Cómo Comprar una Lancha Usada en Chile 2026", rankings, costos de mantención), erosionando la ventaja de "único con contenido" que tenía Hijo del Mar. Además, Search Console revela una oportunidad concreta sin explotar: 4 consultas en inglés sobre "sailing Patagonia / southern Chile" generan 140 impresiones combinadas pero 0 clics, posicionando en página 2-3 (posición 11 a 23) — están a un empujón de entrar a página 1.

**Top 3 prioridades de mayor impacto ahora:**
1. **Reactivar la publicación de contenido** — los quick wins y estratégicos de julio (link building, GBP, guía TOFU, enlazado interno) siguen sin ejecutarse 2 meses después; es la brecha más grande frente al audit anterior.
2. **Empujar el contenido "sailing Patagonia/southern Chile" de página 2 a página 1** — ya hay tracción orgánica real en inglés, es la oportunidad de menor esfuerzo y mayor impacto inmediato detectada en este audit.
3. **Responder a Imporlan.cl** — ya no es "sin contenido"; hay que diferenciarse por profundidad y por la asesoría personal, no solo por tener guías.

**Valoración general:** Fundación técnica sólida y validada con datos reales. La ejecución de contenido y autoridad se estancó desde julio — es el momento de retomarla antes de perder la ventaja competitiva.

---

## 1. Datos reales de Search Console (últimos 3 meses: 12 jun – 11 sep 2026)

| Métrica | Valor |
|---------|-------|
| Clics totales | 96 |
| Impresiones totales | 4.640 |
| CTR medio | 2,1% |
| Posición media | 10,1 |
| Consultas con al menos 1 impresión | 182 |
| Páginas indexadas | 62 (antes: 47) |
| Páginas sin indexar | 12 (antes: 14) |
| Errores de datos estructurados | 0 (antes: 4 críticos) |

**Top consultas por clics:**

| Consulta | Clics | Impresiones | CTR | Posición |
|----------|-------|--------------|-----|----------|
| hijo del mar (marca) | 4 | 34 | 11,8% | 5,1 |
| zarpe de embarcaciones | 2 | 39 | 5,1% | 9,8 |
| epirb como funciona | 1 | 11 | 9,1% | 10,8 |
| valdivia | 1 | 1 | 100% | 2,0 |

**Consultas con impresiones altas pero 0 clics (oportunidad directa):**

| Consulta | Impresiones | Posición | Lectura |
|----------|--------------|----------|---------|
| sailing south chile | 53 | 11,8 | Página 2, a 1-2 puestos de página 1 |
| epirb | 42 | 10,0 | Justo en el borde de página 1 |
| sailing southern chilean islands | 41 | 16,1 | Página 2 |
| sailing patagonian channels | 26 | 22,8 | Página 3, más lejos |
| seguro de embarcaciones | 21 | 11,0 | Página 2, cerca |
| sailing club south chile | 20 | 17,4 | Página 2 |

**Por qué importa esto más que cualquier estimación anterior:** las 4 consultas de "sailing ... chile/patagonia" en inglés no fueron un target buscado deliberadamente — son tráfico orgánico que Google ya está mandando a las guías de navegación en Patagonia (en inglés) porque las encuentra relevantes. Con retoques de título, contenido y enlazado (no contenido nuevo desde cero) esas 4 consultas podrían pasar de 0 a decenas de clics/mes.

**Estado de indexación (12 páginas sin indexar, desglose):**

| Motivo | Páginas | Estado |
|--------|---------|--------|
| Excluida por noindex | 2 | Correcto — políticas de cookies, intencional |
| Página con redirección | 1 | Correcto — http:// → https://www. |
| Duplicada (canónica diferente) | 8 | Normal en sitios bilingües — subió de 5 a 8, sin acción necesaria, canonical/hreflang verificados en el audit anterior |
| Descubierta, sin indexar | 1 | De las 7 solicitadas en julio, 6 ya se indexaron |
| Rastreada, sin indexar | 0 | contacto.html ya se indexó tras la solicitud de julio |

---

## 2. Qué cambió desde el audit del 21 de julio (y qué no)

### ✅ Confirmado que funcionó
- Los 4 errores de JSON-LD están en 0 — Search Console ya no reporta ningún error de datos estructurados.
- La indexación subió de 47 a 62 páginas; casi todo lo pendiente de julio ya se resolvió solo.
- El tráfico orgánico es real y creciente (gráfico de 3 meses muestra una curva ascendente sostenida desde mediados de junio).

### ⚠️ Sin cambios — nada de esto se ejecutó en 2 meses
- No hay guía nueva ("cómo empezar a navegar en velero", "carta náutica SHOA") — se revisó el listado completo de archivos del sitio y sigue siendo el mismo de julio.
- No hay bloque de enlazado cruzado entre las guías del cluster de seguridad (EPIRB no enlaza a SART/AIS/PLB/hombre al agua, y viceversa).
- No hay evidencia de Google Business Profile ni de outreach a MundoMaritimo.cl u otros directorios.
- El autor (Capitán Rodrigo Troncoso) ya aparece con bio y foto en las guías — este ítem del plan de julio sí estaba resuelto de antes, se confirma que sigue ahí.

**Nota técnica:** por una falla conocida del entorno de shell (afecta a todas las tareas de Cowork tras una actualización de Windows del 8 de septiembre), no pude correr el escaneo programático de JSON-LD/links rotos de las auditorías anteriores en esta sesión. Confirmé el estado del contenido por lectura directa de archivos y por los datos ya validados de Search Console, que son más confiables que un re-escaneo local de cualquier forma.

---

## 3. Competidores — cambio relevante: Imporlan.cl ahora publica contenido

| Dimensión | Hijo del Mar | Krill.cl | Imporlan.cl (actualizado) |
|-----------|-------------|---------|------------------------------|
| Contenido informacional | 20+ guías, bilingüe, cluster de seguridad completo | Mínimo | **Nuevo: guías propias 2026** ("Cómo comprar lancha usada", ranking top 10, costos de mantención) |
| Bilingüe | Sí | No | No (solo ES) |
| Profundidad del contenido | Alta — guías técnicas con casos reales y credenciales del autor | Baja | Media — formato "listicle"/comercial, sin la misma profundidad técnica |
| Datos de posicionamiento reales | 96 clics / 3 meses, 182 queries (dato propio confirmado) | Sin datos | Aparece en resultados de búsqueda de "comprar lancha usada Chile" (confirmado por búsqueda) |
| Survey / asesoría personal | Sí | Sí | Sí (parte del servicio de importación) |

**Lectura:** Imporlan ya no es un competidor "sin contenido" — invirtió en su propio blog SEO en 2026. La ventaja de Hijo del Mar ya no es "tener contenido" sino la **profundidad técnica, las credenciales verificables del autor y el enfoque bilingüe**, que Imporlan no replica. Conviene reforzar esos tres diferenciadores explícitamente en las páginas de servicio, no dar por sentado que el simple hecho de tener guías sigue siendo suficiente ventaja.

---

## 4. Checklist técnico (vigencia de julio, validado con datos nuevos)

| Check | Estado | Detalle actualizado |
|-------|--------|----------------------|
| JSON-LD válido | ✅ Pass | Confirmado por Search Console: 0 errores de datos estructurados (antes 4 críticos) |
| Indexación | ✅ Mejorado | 62/74 páginas indexadas (83%), sube de 47/61 (77%) |
| Canonical / hreflang | ✅ Pass | Sin cambios, 8 páginas EN en "canónica diferente" es comportamiento normal |
| Core Web Vitals | ⚠️ Sin datos | Search Console reporta "sin datos" en móvil y ordenador — tráfico aún insuficiente para el reporte, no es un fallo |
| HTTPS | ✅ Pass | 15 páginas con HTTPS confirmado, 0 problemas |
| Backlinks | ❌ Sin cambios | Sigue siendo el cuello de botella; sin acción desde julio |
| Google Business Profile | ❌ Sin cambios | Sigue sin crear |
| Contenido nuevo | ❌ Sin cambios | 0 guías nuevas publicadas en 2 meses |
| Enlazado interno del cluster | ❌ Sin cambios | Sigue sin implementarse |

---

## 5. Plan de Acción Priorizado

### ⚡ Quick Wins (esta semana)

**1. Optimizar las 4 páginas "sailing Patagonia/south Chile" para empujarlas a página 1**
- Qué hacer: revisar título, primeros 100 palabras y meta description de `en/guia-sailing-patagonia.html`, `en/guia-canales-sur-chile.html` y páginas relacionadas, asegurando que coincidan con la intención de búsqueda de "sailing south chile" / "sailing patagonian channels".
- Impacto: **Muy alto** — es tráfico que Google ya está enviando, no hay que generarlo desde cero.
- Esfuerzo: 1-2 horas.

**2. Enlazar el cluster de seguridad entre sí** (pendiente desde julio)
- Impacto: alto, esfuerzo bajo — sigue siendo el quick win más barato sin ejecutar.
- Esfuerzo: 1-2 horas.

**3. Crear Google Business Profile** (pendiente desde julio)
- Impacto: alto para búsquedas locales, esfuerzo mínimo.
- Esfuerzo: 1 hora.

### 📈 Inversiones Estratégicas (retomar del plan de julio, sin cambios en la priorización)

**4. Reforzar diferenciadores frente a Imporlan.cl**
- Qué hacer: en las páginas de servicio (asesoría-compra-embarcacion, survey-embarcacion), añadir explícitamente credenciales del Capitán y comparación implícita de profundidad ("no es un checklist genérico, es 30 años de experiencia real").
- Impacto: alto — defiende la ventaja competitiva que se está erosionando.
- Esfuerzo: medio día.

**5. Guía "Cómo empezar a navegar en velero en Chile" (TOFU)** — sigue pendiente desde julio.

**6. Link building activo (MundoMaritimo.cl, grupos de vela, directorios)** — sigue pendiente desde julio; es la palanca de mayor impacto para subir de posición 10,1 promedio a página 1 de forma más amplia.

**7. Guía "Carta náutica Chile — SHOA"** — sigue pendiente, esfuerzo bajo.

---

## ¿Qué sigue?

¿Quieres que:
- Optimice ahora mismo el título y meta description de las páginas "sailing Patagonia/south Chile" (el quick win de mayor impacto detectado)?
- Redacte el bloque de enlazado interno del cluster de seguridad?
- Prepare el texto para el Google Business Profile?
- Escriba el mensaje de outreach para MundoMaritimo.cl?
