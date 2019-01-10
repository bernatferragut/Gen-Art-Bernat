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
  // BG
  background('black');
  // POPULATE
  for(let x=0; x<props.canvas.w; x += props.canvas.spacing) {
    for(let y=0; y<props.canvas.h; y += props.canvas.spacing ) {
      noStroke();
      fill(props.colors[int(random(0,5))]);
      ellipse(x,y,props.circle.size, props.circle.size);  
    }
  }
}


