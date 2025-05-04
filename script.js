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




 //home section start js code 



 const slides = document.querySelectorAll('.slide');
 const slideTitle = document.getElementById('slideTitle');
 const slideDesc = document.getElementById('slideDesc');
 const cta = document.querySelector('.cta-btn');
 const content = document.getElementById('slideText');

 const slideTexts = [
   {
     title: "Elegant Kitchen Sinks",
     desc: "Upgrade your kitchen with sleek, modern sink designs crafted for durability and style."
   },
   {
     title: "Stylish Bathroom Basins",
     desc: "Discover luxurious basins designed for sophistication and comfort in your bathroom."
   },
   {
     title: "Smart Utility Sinks",
     desc: "Perfect blend of function and design—shop our smart sinks for every home need."
   }
 ];

 const track = document.getElementById('carouselTrack');
 let index = 0;

 setInterval(() => {
   slides[index].classList.remove('active');
   index = (index + 1) % slides.length;
   slides[index].classList.add('active');

   slideTitle.textContent = slideTexts[index].title;
   slideDesc.textContent = slideTexts[index].desc;

   // Restart animations
   [slideTitle, slideDesc, cta].forEach(el => {
     el.style.animation = 'none';
     el.offsetHeight; // trigger reflow
     el.style.animation = '';
   });
 }, 6000);


 
 function moveSlide(direction) {
  const cards = track.querySelectorAll('.project-card');
  const visibleCards = getVisibleCardsCount();
  const maxIndex = cards.length - visibleCards;

  index += direction;
  if (index < 0) index = 0;
  if (index > maxIndex) index = maxIndex;

  const cardWidth = cards[0].offsetWidth + 20;
  track.style.transform = `translateX(-${index * cardWidth}px)`;
}

function getVisibleCardsCount() {
  const width = window.innerWidth;
  if (width <= 600) return 1;
  if (width <= 1024) return 2;
  return 3;
}

// Modal gallery logic
const projectGalleries = {
  1: [
    "images/shower -2.jpg","images/shower 9.jpg","images/shower.jpg"
  ],
  2: [
    "images/tables-1.jpg","images/tables-2.jpg","images/tables-3.jpg"
    
  ],
  3: [
    "images/toilet sinks-22.jpg",
    "images/toilet sinks-23.jpg",
    "images/toilet sinks-2.jpg",
    "images/toilet sinks-3.jpg",
    "images/toilet sinks-4.jpg",
    "images/toilet sinks.jpg",
    "images/toilet sinks-5.jpg",
  
  ],
  4: [
    "images/stainless-1.jpg",
    "images/stainless-2.jpg",
    "images/stainless-3.jpg"
    
  ],
  5: [
    "images/wall-sinks-1.jpg",
    "images/wall-sinks-2.jpg",
    "images/wall-sinks-3.jpg",
    "images/wall-sinks-8.jpg",
    "images/wall-sinks-5.jpg"
   
  ],

};


function openModal(projectId) {
  const modal = document.getElementById('galleryModal');
  const thumbnailsContainer = document.getElementById('modalThumbnails');
  const expandedImage = document.getElementById('expandedImage');
  const images = projectGalleries[projectId] || [];

  thumbnailsContainer.innerHTML = '';

  images.forEach((src, index) => {
    const thumb = document.createElement('img');
    thumb.src = src;
    thumb.alt = `Thumbnail ${index + 1}`;
    thumb.onclick = () => {
      expandedImage.src = src;
    };
    thumbnailsContainer.appendChild(thumb);
  });

  if (images.length > 0) {
    expandedImage.src = images[0];
  }

  modal.style.display = 'flex';
}

function closeModal() {
  document.getElementById('galleryModal').style.display = 'none';
}

// Animate section on load
window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('projectsSection').classList.add('animated');
});

window.addEventListener('resize', () => moveSlide(0));




