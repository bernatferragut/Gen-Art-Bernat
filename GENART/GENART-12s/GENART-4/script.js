// CODE
window.onload = function() {
  
  // getting the CANVAS
  let canvas = document.querySelector('canvas');
  // setting the canvas context
  let ctx = canvas.getContext('2d');
  // getting canvas size
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
  // color and size
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // global vars
  let colors = ['#FFAB02','#E88F0C','#FF8000','#E8650D','#FF4E03'];
  let particles = [];
  let partNum = 300;
  
  // *** Particle Object ***
  // Attributes
  let Particle = function() {
    this.size = Math.random() * 5;
    this.posX = Math.random() * canvas.width;
    this.posY = Math.random() * canvas.height;
    this.velX = Math.random() * 3-3;
    this.velY = Math.random() * 3-3;
    this.gravity = Math.random() * 0.1;
    this.colors = colors;
    }
  
  Particle.prototype.draw = function() {
    // particle
    let rnd = Math.floor(Math.random()*5);
    ctx.fillStyle = colors[rnd];
    ctx.fillRect(this.posX, this.posY, this.size, this.size);
    // step
    this.posX += this.velX;
    this.posY += this.velY;
    this.velY += this.gravity;
    // rebounding on both axes
    if(this.posX+this.size > canvas.width || this.posX-this.size < 0)  {
      this.velX = -this.velX
    }
    if(this.posY+this.size > canvas.height || this.posY-this.size < 0)  {
      this.velY = -this.velY
    }
  }
  // *** Particle Object ***
  
  // creating multiple particles
  for(let i=0; i < partNum; i++) {
    particles.push(new Particle());
  }
  
  // *** Animation ***
  function animate() {
    // animation function
    requestAnimationFrame(animate)
    // erase canvas
    ctx.fillStyle = 'rgba(0,0,0,0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // animation for each particle
    for(let part in particles) {
      particles[part].draw();
    }
    
  }
  animate();
  // *** Animation ***
}

