// ===== Responsive Menu Toggle =====
const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");

mobileMenu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// ===== Dynamic Property Cards =====
const properties = [
  {
    image: "https://images.unsplash.com/photo-1560184897-ae75f418493e?auto=format&fit=crop&w=800&q=80",
    bedroomPhoto: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
    compoundPhoto: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1560184897-ae75f418493e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
    ],
    bathroomPhotos: [
      "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80"
    ],
    title: "Modern Family Villa",
    location: "Runda",
    price: "KSh 65,000,000",
    type: "Apartment",
    bedrooms: 4,
    bathrooms: 3,
    area: "250 sqm",
    features: ["Swimming Pool", "Garden", "Garage"]
  },
  {
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80",
    bedroomPhoto: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
    compoundPhoto: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1523419409543-0c1df022bddb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
    ],
    title: "Luxury Apartment",
    location: "Kileleshwa",
    price: "KSh 39,000,000",
    type: "Apartment",
    bedrooms: 3,
    bathrooms: 2,
    area: "180 sqm",
    features: ["Balcony", "Security", "Parking"]
  },
  {
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
    bedroomPhoto: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
    compoundPhoto: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
    ],
    title: "Lakeview Bungalow",
    location: "Muthaiga",
    price: "KSh 72,000,000",
    type: "Apartment",
    bedrooms: 5,
    bathrooms: 4,
    area: "300 sqm",
    features: ["Lake View", "Fireplace", "Pool"]
  },
  {
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    bedroomPhoto: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80",
    compoundPhoto: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=800&q=80"
    ],
    title: "Beachfront Villa",
    location: "Nairobi",
    price: "KSh 85,000,000",
    type: "Apartment",
    bedrooms: 6,
    bathrooms: 5,
    area: "400 sqm",
    features: ["Private Chef Kitchen", "Infinity Pool", "Sky Lounge"]
  },
  {
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
    bedroomPhoto: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=800&q=80",
    compoundPhoto: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80"
    ],
    title: "Urban Loft Apartment",
    location: "Nairobi",
    price: "KSh 42,000,000",
    type: "Loft",
    bedrooms: 2,
    bathrooms: 2,
    area: "150 sqm",
    features: ["High Ceilings", "Modern Design", "City Views"]
  },
  {
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
    bedroomPhoto: "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=800&q=80",
    compoundPhoto: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1523419409543-0c1df022bddb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=800&q=80"
    ],
    bathroomPhotos: [
      "https://images.unsplash.com/photo-1523419409543-0c1df022bddb?auto=format&fit=crop&w=800&q=80"
    ],
    title: "Modern Loft Space",
    location: "Kileleshwa",
    price: "KSh 38,000,000",
    type: "Loft",
    bedrooms: 1,
    bathrooms: 1,
    area: "120 sqm",
    features: ["Open Plan", "Industrial Style", "Rooftop Access"]
  }
];

const propertyContainer = document.getElementById("property-container");
let filteredProperties = [...properties];

// ===== Property Filtering =====
function filterProperties() {
  const locationFilter = document.getElementById("location-filter").value;
  const typeFilter = document.getElementById("type-filter").value;
  const priceFilter = document.getElementById("price-filter").value;

  filteredProperties = properties.filter(prop => {
    const locationMatch = !locationFilter || prop.location.includes(locationFilter);
    const typeMatch = !typeFilter || prop.type === typeFilter;
    
    let priceMatch = true;
    if (priceFilter) {
      const price = parseInt(prop.price.replace(/[^\d]/g, ''));
      if (priceFilter === "0-30000000") {
        priceMatch = price < 30000000;
      } else if (priceFilter === "30000000-50000000") {
        priceMatch = price >= 30000000 && price < 50000000;
      } else if (priceFilter === "50000000-80000000") {
        priceMatch = price >= 50000000 && price < 80000000;
      } else if (priceFilter === "80000000+") {
        priceMatch = price >= 80000000;
      }
    }

    return locationMatch && typeMatch && priceMatch;
  });

  displayProperties();
}

// ===== Display Properties =====
function displayProperties() {
  propertyContainer.innerHTML = '';
  
  filteredProperties.forEach((prop) => {
  const card = document.createElement("div");
  card.classList.add("property-card");
    card.addEventListener("click", () => showPropertyDetails(prop));

  card.innerHTML = `
    <img src="${prop.image}" alt="${prop.title}">
    <div class="property-info">
      <h3>${prop.title}</h3>
        <p>📍 ${prop.location}</p>
        <div class="property-features">
          <span>🛏️ ${prop.bedrooms} beds</span>
          <span>🚿 ${prop.bathrooms} baths</span>
          <span>📐 ${prop.area}</span>
        </div>
        <div class="property-price">${prop.price}</div>
    </div>
  `;

  propertyContainer.appendChild(card);
  });
}


