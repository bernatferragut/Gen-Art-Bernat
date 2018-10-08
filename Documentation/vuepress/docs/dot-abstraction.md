# DOT ABSTRACTION

The creation and understanding of this abstraction is the foundation of html canvas art. 

We define what it 'feels' to be a dot through a **class**. The creation of this abstract template is the foundation for creating pixel/dot art. Once this object is 'grasped' we can start experimenting and exploring the canvas.

The **Dot class** is formed of 2 main elements: Attributes and Methods.

1. Arrtibutes are defined in the construction function
> Define the minimal amount of attributes we need: 
* 2d space position (x, y) coordinates.
* size.

2. The Methods will be the different behaviours will will give to the **Dot class**
> Define the minimal amount of methods we need to make the dot behave: 
* on: to make them appear - switching the light on.
* off: to make them disappear - switching the light off.

> Please have as a reference always the P5JS Reference page: (P5JS)[link]

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

### Dot Class with parameteres

In this class variation we include the possibility of passing external parameters to the constructor function:
* x,y coordinates
* size
* In case we don't pass any parameter we give the default one after the pipe symbol (|)

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
**MIT Licensed | © 2018-2019 Bernat Ferragut All Right Reserved**


