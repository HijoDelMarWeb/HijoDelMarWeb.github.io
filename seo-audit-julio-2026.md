# SEO Audit — Hijo del Mar (www.hijodelmar.cl)
**Fecha:** 15 de julio de 2026  
**Tipo:** Full site audit

---

## Resumen Ejecutivo

Hijo del Mar tiene una base técnica sólida: velocidad excelente (GTmetrix 96%), sitio bilingüe ES/EN correctamente configurado, y contenido de nicho con muy poca competencia directa en Chile. La principal fortaleza es el posicionamiento único como asesor náutico personal con experiencia real — ningún competidor chileno ofrece exactamente esto. Sin herramientas de SEO conectadas, los datos de volumen son estimados a partir de la investigación de competidores y búsquedas asociadas.

**Top 3 prioridades de mayor impacto:**
1. **Añadir schema markup** (Article, FAQPage, Organization) — quick win técnico con potencial de rich snippets
2. **Crear 8–10 guías sobre equipos y procedimientos de seguridad faltantes** — los competidores no cubren VHF, AIS, PLB, hombre al agua, zarpe
3. **Conseguir las primeras menciones / backlinks** desde foros náuticos y directorios marítimos chilenos

**Valoración general:** Base sólida, necesita contenido y autoridad de dominio.

---

## 1. Tabla de Oportunidades de Keywords

| Keyword | Dificultad Est. | Oportunidad | Ranking Actual | Intent | Tipo de Contenido |
|---------|----------------|-------------|----------------|--------|-------------------|
| survey náutico Chile | Baja | **Alta** | No ranking | Comercial | Landing page servicio |
| asesoría náutica Chile | Muy baja | **Alta** | No ranking | Comercial | Homepage + landing |
| comprar velero Chile | Baja-Media | **Alta** | No ranking | Comercial | Guía + landing servicio |
| EPIRB Chile qué es | Muy baja | **Alta** | ~Top 3 | Informacional | Guía (ya existe ✓) |
| SART respondedor radar | Muy baja | **Alta** | ~Top 3 | Informacional | Guía (ya existe ✓) |
| cómo comprar velero usado Chile | Baja | **Alta** | No ranking | Comercial | Guía detallada |
| peritaje náutico Chile | Muy baja | **Alta** | No ranking | Comercial | Landing servicio survey |
| equipamiento de seguridad velero Chile | Baja | **Alta** | No ranking | Informacional | Guía (ya existe ✓) |
| licencia náutica Chile requisitos | Media | **Alta** | No ranking | Informacional | Guía (ya existe ✓) |
| navegar en Chile velero | Baja | **Alta** | No ranking | Informacional | Guía (ya existe ✓) |
| navegar Patagonia Chile | Baja-Media | **Alta** | No ranking | Informacional | Guía (ya existe ✓) |
| VHF marino Chile | Muy baja | **Alta** | No ranking | Informacional | Guía (FALTA) |
| AIS transponder velero | Muy baja | **Alta** | No ranking | Informacional | Guía (FALTA) |
| PLB baliza personal Chile | Muy baja | **Media** | No ranking | Informacional | Guía (FALTA) |
| hombre al agua procedimiento velero | Muy baja | **Media** | No ranking | Informacional | Guía (FALTA) |
| zarpe Chile requisitos documentos | Baja | **Media** | No ranking | Informacional | Guía (FALTA) |
| meteorología náutica Chile | Baja | **Media** | No ranking | Informacional | Guía (FALTA) |
| osmosis casco velero tratamiento | Baja | **Media** | No ranking | Informacional | Guía (ya existe ✓) |
| seguro embarcación Chile | Baja-Media | **Media** | No ranking | Comercial | Guía (ya existe ✓) |
| inscripción Directemar Chile | Baja | **Media** | No ranking | Informacional | Guía (ya existe ✓) |
| carta náutica Chile descarga | Baja | **Media** | No ranking | Informacional | Guía (FALTA) |
| GPS chartplotter marino principiantes | Baja | **Media** | No ranking | Informacional | Guía (FALTA) |
| velero vs lancha diferencias | Muy baja | **Baja** | No ranking | Informacional | Guía (ya existe ✓) |
| canales sur Chile navegación | Baja | **Baja** | No ranking | Informacional | Guía (ya existe ✓) |
| electrónica náutica principiantes | Baja | **Baja** | No ranking | Informacional | Guía (ya existe ✓) |

