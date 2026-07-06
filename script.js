// ===========================================
// Mobile Navigation
// ===========================================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
});

// Close menu when link clicked

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';

    });

});


// ===========================================
// Sticky Navbar
// ===========================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.style.boxShadow = "0 8px 20px rgba(0,0,0,.08)";
        header.style.background = "rgba(255,255,255,.96)";

    } else {

        header.style.boxShadow = "0 3px 10px rgba(0,0,0,.05)";
        header.style.background = "rgba(255,255,255,.85)";

    }

});


// ===========================================
// Scroll To Top
// ===========================================

const scrollTop = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        scrollTop.classList.add("active");

    } else {

        scrollTop.classList.remove("active");

    }

});

scrollTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// ===========================================
// Counter Animation
// ===========================================

const counters = document.querySelectorAll(".stat h2");

const speed = 80;

const startCounter = () => {

    counters.forEach(counter => {

        const updateCounter = () => {

            let target = counter.innerText;

            target = target.replace("+", "");
            target = target.replace("%", "");

            target = Number(target);

            let count = Number(counter.getAttribute("data-count")) || 0;

            let increment = Math.ceil(target / speed);

            if (count < target) {

                count += increment;

                if (count > target) {

                    count = target;

                }

                counter.setAttribute("data-count", count);

                if (counter.innerText.includes("%")) {

                    counter.innerText = count + "%";

                }

                else if (counter.innerText.includes("+")) {

                    counter.innerText = count + "+";

                }

                else {

                    counter.innerText = count;

                }

                setTimeout(updateCounter, 25);

            }

        };

        updateCounter();

    });

};


// ===========================================
// Counter Observer
// ===========================================

const statsSection = document.querySelector(".stats");

let counterStarted = false;

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting && !counterStarted) {

            counterStarted = true;

            startCounter();

        }

    });

}, {

    threshold: 0.4

});

observer.observe(statsSection);


// ===========================================
// Fade In Animation
// ===========================================

const revealElements = document.querySelectorAll(

".feature-card,.course-card,.testimonial,.stat,.hero-content,.hero-image"

);

function reveal() {

    revealElements.forEach(el => {

        const windowHeight = window.innerHeight;

        const revealTop = el.getBoundingClientRect().top;

        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {

            el.style.opacity = "1";

            el.style.transform = "translateY(0)";

        }

        else {

            el.style.opacity = "0";

            el.style.transform = "translateY(40px)";

        }

    });

}

window.addEventListener("scroll", reveal);

window.addEventListener("load", reveal);


// ===========================================
// Smooth Scrolling
// ===========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


// ===========================================
// Active Navigation Highlight
// ===========================================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ===========================================
// Hero Image Parallax
// ===========================================

const heroImage = document.querySelector(".hero-image");

window.addEventListener("mousemove", (e) => {

    let x = (window.innerWidth / 2 - e.pageX) / 35;

    let y = (window.innerHeight / 2 - e.pageY) / 35;

    heroImage.style.transform = `translate(${x}px, ${y}px)`;

});


// ===========================================
// Button Ripple Effect
// ===========================================

const buttons = document.querySelectorAll(

".btn-primary,.btn-secondary,.register-btn,.login-btn"

);

buttons.forEach(button => {

    button.addEventListener("click", function (e) {

        let x = e.clientX - e.target.offsetLeft;

        let y = e.clientY - e.target.offsetTop;

        let ripple = document.createElement("span");

        ripple.style.left = x + "px";

        ripple.style.top = y + "px";

        ripple.classList.add("ripple");

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});


// ===========================================
// Console Welcome
// ===========================================

console.log("%cWelcome to EduSphere LMS 🚀",

"color:white;background:#4F46E5;padding:10px 20px;border-radius:5px;font-size:16px;");