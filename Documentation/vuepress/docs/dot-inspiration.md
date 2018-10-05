# INSPIRATION

This examples have been taken from experiments I have been doing in the last year over online platforms like codepen and glitch. Take the time to read and unerstant the code and enjoy the beauty of generative art

In all the examples I have followed the following design principles for simplicity:
* Only the dot object
* Only Black and White Colors
* Only transparence as accent

## Inspiration-1
* a-creation

[GO TO EDITOR](https://editor.p5js.org/bernatferragut/sketches/ByeBwqW5Q)

<iframe
frameborder="0"
border="0" 
cellspacing="0"
style="
width: 732px; 
height: 732px; 
border: 4px solid #000000;
border-radius: 6px;
overflow: hidden;
position: relative;"
src="https://editor.p5js.org/embed/ByeBwqW5Q"></iframe>

```javascript
// VARS

// COLORS
let grises = [0,125,255];// grises[int(random(3))];
let blanco = 255;

function setup() {
  // CANVAS
  createCanvas(732, 250);
}

function draw() {
  background(0);
  let dot = new Dot(width/2, height/2, 20, blanco);
  dot.behaviour1();
}

class Dot {
  constructor(x,y,s,c,r) {
    this.x = x | 0  ;
    this.y = y | 0;
    this.s = s | 2;
    this.c = c | 255;
    this.radius = 10;
    this.radians =  random(TWO_PI); // random angle spawner (0-360);
    this.velocity = 0.01; // how fast we change
    this.distanceFromCenter = sin(int(random(250, 300))) * 300;
  }
  // Methods
  on(lastPoint) {
    fill(255);
    ellipse(this.x, this.y, this.s, this.s);
    arc(this.x, this.y, this.s, this.s, 0, TWO_PI);
  }
  behaviour1() {
    this.radians += random(this.velocity);
    // We store the last particle positon
		const lastPoint = { x: this.x, y: this.y };
		// Draw > pass lastPoint
		this.on(lastPoint);
    
  }behaviour2() {
    this.x += cos(this.radians) * this.distanceFromCenter;
		this.y += sin(this.radians) * this.distanceFromCenter;
  }
}
```


## Inspiration-2
* big-o

## Inspiration-3
* on-fire