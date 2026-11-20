<!--
prompts.md · tu bitácora de prompts de hoy.
Vive en tu carpeta cv, junto a index.html.
La lección te dice qué encabezados lleva
y qué va debajo de cada uno.
-->

# Bitácora de prompts — Sesión 10

> **Nota:** todavía no tengo los encabezados obligatorios que pide la lección.
> Esta estructura es provisional y se adaptará a ellos cuando los tenga.

- **Fecha:** 19 de noviembre de 2026
- **Herramienta:** Claude Code (modelo Claude Opus 5.5) en la app de escritorio de Claude, en macOS.
- **Autorización:** el profesor autorizó hacer la práctica completa con Claude, sin opencode.

---

## Prompt 1 (interrumpido y sustituido)

**Resumen de lo que pedí:** reconstruir mi CV de la sesión 7 en una carpeta `cv`,
subirlo a GitHub y usar opencode para agregar la sección "Cursos y certificaciones".

**Lo que alcanzó a hacer Claude antes de que yo lo interrumpiera:**

- Comprobó la versión de Git instalada: `git version 2.50.1 (Apple Git-155)`.
- Buscó una carpeta `cv` existente en Documentos, Escritorio y Descargas: no había ninguna.
- Comprobó que `opencode` no está instalado en la computadora.
- Comprobó que las 4 imágenes externas del CV (perfil y 3 proyectos) responden con código 200.

No se modificó ningún archivo en esta etapa ni se usó opencode.

## Prompt 2 (instrucciones principales)

**Resumen de lo que pedí:**

1. Tomar los archivos originales (`index.html`, `css/styles.css`, `js/interactions.js`,
   `prompts.md`) y construir una versión completa y profesional **sin cambiar el contenido**
   ni las funciones del CV.
2. Conservar la paleta (`#1f4e79`, `#163a5c`, `#f5f5f5`, `#222222`, `#D5FF57`) y Roboto.
3. Mantener la galería (Anterior, Siguiente, contador, navegación circular) y el botón
   "Más sobre mí" (mostrar/ocultar, `aria-expanded`, sin duplicar elementos).
4. Reemplazar las imágenes de `/publico/img/muestras/` si no funcionan localmente.
5. Agregar la sección **Cursos y certificaciones** con `id="certifications"` y su enlace
   en el menú, **sin inventar** cursos ni certificaciones.
6. Convertir la carpeta en repositorio Git y subirla a GitHub en un repositorio llamado `cv`.
7. Usar este archivo como bitácora real, sin inventar prompts, fechas ni pruebas.

---

## Actividades realizadas

### Commit 1 — CV original

- Se copiaron mis 4 archivos originales **sin cambios** a la carpeta `cv`.
- Se agregó `.gitignore` para excluir `.DS_Store` y carpetas de editores.
- Se inicializó Git (`git init -b main`) y se hizo el primer commit.

### Revisión del original en el navegador

Se sirvió la carpeta en `http://localhost:8765` y se comprobó:

- Las 4 imágenes externas **sí cargan**.
- El favicon, el fondo del perfil (`banner.svg`) y las 3 imágenes de la galería
  dan **error 404**, porque `/publico/img/muestras/` solo existe en la plataforma.
- La imagen del encabezado es una ilustración de una persona con un currículum,
  no una silueta, así que se corrigió su texto `alt`.

### Commit 2 — Mejoras de diseño, accesibilidad e imágenes

- Se crearon imágenes SVG propias en `img/` para sustituir las de la plataforma:
  `profile.svg`, `banner.svg`, `article-html.svg`, `article-flexbox.svg` y
  `article-accessibility.svg`.
- Se crearon SVG de respaldo para los proyectos (`project-*.svg`). Si una imagen
  externa deja de funcionar, JavaScript la cambia por su respaldo local
  (atributo `data-fallback`).
- El comentario inicial del HTML se movió después de `<!DOCTYPE html>`.
- CSS: `box-sizing: border-box`, anchos con `calc()` para `.col-1-3` y `.col-1-2`
  (sin desbordamiento), tarjetas, foco visible con teclado, enlace "Saltar al contenido",
  diseño para escritorio, tableta (≤ 860 px), teléfono (≤ 600 px) y teléfono pequeño (≤ 420 px).
- JavaScript: rutas locales en la galería, comprobaciones para no generar errores si
  falta un elemento, y el contador ahora dice "Imagen 1 de 3".
- Se corrigió un error encontrado durante la revisión: en "Educación" el título se
  estiraba; se resolvió con `align-content: flex-start` en `.row`.
- En el pie de página se aclaró que `gerardo@email.com` es un correo de ejemplo.

### Commit 3 — Sección Cursos y certificaciones

- Se agregó `<section class="row" id="certifications">` con `<h2>Cursos y certificaciones</h2>`.
- Se agregó `<a href="#certifications">Cursos y certificaciones</a>` al menú.
- Como no tengo cursos ni certificaciones confirmados, la sección contiene dos tarjetas
  marcadas como **"Pendiente de completar"** (institución, fecha y constancia pendientes).
- Estilos nuevos: `.cert-intro`, `.cert-list`, `.cert-card`, `.cert-status` y `.cert-details`.
  La cuadrícula pasa de 2 columnas a 1 según el ancho de la pantalla.

---

## Verificaciones ejecutadas por Claude

Realizadas en el navegador integrado de la app de Claude, en `localhost`:

| Verificación | Resultado |
|---|---|
| El HTML empieza con `<!DOCTYPE html>` | Sí |
| Etiquetas sin cerrar, `img` sin `alt`, IDs duplicados (script de Python) | Ninguno |
| CSS enlazado y aplicado | Sí |
| Todas las imágenes cargan (perfil, 3 proyectos, galería, fondo, favicon) | Sí |
| Respaldo de imagen: se rompió a propósito la URL de "Redes" | Cambió a `img/project-networks.svg` |
| Galería: Siguiente ×3 y Anterior (navegación circular, contador y `alt`) | Correcto |
| "Más sobre mí": 3 clics → `aria-expanded` true/false/true, sin duplicar la lista | Correcto |
| Los 6 enlaces del menú apuntan a una sección existente | Sí |
| Clic en "Cursos y certificaciones" lleva a `#certifications` | Sí |
| Desbordamiento horizontal a 375, 768 y 1280 px | No hay |
| Errores en la consola (pestaña nueva, tras hacer clic en todos los botones) | Ninguno |

## Verificaciones pendientes (manuales)

- [ ] Validar el HTML en https://validator.w3.org/ (no se ejecutó; requiere enviar el código a un servicio externo).
- [ ] Probar en Safari y en un teléfono real (se probó solo con anchos emulados).
- [ ] Subir el repositorio a GitHub y confirmar que aparece el último commit.
- [ ] Registrar el repositorio en la plataforma educativa.
- [ ] Sustituir el correo de ejemplo y completar los cursos cuando haya datos reales.
