# DOT-MATRIX

## Matrix creation
Once we understand the conception of a row and how we can control each of the dots individually by creating a list of their spacial positions and then calling individually each of the functions, now it's time to go full canvas.

Creating a 2d Matrix of dots is the natural evloution. Now we will nest inside the first row loop another loop reperesanting our columns. Finnally we will have the control of creating as many dots as pixels have our canvas if we wanted and control of each individually.

Once the Matriz is defined, we will be able to recall the different methods we created in the past and any new one that can help us go in any new direction we want. This is the power of the Matrix.

[GO TO EDITOR](https://editor.p5js.org/bernatferragut/sketches/rJVqwSqFQ)

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
src="https://editor.p5js.org/embed/rJVqwSqFQ"></iframe>


```javascript
// Slider x for 'X_Position'

// canvas pararms
let w = 732;
let h = 250;
let s = 2;
// dot
let dot;
// slider params
let spacing = 25;
let dotList = [];

function setup() {
  // canvas
  createCanvas(w, h);
  // sliders
  s_Xpos = createSlider(5, 100, 50);
  s_Xpos.position(25, 7);
  // dotList creation
  for (let x = spacing / 2; x < w; x += spacing) {
    for (let y = spacing / 2; y < h; y += spacing) {
      dotList.push(new Dot(x, y, s));
    }
  }
}

function draw() {
  background('black');
  // sliders control
  text("x", 5, 20);
  spacing = s_Xpos.value();

  // // dotList creation
  // for (let x = spacing/2; x < w; x += spacing) {
  // for(let y = spacing/2; y < h; y += spacing){
  // 		dotList.push( new Dot(x, y, s));
  // 	}
  // }

  // dotList mapping actions
  dotList.map((dot) => {
    dot.on();
  })
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
    ellipse(this.x, this.y, this.size, this.size);
  }
}
```