// ===== Property Details Modal =====
function showPropertyDetails(property) {
  const modal = document.createElement("div");
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2000;
    padding: 20px;
  `;

  const galleryImages = property.gallery?.length
    ? property.gallery
    : [property.image, property.bedroomPhoto, property.compoundPhoto].filter(Boolean);
  const dotsMarkup = galleryImages
    .map(
      (_, idx) =>
        `<span class="gallery-dot ${idx === 0 ? "active" : ""}" data-index="${idx}"></span>`
    )
    .join("");

  modal.innerHTML = `
    <div style="
      background: linear-gradient(140deg, #050505, #1a1a1a);
      border-radius: 20px;
      padding: 30px;
      max-width: 700px;
      width: 100%;
      max-height: 80vh;
      overflow-y: auto;
      position: relative;
      border: 2px solid #c6a667;
    ">
      <button onclick="this.parentElement.parentElement.remove()" style="
        position: absolute;
        top: 15px;
        right: 15px;
        background: #c6a667;
        border: none;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        cursor: pointer;
        font-size: 16px;
        color: #000;
      " aria-label="Close property details">×</button>
      
      <div class="modal-gallery">
        <button class="gallery-btn gallery-prev" aria-label="Previous image">‹</button>
        <img class="gallery-image" src="${galleryImages[0]}" alt="${property.title}">
        <button class="gallery-btn gallery-next" aria-label="Next image">›</button>
      </div>
      <div class="gallery-dots">
        ${dotsMarkup}
      </div>
      
      <h2 style="color: #c6a667; margin-bottom: 15px;">${property.title}</h2>
      <p style="margin-bottom: 10px;">📍 ${property.location}</p>
      <p style="font-size: 1.2rem; color: #ffffff; font-weight: bold; margin-bottom: 20px;">${property.price}</p>
      
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; margin-bottom: 20px;">
        <div style="text-align: center; background: rgba(255,255,255,0.1); padding: 15px; border-radius: 10px;">
          <div style="font-size: 1.5rem;">🛏️</div>
          <div>${property.bedrooms} Bedrooms</div>
        </div>
        <div style="text-align: center; background: rgba(255,255,255,0.1); padding: 15px; border-radius: 10px;">
          <div style="font-size: 1.5rem;">🚿</div>
          <div>${property.bathrooms} Bathrooms</div>
        </div>
        <div style="text-align: center; background: rgba(255,255,255,0.1); padding: 15px; border-radius: 10px;">
          <div style="font-size: 1.5rem;">📐</div>
          <div>${property.area}</div>
        </div>
      </div>

      ${property.bathrooms === 3 && property.bathroomPhotos?.length === 3 ? `
        <h3 style="color: #ffffff; margin-bottom: 10px;">Bathroom Gallery</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 10px; margin-bottom: 20px;">
          ${property.bathroomPhotos.map(photo => `
            <img src="${photo}" alt="Bathroom" style="width: 100%; height: 120px; object-fit: cover; border-radius: 10px; border: 1px solid rgba(198, 166, 103, 0.4);" />
          `).join('')}
        </div>
      ` : ''}

      <h3 style="color: #ffffff; margin-bottom: 10px;">Features:</h3>
      <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 20px;">
        ${property.features.map(feature => `<span style="background: rgba(198,166,103,0.15); padding: 5px 10px; border-radius: 15px; font-size: 0.9rem; border: 1px solid rgba(198,166,103,0.4);">${feature}</span>`).join('')}
      </div>
      
      <button onclick="contactAboutProperty('${property.title}')" style="
        background: linear-gradient(120deg, #c6a667, #ad8d4f);
        color: #000;
        padding: 12px 25px;
        border: none;
        border-radius: 25px;
        font-size: 1rem;
        cursor: pointer;
        width: 100%;
        transition: background 0.3s;
      " onmouseover="this.style.background='#c6a667'" onmouseout="this.style.background='linear-gradient(120deg, #c6a667, #ad8d4f)'">
        Contact About This Property
      </button>
    </div>
  `;

  document.body.appendChild(modal);
  initModalGallery(modal, galleryImages);
}

function initModalGallery(modalElement, images) {
  if (!images.length) return;

  const imageEl = modalElement.querySelector(".gallery-image");
  const prevBtn = modalElement.querySelector(".gallery-prev");
  const nextBtn = modalElement.querySelector(".gallery-next");
  const dots = Array.from(modalElement.querySelectorAll(".gallery-dot"));
  let currentIndex = 0;

  if (images.length === 1) {
    prevBtn.style.display = "none";
    nextBtn.style.display = "none";
    dots.forEach(dot => (dot.style.display = "none"));
    return;
  }

  const updateGallery = (newIndex) => {
    currentIndex = (newIndex + images.length) % images.length;
    imageEl.src = images[currentIndex];
    dots.forEach((dot, idx) => {
      dot.classList.toggle("active", idx === currentIndex);
    });
  };

  prevBtn.addEventListener("click", () => updateGallery(currentIndex - 1));
  nextBtn.addEventListener("click", () => updateGallery(currentIndex + 1));
  dots.forEach(dot =>
    dot.addEventListener("click", () => updateGallery(Number(dot.dataset.index)))
  );
}

// ===== Contact About Property =====
function contactAboutProperty(propertyTitle) {
  const contactForm = document.getElementById("contact-form");
  const selectElement = contactForm.querySelector("select");
  selectElement.value = "buying";
  
  // Scroll to contact form
  contactForm.scrollIntoView({ behavior: "smooth" });
  
  // Close modal
  document.querySelector("[style*='position: fixed']")?.remove();
}

// ===== Contact Form Handling =====
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const formData = new FormData(this);
  const name = this.querySelector("input[type='text']").value;
  const email = this.querySelector("input[type='email']").value;
  const phone = this.querySelector("input[type='tel']").value;
  const interest = this.querySelector("select").value;
  const message = this.querySelector("textarea").value;
  
  // Show success message
  alert(`Thank you, ${name}! We've received your message about ${interest}. We'll contact you at ${email} soon.`);
  
  // Reset form
  this.reset();
});

// ===== Search Button Event =====
document.getElementById("search-btn").addEventListener("click", filterProperties);

// ===== Smooth Scrolling for Navigation =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ===== Initialize Properties Display =====
displayProperties();
