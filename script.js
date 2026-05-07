const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function generate() {
  const style = document.getElementById("style").value;

  // clear canvas
  ctx.clearRect(0, 0, 512, 512);

  if (style === "watercolor") watercolor();
  if (style === "sketch") sketch();
  if (style === "anime") anime();
  if (style === "cyberpunk") cyberpunk();
}

/* ---------- STYLE 1: WATERCOLOUR ---------- */
function watercolor() {
  for (let i = 0; i < 80; i++) {
    ctx.fillStyle = `hsla(${Math.random()*360},70%,70%,0.3)`;
    ctx.beginPath();
    ctx.arc(Math.random()*512, Math.random()*512, Math.random()*80, 0, Math.PI*2);
    ctx.fill();
  }
}

/* ---------- STYLE 2: SKETCH ---------- */
function sketch() {
  ctx.strokeStyle = "black";
  for (let i = 0; i < 200; i++) {
    ctx.beginPath();
    ctx.moveTo(Math.random()*512, Math.random()*512);
    ctx.lineTo(Math.random()*512, Math.random()*512);
    ctx.stroke();
  }
}

/* ---------- STYLE 3: ANIME ---------- */
function anime() {
  ctx.fillStyle = "#ffccff";
  ctx.fillRect(0,0,512,512);

  for (let i = 0; i < 20; i++) {
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(Math.random()*512, Math.random()*512, 20, 0, Math.PI*2);
    ctx.fill();
  }
}

/* ---------- STYLE 4: CYBERPUNK ---------- */
function cyberpunk() {
  ctx.fillStyle = "black";
  ctx.fillRect(0,0,512,512);

  for (let i = 0; i < 100; i++) {
    ctx.fillStyle = `hsl(${Math.random()*300},100%,50%)`;
    ctx.fillRect(Math.random()*512, Math.random()*512, 5, 20);
  }
}
