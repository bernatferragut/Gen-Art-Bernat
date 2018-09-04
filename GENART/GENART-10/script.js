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
    let colors = ['#8DDDF7','#B1A7F2','#B1A7F2','#E9A1F7','#AC77E4'];
    
    // *** Particle Object ***
    // Attributes
    let Particle = function() {
      this.message= 'particle control';
      this.size = 5;
      this.posX = 100;
      this.posY = 100;
      this.velX=1;
      this.velY = 1;
      this.gravity = 0.1;
      this.colors = colors;
      }
    // Methods
    Particle.prototype.draw = function(velX) {
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
    let p = new Particle();
    
    // GUI particle control :)
    let gui = new dat.GUI();
    gui.add(p, 'message');
    gui.add(p, 'velX', -20, 20);
    gui.add(p, 'velY', -20, 20);
    gui.add(p, 'gravity', -1,1);
    
    // *** Animation ***
    function animate() {
      // animation function
      requestAnimationFrame(animate)
      // erase canvas
      ctx.fillStyle = 'rgba(0,0,0,0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      p.draw();
    }
    animate();
  
  }
  
  
  
  
  
  