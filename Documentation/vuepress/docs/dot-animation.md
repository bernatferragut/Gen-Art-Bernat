# DOT ANIMATION

### Animation: translation

To animate we need to find an argument to animate, in this case we will start to animate the coordiante X. The concept that will fuel the X coordinate movement will be a variable that changes constantly. 

In P5JS we have several variables that could be used for this role, in this case we will use frameCount. FrameCount changes constantly and drives X coordinate.

[GO TO EDITOR](https://editor.p5js.org/bernatferragut/sketches/BkqUfLnum)

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
src="https://editor.p5js.org/embed/BkqUfLnum"></iframe>

```javascript
let w = 732;
let h = 250;
let s = 5;
let dot;

function setup() {
  frameRate(60); // Attempt to refresh at starting FPS
  background(51);
  createCanvas(w, h);
  dot = new Dot(0, h / 2, s);
}

function draw() {
  background('black');
  dot.on();
  dot.animate();
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
    ellipse(this.x, this.y, this.size, this.size)
  }
  off() {
    noStroke();
    fill(color('black'))
    ellipse(this.x, this.y, this.size, this.size)
  }
  blink() {
    this.off();
    setTimeout(() => this.on(), 500);
  }
  animate() {
    this.x =  frameCount;;
  }
}
```

### Animation: rebounding inside the canvas

We could also simply add to x another value like speed or velocity. This variable will be able to control the amount we translate and the direction when multiplied by a negative number. 

In this example we achieve a rebound effect by changing the velocity sign everytime we reach some conditions, in this case when we go further away than the width of the canvas or less than 0. The effect could be also include the y coordinate to achieve a rebound in all dircetions.

[GO TO EDITOR](https://editor.p5js.org/bernatferragut/sketches/B1hdy8num)

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
src="https://editor.p5js.org/embed/B1hdy8num"></iframe>

```javascript
let w = 732;
let h = 250;
let s = 5;
let dot;

function setup() {
  frameRate(60); // Attempt to refresh at starting FPS
  background(51);
  createCanvas(w, h);
  dot = new Dot(w / 2, h / 2, s);
}

function draw() {
  background('black');
  dot.on();
  dot.animate();
}

// Dot object
class Dot {
  // class attributes
  constructor(x, y, s) {
    this.x = x | 0;
    this.y = y | 0;
    this.size = s | 2;
    this.vel = 3;
  }
  // class methods
  on() {
    noStroke();
    fill(color('white'))
    ellipse(this.x, this.y, this.size, this.size)
  }
  off() {
    noStroke();
    fill(color('black'))
    ellipse(this.x, this.y, this.size, this.size)
  }
  blink() {
    this.off();
    setTimeout(() => this.on(), 500);
  }
  animate() {
    this.x += this.vel;
    if (this.x + s / 2 > w || this.x - s / 2 < 1) {
      this.vel = this.vel * -1;
    }
  }
}
```



> Creating a Rebound function

### Animation: frameRate() 

### Animation: modulus

### Animation: sin(), cos()

### Animation: Log()