//cards section
const cards = document.querySelectorAll('.step-card');

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            entry.target.classList.remove('animate-out');
          } else {
            entry.target.classList.remove('animate-in');
            entry.target.classList.add('animate-out');
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    cards.forEach(card => {
      observer.observe(card);
    });

 //about section



 const elements = document.querySelectorAll('.about-text, .about-image');

 function checkVisibility() {
   const windowHeight = window.innerHeight;

   elements.forEach(element => {
     const rect = element.getBoundingClientRect();
     if (rect.top <= windowHeight * 0.85 && rect.bottom >= 0) {
       element.classList.add('visible');
     } else {
       element.classList.remove('visible');
     }
   });
 }

 window.addEventListener('scroll', checkVisibility);
 document.addEventListener('DOMContentLoaded', checkVisibility);




 

 //Counter section 
 
  const counters = document.querySelectorAll('.counter-number');
  const progressBars = document.querySelectorAll('.progress-bar');
  const counterBoxes = document.querySelectorAll('.counter-box');

  // Function to animate the number
  function animateCounter(counter, target) {
    const update = () => {
      const current = +counter.innerText;
      const increment = Math.ceil(target / 100);
      if (current < target) {
        counter.innerText = current + increment;
        setTimeout(update, 20);
      } else {
        counter.innerText = target;
      }
    };
    update();
  }

  // Check if element is in viewport
  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }

  // Trigger animation based on scroll
  function handleScroll() {
    counterBoxes.forEach(box => {
      const counter = box.querySelector('.counter-number');
      const target = +counter.getAttribute('data-target');
      const progress = box.querySelector('.progress-bar');
      const percentage = progress.getAttribute('data-percentage');

      if (isInViewport(box)) {
        if (!box.classList.contains('visible')) {
          box.classList.add('visible');
          animateCounter(counter, target);
          progress.style.width = percentage + '%';
        }
      } else {
        if (box.classList.contains('visible')) {
          box.classList.remove('visible');
          counter.innerText = '0';
          progress.style.width = '0%';
        }
      }
    });
  }

  window.addEventListener('scroll', handleScroll);
  window.addEventListener('load', handleScroll); // Run once on load


  //Why choose us  section 


  
  let featureBoxes = document.querySelectorAll('.feature-box');

  function animateOnScroll() {
    let triggerLine = window.innerHeight * 0.85;
    featureBoxes.forEach(box => {
      let boxTop = box.getBoundingClientRect().top;
      if (boxTop < triggerLine) {
        box.classList.add('visible');
        box.classList.remove('outro');
      } else {
        box.classList.remove('visible');
        box.classList.add('outro');
      }
    });
  }

  window.addEventListener('scroll', animateOnScroll);
  window.addEventListener('load', animateOnScroll);

//Testimonial page 


let testimonials = document.querySelectorAll('.testimonial');

  function handleTestimonialScroll() {
    let triggerBottom = window.innerHeight * 0.85;
    testimonials.forEach(box => {
      let boxTop = box.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        box.classList.add('visible');
        box.classList.remove('outro');
      } else {
        box.classList.remove('visible');
        box.classList.add('outro');
      }
    });
  }

  window.addEventListener('scroll', handleTestimonialScroll);
  window.addEventListener('load', handleTestimonialScroll);



  //partner page 


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

  //FAQ SECTION


  const faqItems = document.querySelectorAll('.accordion-item');
  const sectionHeader = document.querySelector('.faq-header');

  faqItems.forEach((item) => {
    const header = item.querySelector('.accordion-header');
    header.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');
      faqItems.forEach((el) => {
        el.classList.remove('active');
        el.querySelector('.accordion-body').classList.remove('open');
      });
      if (!isOpen) {
        item.classList.add('active');
        item.querySelector('.accordion-body').classList.add('open');
      }
    });
  });

  // Intro/Outro animation on scroll with renamed variable
  const faqWatcher = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  }, { threshold: 0.1 });

  faqWatcher.observe(sectionHeader);
  faqItems.forEach(item => faqWatcher.observe(item));


  

  //FOOTER SECTION

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  