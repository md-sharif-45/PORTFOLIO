$(document).ready(function() {
  //sticky header
  $(window).scroll(function() {
      if ($(this).scrollTop() > 1) {
          $(".header-area").addClass("sticky");
      } else {
          $(".header-area").removeClass("sticky");
      }
      updateActiveSection();
  });

  $(".header ul li a").click(function(e) {
      e.preventDefault();

      var target = $(this).attr("href");

      if ($(target).hasClass("active-section")) {
          return;
      }

      if (target === "#home") {
          $("html, body").animate({
              scrollTop: 0
          }, 500);
      } else {
          var offset = $(target).offset().top - 40;

          $("html, body").animate({
              scrollTop: offset
          }, 500);
      }

      $(".header ul li a").removeClass("active");
      $(this).addClass("active");
  });

  // Initial content revealing js
  ScrollReveal({
      distance: "100px",
      duration: 2000,
      delay: 200
  });

  ScrollReveal().reveal(".header a, .profilepic, .about-content, .education", {
      origin: "left"
  });
  ScrollReveal().reveal(".header ul, .profiletext, .about-skills, .internship", {
      origin: "right"
  });
  ScrollReveal().reveal(".project-title, .contact-title, .skill-title", {
      origin: "top"
  });
  ScrollReveal().reveal(".projects, .contact, .skills", {
      origin: "bottom"
  });

  // Contact form to excel sheet
 /* const scriptURL = 'https://script.google.com/macros/s/AKfycbzUSaaX3XmlE5m9YLOHOBrRuCh2Ohv49N9bs4bew7xPd1qlgpvXtnudDs5Xhp3jF-Fx/exec';
  const form = document.forms['submitToGoogleSheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, {
          method: 'POST',
          body: new FormData(form)
      }).then(response => {
          msg.innerHTML = "Message sent successfully"
          setTimeout(function() {
              msg.innerHTML = ""
          }, 5000)
          form.reset()
      }).catch(error => console.error('Error!', error.message))
  });*/

  function updateActiveSection() {
      var scrollPosition = $(window).scrollTop();

      if (scrollPosition === 0) {
          $(".header ul li a").removeClass("active");
          $(".header ul li a[href='#home']").addClass("active");
          return;
      }

      $("section").each(function() {
          var target = $(this).attr("id");
          var offset = $(this).offset().top;
          var height = $(this).outerHeight();

          if (scrollPosition >= offset - 40 && scrollPosition < offset + height - 40) {
              $(".header ul li a").removeClass("active");
              $(".header ul li a[href='#" + target + "']").addClass("active");
          }
      });
  }

  function toggleMenu() {
      const navbar = document.querySelector('.navbar');
      navbar.style.display = navbar.style.display === 'flex' ? 'none' : 'flex';
  }

  // Toggle menu on menu_icon click
  $('.menu_icon').click(function() {
      toggleMenu();
  });
});
