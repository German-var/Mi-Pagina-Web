/* =====================================================
   MODO WEB.
   Web Design by German Varela
===================================================== */


/* =====================================================
   SUPABASE
===================================================== */

const SUPABASE_URL =
  "https://caxpsvraudgivyvbewuc.supabase.co";

const SUPABASE_KEY =
  "sb_publishable_fDzVqKPbjXIDBeRir4BFlw_Cvh2thKe";

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);


/* =====================================================
   HEADER
===================================================== */

const header = document.getElementById("header");

function updateHeader() {

  if (window.scrollY > 30) {

    header.classList.add("scrolled");

  } else {

    header.classList.remove("scrolled");

  }

}

window.addEventListener(
  "scroll",
  updateHeader
);

updateHeader();


/* =====================================================
   MOBILE MENU
===================================================== */

const menuToggle =
  document.getElementById("menuToggle");

const mobileMenu =
  document.getElementById("mobileMenu");


menuToggle.addEventListener(
  "click",
  () => {

    menuToggle.classList.toggle(
      "active"
    );

    mobileMenu.classList.toggle(
      "active"
    );

    document.body.classList.toggle(
      "menu-open"
    );

  }
);


document
  .querySelectorAll(".mobile-menu a")
  .forEach((link) => {

    link.addEventListener(
      "click",
      () => {

        menuToggle.classList.remove(
          "active"
        );

        mobileMenu.classList.remove(
          "active"
        );

        document.body.classList.remove(
          "menu-open"
        );

      }
    );

  });


/* =====================================================
   HERO CHANGING MODE
===================================================== */

const changingMode =
  document.getElementById(
    "changingMode"
  );


const modes = [
  "MINIMAL",
  "EDITORIAL",
  "LUXURY",
  "BUSINESS",
  "CREATIVE",
  "WELLNESS",
  "PLAYFUL",
  "TECH",
  "SHOP",
  "TU MARCA"
];


let modeIndex = 0;


function changeMode() {

  changingMode.style.opacity =
    "0";

  changingMode.style.transform =
    "translateY(8px)";


  setTimeout(() => {

    modeIndex =
      (modeIndex + 1) %
      modes.length;


    changingMode.textContent =
      modes[modeIndex];


    changingMode.style.opacity =
      "1";

    changingMode.style.transform =
      "translateY(0)";

  }, 250);

}


changingMode.style.transition =
  "opacity .25s ease, transform .25s ease";


setInterval(
  changeMode,
  1900
);


/* =====================================================
   PROJECT FILTER
===================================================== */

const filters =
  document.querySelectorAll(
    ".filter"
  );


const projects =
  document.querySelectorAll(
    ".project-card"
  );


filters.forEach((filter) => {

  filter.addEventListener(
    "click",
    () => {

      filters.forEach(
        (button) => {

          button.classList.remove(
            "active"
          );

        }
      );


      filter.classList.add(
        "active"
      );


      const selectedFilter =
        filter.dataset.filter;


      projects.forEach(
        (project) => {

          const categories =
            project.dataset.category ||
            "";


          if (
            selectedFilter === "all" ||
            categories.includes(
              selectedFilter
            )
          ) {

            project.classList.remove(
              "hidden-project"
            );

          } else {

            project.classList.add(
              "hidden-project"
            );

          }

        }
      );

    }
  );

});


/* =====================================================
   FAQ
===================================================== */

const faqItems =
  document.querySelectorAll(
    ".faq-item"
  );


faqItems.forEach((item) => {

  const question =
    item.querySelector(
      ".faq-question"
    );


  const answer =
    item.querySelector(
      ".faq-answer"
    );


  question.addEventListener(
    "click",
    () => {

      const alreadyOpen =
        item.classList.contains(
          "active"
        );


      faqItems.forEach(
        (otherItem) => {

          otherItem.classList.remove(
            "active"
          );


          const otherAnswer =
            otherItem.querySelector(
              ".faq-answer"
            );


          otherAnswer.style.maxHeight =
            null;

        }
      );


      if (!alreadyOpen) {

        item.classList.add(
          "active"
        );


        answer.style.maxHeight =
          answer.scrollHeight +
          "px";

      }

    }
  );

});


/* =====================================================
   REVEAL
===================================================== */

const revealElements =
  document.querySelectorAll(
    ".reveal"
  );


