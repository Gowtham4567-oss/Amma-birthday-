// =======================
// Dark Mode Toggle
// =======================
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
    let savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }
});

// =======================
// Secret Message
// =======================
function showMessage() {
    let message = document.getElementById("message");

    if (message) {
        message.style.display = "block";
    }
}

// =======================
// Falling Hearts
// =======================
function createHearts() {

    for (let i = 0; i < 35; i++) {

        let heart = document.createElement("div");

        heart.classList.add("heart");
        heart.innerHTML = "❤️";

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = (15 + Math.random() * 25) + "px";
        heart.style.animationDuration = (5 + Math.random() * 6) + "s";

        document.body.appendChild(heart);
    }

}

createHearts();

// =======================
// Floating Roses
// =======================
function createRoses() {

    for (let i = 0; i < 20; i++) {

        let rose = document.createElement("div");

        rose.classList.add("rose");
        rose.innerHTML = "🌹";

        rose.style.left = Math.random() * 100 + "vw";
        rose.style.fontSize = (20 + Math.random() * 15) + "px";
        rose.style.animationDuration = (8 + Math.random() * 8) + "s";

        document.body.appendChild(rose);
    }

}

createRoses();

// =======================
// Balloons
// =======================
function createBalloons() {

    let colors = ["🎈", "🎉", "🎊"];

    for (let i = 0; i < 15; i++) {

        let balloon = document.createElement("div");

        balloon.classList.add("balloon");

        balloon.innerHTML =
            colors[Math.floor(Math.random() * colors.length)];

        balloon.style.left = Math.random() * 100 + "vw";

        balloon.style.fontSize = (25 + Math.random() * 20) + "px";

        balloon.style.animationDuration =
            (10 + Math.random() * 10) + "s";

        document.body.appendChild(balloon);
    }

}

createBalloons();

// =======================
// Twinkling Stars
// =======================
function createStars() {

    for (let i = 0; i < 40; i++) {

        let star = document.createElement("div");

        star.classList.add("star");

        star.innerHTML = "✨";

        star.style.left = Math.random() * 100 + "vw";

        star.style.top = Math.random() * 100 + "vh";

        star.style.fontSize = (10 + Math.random() * 15) + "px";

        document.body.appendChild(star);
    }

}

createStars();

// =======================
// Fireworks
// =======================
setInterval(() => {

    let firework = document.createElement("div");

    firework.innerHTML = "🎆";

    firework.style.position = "fixed";
    firework.style.left = Math.random() * 90 + "vw";
    firework.style.top = Math.random() * 80 + "vh";
    firework.style.fontSize = "35px";
    firework.style.zIndex = "999";

    document.body.appendChild(firework);

    setTimeout(() => {
        firework.remove();
    }, 1000);

}, 900);

// =======================
// Smooth Scrolling
// =======================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({
                behavior: "smooth"
            });

    });

});

// =======================
// Welcome Message
// =======================
window.onload = function () {

    console.log("Happy Birthday Amma Sathya ❤️");

};

// =======================
// Background Music Control
// =======================
function toggleMusic() {

    let music = document.getElementById("birthdayMusic");

    if (!music) return;

    if (music.paused) {

        music.play();

    } else {

        music.pause();

    }

}
