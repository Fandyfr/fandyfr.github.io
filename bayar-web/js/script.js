$(document).ready(function(){

    // Header FadeIn Effect
    $('#header').hide();
    $('#header').fadeIn(1000);
  
    // Responsive Navbar Hide effect
    $('#responsive-navbar').hide();
  
    // Responsive Menu Aktifasi
    $('#menu-button').click(function(){
      $('#responsive-navbar').slideToggle();
    });
  
    // Responsive Menu Hide Efek
    $('#home-menu , #projects-menu , #blogs-menu , #other-menu').click(function(){
      $('#responsive-navbar').slideToggle();
    })

    $('#welcome-section-title').hide();
    $('#welcome-section-title').fadeIn(1000);


    // Responsive menu
    $("#responsive-nav-bar").hide();
  
    $("#image-button-black").click(function(){
      $("#responsive-nav-bar").slideToggle();
    });
  
    $("#responsive-home-item , #responsive-features-item , #responsive-products-item , #responsive-media-item , #responsive-pricing-item").click(function(){
      $("#responsive-nav-bar").slideToggle(200);
    });
  })


  console.clear();

  const cardsContainer = document.querySelector(".cards");
  const cardsContainerInner = document.querySelector(".cards__inner");
  const cards = Array.from(document.querySelectorAll(".card"));
  const overlay = document.querySelector(".overlay");
  
  const applyOverlayMask = (e) => {
    const overlayEl = e.currentTarget;
    const x = e.pageX - cardsContainer.offsetLeft;
    const y = e.pageY - cardsContainer.offsetTop;
  
    overlayEl.style = `--opacity: 1; --x: ${x}px; --y:${y}px;`;
  };
  
  const createOverlayCta = (overlayCard, ctaEl) => {
    const overlayCta = document.createElement("div");
    overlayCta.classList.add("cta");
    overlayCta.textContent = ctaEl.textContent;
    overlayCta.setAttribute("aria-hidden", true);
    overlayCard.append(overlayCta);
  };
  
  const observer = new ResizeObserver((entries) => {
    entries.forEach((entry) => {
      const cardIndex = cards.indexOf(entry.target);
      let width = entry.borderBoxSize[0].inlineSize;
      let height = entry.borderBoxSize[0].blockSize;
  
      if (cardIndex >= 0) {
        overlay.children[cardIndex].style.width = `${width}px`;
        overlay.children[cardIndex].style.height = `${height}px`;
      }
    });
  });
  
  const initOverlayCard = (cardEl) => {
    const overlayCard = document.createElement("div");
    overlayCard.classList.add("card");
    createOverlayCta(overlayCard, cardEl.lastElementChild);
    overlay.append(overlayCard);
    observer.observe(cardEl);
  };
  
  cards.forEach(initOverlayCard);
  document.body.addEventListener("pointermove", applyOverlayMask);

  document.addEventListener("DOMContentLoaded", function () {
    const latarBackground = document.querySelector(".latar-background::before");

    if (latarBackground) {
      latarBackground.addEventListener("animationend", function () {
        latarBackground.style.display = "none";
      });
    }
  });