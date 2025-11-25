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
    title: "Modern Family Villa",
    location: "Nairobi, Kenya",
    price: "KSh 65,000,000",
    type: "Villa",
    bedrooms: 4,
    bathrooms: 3,
    area: "250 sqm",
    features: ["Swimming Pool", "Garden", "Garage"]
  },
  {
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80",
    bedroomPhoto: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
    compoundPhoto: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    title: "Luxury Apartment",
    location: "Kilimani, Nairobi",
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
    title: "Lakeview Bungalow",
    location: "Naivasha, Kenya",
    price: "KSh 72,000,000",
    type: "Bungalow",
    bedrooms: 5,
    bathrooms: 4,
    area: "300 sqm",
    features: ["Lake View", "Fireplace", "Pool"]
  },
  {
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    bedroomPhoto: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
    compoundPhoto: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    title: "Beachfront Villa",
    location: "Mombasa, Kenya",
    price: "KSh 85,000,000",
    type: "Villa",
    bedrooms: 6,
    bathrooms: 5,
    area: "400 sqm",
    features: ["Beach Access", "Pool", "Ocean View"]
  },
  {
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
    bedroomPhoto: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
    compoundPhoto: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    title: "Urban Loft Apartment",
    location: "Kilimani, Nairobi",
    price: "KSh 42,000,000",
    type: "Apartment",
    bedrooms: 2,
    bathrooms: 2,
    area: "150 sqm",
    features: ["High Ceilings", "Modern Design", "City Views"]
  },
  {
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
    bedroomPhoto: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
    compoundPhoto: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    title: "Modern Loft Space",
    location: "Kilimani, Nairobi",
    price: "KSh 38,000,000",
    type: "Apartment",
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

  modal.innerHTML = `
    <div style="
      background: linear-gradient(135deg, #2c2c2c, #1a1a1a);
      border-radius: 20px;
      padding: 30px;
      max-width: 700px;
      width: 100%;
      max-height: 80vh;
      overflow-y: auto;
      position: relative;
      border: 2px solid #444;
    ">
      <button onclick="this.parentElement.parentElement.remove()" style="
        position: absolute;
        top: 15px;
        right: 15px;
        background: #ff6b35;
        border: none;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        cursor: pointer;
        font-size: 16px;
        color: white;
      ">×</button>
      
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 20px;">
        <img src="${property.image}" alt="${property.title}" style="
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 15px;
        ">
        <img src="${property.bedroomPhoto}" alt="Bedroom" style="
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 15px;
        ">
      </div>
      
      <img src="${property.compoundPhoto}" alt="Compound" style="
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-radius: 15px;
        margin-bottom: 20px;
      ">
      
      <h2 style="color: #ff6b35; margin-bottom: 15px;">${property.title}</h2>
      <p style="margin-bottom: 10px;">📍 ${property.location}</p>
      <p style="font-size: 1.2rem; color: #ff6b35; font-weight: bold; margin-bottom: 20px;">${property.price}</p>
      
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
      
      <h3 style="color: #ff6b35; margin-bottom: 10px;">Features:</h3>
      <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 20px;">
        ${property.features.map(feature => `<span style="background: rgba(255,107,53,0.2); padding: 5px 10px; border-radius: 15px; font-size: 0.9rem;">${feature}</span>`).join('')}
      </div>
      
      <button onclick="contactAboutProperty('${property.title}')" style="
        background: #ff6b35;
        color: white;
        padding: 12px 25px;
        border: none;
        border-radius: 25px;
        font-size: 1rem;
        cursor: pointer;
        width: 100%;
        transition: background 0.3s;
      " onmouseover="this.style.background='#e55a2b'" onmouseout="this.style.background='#ff6b35'">
        Contact About This Property
      </button>
    </div>
  `;

  document.body.appendChild(modal);
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
