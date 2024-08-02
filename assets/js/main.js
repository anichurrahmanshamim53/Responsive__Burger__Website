/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu");
navToggle = document.getElementById("nav-toggle");
navClose = document.getElementById("nav-close");

// Menu Show
navToggle.addEventListener("click", () => {
  navMenu.classList.add("show-menu");
});
// Menu Hidden

navClose.addEventListener("click", () => {
  navMenu.classList.remove("show-menu");
});

/*=============== REMOVE MENU MOBILE ===============*/

const navLinks = document.querySelectorAll(".nav__link");

navLinks.forEach((n) => {
  n.addEventListener("click", () => navMenu.classList.remove("show-menu"));
});

navLinks.forEach((item) => {
  item.addEventListener("click", (e) => {
    navLinks.forEach((item) => item.classList.remove("active__link"));
    item.classList.add("active__link");
  });
});

/*=============== ADD SHADOW HEADER ===============*/

const shadowHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
};
window.addEventListener("scroll", shadowHeader);

/*=============== SHOW SCROLL UP ===============*/

const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");

  this.scrollY >= 360
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetheight;
    sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");
    sectionClass = document.querySelector(
      ".nav__menu a[href*= + sectionId + ]"
    );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionClass.classList.add("active__link");
    } else {
      sectionClass.classList.remove("active__link");
    }
  });
};

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 300,
});

sr.reveal(`.home__data, .footer`);
sr.reveal(`.home__dish`, { delay: 500, distance: "100px", origin: "bottom" });
sr.reveal(`.home__burger`, { delay: 1200, distance: "100px", duration: 1500 });
sr.reveal(`.home__ingredient`, { delay: 1200, interval: 100 });
sr.reveal(`.recipe__image, .delivery__img, .contact__image`, {
  origin: "left",
});
sr.reveal(`.recipe__data, .delivery__data, .contact__data`, {
  origin: "right",
});
sr.reveal(`.popular__card`, { interval: 100 });
