/* ========= Utility ========= */
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

/* ========= Year ========= */
$('#year').textContent = new Date().getFullYear();

/* ========= Mobile Nav ========= */
const nav = document.querySelector('.nav');
const menuBtn = $('#menuToggle');
menuBtn.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(open));
});

/* Close menu on nav-link click (mobile) */
$$('.nav-link').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  menuBtn.setAttribute('aria-expanded', 'false');
}));

/* ========= Typed Tagline (Hacker typing intro) ========= */
const typedEl = $('#typed');
const phrases = [
  "Building in Tech. Learning. Glowing. Securing.", // your main tagline
  "Cybersecurity • Linux • Python • Networking • Ethical Tech"
];
let pIndex = 0, cIndex = 0, deleting = false, pause = 1200;

function typeLoop(){
  const phrase = phrases[pIndex];
  if(!deleting){
    typedEl.textContent = phrase.slice(0, ++cIndex);
    if(cIndex === phrase.length){
      deleting = true;
      setTimeout(typeLoop, pause);
      return;
    }
  } else {
    typedEl.textContent = phrase.slice(0, --cIndex);
    if(cIndex === 0){
      deleting = false;
      pIndex = (pIndex + 1) % phrases.length;
    }
  }
  setTimeout(typeLoop, deleting ? 30 : 45);
}
typeLoop();

/* ========= Floating Neon Particles (background) ========= */
(function particles(){
  const canvas = document.getElementById('bgParticles');
  const ctx = canvas.getContext('2d');
  let w, h, dots;

  function resize(){
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    dots = Array.from({length: Math.min(110, Math.floor(w*h/12000))}, () => ({
      x: Math.random()*w,
      y: Math.random()*h,
      r: Math.random()*1.8 + .4,
      vx: (Math.random()-.5)*0.4,
      vy: (Math.random()-.5)*0.4,
      hue: 300 + Math.random()*40 // pink/magenta range
    }));
  }
  function step(){
    ctx.clearRect(0,0,w,h);
    for(const d of dots){
      d.x += d.vx; d.y += d.vy;
      if(d.x<0||d.x>w) d.vx*=-1;
      if(d.y<0||d.y>h) d.vy*=-1;

      ctx.beginPath();
      const g = ctx.createRadialGradient(d.x, d.y, 0, d.x, d.y, d.r*6);
      g.addColorStop(0, `hsla(${d.hue},100%,60%,.9)`);
      g.addColorStop(1, `hsla(${d.hue},100%,60%,0)`);
      ctx.fillStyle = g;
      ctx.arc(d.x, d.y, d.r*6, 0, Math.PI*2);
      ctx.fill();

      ctx.beginPath();
      ctx.fillStyle = `hsla(${d.hue},100%,70%,.9)`;
      ctx.arc(d.x, d.y, d.r, 0, Math.PI*2);
      ctx.fill();
    }
    requestAnimationFrame(step);
  }
  window.addEventListener('resize', resize);
  resize(); step();
})();

/* ========= Glitter Cursor Trail ========= */
(function glitter(){
  const canvas = document.getElementById('cursorTrail');
  const ctx = canvas.getContext('2d');
  let w, h, sparks = [];

  function resize(){
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize); resize();

  window.addEventListener('mousemove', (e) => {
    for(let i=0;i<6;i++){
      sparks.push({
        x: e.clientX, y: e.clientY,
        vx: (Math.random()-0.5)*2.2,
        vy: (Math.random()-0.5)*2.2 - 1.2,
        life: 1, size: Math.random()*2 + 1,
        hue: 310 + Math.random()*30
      });
    }
  });

  function draw(){
    ctx.clearRect(0,0,w,h);
    sparks = sparks.filter(s => s.life > 0.02);
    for(const s of sparks){
      s.x += s.vx; s.y += s.vy; s.vy += 0.03; s.life *= 0.96;
      ctx.beginPath();
      ctx.fillStyle = `hsla(${s.hue},100%,70%,${s.life})`;
      ctx.arc(s.x, s.y, s.size, 0, Math.PI*2);
      ctx.fill();
      // soft glow
      ctx.beginPath();
      const g = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.size*6);
      g.addColorStop(0, `hsla(${s.hue},100%,60%,${s.life*.35})`);
      g.addColorStop(1, `hsla(${s.hue},100%,60%,0)`);
      ctx.fillStyle = g;
      ctx.arc(s.x, s.y, s.size*6, 0, Math.PI*2);
      ctx.fill();
    }
    requestAnimationFrame(draw);
  }
  draw();
})();

/* ========= Helpful Defaults ========= */
/* Set LinkedIn link in both places once you have it */
const linkedInURL = "https://www.linkedin.com/in/your-link/"; // TODO: replace
document.getElementById('linkedinLink').href = linkedInURL;
document.getElementById('linkedinIcon').href = linkedInURL;
