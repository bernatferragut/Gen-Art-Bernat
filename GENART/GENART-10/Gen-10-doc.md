# Gen-10-doc.md

# Creating Generative Art - Basics

## General concepts
1. Create a Canvas with desired size
2. Create the minimal unit that art is based on: the Dot
3. Undersand the two main functions we will use

### 1. Creating a Dot

The creation and understanding of this class is the foundation for all generative art. We need to define what it 'feels' to be a dot. The creation of this abstract template is the foundation for creating art. Once this object is grasped we can start the real experimentation.

> Cretion of the Dot Class

``javascript
// Dot object
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

> Creation of the first general Skecth

// variables
let w = window.innerHeight,
		h = window.innerWidth,
    size = 2,
    spacing = 5;

function setup() {
  createCanvas(w, h);
}

function draw() {
  let dot = new Dot(w/2, h/2);
  background('black');
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


### 1.1 Animating the Dot
### 2. Creating a Dot Matrix
### 2.2 Animating the Matrix

