// LinkedIn + Resume buttons
document.getElementById("resumeBtn").onclick = () => {
    alert("Upload your resume PDF to GitHub & link it here 💕");
};

// Neon stars / particle background
const canvas = document.getElementById("starsCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];
for (let i = 0; i < 200; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2,
        d: Math.random()
    });
}

function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#ff00c8";
    ctx.shadowBlur = 10;
    ctx.shadowColor = "#ff00c8";
    
    stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2, true);
        ctx.fill();
    });

    updateStars();
}

function updateStars() {
    stars.forEach(star => {
        star.y += star.d;
        if (star.y > canvas.height) {
            star.y = 0;
            star.x = Math.random() * canvas.width;
        }
    });
}

setInterval(drawStars, 40);

/* MUSIC TOGGLE WITH LETTER A */
document.addEventListener("keydown", (e) => {
    if (e.key.toLowerCase() === "a") {
        playing ? music.pause() : music.play();
        playing = !playing;
    }
});
