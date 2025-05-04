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






 //PRODUCT HIGHLIGHTS 


  // Optional: Add logic for outro animation on scroll out (intersection observer alternative)


  window.addEventListener('scroll', () => {
    const section = document.querySelector('.product-highlights');
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      section.style.animation = 'fadeInUp 1s forwards';
    } else {
      section.style.animation = 'fadeOutDown 0.8s forwards';
    }
  });




//PRODUCTS 


const modalData = [
  {
    title: "Kitchen Stainless Steel Sink",
    img: "images/stainless-1.jpg",
    desc: "Sleek and stylish, designed for premium kitchens with a polished finish.",
    specs: ["Model: Medium", "Price:negotiable", "Material: Stainless Steel", "Size: 30\" x 17\" x 9\""],
    link: "./contact.html"
  },
  {
    title: "Shower Poles",
    img: "images/SHOWER -main-1.jpg",
    desc: "Contemporary design with high durability and minimal maintenance.",
    specs: ["Model:1145-CRV", "Price:negotiable", "Material: Brushed Steel", "Size: 28\" x 16\" x 8\""],
    link: "./contact.html"
  },
  {
    title: "Toilet Seat",
    img: "images/toilet sinks-22.jpg",
    desc: "Modern toilet seat elegance for timeless toilet aesthetics.",
    specs: ["Model: CL-303", "Price:negotiable", "Material: Ceramic", "Size: 26\" x 14\" x 7\""],
    link: "./contact.html"
  },
  {
    title: "Hand Wash Sinks",
    img: "images/gallery-2.jpg",
    desc: "A sink that combines technology with style.",
    specs: ["Model:SM-404", "Price:negotiable", "Material:Quality ceramic ", "Size: 32\" x 18\" x 9\""],
    link: "./contact.html"
  },
  {
    title: "Cabinates",
    img: "images/tables-3.jpg",
    desc: "Eco-friendly materials for sustainable living.",
    specs: ["Model: EC-505", "Price:negotiable", "Material:  Quality granite", "Size: 28\" x 16\" x 8\""],
    link: "./contact.html"
  },
  {
    title: "Ceramics",
    img: "images/wall-sinks-1.jpg",
    desc: "Luxury ceranics  designed to elevate any modern kitchen and bathroom.",
    specs: ["Model:All models are available", "Price:negotiable", "Material:Quality ceramic", "Size: 32\" x 20\" x 10\""],
    link: "./contact.html"
  }
];

const container = document.getElementById('productModalsContainer');

modalData.forEach((product, index) => {
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.id = `modal-${index}`;
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close-btn" onclick="closeModal(${index})">&times;</span>
      <div class="product-deep-image">
        <img src="${product.img}" alt="${product.title}">
      </div>
      <div class="product-deep-content">
        <h2>${product.title}</h2>
        <p>${product.desc}</p>
        <div class="product-specs">
          <div class="spec-box"><i class="fas fa-cogs"></i> ${product.specs[0]}</div>
          <div class="spec-box"><i class="fas fa-dollar-sign"></i> ${product.specs[1]}</div>
          <div class="spec-box"><i class="fas fa-palette"></i> ${product.specs[2]}</div>
          <div class="spec-box"><i class="fas fa-ruler-combined"></i> ${product.specs[3]}</div>
        </div>
        <a href="${product.link}" class="buy-button">Buy Now</a>
      </div>
    </div>
  `;
  container.appendChild(modal);
});

function openModal(index) {
  document.getElementById(`modal-${index}`).style.display = 'flex';
}

function closeModal(index) {
  document.getElementById(`modal-${index}`).style.display = 'none';
}



    //BENEFITS SECTION



    const section = document.getElementById('infoSection');
    const divider = document.getElementById('dividerLine');
    const listItems = document.querySelectorAll('.info-list li');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          divider.classList.add('active');
          listItems.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('show');
            }, index * 300 + 300); // Delayed start
          });
        } else {
          divider.classList.remove('active');
          listItems.forEach(item => item.classList.remove('show'));
        }
      });
    }, { threshold: 0.3 });

    observer.observe(section);




    //PROMISE SECTION
    const promiseSection = document.getElementById('promiseSection');
    const leftImage = document.querySelector('.promise-left img');
    const rightContent = document.querySelector('.promise-right');
    const lineProgress = document.getElementById('lineProgress');
    const featureIcons = document.querySelectorAll('.promise-feature i');
  
    const promiseObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          leftImage.style.opacity = '1';
          leftImage.style.transform = 'translateX(0)';
          rightContent.style.opacity = '1';
          rightContent.style.transform = 'translateX(0)';
          lineProgress.style.height = '100%';
          featureIcons.forEach((icon, index) => {
            setTimeout(() => {
              icon.style.transform = 'scale(1.2)';
              icon.style.color = '#28a745';
            }, index * 300);
          });
        } else {
          leftImage.style.opacity = '0';
          leftImage.style.transform = 'translateX(-50px)';
          rightContent.style.opacity = '0';
          rightContent.style.transform = 'translateX(50px)';
          lineProgress.style.height = '0';
          featureIcons.forEach(icon => {
            icon.style.transform = 'scale(1)';
            icon.style.color = '#00a8ff';
          });
        }
      });
    }, { threshold: 0.3 });
  
    promiseObserver.observe(promiseSection);




    
  //FOOTER SECTION

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  