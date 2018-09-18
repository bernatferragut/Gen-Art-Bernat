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
  animate() {
    this.x += this.vel;
    if (this.x + s / 2 > w || this.x - s / 2 < 1) {
      this.vel = this.vel * -1;
    }
  }
```

### Animation: modulus

The modulus operator allow us to define uptrend cycles. These cycles will be limited by the number we apply the modulus operator to. As an example if we apply to an ever increasing number like frameCount modulus 10. It will return us numbers betwee 0-9 and repeating this cycle again and again to inifinity. More examples:

* frameCount % 2 => (0,1...cycle to infinity)
* frameCount % 5 => (0,1,2,3,4...cycle to inifnity)
* frameCount % 10 => (0,1,2,3,4,5,6,7,8,9...cycle to infinity)

So the modulus operaror give us an ascending pattern limited by the number we apply the modulus to. We must repeat that the number we are applying the modulus in this example is framCount which grows all the time.

[GO TO EDITOR](https://editor.p5js.org/bernatferragut/sketches/rkGMf0pu7)

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
src="https://editor.p5js.org/embed/rkGMf0pu7"></iframe>

```javascript
  animate() {
    // this.x = frameCount % w;
    this.x =  w/2-100 + frameCount % 200; // We limit the cycle to 200 units in x
    this.y = h/2 + frameCount % 10; // We limit the cycle to 10 units in y
  }
```

### Animation: sin(), cos()

### Animation: Log()

// WE COULD DIVIDE ANIMATION IN TWO BLOCKS
// ANIMATION1 : TRANSLATION + REBOUND ( CONDITIONALS )
// ANIMATION2 : MOD + SIN + LOG




