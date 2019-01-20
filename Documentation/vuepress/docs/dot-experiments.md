# EXPERIMENTS

This examples have been taken from experiments I have been doing in the last year over online platforms like codepen and glitch. Take the time to read and understand the code, enjoy the beauty of generative art.

[CODEPEN EXAMPLES](https://codepen.io/collection/DJKJgP/)

[GLITCH EXAMPLES](https://glitch.com/@bernatferragut)

In the following experiments I have followed some design principles for simplicity:
* Only the dot object
* Only black and white colors
* Only transparence as accent

## Experiment-1
* Simple example of dots in circular motion.
* We can control the radius and speed of the dots with 2 sliders.
* Open the possibility to experiment with multiple orbital trajectories.

[GO TO EDITOR](https://editor.p5js.org/bernatferragut/sketches/BJAR_Z_5X)

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
scrolling="no"
src="https://editor.p5js.org/embed/BJAR_Z_5X"></iframe>

```javascript
let w = 732;
let h = 250;
let s = 2;
let dot;
let dotList = [];
let radius = 100;
let number = 6
let speed = 20;

function setup() {
  // canvas
  background('black');
  createCanvas(w, h);
  // sliders
  s_radius = createSlider(1,120, 80);
  s_radius.position(15,10);
  s_speed = createSlider(1,100,20);
  s_speed.position(15,30);
  // dots to the list
  for(let i=0; i<number; i++){
    dotList.push( new Dot(w/2, h / 2, s));
  }
}

function draw() {
  //canvas
  background(0,30);
  // sliders
  fill(255);
  text('r', 5,23);
  radius = s_radius.value();
  text('s', 5,43);
  speed = s_speed.value();
	for(let i=0; i<dotList.length; i++  ){
    // radius = random(20,50);
    dotList[i].on();
  	dotList[i].circle(i);
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
    // fill(255,random(255))
    ellipse(this.x, this.y, this.size, this.size)
    
  }
  circle(i) {
    this.x =  w/2 + sin(frameCount/speed+i) * radius;
    this.y =  h/2 + cos(frameCount/speed+i) * radius;
  }
}
```

## Experiment-2
* Simple example of a particle randomly moving and rebounding the edges of the canvas.
* We have added velocity on **x** and **y** plus some gravity adding real physics to the movement.

[GO TO EDITOR](https://editor.p5js.org/bernatferragut/sketches/H1HwpYvq7)

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
scrolling="no"
src="https://editor.p5js.org/embed/H1HwpYvq7"></iframe>

```javascript
// canvas vars
let w = 732;
let h = 250;
let s = 1;
// dot vars
let dot;
let alpha = 0;
let factor = 0;

function setup() {
  // canvas
  createCanvas(w, h);
  // sliders
  s_alpha = createSlider(0, 50, 10);
  s_alpha.position(15, 10);
  s_factor = createSlider(0, 10, 2);
  s_factor.position(15, 30);
  // dot creation
  dot = new Dot(100, h / 2, s);
}

function draw() {
  // canvas
  let alpha = s_alpha.value();
  background(0, alpha);
  // sliders
  fill(255);
  text('a', 5, 22);
  text('f', 5, 44);
  factor = s_factor.value();
  console.log(factor);
  // animation of each dot of the list
  dot.on();
  dot.oscillate();
  dot.move();
}
// Dot object
class Dot {
  // class attributes
  constructor(x, y, s) {
    this.x = x | 0;
    this.y = y | 0;
    this.size = s | 2;
    this.velX = 0.1;
    this.velY = 0.1;
    this.gravity = random(0.1);
  }
  // class methods
  on() {
    noStroke();
    fill(255)
    // fill(color(random(255,19)))
    ellipse(this.x, this.y, this.size, this.size)
  }
  oscillate() {
    this.x += sin(frameCount / 50 * factor - 1);
    this.y += cos(frameCount / 50 * factor);
  }
  move() {
    this.x += this.velX;
    this.velX += this.gravity;
    this.y += this.velY;
    this.velY += this.gravity;
    if (this.x + this.size < 0 || this.x > w - this.size) {
      this.velX = -this.velX;
    }
    if (this.y + this.size < 0 || this.y > h - this.size) {
      this.velY = -this.velY;
    }
  }
}
```
## Experiment-2b
* Same example with several particles moving and rebounding on the edges of the canvas.

[GO TO EDITOR](https://editor.p5js.org/bernatferragut/sketches/ByeBwqW5Q)

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
scrolling="no"
src="https://editor.p5js.org/embed/ByeBwqW5Q"></iframe>

```javascript
// canvas vars
let w = 732;
let h = 250;
let s = 1;
// dot vars
let dot;
let alpha = 0;
let factor = 0;
let n = 21;
let dotList = [];

function setup() {
  // canvas
  createCanvas(w, h);
  // sliders
  s_alpha = createSlider(0, 50, 10);
  s_alpha.position(15, 10);
  s_factor = createSlider(0, 10, 2);
  s_factor.position(15, 30); 
  // dot creation
  for(let i=0; i < n; i++) {
    dotList.push(dot = new Dot(random(w), random(h), s));
  }
	// console.log(dotList)
}

function draw() {
  // canvas
  let alpha = s_alpha.value();
  background(0, alpha);
  // sliders
  fill(255);
  text('a', 5, 22);
  text('f', 5, 44);
  factor = s_factor.value();
  // animation of each dot of the list
  dotList.map((dot) => {
    dot.on();
  	dot.oscillate();
    dot.move();
  });

}
// Dot object
class Dot {
  // class attributes
  constructor(x, y, s) {
    this.x = x | 0;
    this.y = y | 0;
    this.size = s | 2;
    this.velX = random(-0.1,0.1);
    this.velY = random(-0.1,0.1);
    this.gravity = random(-0.1,0.1);
  }
  // class methods
  on() {
    noStroke();
    fill(255)
    // fill(color(random(255,19)))
    ellipse(this.x, this.y, this.size, this.size)
  }
  oscillate() {
    this.x += sin(frameCount / 100 * factor - 1);
    this.y += cos(frameCount / 100 * factor);
  }
  move() {
    this.x += this.velX;
    this.velX += this.gravity;
    this.y += this.velY;
    this.velY += this.gravity;
    if (this.x + this.size < 0 || this.x > w - this.size) {
      this.velX = -this.velX;
    }
    if (this.y + this.size < 0 || this.y > h - this.size) {
      this.velY = -this.velY;
    }
  }
}
```

## Experiment-3

* Simple vertical particle system with one parameter to add randomness.
* A sabre of light to have fun with!

[GO TO EDITOR](https://editor.p5js.org/bernatferragut/sketches/r1RDi5PqX)

<iframe
frameborder="0"
border="0" 
cellspacing="0"
style="
width: 730px; 
height: 250px; 
border: 4px solid #000000;
border-radius: 6px;
overflow: hidden;
position: relative;"
scrolling="no"
src="https://editor.p5js.org/embed/r1RDi5PqX"></iframe>

```javascript
// canvas vars
let w = 734;
let h = 250;
let s = 1;
// dot vars
let dot;
let alpha = 0;
let factor = 0;

function setup() {
  // canvas
  createCanvas(w, h);
  // sliders
  s_alpha = createSlider(0, 50, 10);
  s_alpha.position(15, 10);
  s_factor = createSlider(0, 10, 2);
  s_factor.position(15, 30);
  // dot creation
  dot = new Dot(100, h / 2, s);
}

function draw() {
  // canvas
  let alpha = s_alpha.value();
  background(0, alpha);
  // sliders
  fill(255);
  text('a', 5, 22);
  text('f', 5, 44);
  factor = s_factor.value();
  console.log(factor);
  // animation of each dot of the list
  dot.on();
  dot.oscillate();
  dot.move();
}
// Dot object
class Dot {
  // class attributes
  constructor(x, y, s) {
    this.x = x | 0;
    this.y = y | 0;
    this.size = s | 2;
    this.velX = 0.1;
    this.velY = 0.1;
    this.gravity = random(0.1);
  }
  // class methods
  on() {
    noStroke();
    fill(255)
    // fill(color(random(255,19)))
    ellipse(this.x, this.y, this.size, this.size)
  }
  oscillate() {
    this.x += sin(frameCount / 50 * factor - 1);
    this.y += cos(frameCount / 50 * factor);
  }
  move() {
    this.x += this.velX;
    this.velX += this.gravity;
    this.y += this.velY;
    this.velY += this.gravity;
    if (this.x + this.size < 0 || this.x > w - this.size) {
      this.velX = -this.velX;
    }
    if (this.y + this.size < 0 || this.y > h - this.size) {
      this.velY = -this.velY;
    }
  }
}
```

## Your experiments
* From now on you are on your own. May the force be with you...
* [P5JS online editor](https://editor.p5js.org/)

**MIT Licensed | © 2018-2019 Bernat Ferragut All Right Reserved | [bernatferragut.com](http://bernatferragut.com/)**
