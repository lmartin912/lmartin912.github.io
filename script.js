// Background music control
const audio = document.getElementById("bg-music");
let playing = false;

// Press “A” to toggle music
document.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === "a") {
    if (playing) {
      audio.pause();
    } else {
      audio.play();
    }
    playing = !playing;
  }
});

// Optional: show hint when hovering near bottom (like secret feature)
const hint = document.createElement("div");
hint.innerText = "Press A for music 🎧";
hint.style.position = "fixed";
hint.style.bottom = "12px";
hint.style.right = "12px";
hint.style.color = "#ff00ff";
hint.style.fontSize = "14px";
hint.style.opacity = "0.6";
hint.style.padding = "8px 12px";
hint.style.border = "1px solid #ff00ff";
hint.style.borderRadius = "10px";
hint.style.boxShadow = "0 0 12px #ff00ff";
hint.style.fontFamily = "Poppins, sans-serif";
document.body.appendChild(hint);

// Fade-in animation for site
document.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 1.2s ease-in-out";
  setTimeout(() => {
    document.body.style.opacity = "1";
  }, 100);
});
