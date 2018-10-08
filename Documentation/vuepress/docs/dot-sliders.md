# SLIDERS

The sliders, allow us to better visualize changes over our canvas creations. Sliders give us the opportunity to interact and experiment which values can fit more our design criteria.

To be able to use the sliders we need to import the DOM P5JS library. 
Use these two libraries at the top of your HTML file:

```html
  <head>
  	<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.2/addons/p5.dom.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.2/p5.js"></script>
    <link rel="stylesheet" type="text/css" href="style.css">
  </head>
```
In the following peace of code we introduce the basics of sliders creation.
* Under the setup function create a slider object and define its parameters, position and style if any.
* Under the draw function we pick up the slider value and insert it to the canvas parameter we want to interact with.

## Slider structure
```javascript
setup()
    slider = createSlider(min, max, initial);
    slider.position(x,y);
    slider.style('width', '80px');
draw()
    var val = slider.value();
    background(val);
```

## Creation process
1. Define the global variables you want to use at the top of your script.
2. Include these variables inside the dot class with their default values.
3. Inside the setup() function define the sliders (createSlider, position and style).
4. Inside the update() function pass the values of the sliders to your global variables.
5. Now the slider value will drive yout global variable which affects the dot instance values.

* Example 1

[GO TO EDITOR](https://editor.p5js.org/bernatferragut/sketches/H1NNBMZFX)

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
src="https://editor.p5js.org/embed/H1NNBMZFX"></iframe>

```javascript
// Slider S for 'slowness'
// Slider A for 'amplitude'

// canvas pararms
let w = 732;
let h = 250;
// dot
let dot;
let s = 5;
// global slider params
let slow = 50;
let amplitude = 100;

function setup() {
  // canvas
  background('black');
  createCanvas(w, h);
  dot = new Dot(w/2, h / 2, s);
  // sliders
  s_slow = createSlider(0, 100, 50);
  s_slow.position(20,5);
  s_amplitude =  createSlider(0, 200, 100);
  s_amplitude.position(20,25);
}

function draw() {
  background('black');
  dot.on();
  dot.oscillate();
  // sliders controls
  text("S",5 ,20);
  slow = s_slow.value();
  text("A",5 ,40);
  amplitude = s_amplitude.value();
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
    fill(color('white'))
    // fill(color(random(255),19))
    ellipse(this.x, this.y, this.size, this.size)
  }
  oscillate() {
    this.x =  w/2 + sin(frameCount/slow) * amplitude;
  }
}
```
## Play and learn
Sliders will help us to play with values. 

Through this play, we can see visually how numbers affect the movement, position, size and color of the different dots we have created. 

It's an interactive way of learning to design through play and feel.

* Example 1

```diff
  dot = new Dot(w/2+(sin(frameCount/(i+slow))*(i+amplitude)),h/5+(i*35),s);
```
In this line of code we create a new dot and pass as x value a sin() function driven by the frameCount and which speed is controlled by the variable slow affected by the incremented i value. Also affects the amplitude.
The y value is displaced by 35 units and the size remains constant.

[GO TO EDITOR](https://editor.p5js.org/bernatferragut/sketches/BJ2uv8SFX)

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
src="https://editor.p5js.org/embed/BJ2uv8SFX"></iframe>


```javascript
// Slider S for 'slowness'
// Slider A for 'amplitude'
// Slider sz for 'size'

// canvas pararms
let w = 732;
let h = 250;
let s = 5;
// dot
let dot;
// slider params
let slow = 50;
let amplitude = 100;

function setup() {
  // canvas
  createCanvas(w, h);
  // sliders
  s_slow = createSlider(0, 100, 50);
  s_slow.position(20, 5);
  s_amplitude = createSlider(0, 200, 100);
  s_amplitude.position(20, 25);
  s_size = createSlider(0, 10, 5);
  s_size.position(20, 45);
}

function draw() {
  background('black');
  // sliders control
  text("S", 5, 20);
  slow = s_slow.value();
  text("A", 5, 40);
  amplitude = s_amplitude.value();
  text("sz", 5, 60);
  s = s_size.value();
  // dot creation
  for (let i = 0; i < 5; i++) {
    dot = new Dot(w / 2 + (sin(frameCount / (i + slow)) * (i + amplitude)), // x value
      h / 5 + (i * 35), //  y value
      s); // s value
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
  oscillate() {
    this.x = w / 2 + sin(frameCount / slow) * amplitude;
  }
}
```







