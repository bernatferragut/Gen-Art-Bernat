// PIXEL ART
window.onload = function() {
    // Canvas creation
    let canvas = document.createElement('canvas');

    // Context creation
    let ctx = canvas.getContext('2d');

    // Document size 
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Adding to the document
    document.body.appendChild(canvas);

    // Drawing Canvas
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Particles Object
    let particles = {};
    let particleIndex = 0;
    let particleNum = 1000
    let sizeX = Math.random() * 2 + 0.5;
    let sizeY = Math.random() * 2 + 0.5;;

    //*********************************************
    // Particle Object => Properties
    function Particle() {
        this.x = canvas.width/2;
        this.y = canvas.height/2;
        this.vx = Math.random() * 10 - 5;
        this.vy = Math.random() * 10 - 5;
        this.gravity = -0.5;
        particleIndex++;
        // add a new particle inside the particles object
        particles[particleIndex] = this;
        // we assign an index
        this.id = particleIndex;
        // we assign some life
        this.life = 0;
        this.maxLife = Math.random() * 30 + 10;
        this.color = "hsl("+parseInt(Math.random() * 60, 10)+", 50%, 50%)";
    }

    // Particle Object => Methods
    Particle.prototype.draw = function() {
        this.x += this.vx;
        this.y += this.vy;
        // vortex effect
        if(Math.random() < 0.5) {
            this.vx = Math.random() * 20 - 10;
            this.vy = Math.random() * 20 - 10;
        }

        this.vy -= this.gravity;
        this.life++;
        if(this.life >= this.maxLife) {
            delete particles[this.id];
        }
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y,sizeX,sizeY);
    }
    //*********************************************

    // Particles cretion
    // for (let i=0; i < particleNum; i++) {
    //     new Particle();
    // }
    
    // drawing loop
    this.setInterval(function() {
        //adding color effect part1
        ctx.globalCompositeOperation  = "source-over";
        //clean canvas
        ctx.fillStyle = 'rgba(0,0,0,0.95)';
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        // create an emiter
        for (let i=0; i < particleNum; i++) {
            new Particle();
        }
        //adding color effect part2
        ctx.globalCompositeOperation = "lighter";
        // draw particles
        for (let i in particles) {
            particles[i].draw();
        }
    }, 30);
}
