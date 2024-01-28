const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

const navLink = document.querySelectorAll('.nav-link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

const scrollHeader = () => {
    const header = document.getElementById('header');
    this.scrollY >= 50 ? header.classList.add('bg-header') : header.classList.remove('bg-header');
}

window.addEventListener('scroll', scrollHeader);

const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp);

const sections = document.querySelectorAll('section[id]');
    
const scrollActive = () => {
    const scrollY = window.pageYOffset;

	sections.forEach(current => {
        const sectionHeight = current.offsetHeight, sectionTop = current.offsetTop - 58, sectionId = current.getAttribute('id'), sectionsClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']');

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link');
        }
        else {
            sectionsClass.classList.remove('active-link');
        } 
	});
}

window.addEventListener('scroll', scrollActive);

let parallax = new Rellax('.parallax');

gsap.from('#start-village', 1.2, {opacity: 0, y: 100, delay: .1});
gsap.from('#start-pine', 1.2, {opacity: 0, y: 150, delay: .3});
gsap.from('#start-mountain-2', 1.2, {opacity: 0, x: 150, delay: .5});
gsap.from('#start-mountain-3', 1.2, {opacity: 0, x: -150, delay: .6});
gsap.from('#start-mountain-1', 1.2, {opacity: 0, y: 250, delay: .7});
gsap.from('#start-moon', 1.2, {opacity: 0, y: 200, delay: .8});
gsap.from('#start-trineo', 1.2, {opacity: 0, x: -200, delay: .8});
gsap.from('#start-title', 1.2, {opacity: 0, y: -60, delay: 1 });

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400
});

sr.reveal(`#meaning-data, #celebrate-image`, {origin: 'right' });
sr.reveal(`#meaning-image,#gola, #celebrate-data`, {origin: 'left'});
sr.reveal(`.actions-card`, {interval: 100});
sr.reveal(`footer`);

// Add this script for the snow effect
document.addEventListener("DOMContentLoaded", function () {
    // Function to create a snowflake
    function createSnowflake() {
        const snowflake = document.createElement("div");
        snowflake.className = "snowflake";
        document.body.appendChild(snowflake);

        const size = Math.random() * 3;
        snowflake.style.width = `${size}rem`;
        snowflake.style.height = `${size}rem`;
        snowflake.style.left = `${Math.random() * window.innerWidth}px`;
        snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
        snowflake.style.opacity = Math.random();
    }

    // Create a certain number of snowflakes
    function createSnowflakes() {
        for (let i = 0; i < 20; i++) {
            createSnowflake();
        }
    }

    // Call the function when the window is loaded
    window.onload = createSnowflakes;
});
