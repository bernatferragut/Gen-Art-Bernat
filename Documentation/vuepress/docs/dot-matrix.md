# DOT-MATRIX

## Matrix creation
Now we understand how to create a row and how we can control each of the dot objects individually. We do it by creating a list of their spacial positions and then calling individually each of the functions to perform actions on them.

Creating a 2d Matrix of dots is the natural evloution. 

We will nest inside the first row loop another loop reperesanting our columns. That way we will have the control to create as many dots as we wish in our canvas and the power to control them individually.

Once the Matrix is defined, we will be able to recall the different methods we created in the past and any new one that can help us go in any new direction we want.

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
// Slider s for Size'

// canvas pararms
let w = 732;
let h = 250;
let s = 2;
// dot
let dot;
// slider params
let spacing = 21;
let dotList = [];

function setup() {
  // canvas
  createCanvas(w, h);
  // sliders
  s_size = createSlider(1, 50, 2);
  s_size.position(25, 7);

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
  text("s", 5, 20);
  s = s_size.value();

  // dotList mapping actions
  dotList.map((dot) => {
    dot.on(s);
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
  // here we pass the 'size' parameter to affect the method
  on(s) { 
    noStroke();
    fill(color('white'));
    ellipse(this.x, this.y, s, s);
  }
}
```

## Matrix experiment
* We apply the random method to the matrix.
* We play with size, x, y and transparency to create a special effect
* We add sliders and button to reset to default position

[GO TO EDITOR](https://editor.p5js.org/bernatferragut/sketches/B17BydaY7)

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
src="https://editor.p5js.org/embed/B17BydaY7"></iframe>

```javascript
// Slider s for Size'
// Slider rnd for Random'
// Slider alph for 'Alpha'
// Reset buttons to restart default params

// canvas pararms
let w = 732;
let h = 250;
let s = 2;
let gds;
// dot
let dot;
// slider params
let spacing = 21;
let dotList = [];
let rnd = 3;
let alph = 255;

// Matrix creation function
function matrix() {
  background('black');
  dotList = [];
  s_size.value(2);
  s_rnd.value(0);
  // dotList creation
  for (let x = spacing / 2; x < w; x += spacing) {
    for (let y = spacing / 2; y < h; y += spacing) {
      dotList.push(new Dot(x, y, s));
    }
  }
}

function setup() {
  // canvas
  createCanvas(w, h);
  // sliders
  s_size = createSlider(1, 50, 2);
  s_size.position(25, 7);
  s_rnd = createSlider(0, 10, 0);
  s_rnd.position(25, 25);
  s_alph = createSlider(0, 50, 0);
  s_alph.position(25, 45);
  // buttons
  b_reset = createButton('reset');
  b_reset.position(5, 225);
  matrix();
}

function draw() {
  background(0, alph);
  // sliders control
  text("s", 5, 20);
  s = s_size.value();
  text('rnd', 5, 40);
  rnd = s_rnd.value();
  text('a', 5, 60);
  alph = s_alph.value();
  // button
  b_reset.mousePressed(matrix);

  // dotList mapping actions
  dotList.map((dot) => {
    dot.on(s);
    dot.randomness(rnd);
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
  on(s) { // here we pass the size parameter to affect this method
    noStroke();
    fill(color('white'));

    ellipse(this.x, this.y, s, s);
  }
  randomness(rnd) {
    this.x += random(-rnd, rnd);
    this.y += random(-rnd, rnd);
  }
}
```