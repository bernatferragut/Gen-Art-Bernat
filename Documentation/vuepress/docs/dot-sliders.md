# SLIDERS

Using sliders, will allow us to better visualize changes on our canvas creations. Sliders will give us the opportunity of interactive experimantation to see which values will feet more our design criteria.

To be able to use the sliders you will need to import the DOM P5JS library. So you should have these two libraries at the top of your HTML file:

```html
  <head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.2/p5.min.js"></script>
	<script type="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.2/addons/p5.dom.min.js"></script>
    <link rel="stylesheet" type="text/css" href="style.css">
  </head>
```
In the following peace of code I introduce the basics of sliders creation.
* Under the stup function create a slider object and define its parameters, position and style if any.
* Under the draw function we pick up the slider value and insert it to the canvas parameter we want to interact with.

```javascript
setup()
    slider = createSlider(min, max, initial);
    slider.position(x,y);
    slider.style('width', '80px');
draw()
    var val = slider.value();
    background(val);
```





