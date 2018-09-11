# GENERATIVE ART - PART.1

## FUNDAMENTALS

### 1. DOT ABSTRACTION: FOUNDATION

The creation and understanding of this class is the foundation of html canvas art. 

We define what it 'feels' to be a dot through a class. The creation of this abstract template is the foundation for creating pixel/dot art. Once this object is 'grasped' we can start experimenting and exploring the canvas.

> Concepction of the Dot Class
```javascript
// Dot object∏
class Dot {
  constructor(x,y){
    this.x = x | 0;
    this.y = y | 0;
    this.size = size | 2;
  }
  on(){
    noStroke();
    fill(color('white'))
    ellipse(this.x, this.y,size,size)
  }
}
```

### 2. DOT CREATION

Inside the dot class we create the functions on() and off() which will allow us to turn the dot.on() or dot.off() over the screen. This two functions will be the basics to turn on or off any created dot.

```javascript
// variables
let w = window.innerHeight;
let h = window.innerWidth;
let size = 2;
let spacing = 5;
let dot = {};

function setup() {
  createCanvas(w, h);
  background('black');
  dot = new Dot(w/2, h/2);
}

function draw() {
  dot.on();
}

// object
class Dot {
  constructor(x,y){
    this.x = x | 0;
    this.y = y | 0;
    this.size = size | 2;
  }
  on(){
    noStroke();
    fill(color('white'))
    ellipse(this.x, this.y,this.size,this.size)
  }
}
```

### 3. DOT ANIMATION

Through the move function we allow the dot to move in different positions.
We use **framCount** as a variable that changes over time and allows us to move in x,y coordinate the dot position.
This **framCount** variable is used with **frameRate**. The **frameRate** allow us to control the speed of the movie. By default works at 60 FPS but can be adjuste to our needs introducing such changes inside the setup() function.

```javascript
// variables
let w = window.innerHeight;
let h = window.innerWidth;
let size = 2;
let spacing = 5;
let dot = {};

function setup() {
  createCanvas(w, h);
  background('black');
  dot = new Dot(w/2, h/2);
}

function draw() {
  dot.on();
  dot.move();
}

// object
class Dot {
  constructor(x,y){
    this.x = x | 0;
    this.y = y | 0;
    this.size = size | 2;
  }
  on(){
    noStroke();
    fill(color('white'))
    ellipse(this.x, this.y,this.size,this.size)
  }
  
  move(){
  	this.x = framCount() / 100;
    this.y = frameCount() / 100;
  }
//   move(){
//   	this.x = random(-3,3)
//     this.y += random(-3,3)
//   }
}
```

### 3.1 HORIZONTAL AND VERTICAL TRANSLATIONS / ROTATIONS: ( +, -, *, /)

### 3.2 THE MODULUS OPERATOR

### 3.3 CIRCULAR FUNCTIONS: SIN(), COS()

### 3.4 LOGARYTHIMIC FUNCTIONS:  LOG(), LN()

### 4. SLIDERS CONTROL



