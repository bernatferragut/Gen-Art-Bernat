// pick up canvas
let canvas = document.querySelector('canvas');
// pick up input range slider
let slider = document.querySelector('input');

// setting size
let canvas_width = window.innerWidth;
let canvas_height = window.innerHeight;

// creating canvas
canvas.width = canvas_width;
canvas.height = canvas_height;

// setting 2d context
let ctx = canvas.getContext('2d');

// coloring canvas bg
// ctx.fillStyle = 'black';
// ctx.fillRect(0,0,canvas.width,canvas.height);

// => line Object
function Line(sX, sY, eX, eY, width, color) {
  this.sX = sX;
  this.sY = sY;
  this.eX = eX;
  this.eY = eY;
  this.width = width;
  this.color = color;
}
Line.prototype.draw = function() {
  // ctx.fillRect(0,0,canvas.width,canvas.height);
  ctx.beginPath();
  ctx.moveTo(this.sX,this.sY);
  ctx.lineTo(this.eX,this.eY);
  ctx.lineWidth = this.width;
  ctx.strokeStyle = this.color;
  ctx.stroke();
}
// => line Object

// create multiple lines
let lines = [];
let amount = 2;
// // multi lines
// for(let i=0; i < amount; i++) {
//   let l = new Line(Math.random()*canvas.width, 
//                    canvas.height, 
//                    Math.random()*canvas.width, 
//                    0,
//                    Math.random()*3, 
//                    'rgba(0,255,0,0.9');
//   lines.push(l);
// }

// light multiplication
// ctx.globalCompositeOperation = "difference";

// draw multiple lines
// for(let line in lines) {
//   lines[line].draw();
// }

// animation
function animate() {
  
  requestAnimationFrame(animate);
  
  //adding color effect part1
  // ctx.globalCompositeOperation  = "source-over";
  //clear canvas
  // ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'black';
  ctx.fillRect(0,0,canvas.width,canvas.height);
  // multi lines
  for(let i=0; i < amount; i++) {
    let ln = new Line(Math.random()*canvas.width, 
                     canvas.height, 
                     Math.random()*canvas.width, 
                     0,
                     Math.random()*3, 
                     'rgba(0,255,0,1)');
    lines.push(ln);
  }
  //adding color effect part2
  // ctx.globalCompositeOperation = "source-atop";
  // multiple lines
  
  for(let line in lines) {
    ctx.fillStyle = 'rgba(0,0,0,0.05)';
    ctx.fillRect(0,0,canvas.width,canvas.height);
    lines[line].draw();
    
  }
  // ctx.clearRect(0, 0, canvas.width, canvas.height);
  
}
animate();