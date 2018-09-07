// JS with P5JS
  let w       = window.innerWidth
  let h       = window.innerHeight
  let spacing = 20
  let dots = []

window.addEventListener('resize', function(){
  w = window.innerWidth
  h = window.innerHeight
})

// DOT
class Dot {
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
  on(){
    noStroke();
    fill(color('white'))
    ellipse(this.x, this.y,2,2)
  }
  shake(){
    this.x += random(-3,3)
    this.y += random(-3,3)
  }
  off(){
    noStroke()
    fill(color('black'))
    ellipse(this.x, this.y,2,2)
  }
}

// 1. SETUP MAIN FUNCTION
function setup() {
  frameRate(60) // 1 FPS
  // CANVAS
  createCanvas(w, h)
  background('black')
  // POPULATE
  for(let x = spacing/2; x < w; x += spacing) {
    for(let y = spacing/2; y < h; y += spacing ) {
      dots.push(new Dot(x,y))
    }
  }
  console.log(dots);
}
// 2. DRAW MAIN FUNCTION
function draw() {
  dots.map((dot)=>{
    dot.on()
    dot.shake()
    dot.off()
  })
}