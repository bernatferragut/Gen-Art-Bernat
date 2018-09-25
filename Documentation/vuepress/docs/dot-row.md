# DOT-ROW

## Multiplication
After understanding how the dot conception, creation and animation, now it's time to enter into the multiplication of the dot in the canvas. The multiplication it's a fundamental advantage of working with a computer allowing us to do things that by hand would be very difficult or would take a long time.

## Row / Column Multiplication

[GO TO EDITOR](https://editor.p5js.org/bernatferragut/sketches/B1Ck3jPKm)

<iframe
frameborder="0"
border="0" 
cellspacing="0"
style="
width: 732px; 
height: 250px; 
border: 4px solid #000000;
border-radius: 6px;
overflow: hidden;
position: relative;"
src="https://editor.p5js.org/embed/B1Ck3jPKm"></iframe>


```javascript
// Slider P for 'X_Position'

// canvas pararms
let w = 732;
let h = 250;
let s = 5;
// dot
let dot;
let spacing = 5;
// slider params
let slow = 50;
let amplitude = 100;

function setup() {
  // canvas
  createCanvas(w, h);
  // sliders
  s_Xpos = createSlider(0, 100, 50);
  s_Xpos.position(20, 5);
}

function draw() {
  background('black');
  // sliders control
  text("P", 5, 20);
  spacing = s_Xpos.value();
  // dot creation
  for (let x = spacing/2; x < w; x += spacing) {
    dot = new Dot(x, h/2, s)
    dot.on();
  }
}

// Dot object
class Dot {
  // class attributes
  constructor(x, y, s) {
    this.x = x | 0;
    this.y = y | 0;
    this.size = s | 2;
  }
  // class methods
  on() {
    noStroke();
    fill(color('white'));
    // fill(color(random(255),19));
    ellipse(this.x, this.y, this.size, this.size);
  }
}
```