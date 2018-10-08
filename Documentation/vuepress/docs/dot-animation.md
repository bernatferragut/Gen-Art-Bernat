# DOT ANIMATION

## Translation

To animate we need to find an argument to animate, in this case we will start to animate the coordiante X. The concept that will fuel the X coordinate movement will be a variable that changes constantly. 

In P5JS we have several variables that could be used for this role, in this case we will use **frameCount**. FrameCount changes constantly and drives X coordinate.

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
  animate() {
    this.x =  frameCount;
  }
```

## Rebound

We could also simply add to x another value like speed or velocity. This variable will be able to control the amount we translate and the direction would be driven by a negative number. 

In this example we achieve a rebound effect by changing the velocity sign everytime we reach some conditions, in this case when we go further away than the width of the canvas or less than 0. The effect could be also include the Y coordinate to achieve a rebound in all ditections.

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

## Oscillation
### Modulo

The modulus operator allow us to define oscillations. 

These oscillations or cycles will be limited by the number we apply the modulus operator to. As an example if we apply to an ever increasing number like **frameCount** modulo 10. It will return us numbers betwee 0-9 and repeating this cycle again and again to inifinity. More examples:

* console.log(frameCount % 2)   => 0,1...cycle to infinity
* console.log(frameCount % 5)   => 0,1,2,3,4...cycle to inifnity
* console.log(frameCount % 10)  => 0,1,2,3,4,5,6,7,8,9...cycle to infinity

So the modulo operaror give us an ascending pattern limited by the number we apply the modulo to. We must repeat that the number we are applying the modulo in this example is **framCount** which grows all the time as a source of change.

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

> VORTEX MATH

**Vortex Math** is a type of Math called circular Math. It exists only between the number 0-9. 
In this case the frameCount % 10 => 0-9 would be at the heart of Vortex Math. So keep in mind this modulo as something very important to experiment and discover new interesting patterns.


### sin(), cos()
The modulo technique is great, but it can only easily produce loops that grow linearly and loop abruptly.An easy technique for making animations that appear to grow and recede smoothly is to calculate the **sin** of the **frameCount** variable.

The sin() function takes a single parameter, and evaluates to a number from -1 to 1. 

Most of the time we use the sin() function, you should use it in combination with two other values, which determine the amplitude of the oscillation (i.e., how big the numbers get) and the frequency of the oscillation (i.e., how fast it goes).

```diff
x + (sin(frameCount / y) * z)
```

where x, y and z are all numbers. Making **y** bigger will make the oscillation slower; making **z** bigger will make the oscillation larger. The x value is the oscillation’s center point, i.e., what value is the “resting place” of the oscillation.

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
src="https://editor.p5js.org/embed/SJYUZayKX"></iframe>

```javascript
  oscillate() {
    this.x =  w/2 + sin(frameCount/20) * 100;
  }
```

Finnally if we combine the power of the sin() function with the power of the cos() function we can achieve circular movements with even amounts. With uneven amounts we can achieve beautiful elliptical forms and shapes. Circles are the most perfect form in nature, so here we are touching something ... divine.

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
src="https://editor.p5js.org/embed/SJteE6JFQ"></iframe>

```javascript
  oscillate() {
    this.x =  w/2 + sin(frameCount/20) * 100;
    this.y =  h/2 + cos(frameCount/20) * 50;
  }
```

## Random

Generative Art starts getting more interesting when we add a surprise factor. This computer generated surprise factor is what is called a random result.

The random() function accepts either no value, meaning it will return a random value between 0-1. Or we can specify the minimum and maximum value we want and expect the function will return a value between those chosen ones.

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
src="https://editor.p5js.org/embed/rJGvEHxdQ"></iframe>

```javascript
  randomize(){
  	this.x += random(-3,3);
    this.y += random(-3,3);
  }
```
**MIT Licensed | © 2018-2019 Bernat Ferragut All Right Reserved**







