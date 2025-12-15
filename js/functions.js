const words = [
    { text: "Android", color: "#51ff00ff" },
    { text: "Backend", color: "black" }
];

const typingElement = document.getElementById("typing-text");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const current = words[wordIndex];

    typingElement.style.color = current.color;

    if (!isDeleting) {
        typingElement.textContent = current.text.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === current.text.length) {
            setTimeout(() => isDeleting = true, 1200);
        }
    } else {
        typingElement.textContent = current.text.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }

    setTimeout(typeEffect, isDeleting ? 60 : 100);
}

typeEffect();

// Manage sections menu
const menu = document.getElementById("menu");
const icon = document.getElementById("menuIcon");

menu.addEventListener("show.bs.collapse", () => {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
});

menu.addEventListener("hide.bs.collapse", () => {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
});

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});

document.getElementById("current-year").textContent = new Date().getFullYear();

