const particleContainer = document.querySelector(".particles");

const particles = [
    "♡",
    "♥",
    "❤",
    "💗",
    "💖",
    "💕",
    "🌸",
    "🌷",
    "✦",
    "✧",
    "•"
];

function createParticle() {

    const particle = document.createElement("div");

    particle.className = "particle";

    particle.textContent =
        particles[
            Math.floor(Math.random() * particles.length)
        ];

    /* random position */

    particle.style.left =
        Math.random() * 100 + "vw";

    /* random size */

    particle.style.fontSize =
        (Math.random() * 18 + 8) + "px";

    /* random falling speed */

    particle.style.animationDuration =
        (Math.random() * 7 + 6) + "s";

    /* random sideways movement */

    particle.style.animationDelay =
        (Math.random() * 2) + "s";

    /* random opacity */

    particle.style.opacity =
        Math.random() * 0.6 + 0.3;

    particleContainer.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 15000);
}


/* continuous particles */

setInterval(createParticle, 180);


/* initial particles */

for (let i = 0; i < 35; i++) {
    setTimeout(createParticle, i * 80);
}
function openDoor(door) {

    door.classList.toggle("open");

}
const openButton = document.getElementById("openButton");
const bgMusic = document.getElementById("bgMusic");

if (openButton && bgMusic) {

    openButton.addEventListener("click", function () {

        bgMusic.play().catch(() => {
            console.log("Music playback was blocked by the browser.");
        });

    });

}