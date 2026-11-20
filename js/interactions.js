/* ==========================================
   ELEMENTOS DE LA GALERÍA
========================================== */

const galleryImage = document.getElementById("gallery-image");

const imageCounter = document.getElementById("image-counter");

const prevButton = document.getElementById("prev-image");

const nextButton = document.getElementById("next-image");

/* ==========================================
   IMÁGENES DISPONIBLES
========================================== */

const images = [
  {
    src: "/publico/img/muestras/article-html.svg",
    alt: "HTML: dos corchetes angulares sobre fondo verde"
  },
  {
    src: "/publico/img/muestras/article-flexbox.svg",
    alt: "CSS con flexbox: tres cajas acomodadas en una fila"
  },
  {
    src: "/publico/img/muestras/article-accessibility.svg",
    alt: "Accesibilidad: un botón con el contorno de foco marcado"
  }
];

/* ==========================================
   ESTADO DE LA GALERÍA
========================================== */

let current = 0;

/* ==========================================
   MOSTRAR IMAGEN
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
    (current + 1) + " de " + images.length;
}

/* ==========================================
   BOTÓN ANTERIOR
========================================== */

prevButton.addEventListener("click", function () {
  showImage(current - 1);
});

/* ==========================================
   BOTÓN SIGUIENTE
========================================== */

nextButton.addEventListener("click", function () {
  showImage(current + 1);
});

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
========================================== */

toggleButton.addEventListener("click", function () {

  const existingList = document.querySelector(
    "#about .facts-list"
  );

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

/* ==========================================
   INICIALIZAR GALERÍA
========================================== */

showImage(0);
