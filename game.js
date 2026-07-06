document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. Mobile Menu Toggle Mechanism
    // ==========================================
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    menuToggle.addEventListener('click', () => {
        // Toggle the visibility modifier class on mobile layouts
        navLinks.classList.toggle('mobile-open');
    });

    // Close mobile menu automatically when clicking any menu link
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('mobile-open');
        });
    });


    // ==========================================
    // 2. Interactive Worlds Tab Slider
    // ==========================================
    const tabButtons = document.querySelectorAll('.tab-btn');
    const worldContents = document.querySelectorAll('.world-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Step A: Extract targeted world target keyword from data attribute
            const targetWorld = button.getAttribute('data-world');

            // Step B: Strip the active class layer from all tab buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));

            // Step C: Strip active styling layers from all structural panels
            worldContents.forEach(content => content.classList.remove('active'));

            // Step D: Apply active state classes to corresponding clicked elements
            button.classList.add('active');
            document.getElementById(targetWorld).classList.add('active');
        });
    });

});
