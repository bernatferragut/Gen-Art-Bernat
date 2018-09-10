# Creating Generative Art - Basics

## General concepts
1. Create the Canvas: size
2. Create the Dot: the foundational unit
3. Undersand P5js two main functions: setup() & draw()

### 1. Single Dot: Art's foundation
The creation and understanding of this class is the foundation of html canvas art. We define what it 'feels' to be a dot through a class. The creation of this abstract template is the foundation for creating art. Once this object is 'grasped' we can start experimenting and exploring the canvas.

> Concepction of the Dot Class
```javascript
// Dot object∏
class Dot {
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
  on(){
    noStroke();
    fill(color('white'))
    ellipse(this.x, this.y,size,size)
  }
}
```

> Creation of a physical Dot
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
    this.x = x;
    this.y = y;
  }
  on(){
    noStroke();
    fill(color('white'))
    ellipse(this.x, this.y,size,size)
  }
}
```

### 2. Single Dot Animation

Here we crete a function which allows us to move the dot in different positions.
Using **framCount** as a variable that can change thing over time.

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
    this.x = x;
    this.y = y;
  }
  on(){
    noStroke();
    fill(color('white'))
    ellipse(this.x, this.y,size,size)
  }
  move(){
  	this.x += random(-3,3)
    this.y += random(-3,3)
  }
}
```

### 3. Single row generation

Here we create a list of single row dots with a for loop. Once the list of dots is created we experiment with random walks and trasparency. We start feeling the power of computation instantly!

```javascript
// variables
let w = window.innerHeight;
let h = window.innerWidth;
let size = 2;
let spacing = 10;
let dots = [];

function setup() {
  createCanvas(w, h);
  background('black');
  // dot matrix generation
  for(let x = spacing/2; x < w; x += spacing){
    dots.push(new Dot(x, h/2));
  }
}

console.log(dots)

function draw() {
	dots.map((dot)=>{
    dot.on();
    // dot.move();
  })
}

// object
class Dot {
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
  on(){
    noStroke();
    fill(color(255,255,255))
    // fill(color(random(255),21))
    ellipse(this.x, this.y,size,size)
  }
  move(){
  	this.x += random(-3,3)
    this.y += random(-3,3)
  }

```

### 4. Single row Animation

Here we create a list of single row dots with a for loop. Once the list of dots is created we experiment with random walks and trasparency. We start feeling the power of computation instantly!

```javascript
// variables
let w = window.innerHeight;
let h = window.innerWidth;
let size = 2;
let spacing = 10;
let dots = [];

function setup() {
  createCanvas(w, h);
  background('black');
  // dot matrix generation
  for(let x = spacing/2; x < w; x += spacing){
    dots.push(new Dot(x, h/2));
  }
}

console.log(dots)

function draw() {
	dots.map((dot)=>{
    dot.on();
    dot.move();
  })
}

// object
class Dot {
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
  on(){
    noStroke();
    // fill(color(255,255,255))
    fill(color(random(255),21))
    ellipse(this.x, this.y,size,size)
  }
  move(){
  	this.x += random(-3,3)
    this.y += random(-3,3)
  }
```

### 5. Full Matrix generation

Here we create a list of single row dots with a for loop. Once the list of dots is created we experiment with random walks and trasparency. We start feeling the power of computation instantly!

```javascript
// variables
let w = window.innerWidth;
let h = window.innerHeight;
let size = 2;
let spacing = 10;
let dots = [];

function setup() {
  createCanvas(w, h);
  background('black');
  // dot matrix generation
  for(let x = spacing/2; x < w; x += spacing){
    for(let y = spacing/2; y < h; y += spacing) {
      dots.push(new Dot(x, y));
    }
  }
}

console.log(dots)

function draw() {
  dots.map((dot)=>{
    dot.on();
    // dot.move();
  })
}

// object
class Dot {
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
  on(){
    noStroke();
    fill(color('white'))
    // fill(color(random(255),21))
    ellipse(this.x, this.y,size,size)
  }
  move(){
    this.x += random(-3,3)
    this.y += random(-3,3)
  }
}
```

### 5. Full Matrix animation

Here we create a list of single row dots with a for loop. Once the list of dots is created we experiment with random walks and trasparency. We start feeling the power of computation instantly!

```javascript
}// variables
let w = window.innerWidth;
let h = window.innerHeight;
let size = 2;
let spacing = 10;
let dots = [];

function setup() {
  createCanvas(w, h);
  background('black');
  // dot matrix generation
  for(let x = spacing/2; x < w; x += spacing){
    for(let y = spacing/2; y < h; y += spacing) {
      dots.push(new Dot(x, y));
    }
  }
}

console.log(dots)

function draw() {
  dots.map((dot)=>{
    dot.on();
    dot.move();
  })
}

// object
class Dot {
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
  on(){
    noStroke();
    fill(color('white'))
    // fill(color(random(255),21))
    ellipse(this.x, this.y,size,size)
  }
  move(){
    this.x += random(-3,3)
    this.y += random(-3,3)
  }
}
```

#### Modulo %: what it is and why we use it.

We use modulo to create simple loops between 0 and the number you set the modulo to.
An example would be to modulo a number that constantly increases like frameCount and modulo another number that would top it like 10. The result would be countless series of number going from 0-9.
EXP-1
  circular() {
    this.y -= frameCount % 5-7;
    this.x += frameCount % 5;
  }
EXP-2
  circular() {
    this.y -= frameCount % 10-5.5;
    this.x += frameCount % 10;
  }

#### Sin(): what it is and why we use it.

We use sin when we need to smooth animations between -1 and 1.
An exampl ewould be to make the sin(framRate) that would return us countless numbers between -1 and 1. 

**x + (sin(frameCount / y) * z)**

… where x, y and z are all numbers. Making y bigger will make the oscillation slower; making z bigger will make the oscillation larger. The x value is the oscillation’s center point, i.e., what value is the “resting place” of the oscillation.

### Combine in with cos() to obtain circular movements

EXP-1
  circular() {
    this.y += sin(frameCount/2) * 5;
    // this.x += frameCount % 5 * 3;
  }

  EXP-2
    circular() {
    this.y += sin(frameCount/2 )* 5;
    this.x += cos(frameCount/2 )* 5;
  }

  
```javascript
  // variables
let w = window.innerWidth
let h = window.innerHeight;
let size = 2;
let spacing = ;
let dots = [];

function setup() {
  frameRate(10);
  createCanvas(w, h);
  background('black');
  // dot matrix generation
  for(let x = spacing/2; x < w; x += spacing){
    for(let y = spacing/2; y < h; y += spacing) {
      dots.push(new Dot(x, y));
    }
  }
}

console.log(dots)

function draw() {
  // background('black');
  dots.map((dot)=>{
    dot.on();
    // dot.shake();
    dot.circular();
  })
}

// object
class Dot {
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
  on(){
    noStroke();
    // fill(color('white'))
    fill(color(random(255),81))
    ellipse(this.x, this.y,size,size)
  }
  shake(){
    this.x += random(-3,3)
    this.y += random(-3,3)
  }
  circular() {
    this.y += sin(frameCount/2 )* 5;
    this.x += cos(frameCount/2 )* 5;
  }
}
```
