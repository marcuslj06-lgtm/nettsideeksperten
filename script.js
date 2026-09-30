/* =========================================================
   NETTSIDE EKSPERTEN
   Shared JavaScript
   ========================================================= */


/* =========================================================
   HEADER
   ========================================================= */

const header = `
<header class="site-header">

  <div class="container nav">

    <a class="logo" href="index.html">

      <b>
        NETTSIDE
      </b>

      <small>
        EKSPERTEN
      </small>

    </a>


    <nav class="nav-links">

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
      aria-label="Åpne meny"
      aria-expanded="false"
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

        <a class="logo" href="index.html">

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

const currentPage =
  location.pathname.split("/").pop() || "index.html";


document
  .querySelectorAll(".nav-links a[data-page]")
  .forEach(link => {

    if (link.dataset.page === currentPage) {

      link.classList.add("active");

    }

  });


/* =========================================================
   MOBILE MENU
   ========================================================= */

const menu =
  document.querySelector(".menu");

const navigation =
  document.querySelector(".nav-links");


if (menu && navigation) {

  menu.addEventListener("click", () => {

    const isOpen =
      navigation.classList.toggle("open");

    menu.setAttribute(
      "aria-expanded",
      isOpen
    );

  });


  navigation
    .querySelectorAll("a")
    .forEach(link => {

      link.addEventListener("click", () => {

        navigation.classList.remove("open");

        menu.setAttribute(
          "aria-expanded",
          "false"
        );

      });

    });

}


/* =========================================================
   SCROLL REVEAL ANIMATIONS
   ========================================================= */

const revealObserver =
  new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

          revealObserver.unobserve(
            entry.target
          );

        }

      });

    },
    {
      threshold: 0.08
    }
  );


document
  .querySelectorAll(".reveal")
  .forEach(element => {

    revealObserver.observe(element);

  });