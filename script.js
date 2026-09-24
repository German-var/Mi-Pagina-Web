/* =====================================================
   MODO WEB.
   Web Design by German Varela
===================================================== */


/* ================= SUPABASE ================= */

const SUPABASE_URL = "https://caxpsvraudgivyvbewuc.supabase.co";

const SUPABASE_KEY = "sb_publishable_fDzVqKPbjXIDBeRir4BFlw_Cvh2thKe";

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);


/* ================= HEADER ================= */

const header = document.getElementById("header");

function updateHeader() {
  if (window.scrollY > 30) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}

window.addEventListener("scroll", updateHeader);
updateHeader();


/* ================= MOBILE MENU ================= */

const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  mobileMenu.classList.toggle("active");
  document.body.classList.toggle("menu-open");
});

document.querySelectorAll(".mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("active");
    mobileMenu.classList.remove("active");
    document.body.classList.remove("menu-open");
  });
});


/* ================= HERO CHANGING MODE ================= */

const changingMode = document.getElementById("changingMode");

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
  changingMode.style.opacity = "0";
  changingMode.style.transform = "translateY(8px)";

  setTimeout(() => {
    modeIndex = (modeIndex + 1) % modes.length;
    changingMode.textContent = modes[modeIndex];

    changingMode.style.opacity = "1";
    changingMode.style.transform = "translateY(0)";
  }, 250);
}

changingMode.style.transition =
  "opacity .25s ease, transform .25s ease";

setInterval(changeMode, 1900);


/* ================= PROJECT FILTER ================= */

const filters = document.querySelectorAll(".filter");
const projects = document.querySelectorAll(".project-card");

filters.forEach((filter) => {
  filter.addEventListener("click", () => {

    filters.forEach((button) => {
      button.classList.remove("active");
    });

    filter.classList.add("active");

    const selectedFilter = filter.dataset.filter;

    projects.forEach((project) => {
      const categories = project.dataset.category || "";

      if (
        selectedFilter === "all" ||
        categories.includes(selectedFilter)
      ) {
        project.classList.remove("hidden-project");
      } else {
        project.classList.add("hidden-project");
      }
    });
  });
});


/* ================= FAQ ================= */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");

  question.addEventListener("click", () => {
    const alreadyOpen = item.classList.contains("active");

    faqItems.forEach((otherItem) => {
      otherItem.classList.remove("active");

      const otherAnswer =
        otherItem.querySelector(".faq-answer");

      otherAnswer.style.maxHeight = null;
    });

    if (!alreadyOpen) {
      item.classList.add("active");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});


/* ================= REVEAL ================= */

const revealElements =
  document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
    rootMargin: "0px 0px -30px 0px"
  }
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});


/* ================= SMOOTH INTERNAL LINKS ================= */

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (event) {
    const targetId = this.getAttribute("href");

    if (targetId === "#") return;

    const target = document.querySelector(targetId);

    if (!target) return;

    event.preventDefault();

    const headerHeight = header.offsetHeight;

    const targetPosition =
      target.getBoundingClientRect().top +
      window.scrollY -
      headerHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  });
});


/* ================= CURRENT YEAR ================= */

document.getElementById("year").textContent =
  new Date().getFullYear();
