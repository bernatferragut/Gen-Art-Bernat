// variables
let w = window.innerWidth;
let h = window.innerHeight;
let size = 2;
let spacing = 10;
let dots = [];

function setup() {
  createCanvas(w, h);
  background('black');
  // dot matrix generation
  for(let x = spacing/2; x < w; x += spacing){
    for(let y = spacing/2; y < h; y += spacing) {
      dots.push(new Dot(x, y));
    }
  }
}

console.log(dots)

function draw() {
  dots.map((dot)=>{
    dot.on();
    dot.move();
  })
}

// object
class Dot {
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
  on(){
    noStroke();
    // fill(color('white'))
    fill(color(random(255),21))
    ellipse(this.x, this.y,size,size)
  }
  move(){
    this.x += random(-3,3)
    this.y += random(-3,3)
  }
}