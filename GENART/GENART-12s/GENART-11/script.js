// variables
let w = window.innerWidth
let h = window.innerHeight;
let size = 2;
let spacing = 100;
let dots = [];

function setup() {
  frameRate(10);
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
  // background('black');
  dots.map((dot)=>{
    dot.on();
    // dot.shake();
    dot.phasing();
    // dot.circular();
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
    fill(color('white'))
    // fill(color(random(255),81))
    ellipse(this.x, this.y,size,size)
  }
  shake(){
    this.x += random(-3,3)
    this.y += random(-3,3)
  }
  circular() {
    this.y += sin(frameCount/2 )* 5;
    this.x += cos(frameCount/2 )* 5;
  }

  phasing() {
    this.y -= frameCount % 5-7;
    this.x += frameCount % 5;
  }
  phasing2() {
    this.y -= frameCount % 10;
    this.x += frameCount % 5;
  }
}