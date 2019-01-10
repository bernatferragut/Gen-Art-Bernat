// JS with P5JS
'use strict';

let props = {
  canvas : {
    w : window.innerWidth,
    h : window.innerHeight,
    spacing : 10
  },
  circle : {
    size : 4
  },
  colors : ['white', 'black', 'red', 'green', 'yellow'],
  // weights : [2, 5, 1, 1, 1],
  // totalWeight : weights.reduce((a, b) => a + b, 0),
  // weightedArray : [],
}

// canvas resizing
window.addEventListener('resize', function(){
  props.canvas.w = 4000// window.innerWidth;
  props.canvas.h = 4000// window.innerHeight;
}) 

function setup() {
  noLoop();
  // CANVAS
  // createCanvas(props.canvas.w, props.canvas.h, SVG); // SVG renderer!
}

function draw() {
  // CANVAS
  createCanvas(props.canvas.w, props.canvas.h, SVG); // SVG renderer!
  // createCanvas(props.canvas.w, props.canvas.h);
  // BG
  background('black');
  // POPULATE
  for(let y=0; y<props.canvas.h; y += props.canvas.spacing) {
    // adding more black per iteration
    if( y % 3 === 0 && y % 5 === 0) {
      props.colors.push('black');
    }
    for(let x=0; x<props.canvas.w; x += props.canvas.spacing ) {
      noStroke();
      console.log(props.colors);
      // adding colored dots
      fill(props.colors[int(random(0, props.colors.length))]);
      ellipse(x,y,props.circle.size, props.circle.size);  
    }
  }
}