const revealObserver =
  new IntersectionObserver(

    (entries) => {

      entries.forEach(
        (entry) => {

          if (
            entry.isIntersecting
          ) {

            entry.target
              .classList
              .add("visible");


            revealObserver
              .unobserve(
                entry.target
              );

          }

        }
      );

    },

    {

      threshold: 0.1,

      rootMargin:
        "0px 0px -30px 0px"

    }

  );


revealElements.forEach(
  (element) => {

    revealObserver.observe(
      element
    );

  }
);


/* =====================================================
   SMOOTH INTERNAL LINKS
===================================================== */

document
  .querySelectorAll(
    'a[href^="#"]'
  )
  .forEach((anchor) => {

    anchor.addEventListener(
      "click",
      function (event) {

        const targetId =
          this.getAttribute(
            "href"
          );


        if (
          targetId === "#"
        ) {

          return;

        }


        const target =
          document.querySelector(
            targetId
          );


        if (!target) {

          return;

        }


        event.preventDefault();


        const headerHeight =
          header.offsetHeight;


        const targetPosition =

          target
            .getBoundingClientRect()
            .top +

          window.scrollY -

          headerHeight;


        window.scrollTo({

          top:
            targetPosition,

          behavior:
            "smooth"

        });

      }
    );

  });


/* =====================================================
   RESEÑAS
===================================================== */

const reviewForm =
  document.getElementById(
    "reviewForm"
  );


const reviewName =
  document.getElementById(
    "reviewName"
  );


const reviewBusiness =
  document.getElementById(
    "reviewBusiness"
  );


const reviewRating =
  document.getElementById(
    "reviewRating"
  );


const reviewText =
  document.getElementById(
    "reviewText"
  );


const reviewSubmit =
  document.getElementById(
    "reviewSubmit"
  );


const reviewMessage =
  document.getElementById(
    "reviewMessage"
  );


const ratingButtons =
  document.querySelectorAll(
    "#ratingSelect button"
  );


const reviewsList =
  document.getElementById(
    "reviewsList"
  );


const reviewsCount =
  document.getElementById(
    "reviewsCount"
  );


let selectedRating = 0;


/* =====================================================
   SELECCIONAR ESTRELLAS
===================================================== */

ratingButtons.forEach(
  (button) => {

    button.addEventListener(
      "click",
      () => {

        selectedRating =
          Number(
            button.dataset.rating
          );


        reviewRating.value =
          selectedRating;


        ratingButtons.forEach(
          (star) => {

            const value =
              Number(
                star.dataset.rating
              );


            if (
              value <=
              selectedRating
            ) {

              star.classList.add(
                "active"
              );

            } else {

              star.classList.remove(
                "active"
              );

            }

          }
        );

      }
    );

  }
);


/* =====================================================
   CARGAR RESEÑAS DE SUPABASE
===================================================== */

async function loadReviews() {

  const {
    data,
    error
  } =
    await supabaseClient

      .from("reviews")

      .select(
        `
        id,
        created_at,
        name,
        business,
        rating,
        review
        `
      )

      .order(
        "created_at",
        {
          ascending: false
        }
      );


  if (error) {

    console.error(
      "Error al cargar reseñas:",
      error
    );


    reviewsCount.textContent =
      "0";


    reviewsList.innerHTML = `
      <div class="reviews-empty">

        <div class="reviews-empty-icon">
          !
        </div>

        <strong>
          No se pudieron cargar las reseñas.
        </strong>

        <p>
          Intenta actualizar la página.
        </p>

      </div>
    `;


    return;

  }


  reviewsCount.textContent =
    data.length;


  if (
    data.length === 0
  ) {

    reviewsList.innerHTML = `
      <div class="reviews-empty">

        <div class="reviews-empty-icon">
          ☆
        </div>

        <strong>
          Todavía no hay reseñas.
        </strong>

        <p>
          Sé de los primeros clientes
          en compartir su experiencia
          con MODO WEB.
        </p>

      </div>
    `;


    return;

  }


  reviewsList.innerHTML =
    "";


  data.forEach(
    (item) => {

      createReviewCard(
        item
      );

    }
  );

}


/* =====================================================
   CREAR TARJETA DE RESEÑA
===================================================== */

