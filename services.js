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






 

  //FOOTER SECTION

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  