> **Nota:** Sin Ahrefs/Semrush conectados, los rankings son estimados. Conectar una de esas herramientas vía MCP daría datos exactos.

---

## 2. Problemas On-Page

| Página | Problema | Severidad | Fix recomendado |
|--------|----------|-----------|-----------------|
| Todas las páginas | Sin schema markup | **Alta** | Añadir Article schema en guías, Organization en home, FAQPage en faq.html |
| faq.html / en/faq.html | Sin FAQPage schema | **Alta** | Implementar JSON-LD con preguntas y respuestas — habilita rich snippets en Google |
| Páginas de servicio (asesoría-*) | Contenido potencialmente corto | **Media** | Verificar que cada página tenga ≥600 palabras con casos de uso concretos |
| guias.html / en/guias.html | Página índice de guías sin estructura de cluster | **Media** | Añadir intro con keywords, organizar guías por categoría (Seguridad, Navegación, Compra) |
| Todas las guías | Sin autor schema / byline visible | **Media** | Añadir `author` en JSON-LD y nombre/credenciales del autor visible en el HTML |
| Imágenes en guías | Alt text genérico o faltante (sin verificar) | **Media** | Auditar todas las imágenes con alt text descriptivo + keyword |
| index.html | Sin schema Organization / LocalBusiness | **Media** | Añadir JSON-LD con nombre, URL, contacto, área de servicio (Chile) |
| Páginas de servicio EN | 4 páginas aún como "duplicadas de canónica" en GSC | **Media** | Esperar 4–8 semanas tras corrección de hreflang (en proceso) |
| Todas las guías EN | Sin hreflang en algunas guías antiguas (verificar) | **Baja** | Confirmar que todas las guías bilingües tienen hreflang correcto |
| sitemap.xml | Páginas policy/cookies con prioridad 0.2 | **Baja** | OK — prioridad correcta para contenido legal |

---

## 3. Análisis de Brechas de Contenido (Content Gaps)

### 🔴 Alta prioridad — Falta contenido que los usuarios buscan y nadie en Chile cubre bien

**VHF marino Chile — cómo usar la radio VHF en un velero**
- Por qué importa: Requisito legal en muchas categorías de navegación; mucha demanda de principiantes
- Formato: Guía práctica (canales, procedimientos, emergencias, licencia operador)
- Esfuerzo: Moderado (medio día)

**AIS transponder — qué es y por qué necesitas uno**
- Por qué importa: Complemento natural de las guías EPIRB y SART ya publicadas; baja competencia
- Formato: Guía técnica (clase A vs B, SART vs AIS-SART, obligatorio en Chile)
- Esfuerzo: Moderado

**PLB — baliza de rescate personal vs EPIRB**
- Por qué importa: Continúa el cluster de seguridad (EPIRB → SART → PLB → AIS)
- Formato: Guía comparativa PLB vs EPIRB, cuándo llevar cada uno
- Esfuerzo: Rápido (1–2 horas)

**Hombre al agua — procedimiento en velero**
- Por qué importa: Búsqueda alta en comunidades de vela; posiciona como experto en seguridad
- Formato: Guía de procedimiento paso a paso con diagrama
- Esfuerzo: Moderado

**Zarpe en Chile — requisitos y documentos**
- Por qué importa: Todo navegante que sale de puerto necesita zarpe; información dispersa en sitios oficiales con mala UX
- Formato: Guía práctica (qué pedir, dónde, tiempos, costos)
- Esfuerzo: Moderado

---

### 🟡 Media prioridad

**Meteorología náutica Chile — cómo leer el tiempo antes de navegar**
- Formato: Guía + recursos gratuitos (DMC, Windy, PredictWind)
- Esfuerzo: Moderado

**Carta náutica Chile — dónde descargar SHOA gratis**
- Formato: Guía práctica con links directos (SHOA publica cartas gratuitas)
- Esfuerzo: Rápido

**GPS chartplotter marino — guía para principiantes**
- Extiende la guía de electrónica náutica ya existente
- Esfuerzo: Moderado

