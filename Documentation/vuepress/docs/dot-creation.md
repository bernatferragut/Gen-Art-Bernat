# DOT CREATION

## Dot object instantiation

An instantiation is the action of making a copy based on a class. We can think to the class as the model or blueprint and the instantiation as the copymade with that blueprint.

Inside the dot class, we create the methods on() and off() which allow us to turn the dot ON/OFF. With this, we can consider the dot like a dot of light or a light bulb that we can switch ON/OFF to produce different effects.

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
scrolling="no"
src="https://editor.p5js.org/embed/HJXaAYdOX"></iframe>

```javascript
// 1. creating a dot: instantiation without passing values
let dot  = new Dot();
dot.on();

// 2. creating a dot: these values put the dot at the center of the canvas by default
let dot  = new Dot(w/2, h/2, 2, 2);
dot.on()
```

## P5JS main functions

In P5JS everything happens inside two main functions:

> setup()
Anything that we define here will be only called once. This function is called always at the start.

>  update()
Anything we define here will be called as long as the program runs. This function is called always after the seup function. It's called all the time, it's the main loop where all the animations will happen.

```javascript

setup() {
    // Define attributes
}

update() {
    // this code will be called just one time each second
}

```

# Blinking
Inside the dot class we will create the methods on() and off() that will allow us to turn the dot ON/OFF at will. This way we can consider the dot like a single light bulb that we can control with an ON/OFF switch to produce different effects. 

We start with the dot off() and with the setTimeout function we turn it on() every 500 ms (0.5sec) to produce the blinking effect.

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
scrolling="no"
src="https://editor.p5js.org/embed/B1rYAKS_m"></iframe>

In the example we call every second a function which set time out dot.on() every half second
(500 ms) giving the desired blinking effect.

```javascript
let w = 732; // width
let h = 250; // height
let s = 5; // size
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


**MIT Licensed | © 2018-2019 Bernat Ferragut All Right Reserved | [bernatferragut.com](http://bernatferragut.com/)**




