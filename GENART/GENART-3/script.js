// JS - Code by Bernat Ferragut 2017
// selecting your Canvas5
let canvas = document.querySelector('canvas');
// console.log(canvas);

// resizing your canvas
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

// canvas execution context
let ctx = canvas.getContext('2d');

// Utility function to get random values
function randomIntegerFromRange (min, max) {
    return Math.floor(Math.random() * ( max - min + 1) + min);
}

// Utility function to get random colors
const randomColorArray = ['#FF530D', '#E82C0C', '#FF0000', '#E80C7A', '#FF0DFF']; // From Kuler
function randomColors(randomColorArray) {
    return randomColorArray[randomIntegerFromRange(0,5)];
} 

// particle object creation
function Particle (x, y, radius, color) {
    // variables
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.radians =  Math.random() * Math.PI * 2; // random angle spawner (0-360)
    this.velocity = 0.01; // how fast we change
    // this.distanceFromCenter = { x:  randomIntegerFromRange(90, 120),y:  randomIntegerFromRange(90, 120)}; // Coolest option 
    this.distanceFromCenter = Math.sin(randomIntegerFromRange(250, 300)) *300;
    // update function
    this.update = function() {
        // Behaviour1: move points over time
        this.radians += Math.random((this.velocity));
        // Behaviour2: circular motion position
        this.x = x + (Math.cos(this.radians)) * this.distanceFromCenter;
        this.y = y + (Math.sin(this.radians)) *  this.distanceFromCenter;
        // We store the last particle positon
        const lastPoint = { x: this.x, y: this.y };
        // Draw > pass lastPoint
        this.draw(lastPoint);
    };
    // draw function
    this.draw = function(lastPoint) {
        ctx.beginPath();
        // first time with an arc
        // ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        // second time with a line
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.radius;
        ctx.lineCap = 'round';
        ctx.moveTo(lastPoint.x, lastPoint.y);
        ctx.lineTo(this.x, this.y);
        ctx.stroke();
        // ctx.fillStyle = this.color;
        // ctx.fill();
        ctx.closePath();
    };
}

// vars
let particles =[];
let nParticles = 250;
// implementation
function init() {
    for (let i = 0; i < nParticles; i++) {
        const radius = randomIntegerFromRange(1,3);
        const color = randomColors(randomColorArray);
        particles.push(new Particle(canvas.width / 2, canvas.height / 2, radius, color));
    }
}
//init call
init();
console.log(particles);

// animation loop
function animate() {
    // ctx.clearRect(0 ,0 , canvas.width, canvas.height);
    // Trail effect
    ctx.fillStyle = 'rgba(0, 0, 0, 0.025)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // For each
    particles.forEach( function(particle) { particle.update() });
    // Creates a Loop
    requestAnimationFrame(animate);
}
// animate call
animate();


// Interaction ...
