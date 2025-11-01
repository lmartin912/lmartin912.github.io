/* MUSIC */
const music = document.getElementById("bgMusic");
const btn = document.getElementById("musicToggle");
let playing = false;
btn.onclick = () =>{
    playing ? music.pause() : music.play();
    playing = !playing;
};

/* STAR BACKGROUND */
const canvas = document.getElementById("starsCanvas");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth; canvas.height = innerHeight;

let stars=[];
for(let i=0;i<200;i++){
  stars.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,r:Math.random()*2,d:Math.random()});
}
function drawStars(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle="#ff00c8"; ctx.shadowBlur=10; ctx.shadowColor="#ff00c8";
  stars.forEach(s=>{ctx.beginPath();ctx.arc(s.x,s.y,s.r,0,Math.PI*2);ctx.fill();});
  stars.forEach(s=>{s.y+=s.d;if(s.y>canvas.height){s.y=0;s.x=Math.random()*canvas.width;}});
}
setInterval(drawStars,40);

/* GLITTER CURSOR */
document.addEventListener("mousemove", e=>{
  const dot=document.createElement("div");
  dot.classList.add("sparkle");
  dot.style.left=e.pageX+"px"; dot.style.top=e.pageY+"px";
  document.body.appendChild(dot);
  setTimeout(()=>dot.remove(),600);
});

/* MUSIC TOGGLE WITH LETTER A */
document.addEventListener("keydown", (e) => {
    if (e.key.toLowerCase() === "a") {
        playing ? music.pause() : music.play();
        playing = !playing;
    }
});