**Cómo navegar en velero — guía para principiantes desde cero**
- El "top of funnel" más amplio; atrae a futuros clientes antes de que sepan qué necesitan
- Esfuerzo: Sustancial (contenido largo)

**Antifouling y mantenimiento anual del casco**
- Complemento de la guía osmosis
- Esfuerzo: Moderado

---

### 🟢 Baja prioridad / Largo plazo

- Regatas en Chile — calendario y cómo participar
- Marinas y puertos de Chile — directorio
- Fondeaderos favoritos canales del sur
- Cómo leer los reglamentos Directemar

---

## 4. Checklist Técnico SEO

| Check | Estado | Detalles |
|-------|--------|----------|
| Velocidad de carga | ✅ Pass | LCP 658ms, Performance 96% GTmetrix |
| Mobile-friendly | ✅ Pass | Responsive, menú hamburguesa funcional en todas las páginas |
| HTTPS | ✅ Pass | GitHub Pages + dominio personalizado con SSL |
| Sitemap XML | ✅ Pass | 60 URLs, limpio, actualizado 15/07/2026 |
| Robots.txt | ✅ Pass | Sin restricciones problemáticas |
| Canonical tags | ✅ Pass | Presentes en todas las páginas |
| hreflang ES/EN | ✅ Pass | Corregido en todas las páginas, incluidos index/en/index |
| Core Web Vitals LCP | ✅ Pass | 658ms (excelente, umbral bueno < 2.5s) |
| Core Web Vitals CLS | ✅ Pass | 0.01 (excelente, umbral bueno < 0.1) |
| Core Web Vitals TBT/INP | ⚠️ Warning | TBT 166ms — aceptable pero mejorable (lang-detect.js + render) |
| Indexación | ⚠️ Warning | 47 indexadas, 14 no indexadas; 7 solicitadas hoy |
| Schema / Datos estructurados | ❌ Fail | Ninguna página tiene JSON-LD — oportunidad grande de rich snippets |
| Backlinks | ❌ Fail | Sin datos de backlinks externos detectados — autoridad de dominio baja |
| Páginas duplicadas | ⚠️ Warning | 5 páginas EN marcadas como duplicadas en GSC (resolución en 4–8 semanas) |
| Imágenes con alt text | ⚠️ Warning | No auditado sistemáticamente |
| Links internos | ⚠️ Warning | Sin estrategia de cluster explícita — guías no siempre se enlazan entre sí |
| Google Analytics | ✅ Pass | GA4 G-KRJ42YBH5N, vinculado con Search Console |
| Eventos de conversión | ⚠️ Warning | generate_lead configurado en código; pendiente marcarlo como evento clave en GA4 |

---

## 5. Comparación con Competidores

| Dimensión | Hijo del Mar | Krill.cl | Sermak.cl | Oceanic.cl | PatagoniaServicios.cl |
|-----------|-------------|---------|-----------|-----------|----------------------|
| Tipo de negocio | Asesor personal náutico | Escuela + proyectos vela | Servicios náuticos | Dealer de embarcaciones | Servicios en terreno |
| Contenido informacional | **Sí (20+ guías)** | Muy poco | Ninguno | Ninguno | Muy poco |
| Blog / Guías SEO | **Sí** | No | No | No | No |
| Bilingüe ES/EN | **Sí** | No | No | No | No |
| Survey náutico | **Sí** | No | No | No | No |
| Presencia en guías tipo "qué es X" | **Alta** | Baja | Baja | Baja | Baja |
| Autoridad de dominio estimada | Baja (nuevo) | Media | Baja | Media | Baja |
| Velocidad web | **Muy alta** | Media | Media | Media | Media |
| Schema markup | ❌ Ninguno | Sin datos | Sin datos | Sin datos | Sin datos |
| Tráfico estimado | Muy bajo (4 users/sem) | Bajo | Bajo | Bajo-Medio | Muy bajo |

**Ventaja competitiva clara de Hijo del Mar:** Es el único sitio chileno que combina asesoría personal + contenido educativo + bilingüe. Los competidores son dealers o técnicos, no asesores de confianza con contenido.

**Desventaja principal:** Autoridad de dominio muy baja por ser nuevo — sin backlinks, Google aún no confía suficiente para posicionar en páginas 1–3 de términos competidos.

