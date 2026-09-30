/* =========================================================
   NETTSIDE EKSPERTEN
   Shared JavaScript
   Mobile-first navigation + accessibility
   ========================================================= */


/* =========================================================
   HEADER
   ========================================================= */

const header = `
<header class="site-header">

  <div class="container nav">

    <a class="logo" href="index.html" aria-label="Nettside Eksperten – hjem">

      <b>
        NETTSIDE
      </b>

      <small>
        EKSPERTEN
      </small>

    </a>


    <nav
      class="nav-links"
      id="main-navigation"
      aria-label="Hovedmeny"
    >

      <a
        href="index.html"
        data-page="index.html"
      >
        Hjem
      </a>

      <a
        href="tjenester.html"
        data-page="tjenester.html"
      >
        Tjenester
      </a>

      <a
        href="arbeid.html"
        data-page="arbeid.html"
      >
        Arbeid
      </a>

      <a
        href="om.html"
        data-page="om.html"
      >
        Om meg
      </a>

      <a
        href="faq.html"
        data-page="faq.html"
      >
        FAQ
      </a>

      <a
        class="nav-cta"
        href="kontakt.html"
        data-page="kontakt.html"
      >
        Kontakt
      </a>

    </nav>


    <button
  class="menu"
  type="button"
  aria-label="Åpne meny"
  aria-expanded="false"
  aria-controls="main-navigation"
>
  <i></i>
  <i></i>
  <i></i>
</button>

  </div>

</header>
`;


/* =========================================================
   FOOTER
   ========================================================= */

const footer = `
<footer class="site-footer">

  <div class="container">

    <div class="footer">


      <div class="footer-brand">

        <a
          class="logo"
          href="index.html"
          aria-label="Nettside Eksperten – hjem"
        >

          <b>
            NETTSIDE
          </b>

          <small>
            EKSPERTEN
          </small>

        </a>

        <p>
          Moderne nettsider for moderne bedrifter.
        </p>

      </div>


      <div class="footer-col">

        <b>
          NAVIGASJON
        </b>

        <a href="index.html">
          Hjem
        </a>

        <a href="tjenester.html">
          Tjenester
        </a>

        <a href="arbeid.html">
          Arbeid
        </a>

        <a href="om.html">
          Om meg
        </a>

        <a href="faq.html">
          FAQ
        </a>

      </div>


      <div class="footer-col">

        <b>
          KONTAKT
        </b>

        <a href="mailto:nettsideekspertenjonli@gmail.com">
          nettsideekspertenjonli@gmail.com
        </a>

        <a href="tel:+4745832647">
          458 32 647
        </a>

        <a href="kontakt.html">
          Start et prosjekt ↗
        </a>

      </div>


    </div>


    <div class="footer-bottom">

      © ${new Date().getFullYear()}
      Nettside Eksperten Jonli.
      Alle rettigheter reservert.

    </div>

  </div>

</footer>
`;


/* =========================================================
   INSERT HEADER + FOOTER
   ========================================================= */

const headerContainer =
  document.getElementById("site-header");

const footerContainer =
  document.getElementById("site-footer");


if (headerContainer) {
  headerContainer.innerHTML = header;
}


if (footerContainer) {
  footerContainer.innerHTML = footer;
}


/* =========================================================
   ACTIVE NAVIGATION
   ========================================================= */

let currentPage =
  location.pathname.split("/").pop();

if (!currentPage) {
  currentPage = "index.html";
}

if (currentPage === "") {
  currentPage = "index.html";
}


document
  .querySelectorAll(".nav-links a[data-page]")
  .forEach(link => {

    if (link.dataset.page === currentPage) {

      link.classList.add("active");

      link.setAttribute(
        "aria-current",
        "page"
      );

    }

  });


/* =========================================================
   MOBILE MENU
   ========================================================= */

const menu =
  document.querySelector(".menu");

const navigation =
  document.querySelector(".nav-links");


const closeMenu = () => {

  if (!menu || !navigation) {
    return;
  }

  navigation.classList.remove("open");

  menu.classList.remove("open");

  menu.setAttribute(
    "aria-expanded",
    "false"
  );

  menu.setAttribute(
    "aria-label",
    "Åpne meny"
  );

  document.body.classList.remove(
    "menu-open"
  );

};


const openMenu = () => {

  if (!menu || !navigation) {
    return;
  }

  navigation.classList.add("open");

  menu.classList.add("open");

  menu.setAttribute(
    "aria-expanded",
    "true"
  );

  menu.setAttribute(
    "aria-label",
    "Lukk meny"
  );

  document.body.classList.add(
    "menu-open"
  );

};


if (menu && navigation) {

  menu.addEventListener(
    "click",
    event => {

      event.stopPropagation();

      const isOpen =
        navigation.classList.contains("open");

      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }

    }
  );


  navigation
    .querySelectorAll("a")
    .forEach(link => {

      link.addEventListener(
        "click",
        () => {

          closeMenu();

        }
      );

    });


  document.addEventListener(
    "click",
    event => {

      if (!navigation.classList.contains("open")) {
        return;
      }

      if (
        !navigation.contains(event.target) &&
        !menu.contains(event.target)
      ) {

        closeMenu();

      }

    }
  );


  document.addEventListener(
    "keydown",
    event => {

      if (event.key === "Escape") {

        closeMenu();

        menu.focus();

      }

    }
  );


  window.addEventListener(
    "resize",
    () => {

      if (window.innerWidth > 900) {

        closeMenu();

      }

    }
  );

}


/* =========================================================
   CLOSE MOBILE MENU WHEN PAGE RESTORES
   ========================================================= */

window.addEventListener(
  "pageshow",
  () => {

    closeMenu();

  }
);


/* =========================================================
   SCROLL REVEAL ANIMATIONS
   ========================================================= */

const revealElements =
  document.querySelectorAll(".reveal");


if (
  "IntersectionObserver" in window
) {

  const revealObserver =
    new IntersectionObserver(
      entries => {

        entries.forEach(
          entry => {

            if (
              entry.isIntersecting
            ) {

              entry.target.classList.add(
                "visible"
              );

              revealObserver.unobserve(
                entry.target
              );

            }

          }
        );

      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -30px 0px"
      }
    );


  revealElements.forEach(
    element => {

      revealObserver.observe(
        element
      );

    }
  );

} else {

  revealElements.forEach(
    element => {

      element.classList.add(
        "visible"
      );

    }
  );

}


/* =========================================================
   FAQ ACCESSIBILITY
   ========================================================= */

document
  .querySelectorAll(".faq-list details")
  .forEach(detail => {

    const summary =
      detail.querySelector("summary");

    if (!summary) {
      return;
    }

    summary.addEventListener(
      "click",
      () => {

        /*
          Native <details> handles the actual
          open/close behavior.
          This keeps the interaction accessible
          while allowing CSS to animate the icon.
        */

      }
    );

  });


/* =========================================================
   CONTACT FORM UX
   ========================================================= */

const contactForm =
  document.querySelector(".contact-form");


if (contactForm) {

  contactForm.addEventListener(
    "submit",
    () => {

      const submitButton =
        contactForm.querySelector(
          'button[type="submit"]'
        );

      if (submitButton) {

        submitButton.classList.add(
          "is-sending"
        );

      }

    }
  );

}


/* =========================================================
   PREVENT MOBILE ZOOM ISSUES ON BUTTONS
   ========================================================= */

document
  .querySelectorAll(
    "button, .btn, .nav-links a"
  )
  .forEach(element => {

    element.addEventListener(
      "touchstart",
      () => {},
      {
        passive: true
      }
    );

  });