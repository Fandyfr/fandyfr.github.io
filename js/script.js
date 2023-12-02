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