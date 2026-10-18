
// ===============================
// CHANDU.LOVE - JAVASCRIPT
// ===============================

// Smooth scrolling for same-page links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (event) {
        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Reveal sections when they enter the screen
const sections = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.15
        }
    );

    sections.forEach(section => {
        observer.observe(section);
    });
}

// Promise button
function forgive() {
    const message = document.getElementById("message");

    if (message) {
        message.innerHTML =
            "A new beginning, a fresh smile, and our friendship. ❤️<br>" +
            "Let's leave the sadness behind and be okay again. 🥹💕";
    } else {
        alert(
            "I don't need a perfect friendship. ❤️\n\n" +
            "I just want us to smile together again.\n\n" +
            "I'm sorry. 🥺💕"
        );
    }
}

// Floating hearts effect
function createHeart() {
    const heart = document.createElement("div");

    heart.className = "floating-heart";
    heart.textContent = Math.random() > 0.5 ? "♡" : "♥";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (15 + Math.random() * 25) + "px";
    heart.style.color = Math.random() > 0.5 ? "#e88da8" : "#c85b7c";

    document.body.appendChild(heart);

    heart.addEventListener("animationend", () => {
        heart.remove();
    });
}

// Create a heart every 1.8 seconds
setInterval(createHeart, 1800);

// Website loaded
window.addEventListener("load", () => {
    console.log("chandu.love ❤️ loaded successfully");
});
