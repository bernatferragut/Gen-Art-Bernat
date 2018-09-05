// JS with P5JS

// CANVAS
let canvas = {
  w       : window.innerWidth,
  h       : window.innerHeight,
  spacing : 5
}

window.addEventListener('resize', function(){
  canvas.w = window.innerWidth
  canvas.h = window.innerHeight
})

let dots = [];
// DOT
class Dot {
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
  on(){
    noStroke();
    fill(color(255,255,255));
    ellipse(this.x, this.y,2,2);
  }
  shake(){
    this.x += random(-3,3);
    this.y += random(-3,3);
  }
  off(){
    noStroke();
    fill(color(0,0,0));
    ellipse(this.x, this.y,2,2);
  }
}

function setup() {
  // CANVAS
  createCanvas(canvas.w, canvas.h);
  background('black');
  // POPULATE
  for(let x = 0; x < canvas.w; x += canvas.spacing) {
    for(let y = 0; y < canvas.h; y += canvas.spacing ) {
      dots.push(new Dot(x,y));
    }
  }
  console.log(dots);
}

function draw() {
  // console.log(frameCount);
  dots.map(function(dot){
    dot.on();
    // dot.shake();
    // dot.off();
  });
  
}

