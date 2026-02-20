// Hero Slider Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
const indicators = document.querySelectorAll('.indicator-dot');
const slideTitle = document.getElementById('slideTitle');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    slides[index].classList.add('active');
    indicators[index].classList.add('active');
    
    // Update title text with animation
    const newTitle = slides[index].getAttribute('data-title');
    slideTitle.style.animation = 'none';
    setTimeout(() => {
        slideTitle.textContent = newTitle;
        slideTitle.style.animation = 'fadeInUp 1s ease-out';
    }, 100);
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

// Auto advance slides every 4 seconds
setInterval(nextSlide, 4000);

// Click indicators to jump to specific slide
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

// Hamburger Menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    } else {
        console.error('Hamburger or nav-links elements not found.');
    }

// Product Details Data
const productDetails = {
    'decra': {
        name: 'Decra Stone Coated Tiles',
        price: 'From KSh 0/sqm',
        description: 'Decra stone coated steel roofing tiles combine the durability of steel with the aesthetic appeal of traditional roofing materials. These premium tiles are engineered to withstand the harshest weather conditions while maintaining their beauty for decades.',
        features: [
            '50-year warranty against manufacturing defects',
            'Stone-coated finish in multiple colors',
            'Lightweight yet extremely durable',
            'UV resistant and fade-proof',
            'Excellent insulation properties',
            'Class A fire rating',
            'Wind resistant up to 190 km/h',
            'Made from Zincalume steel'
        ],
        benefits: 'Decra tiles offer superior protection against heavy rain, intense sun, and strong winds common in Kenyan weather. Their stone coating provides additional thermal insulation, keeping your home cooler and reducing energy costs.'
    },

    'decra-shingle': {
        name: 'Decra Shingle Tile',
        price: 'From KSh 0/sqm',
        description: 'Decra Shingle captures the distinctive charm of traditional wood shake shingles without the maintenance headaches. This premium stone-coated profile delivers rustic elegance with modern durability.',
        features: [
            'Authentic wood shake appearance',
            'Multi-dimensional shadow lines',
            'Stone-coated Zincalume steel',
            'Class A fire rating',
            '50-year limited warranty',
            'Impact resistant',
            'Lightweight installation',
            'Available in natural earth tones'
        ],
        benefits: 'Decra Shingle provides the warm, natural look of cedar shakes without rot, insects, or fire risk. Perfect for lodges, luxury homes, and properties seeking a rustic yet refined aesthetic with zero compromise on safety and longevity.'
    },

    'decra-slate': {
        name: 'Decra Slate Tile',
        price: 'From KSh 0/sqm',
        description: 'Decra Slate replicates the prestigious appearance of natural slate roofing at a fraction of the weight and cost. This elegant profile brings European sophistication to Kenyan architecture.',
        features: [
            'Authentic slate tile appearance',
            'Multiple slate texture options',
            'Stone-coated steel construction',
            'Premium color selection',
            '50-year material warranty',
            '90% lighter than natural slate',
            'No structural reinforcement needed',
            'Superior wind and hail resistance'
        ],
        benefits: 'Decra Slate delivers the timeless elegance of European slate roofing without the massive weight, high cost, or fragility of natural slate. Ideal for executive homes, hotels, and prestigious commercial buildings seeking distinguished architecture.'
    },

    'decra-milano': {
        name: 'Decra Milano Tile',
        price: 'From KSh 0/sqm',
        description: 'Decra Milano brings Italian-inspired elegance to modern roofing. With its distinctive curved profile and rich stone coating, Milano creates the romantic appeal of Mediterranean villa roofing.',
        features: [
            'Italian villa-style curved profile',
            'Deep shadow lines for dimension',
            'Stone-coated Zincalume steel',
            'Terracotta and classic color options',
            '50-year transferable warranty',
            'Interlocking weather barrier',
            'Thermal performance certified',
            'Wind tested to 190 km/h'
        ],
        benefits: 'Decra Milano transforms any home into a Mediterranean masterpiece. Its authentic Italian profile and rich stone finish create dramatic curb appeal while providing superior protection against Kenya\'s intense sun and seasonal rains.'
    },

    'decra-classic': {
        name: 'Decra Classic Tile',
        price: 'From KSh 0/sqm',
        description: 'Decra Classic represents the gold standard in stone-coated roofing. This timeless profile has protected homes worldwide for decades, combining proven performance with elegant simplicity.',
        features: [
            'Traditional tile profile design',
            'Premium stone granule coating',
            'Zincalume steel core',
            'Extensive color range',
            '50-year warranty',
            'Class 4 impact rating',
            'Energy Star certified options',
            'Proven global track record'
        ],
        benefits: 'Decra Classic is the trusted choice for homeowners who value reliability and timeless beauty. With millions of square meters installed worldwide, it offers peace of mind backed by decades of proven performance in all climate conditions.'
    },

    'decra-shake': {
        name: 'Decra Shake Tile',
        price: 'From KSh 0/sqm',
        description: 'Decra Shake delivers the most authentic wood shake appearance in the stone-coated roofing industry. This premium profile features deep shadow lines and natural texture that rivals genuine cedar shakes.',
        features: [
            'Ultra-realistic wood shake texture',
            'Random offset pattern design',
            'Stone-coated steel construction',
            'Natural weathered color options',
            '50-year limited warranty',
            'Class A fire protection',
            'Insect and rot proof',
            'Superior impact resistance'
        ],
        benefits: 'Decra Shake offers the ultimate in rustic luxury roofing. Perfect for mountain retreats, countryside estates, and high-end residential projects where authentic wood shake aesthetics are desired without the maintenance, fire risk, or environmental concerns of real wood.'
    },
    'box-profile': {
        name: 'Box Profile Roofing',
        price: 'From KSh 0/sheet',
        description: 'Box profile roofing sheets are a cost-effective and versatile roofing solution featuring a distinctive trapezoidal profile. Perfect for residential, commercial, and industrial applications.',
        features: [
            'Available in gauges: 0.3mm to 0.7mm',
            'Standard lengths: 1m to 6m',
            'Wide color range available',
            'Galvanized and pre-painted options',
            'Easy and fast installation',
            'Low maintenance requirements',
            'Excellent water drainage',
            'Corrosion resistant coating'
        ],
        benefits: 'Box profile sheets are ideal for warehouses, factories, residential homes, and agricultural buildings. Their robust design ensures long-lasting performance with minimal maintenance.'
    },
    'corrugated': {
        name: 'Corrugated Roofing Sheets',
        price: 'From KSh 0/sheet',
        description: 'Traditional corrugated iron sheets remain one of the most popular roofing materials in Kenya due to their affordability, durability, and ease of installation.',
        features: [
            'Gauge options: 0.3mm to 0.5mm',
            'Various profile depths available',
            'Zinc-coated for rust protection',
            'Multiple color options',
            'Quick installation process',
            'Cost-effective solution',
            'Recyclable material',
            'Proven track record'
        ],
        benefits: 'Corrugated sheets provide reliable weather protection at an economical price point. They are particularly suitable for temporary structures, sheds, and budget-conscious projects without compromising on quality.'
    },
    'alluminum': {
    name: 'Aluminum Roofing Sheets',
    price: 'From KSh 0/sheet',
    description: 'Lightweight yet incredibly strong, aluminum roofing sheets offer superior corrosion resistance and longevity. Perfect for coastal areas and high-humidity environments where rust is a concern.',
    features: [
        'Rust-proof and corrosion-resistant',
        'Lightweight for easy installation',
        'Available in various gauges (0.4mm - 0.7mm)',
        'Pre-painted and mill finish options',
        'Excellent heat reflection properties',
        'Recyclable and eco-friendly',
        '25+ year lifespan',
        'Low maintenance requirements'
    ],
    benefits: 'Aluminum sheets are ideal for Kenyan coastal regions and areas with high rainfall. Their natural resistance to rust and lightweight nature reduces structural load while providing decades of reliable protection.'
},

'polycarbonate': {
    name: 'Polycarbonate Roofing Sheets',
    price: 'From KSh 0/sheet',
    description: 'Translucent polycarbonate sheets combine natural lighting with weather protection. These impact-resistant sheets are perfect for patios, greenhouses, carports, and skylights.',
    features: [
        'UV protected both sides',
        'Impact resistant - virtually unbreakable',
        'Excellent light transmission (up to 90%)',
        'Available in clear, bronze, and opal',
        'Twin-wall and multi-wall options',
        'Lightweight yet strong',
        '10-year warranty against yellowing',
        'Easy to cut and install'
    ],
    benefits: 'Polycarbonate sheets provide natural daylight while protecting against harsh UV rays and weather. They reduce electricity costs by eliminating the need for artificial lighting during the day, making them perfect for covered outdoor spaces.'
},

'Orientile': {
    name: 'Orientile Roofing',
    price: 'From KSh 0/sqm',
    description: 'Orientile brings Mediterranean elegance to Kenyan homes with its distinctive curved profile. This stone-coated steel roofing mimics traditional clay tiles while offering superior durability and weather resistance.',
    features: [
        'Classic Mediterranean S-curve design',
        'Stone-coated steel construction',
        'Multiple color options available',
        'Interlocking tile system',
        '30-year material warranty',
        'Wind resistant up to 180 km/h',
        'Thermal insulation properties',
        'Suitable for minimum 15° pitch'
    ],
    benefits: 'Orientile transforms any home with authentic Mediterranean aesthetics without the weight and fragility of clay tiles. Its stone coating provides superior weather protection and color retention in the harsh Kenyan sun.'
},

'Roman tile': {
    name: 'Roman Tile Roofing',
    price: 'From KSh 0/sqm',
    description: 'Roman Tile roofing profiles deliver timeless architectural beauty with modern engineering. These elegant stone-coated tiles feature the classic Roman profile that has adorned prestigious buildings for centuries.',
    features: [
        'Authentic Roman profile design',
        'Stone-coated steel core',
        'Premium color selection',
        'Advanced interlocking system',
        '40-year warranty',
        'Class A fire rating',
        'Excellent noise reduction',
        'Lightweight - reduces structural load'
    ],
    benefits: 'Roman Tile roofing elevates property value with its prestigious appearance while providing modern weather protection. The stone coating ensures your roof maintains its beauty for decades, making it a wise long-term investment.'
},

'Versatile': {
    name: 'Versatile Roofing Tiles',
    price: 'From KSh 0/sqm',
    description: 'Versatile tiles live up to their name, offering flexible design options that complement any architectural style. This adaptable stone-coated roofing solution combines aesthetic versatility with robust performance.',
    features: [
        'Multi-profile design flexibility',
        'Stone-coated steel construction',
        'Wide color palette available',
        'Universal interlocking system',
        '35-year warranty',
        'Suitable for various roof pitches',
        'UV and fade resistant',
        'Excellent weather protection'
    ],
    benefits: 'Versatile tiles adapt to both traditional and contemporary architectural styles, making them perfect for renovation projects or new builds. Their universal design ensures compatibility with various roof configurations while maintaining superior weather resistance.'
},

'Elegantile': {
    name: 'Elegantile Roofing',
    price: 'From KSh 0/sqm',
    description: 'Elegantile represents the pinnacle of refined roofing design. With its sophisticated flat profile and premium stone coating, it creates a contemporary yet timeless look suitable for modern Kenyan architecture.',
    features: [
        'Sleek flat tile profile',
        'Premium stone granule finish',
        'Designer color range',
        'Superior weather seal',
        '50-year performance guarantee',
        'Energy-efficient reflective options',
        'Minimal maintenance required',
        'Suitable for low pitch roofs (12° minimum)'
    ],
    benefits: 'Elegantile offers the perfect balance of modern aesthetics and proven performance. Its flat profile and premium finish make it ideal for contemporary homes, villas, and commercial buildings seeking a sophisticated appearance with uncompromising protection.'
}

};

// Modal Functionality
const modal = document.getElementById('productModal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.querySelector('.close-modal');

// Open modal with product details
document.querySelectorAll('.btn-read-more').forEach(button => {
    button.addEventListener('click', function() {
        const productKey = this.getAttribute('data-product');
        const product = productDetails[productKey];
        
        if (product) {
            modalBody.innerHTML = `
                <h2>${product.name}</h2>
                <p style="font-size: 1.4rem; color: #667eea; font-weight: 600; margin-bottom: 20px;">${product.price}</p>
                <p>${product.description}</p>
                
                <h3>Key Features:</h3>
                <ul>
                    ${product.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
                
                <h3>Benefits:</h3>
                <p>${product.benefits}</p>
                
                <div style="margin-top: 30px; text-align: center;">
                    <a href="https://wa.me/254YOUR_NUMBER?text=I%20would%20like%20to%20learn%20more%20about%20${encodeURIComponent(product.name)}" 
                       class="btn-order" 
                       target="_blank"
                       style="display: inline-block; padding: 15px 40px; text-decoration: none;">
                        Order ${product.name}
                    </a>
                </div>
            `;
            
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
});

// Close modal
closeModal.addEventListener('click', () => {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});