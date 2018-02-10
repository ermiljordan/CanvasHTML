const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d'); //ctx is CONTEXT this is where you draw in your canvas.
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

let isDraw = false;
let lastX = 0;
let lastY = 0;
//let lastX and lastY is the beginning and ending of the drawing.

function draw(e) {
  if(!isDrawing) return; //Stop the function from running when they are not moused down.
  console.log(e);

  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', () => isDrawing = true);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);