function createReviewCard(
  item
) {

  const card =
    document.createElement(
      "article"
    );


  card.classList.add(
    "review-card"
  );


  /* ================= ESTRELLAS ================= */

  const stars =
    document.createElement(
      "div"
    );


  stars.classList.add(
    "review-stars"
  );


  const safeRating =
    Math.max(
      1,
      Math.min(
        5,
        Number(
          item.rating
        )
      )
    );


  stars.textContent =

    "★".repeat(
      safeRating
    ) +

    "☆".repeat(
      5 -
      safeRating
    );


  /* ================= TEXTO ================= */

  const reviewParagraph =
    document.createElement(
      "p"
    );


  reviewParagraph.textContent =
    item.review;


  /* ================= PERSONA ================= */

  const person =
    document.createElement(
      "div"
    );


  person.classList.add(
    "review-person"
  );


  const avatar =
    document.createElement(
      "div"
    );


  avatar.classList.add(
    "review-avatar"
  );


  const cleanName =
    item.name
      ? item.name.trim()
      : "";


  const initials =
    cleanName

      .split(" ")

      .filter(Boolean)

      .map(
        (word) =>
          word.charAt(0)
      )

      .join("")

      .substring(
        0,
        2
      )

      .toUpperCase();


  avatar.textContent =
    initials || "MW";


  const info =
    document.createElement(
      "div"
    );


  const nameElement =
    document.createElement(
      "strong"
    );


  nameElement.textContent =
    cleanName ||
    "Cliente";


  const businessElement =
    document.createElement(
      "span"
    );


  if (
    item.business &&
    item.business.trim() !== ""
  ) {

    businessElement.textContent =
      item.business;

  } else {

    businessElement.textContent =
      "Cliente MODO WEB.";

  }


  info.appendChild(
    nameElement
  );


  info.appendChild(
    businessElement
  );


  person.appendChild(
    avatar
  );


  person.appendChild(
    info
  );


  card.appendChild(
    stars
  );


  card.appendChild(
    reviewParagraph
  );


  card.appendChild(
    person
  );


  reviewsList.appendChild(
    card
  );

}


/* =====================================================
   PUBLICAR RESEÑA
===================================================== */

reviewForm.addEventListener(
  "submit",
  async (event) => {

    event.preventDefault();


    reviewMessage.textContent =
      "";


    reviewMessage.className =
      "review-message";


    const name =
      reviewName.value.trim();


    const business =
      reviewBusiness.value.trim();


    const review =
      reviewText.value.trim();


    /* ================= VALIDACIONES ================= */

    if (!name) {

      reviewMessage.textContent =
        "Escribe tu nombre.";

      reviewMessage.classList.add(
        "error"
      );

      return;

    }


    if (
      selectedRating <
      1
    ) {

      reviewMessage.textContent =
        "Selecciona una calificación.";

      reviewMessage.classList.add(
        "error"
      );

      return;

    }


    if (!review) {

      reviewMessage.textContent =
        "Escribe tu reseña.";

      reviewMessage.classList.add(
        "error"
      );

      return;

    }


    /* ================= PUBLICANDO ================= */

    reviewSubmit.disabled =
      true;


    reviewSubmit.innerHTML =
      "Publicando...";


    const {
      error
    } =
      await supabaseClient

        .from(
          "reviews"
        )

        .insert([
          {

            name:
              name,

            business:
              business,

            rating:
              selectedRating,

            review:
              review

          }
        ]);


    /* ================= ERROR ================= */

    if (error) {

      console.error(
        "Error al publicar reseña:",
        error
      );


      reviewMessage.textContent =
        "No se pudo publicar la reseña.";


      reviewMessage.classList.add(
        "error"
      );


      reviewSubmit.disabled =
        false;


      reviewSubmit.innerHTML =
        'Publicar reseña <span>↗</span>';


      return;

    }


    /* ================= ÉXITO ================= */

    reviewMessage.textContent =
      "Reseña publicada correctamente.";


    reviewMessage.classList.add(
      "success"
    );


    reviewForm.reset();


    selectedRating =
      0;


    reviewRating.value =
      "";


    ratingButtons.forEach(
      (star) => {

        star.classList.remove(
          "active"
        );

      }
    );


    reviewSubmit.disabled =
      false;


    reviewSubmit.innerHTML =
      'Publicar reseña <span>↗</span>';


    /* VOLVER A CARGAR */

    await loadReviews();

  }
);


/* =====================================================
   CURRENT YEAR
===================================================== */

const yearElement =
  document.getElementById(
    "year"
  );


if (yearElement) {

  yearElement.textContent =
    new Date().getFullYear();

}


/* =====================================================
   INICIAR RESEÑAS
===================================================== */

loadReviews();
