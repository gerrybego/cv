/* ==========================================
   IMÁGENES DE RESPALDO
   Si una imagen externa no carga, se sustituye
   por la versión local indicada en data-fallback.
========================================== */

function useFallback(image) {
  const fallback = image.dataset.fallback;

  // Evita un ciclo infinito si el respaldo también fallara
  if (fallback && image.getAttribute("src") !== fallback) {
    image.src = fallback;
  }
}

document.querySelectorAll("img[data-fallback]").forEach(function (image) {

  image.addEventListener("error", function () {
    useFallback(image);
  });

  // La imagen pudo fallar antes de que este script se ejecutara
  if (image.complete && image.naturalWidth === 0) {
    useFallback(image);
  }

});

/* ==========================================
   ELEMENTOS DE LA GALERÍA
========================================== */

const galleryImage = document.getElementById("gallery-image");

const imageCounter = document.getElementById("image-counter");

const prevButton = document.getElementById("prev-image");

const nextButton = document.getElementById("next-image");

/* ==========================================
   IMÁGENES DISPONIBLES
   Rutas locales: /publico/img/muestras/ solo
   existía en la plataforma educativa.
========================================== */

const images = [
  {
    src: "img/article-html.svg",
    alt: "HTML: dos corchetes angulares sobre fondo verde"
  },
  {
    src: "img/article-flexbox.svg",
    alt: "CSS con flexbox: tres cajas acomodadas en una fila"
  },
  {
    src: "img/article-accessibility.svg",
    alt: "Accesibilidad: un botón con el contorno de foco marcado"
  }
];

/* ==========================================
   ESTADO DE LA GALERÍA
========================================== */

let current = 0;

/* ==========================================
   MOSTRAR IMAGEN
   Navegación circular: después de la última
   vuelve a la primera y viceversa.
========================================== */

function showImage(index) {

  if (index < 0) {
    current = images.length - 1;

  } else if (index >= images.length) {
    current = 0;

  } else {
    current = index;
  }

  galleryImage.src = images[current].src;

  galleryImage.alt = images[current].alt;

  imageCounter.textContent =
    "Imagen " + (current + 1) + " de " + images.length;
}

/* ==========================================
   BOTONES ANTERIOR Y SIGUIENTE
   Solo se conectan si la galería existe,
   para no provocar errores en la consola.
========================================== */

if (galleryImage && imageCounter && prevButton && nextButton) {

  prevButton.addEventListener("click", function () {
    showImage(current - 1);
  });

  nextButton.addEventListener("click", function () {
    showImage(current + 1);
  });

  // Inicializar galería
  showImage(0);
}

/* ==========================================
   ELEMENTOS DEL PERFIL
========================================== */

const aboutSection = document.querySelector("#about");

const toggleButton = document.querySelector("#toggle-details");

/* ==========================================
   INFORMACIÓN ADICIONAL
========================================== */

const facts = [
  "Soy estudiante de Ingeniería en Sistemas.",
  "Me interesa la programación y las redes.",
  "Me gusta aprender cosas nuevas y trabajar en equipo."
];

/* ==========================================
   BOTÓN MÁS SOBRE MÍ
   Muestra u oculta la lista sin duplicarla y
   mantiene aria-expanded sincronizado.
========================================== */

if (aboutSection && toggleButton) {

  toggleButton.addEventListener("click", function () {

    const existingList = aboutSection.querySelector(".facts-list");

    if (existingList) {

      existingList.remove();

      toggleButton.setAttribute(
        "aria-expanded",
        "false"
      );

    } else {

      const list = document.createElement("ul");

      list.className = "facts-list";

      facts.forEach(function (fact) {

        const item = document.createElement("li");

        item.textContent = fact;

        list.appendChild(item);

      });

      aboutSection.appendChild(list);

      toggleButton.setAttribute(
        "aria-expanded",
        "true"
      );
    }

  });

}
