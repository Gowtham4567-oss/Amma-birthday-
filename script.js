// ===============================
// Happy Birthday Amma Sathya ❤️
// script.js
// ===============================

// ---------- Dark Mode ----------
function darkMode() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

// Load saved theme
window.addEventListener("load", () => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }
});


// ---------- Secret Message ----------
function showMessage() {
    const message = document.getElementById("message");

    if (message) {
        if (message.style.display === "block") {
            message.style.display = "none";
        } else {
            message.style.display = "block";
        }
    }
}


// ---------- Falling Hearts ----------
function createHearts() {

    for (let i = 0; i < 30; i++) {

        let heart = document.createElement("div");

        heart.classList.add("heart");

        heart.innerHTML = "❤️";

        heart.style.left = Math.random() * 100 + "vw";

        heart.style.fontSize = (15 + Math.random() * 20) + "px";

        heart.style.animationDuration =
            (5 + Math.random() * 6) + "s";

        document.body.appendChild(heart);
    }
}

createHearts();


// ---------- Fireworks ----------
function createFirework() {

    let firework = document.createElement("div");

    firework.classList.add("firework");

    firework.innerHTML = "🎆";

    firework.style.left = Math.random() * 90 + "vw";

    firework.style.top = Math.random() * 80 + "vh";

    document.body.appendChild(firework);

    setTimeout(() => {
        firework.remove();
    }, 1000);
}

// Generate fireworks every 1.5 seconds
setInterval(createFirework, 1500);


// ---------- Floating Stars ----------
function createStars() {

    for (let i = 0; i < 40; i++) {

        let star = document.createElement("div");

        star.innerHTML = "✨";

        star.style.position = "fixed";

        star.style.left = Math.random() * 100 + "vw";

        star.style.top = Math.random() * 100 + "vh";

        star.style.opacity = "0.6";

        star.style.fontSize = "14px";

        document.body.appendChild(star);
    }
}

createStars();


// ---------- Welcome Message ----------
console.log("🎂 Happy Birthday Amma Sathya ❤️");


// ---------- Smooth Scroll ----------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({
                behavior: "smooth"
            });
    });

});
