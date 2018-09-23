# DOT CREATION

## Dot object instantiation

Inside the dot class we create the methods or functions on() and off() which will allow us to turn the dot ON/OFF at will over the screen. This way we can consider that the dot is like a dot of light, like a light bulb that we can control and switch it ON/OFF to produce different kind of effects.

[GO TO EDITOR](https://editor.p5js.org/bernatferragut/sketches/HJXaAYdOX)

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
src="https://editor.p5js.org/embed/HJXaAYdOX"></iframe>

```javascript
// 1. creating a dot: instantiation without passing values
let dot  = new Dot();
dot.on();

// 2. creating a dot: instantiation passing values
let dot  = new Dot(w/2, h/2, 2, 2);
dot.on()
```

## P5JS main functions

In P5JS everything happens inside two main functions:

> setup()
Anthing that we define here will be called only one time.

>  update()
Anything we define here will be called all the time.

## Timing

By default in P5JS update() function the time defined by Frame Per Seconds (FPS) is of 60FPS.

If we want to change the frame rate or the number of repetitions in the loop we must define in the setup function the frameRate. This is the framerate will be called inside the update() function.

That way we can control de speed of our animation from 60FPS to just 1 FPS as an example.

```javascript
// Define the desired FPS

setup() {
    // by default FPS = 60
    frameRate = 1; 
    // Define attributes
}

update() {
    // this code will be called just one time each second
}

```
[GO TO EDITOR](https://editor.p5js.org/bernatferragut/sketches/B1rYAKS_m)

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
src="https://editor.p5js.org/embed/B1rYAKS_m"></iframe>

In the example we call everysecond a function which set time out dot.on() every half second
(500 ms) giving the desired blinking effect.

```javascript
let w = 732;
let h = 250;
let s = 5;
let dot;

function setup() {
  frameRate(1); // Attempt to refresh at starting FPS
	background(51);
	createCanvas(w, h);
	dot = new Dot(w/2, h/2, s);
}

function draw() {
  background('black');
  dot.blink();
}

// Dot object
class Dot {
// class attributes
  constructor(x,y,s){
    this.x = x | 0;
    this.y = y | 0;
    this.size = s | 2;
  }
// class methods
  on(){
    noStroke();
    fill(color('white'))
    ellipse(this.x, this.y,this.size,this.size)
  }
  off(){
    noStroke();
    fill(color('black'))
    ellipse(this.x, this.y,this.size,this.size)
  }
  blink(){
  	this.off();
  	setTimeout(() => this.on(), 500);
  }
}
```



