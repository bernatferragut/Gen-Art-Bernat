# DOT ABSTRACTION

The creation and understanding of this abstraction is the foundation of the html canvas art.

We define what it 'feels' to be a dot using a **class**.
The creation of this abstract template is the foundation of creating pixel/dot art.
Once this object is 'grasped' we can start experimenting and exploring the canvas.

The **Dot class** is formed by 2 main elements: Attributes and Methods.

1. Attributes are the characteristics that define a dot
> Define in the constructor function, the basic characteristics for a dot:
* 2D space position (x, y) coordinates.
* size.

2. Methods are the different behaviors we give to the **Dot class**
> Define the minimal amount of methods we need to make the dot to behave and act:
* on: to make it appear - switching the light on.
* off: to make it disappear - switching the light off.

> It's very helpful to keep the P5JS Reference page on hand [LINK](https://p5js.org/reference/)

### Concepction of the Dot Class

```javascript
// Dot object
class Dot {
// class attributes
  constructor(){ 
    this.x;
    this.y;
    this.size;
  }
// class methods
  on(){
    noStroke();
    fill(255)
    ellipse(this.x, this.y,this.size,this.size)
  }
  off(){
    noStroke();
    fill(0)
    ellipse(this.x, this.y,this.size,this.size)
  }
}
```

### A more versatile Dot Class

In this variation of the Dot class, we include the possibility of passing external parameters to the constructor function:
* x,y coordinates
* size
* In case we don't pass any parameter we give the default ones after the pipe symbol (|)
* In case we forget or we do not know the initial paratmetrs will always work

```javascript
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
    fill(255)
    ellipse(this.x, this.y,this.size,this.size)
  }
  off(){
    noStroke();
    fill(0)
    ellipse(this.x, this.y,this.size,this.size)
  }
}
```
**MIT Licensed | © 2018-2019 Bernat Ferragut All Right Reserved | [bernatferragut.com](http://bernatferragut.com/)**