---

## 6. Plan de Acción Priorizado

### ⚡ Quick Wins (esta semana, < 2 horas cada uno)

**1. Añadir schema Organization en index.html y en/index.html**
- Qué hacer: Insertar JSON-LD con nombre, URL, logo, contacto, área de servicio
- Impacto: **Alto** — habilita Knowledge Panel en Google
- Esfuerzo: 30 min
- Ejemplo:
```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Hijo del Mar",
  "url": "https://www.hijodelmar.cl",
  "description": "Asesoría náutica personalizada por Capitán de la Marina Mercante",
  "areaServed": "Chile",
  "serviceType": "Nautical Advisory"
}
```

**2. Añadir FAQPage schema en faq.html y en/faq.html**
- Qué hacer: JSON-LD con todas las preguntas/respuestas del FAQ
- Impacto: **Alto** — rich snippets de FAQ en resultados Google
- Esfuerzo: 45 min

**3. Añadir Article schema en cada guía**
- Qué hacer: JSON-LD con headline, author, datePublished, dateModified
- Impacto: **Medio** — mejora autoridad de contenido, habilita artículo rico
- Esfuerzo: 1 hora (script Python para añadir a todas las guías)

**4. Enlazar guías entre sí con anchor text descriptivo**
- Qué hacer: La guía EPIRB debe enlazar a SART, PLB, equipamiento seguridad. La guía osmosis a survey náutico. Etc.
- Impacto: **Alto** — mejora crawl y tiempo en sitio
- Esfuerzo: 1–2 horas

---

### 📈 Inversiones Estratégicas (este trimestre)

**5. Publicar 6 guías de seguridad faltantes (cluster de seguridad)**
- VHF marino, AIS transponder, PLB, Hombre al agua, Zarpe Chile, Meteorología náutica
- Impacto: **Muy alto** — posiciona el site como referente de seguridad náutica en Chile
- Esfuerzo: 3–5 días en total
- Dependencia: Ninguna

**6. Crear página de aterrizaje "Survey Náutico Chile" optimizada**
- Actualmente survey-embarcacion.html existe pero el término "survey náutico" o "peritaje náutico Chile" tiene casi cero competencia
- Incluir: qué es, qué incluye, por qué hacerlo, precio referencial, CTA
- Impacto: **Muy alto** para captar clientes de compra
- Esfuerzo: Medio (medio día)

**7. Conseguir backlinks iniciales (link building básico)**
- Directorios: MundoMaritimo.cl, CosasDeBarcos.com (versión Chile), grupos Facebook náutica Chile
- Menciones: Contactar NauticaTest.cl para colaboración de contenido
- Impacto: **Alto** — la autoridad de dominio es el cuello de botella principal
- Esfuerzo: 2–4 horas (outreach)

**8. Guía para principiantes: "Cómo empezar a navegar en velero en Chile"**
- El contenido top-of-funnel más amplio — atrae al futuro cliente antes de que sepa que necesita asesoría
- 1.500–2.000 palabras, con links internos a todas las guías relevantes
- Impacto: **Alto** (tráfico de descubrimiento)
- Esfuerzo: Sustancial (1 día)

**9. Crear perfil en Google Business Profile**
- Hijo del Mar puede crear un perfil de negocio en Google Maps como servicio profesional
- Impacto: **Alto** — aparece en búsquedas locales "asesoría náutica Santiago" / "asesor náutico Chile"
- Esfuerzo: Rápido (1 hora)

**10. Añadir autor visible en guías con credenciales**
- Añadir un bloque de autor al final de cada guía ("Capitán de la Marina Mercante, 30+ años navegando canales del sur")
- Impacto: **Medio** — mejora E-E-A-T (Experience, Expertise, Authoritativeness, Trust) ante Google
- Esfuerzo: 1–2 horas

---

## ¿Qué sigue?

¿Quieres que:
- Genere el schema JSON-LD listo para pegar en las páginas?
- Cree briefs de contenido para las guías faltantes (VHF, AIS, PLB, etc.)?
- Escriba directamente las guías faltantes?
- Cree un calendario de contenido para el Q3 2026?
- Profundice en alguna sección específica de este audit?
