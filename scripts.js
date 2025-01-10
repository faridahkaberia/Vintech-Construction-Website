document.addEventListener("DOMContentLoaded", function () {

    // Stats Section
    const counters = document.querySelectorAll('.stat p');
    counters.forEach(counter => {
        counter.innerText = '0';
        const updateCounter = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = target / 200;
            if (count < target) {
                counter.innerText = `${Math.ceil(count + increment)}`;
                setTimeout(updateCounter, 10);
            } else {
                counter.innerText = target;
            }
        };
        updateCounter();
    });

    // Hero Section
    let currentSlide = 0;
    const slides = document.querySelectorAll('.hero-slide');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active', 'slide-in');
            if (i === index) {
                slide.classList.add('active');
                setTimeout(() => {
                    slide.classList.add('slide-in');
                }, 50);
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    showSlide(currentSlide);
    setInterval(nextSlide, 5000);

    //hero-text
    function showSlide(index) {
        slides.forEach((slide, i) => {
            const textElements = slide.querySelectorAll('.hero-text h1, .hero-text p');
            slide.classList.remove('active', 'slide-in');
            textElements.forEach(text => {
                text.classList.remove('slide-in-text', 'from-top', 'from-bottom', 'from-left', 'from-right');
            });
    
            if (i === index) {
                slide.classList.add('active');
                setTimeout(() => {
                    slide.classList.add('slide-in');
                    textElements.forEach(text => {
                        const randomDirection = getRandomDirection(); // Get random direction
                        setTimeout(() => {
                            text.classList.add('slide-in-text', randomDirection);
                        }, 200); // Delay before starting animation
                    });
                }, 50);
            }
        });
    }
    
    function getRandomDirection() {
        const directions = ['from-top', 'from-bottom', 'from-left', 'from-right'];
        const randomIndex = Math.floor(Math.random() * directions.length);
        return directions[randomIndex];
    }    

    //searchbutton
    (function() {
        // Get the search input and product items
        const searchInput = document.querySelector('.search-container input[name="search"]');
        const productItems = document.querySelectorAll('.product-item');

        // Check if elements exist
        if (!searchInput || productItems.length === 0) {
            console.error('Search input or product items not found.');
            return; // Exit if essential elements are not found
        }

        // Event listener for input in the search box
        searchInput.addEventListener('input', function(event) {
            const searchTerm = searchInput.value.toLowerCase(); // Get the search term in lowercase

            productItems.forEach(item => {
                const productName = item.querySelector('h3') ? item.querySelector('h3').textContent.toLowerCase() : '';
                // Check if the product name includes the search term
                if (productName.includes(searchTerm)) {
                    item.classList.remove('hidden'); // Show the product item
                } else {
                    item.classList.add('hidden'); // Hide the product item
                }
            });
        });

        // Shop by category filter Section
        const sidebarLinks = document.querySelectorAll('.sidebar a');
        const dropdownLinks = document.querySelectorAll('.p-dropdown-content a');

        // Function to filter products based on category
        function filterProducts(category) {
            productItems.forEach(item => {
                if (category === 'all' || item.getAttribute('data-category') === category) {
                    item.classList.remove('hidden'); // Show the product item
                } else {
                    item.classList.add('hidden'); // Hide the product item
                }
            });
            console.log(`Filtered products by category: ${category}`); // Debugging log
        }

        // Event listener for sidebar links
        sidebarLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation(); // Prevent event bubbling
                const category = e.target.getAttribute('data-category');
                filterProducts(category);
            });
        });

        // Event listener for dropdown links
        dropdownLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation(); // Prevent event bubbling
                const category = e.target.getAttribute('data-category');
                filterProducts(category);
            });
        });

        // Initial display of all products
        filterProducts('all');

        // Dropdown functionality
        const dropbtn = document.querySelector('.product-dropdown .dropbtn');
        const dropdownContent = document.querySelector('.p-dropdown-content');

        if (dropbtn) {
            dropbtn.addEventListener('click', (event) => {
                event.preventDefault();
                dropdownContent.classList.toggle('show'); 
            });
        }

        // Optional: Close the dropdown if the user clicks outside of it
        window.addEventListener('click', (event) => {
            if (!event.target.matches('.dropbtn') && !event.target.closest('.product-dropdown')) {
                dropdownContent.classList.remove('show'); // Hide the dropdown
            }
        });

        console.log('Product filter script initialized.'); // Debugging log
    })();
    
    // POP UP MODAL Section
    const modal = document.getElementById("modal");
    const readMoreButtons = document.querySelectorAll('.read-more-btn');
    const closeButtons = document.querySelectorAll('.close');

    // Event listener to open modals
    readMoreButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const modalId = button.getAttribute('data-modal');
            
            // Get the product item position
            const productItem = button.closest('.product-item'); 
            const rect = productItem.getBoundingClientRect();
    
            // Set modal position
            const modalElement = document.getElementById(modalId);
            modalElement.style.display = 'block';
            modalElement.style.position = 'absolute';
            modalElement.style.top = `${rect.top + window.scrollY}px`; 
            modalElement.style.left = `${rect.left + window.scrollX}px`; 
        });
    });
    
    // Event listener to close modals
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-modal');
            document.getElementById(modalId).style.display = 'none';
        });
    });
    
    // Close modal when user clicks outside the modal content
    window.addEventListener('click', (event) => {
        const modals = document.querySelectorAll('.modal'); // Ensure all modals are selected
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
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

    // Carousel Arrows Scrolling Effect
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    const serviceContainer = document.querySelector('.service-container');

    if (leftArrow && rightArrow && serviceContainer) {
        leftArrow.addEventListener('click', () => {
            serviceContainer.scrollBy({
                left: -200, 
                behavior: 'smooth'
            });
        });

        rightArrow.addEventListener('click', () => {
            serviceContainer.scrollBy({
                left: 200, 
                behavior: 'smooth'
            });
        });
    } else {
        console.error('Carousel elements not found.');
    }

    // Back to Top
    const backToTopButton = document.querySelector(".back-to-top");
    if (backToTopButton) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 1000) { 
                backToTopButton.style.display = "block";
            } else {
                backToTopButton.style.display = "none";
            }
        });

        backToTopButton.addEventListener("click", function (e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    } else {
        console.error("Back to Top button is not found in the DOM.");
    }

    // Waterproofing Methods
    const tabs = document.querySelectorAll(".tab");
    const contents = document.querySelectorAll(".tab-content");
    let currentTab = 0;

    if (tabs.length && contents.length) {
        function resetTabs() {
            tabs.forEach(tab => tab.classList.remove("active"));
            contents.forEach(content => content.classList.remove("active"));
        }

        function activateTab(index) {
            resetTabs();
            tabs[index].classList.add("active");
            contents[index].classList.add("active");
        }

        tabs.forEach((tab, index) => {
            tab.addEventListener("click", () => {
                activateTab(index);
                currentTab = index;
            });
        });

        document.getElementById("prev-arrow").addEventListener("click", function() {
            currentTab = (currentTab - 1 + tabs.length) % tabs.length;
            activateTab(currentTab);
        });

        document.getElementById("next-arrow").addEventListener("click", function() {
            currentTab = (currentTab + 1) % tabs.length;
            activateTab(currentTab);
        });

        activateTab(currentTab);
    } else {
        console.error("Tabs or contents not found.");
    }
});



