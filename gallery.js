




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





//MAIN GALLERY PART


const imageSets = {
    1: [
      'images/big-wall-sinks-5.jpg',
      'images/big-wall-sinks-6.jpg',
      'images/big-wall-sinks-7.jpg',
      'images/big-wall-sinks-8.jpg'

    ],
    2: [
      'images/gallery-5.jpg',
      'images/gallery-2.jpg',
      'images/gallery-3.jpg'
      
    ],
    3: [
      'images/SHOWER -main-1.jpg',
      'images/SHOWER -main-3.jpeg',
      'images/SHOWER -main-6.jpeg'
     
    ],
    4: [
      'images/tables-1.jpg',
      'images/tables-2.jpg',
      'images/tables-3.jpg'
     
    ],
    5: [
      'images/shower -2.jpg',
      'images/shower.jpg',
      'images/shower 9.jpg'
      
    ],
    6: [
      'images/stainless-1.jpg',
      'images/stainless-2.jpg',
      'images/stainless-3.jpg'
      
    ],
    7: [
      'images/toilet sinks-2.jpg',
      'images/toilet sinks-3.jpg',
      'images/toilet sinks-4.jpg',
      'images/toilet sinks-5.jpg'
      
    ],
    8: [
      'images/wall-sinks-1.jpg',
      'images/wall-sinks-2.jpg',
      'images/wall-sinks-3.jpg',
      'images/wall-sinks-5.jpg',
      'images/wall-sinks-8.jpg',
    ],
  };

  function openLightbox(index) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImages = document.getElementById('lightboxImages');
    lightboxImages.innerHTML = '';

    imageSets[index].forEach(img => {
      const imgEl = document.createElement('img');
      imgEl.src = img;
      lightboxImages.appendChild(imgEl);
    });

    lightbox.classList.add('active');
  }

  function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
  }


  
   //FOOTER SECTION

   function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
