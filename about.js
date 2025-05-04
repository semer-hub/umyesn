
 // Hamburger toggle
 const hamburger = document.getElementById('hamburger');
 const navLinks = document.getElementById('navLinks');

 hamburger.addEventListener('click', () => {
   hamburger.classList.toggle('active');
   navLinks.classList.toggle('active');
 });

 // Scroll animations
 const scrollElements = document.querySelectorAll('.animate-on-scroll');

 const elementInView = (el, offset = 100) => {
   const elementTop = el.getBoundingClientRect().top;
   return elementTop <= (window.innerHeight - offset);
 };

 const displayScrollElement = (element) => {
   element.classList.add('show');
 };

 const handleScrollAnimation = () => {
   scrollElements.forEach((el) => {
     if (elementInView(el)) {
       displayScrollElement(el);
     }
   });
 };

 window.addEventListener('scroll', () => {
   handleScrollAnimation();
 });

 // Initial load
 handleScrollAnimation();



//ABOUT PAGE START


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, {
    threshold: 0.2
  });

  document.querySelectorAll('.animate-on-scroll').forEach((el) => {
    observer.observe(el);
  });




  // Check visibility on scroll
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top < window.innerHeight - 100 &&
      rect.bottom > 100
    );
  }

  function toggleVisibility() {
    const section = document.getElementById("our-mission");
    const image = section.querySelector(".mission-image");
    const content = section.querySelector(".mission-content");
    const button = section.querySelector(".btn-lightblue");

    if (isInViewport(section)) {
      section.classList.add("visible");
      image.classList.add("visible");
      content.classList.add("visible");
      button.classList.add("visible");
    } else {
      section.classList.remove("visible");
      image.classList.remove("visible");
      content.classList.remove("visible");
      button.classList.remove("visible");
    }
  }

  window.addEventListener("scroll", toggleVisibility);
  window.addEventListener("load", toggleVisibility); 
  
  
  // Run on load too



  //OUR VISION SECTION

  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top < window.innerHeight - 100 &&
      rect.bottom > 100
    );
  }

  function handleScrollFadeInOut() {
    const sections = document.querySelectorAll('.fade-section');
    const blocks = document.querySelectorAll('.vision-block');

    sections.forEach(section => {
      if (isInViewport(section)) {
        section.classList.add('visible');
      } else {
        section.classList.remove('visible');
      }
    });

    blocks.forEach(block => {
      if (isInViewport(block)) {
        block.classList.add('fade-in');
      } else {
        block.classList.remove('fade-in');
      }
    });
  }

  window.addEventListener('scroll', handleScrollFadeInOut);
  window.addEventListener('load', handleScrollFadeInOut);






  
    // Set up the IntersectionObserver to trigger fade-in and fade-out animations
    const observerOptions = {
      root: null, // use the viewport as the root
      rootMargin: '0px', // no margin around the root
      threshold: 0.5 // trigger when 50% of the element is in view
    };

    // The IntersectionObserver callback
    const fadeInObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        } else {
          entry.target.classList.remove('fade-in');
        }
      });
    }, observerOptions);

    // Observe each element that should fade in
    document.querySelectorAll('.values-block').forEach(block => {
      fadeInObserver.observe(block);
    });

    // For the main section to fade in
    const sectionObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, observerOptions);

    const section = document.querySelector('#our-values');
    sectionObserver.observe(section);


    //PARTNERS PAGE 


  const partnerLogos = document.querySelectorAll('.partner-logo');

  function animatePartners() {
    const triggerPoint = window.innerHeight * 0.85;
    partnerLogos.forEach(logo => {
      const top = logo.getBoundingClientRect().top;
      if (top < triggerPoint) {
        logo.classList.add('visible');
        logo.classList.remove('outro');
      } else {
        logo.classList.remove('visible');
        logo.classList.add('outro');
      }
    });
  }

  window.addEventListener('scroll', animatePartners);
  window.addEventListener('load', animatePartners);



   //FOOTER SECTION

   function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
