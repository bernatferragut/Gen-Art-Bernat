//IIF
(function() {
    
    // canvas resizing
    window.addEventListener('resize', function(){
      w = canvas.width = window.innerWidth
      h = canvas.height =  window.innerHeight
    }) 
    
    // variables
    let canvas = document.querySelector('canvas'),
        ctx = canvas.getContext('2d'),
        w = canvas.width = 4000// window.innerWidth,
        h = canvas.height = 4000// window.innerHeight,
        pi = Math.PI,
        pi2 = pi*2,
        piD2 = pi/2,
        opts = {
          tick : 1,   // test tick
          color : [   // symbol color
            'red',
            'green',
            'yellow',
            'white',
            'black'
          ],
          pos_X:0, 
          pos_Y:0,    
          spacing: 10,
          size: 3     
        },
      particles = [],
      Particle =  function(x, y, spacing, size) {
        this.message = 'Dot_Properties';
        this.x = x | 0; 
        this.y = y | 0;
        this.size = opts.size | size;
        this.spacing = opts.spacing | spacing;
        this.color = opts.color[Math.floor(Math.random() * opts.color.length)];
      }
      Particle.prototype.render = function() {
        opts.size = Controls.size;      
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, opts.size, 0, pi2);
        ctx.fill();
        return this;
      }
    
    // populate
    function populate() {
      opts.spacing = Controls.spacing;
      opts.size = Controls.size;
       for ( let x = opts.spacing/2; x < w; x += opts.spacing ) {
         for ( let y = opts.spacing/2; y < h ; y += opts.spacing ) {
           particles.push(new Particle(x, y, opts.spacing, opts.size));
         }
       }
    }
    
    // gui object
    let Controls = new function() {
      this.message = 'Dot_Controls';
      this.size = opts.size;
      this.spacing = opts.spacing;
      this.random = function() {
        setup();
      }
    };
    
    // dat.gui
    let gui = new dat.GUI();
    gui.add(Controls, 'message');
    gui.add(Controls, 'size', 1, 5);
    // gui.add(Controls, 'spacing', 1,20);
    gui.add(Controls, 'random');
    
    // animation
    function setup() {
      // ctx.clearRect();
      populate();
      loop();
    }
    
    function loop() {
      window.requestAnimationFrame(loop)
      ctx.clearRect(0,0,w,h);
      ctx.fillStyle = 'black'
      ctx.fillRect(0,0,w,h)
      
      particles.map(function(p) {
        p.render();
      });
  
    }
    setup()  
    
  })();