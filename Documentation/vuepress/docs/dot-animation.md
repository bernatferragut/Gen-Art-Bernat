# DOT ANIMATION

## Translation

In order to animate we need to decide on a parameter to work with. Here we will start to animate along X axis. The concept that will fuel the X coordinate movement is a variable that changes constantly.

In P5JS we have several variables that could be used to accomplish this. We will use **frameCount** which constantly changes to drive the X coordinate.

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
scrolling="no"
src="https://editor.p5js.org/embed/BkqUfLnum"></iframe>

```javascript
  animate() {
    this.x =  frameCount;
  }
```

## Rebound

We can then simply add another variable to X such as speed or velocity. This value will allows to control the amount the dot translates and the direction can be driven by a negative number.

In this example, we achieve a rebound effect by changing the velocity sign every time certain condition is reached  (here when the dot leaves the canvas). To achieve a rebound in all 4 direction, the effect could also be include in the Y coordinate.

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
scrolling="no"
src="https://editor.p5js.org/embed/B1hdy8num"></iframe>

```javascript
  animate() {
    this.x += this.vel;
    if (this.x + s / 2 > w || this.x - s / 2 < 1) {
      this.vel = this.vel * -1;
    }
  }
```


## Oscillation

### Modulo

The modulo operator allows us to define oscillations.

These oscillations or cycles will be limited by the variable number the modulo operator is applied to.
For instance, if we apply modulo 10 to an ever increasing number like **frameCount**,
it will return numbers between 0-9 and repeat this cycle over and over. More examples:

* console.log(frameCount % 2) => 0,1...cycle to infinity
* console.log(frameCount % 5) => 0,1,2,3,4...cycle to infinity
* console.log(frameCount % 10) => 0,1,2,3,4,5,6,7,8,9...cycle to infinity

By applying the modulo operator to **frameCount** which grows continuously thereby providing a source of change,
we get an ascending pattern.

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
scrolling="no"
src="https://editor.p5js.org/embed/rkGMf0pu7"></iframe>

```javascript
  animate() {
    // this.x = frameCount % w;
    this.x =  w/2-100 + frameCount % 200; // We limit the cycle to 200 units in x
    this.y = h/2 + frameCount % 10; // We limit the cycle to 10 units in y
  }
```

### sin(), cos()
The modulo technique is great however it can only easily produce loops that grow linearly and loop abruptly. An easy technique for making animations that appear to grow and shrink/recede smoothly is to calculate the **sin** of the **frameCount** variable.

The sin() function takes a single parameter and evaluates to a number between -1 and 1.

Most of the time, using the sin() function should be combined with two other values: the amplitude of the oscillation (i.e., how big the numbers get) and the frequency of the oscillation (i.e., how fast it goes).

Where x, y, and z are all numbers. Making **y** bigger will make the oscillation slower; making **z** bigger will make the oscillation larger. The x value is the oscillation’s center point, i.e., what value is the “resting place” of the oscillation.

[GO TO EDITOR](https://editor.p5js.org/bernatferragut/sketches/SJYUZayKX)

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
src="https://editor.p5js.org/embed/SJYUZayKX"></iframe>

```javascript
  oscillate() {
    this.x =  w/2 + sin(frameCount/20) * 100;
  }
```

Finally, by combining the sin() function with the cos() function we can achieve circular movements when using even amounts. With uneven amounts we can achieve beautiful elliptical forms and shapes.

[GO TO EDITOR](https://editor.p5js.org/bernatferragut/sketches/SJteE6JFQ)

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
src="https://editor.p5js.org/embed/SJteE6JFQ"></iframe>

```javascript
  oscillate() {
    this.x =  w/2 + sin(frameCount/20) * 100;
    this.y =  h/2 + cos(frameCount/20) * 50;
  }
```

## Random

Generative Art starts getting more interesting when we include a surprise factor. This computer generated surprise factor is called a random result.

The random() function with no value specified produces a result between 0-1. Or, we can choose to specify the minimum and maximum value we want and we'll get a value between those.

[GO TO EDITOR](https://editor.p5js.org/bernatferragut/sketches/rJGvEHxdQ)

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
src="https://editor.p5js.org/embed/rJGvEHxdQ"></iframe>

```javascript
  randomize(){
  	this.x += random(-3,3);
    this.y += random(-3,3);
  }
```
**MIT Licensed | © 2018-2019 Bernat Ferragut All Right Reserved | [bernatferragut.com](http://bernatferragut.com/)**







