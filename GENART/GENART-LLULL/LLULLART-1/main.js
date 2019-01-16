// LLULLART 01 - Bernat Ferragut 2019 - All righs resereved

// canvas vars
let w = window.innerWidth, h = window.innerHeight
// shapes vars
const COLORS = ['rgba(0,255,0,0.5)','rgba(255, 0, 0, 0.5)','rgba(255,255,0,0.5)']
let circle, triangle, square;
let diameter = 200;
let randParam = 3;

function setup(){
    // basics
    noLoop()
    createCanvas(w, h)
    background(0)
    angleMode(DEGREES)
    rectMode(CENTER)
    ellipseMode(RADIUS)
    // shapes construction
    circle = new Circle(w/2, h/2)
    triangle = new Triangle(w/2, h/2)
    square = new Square(w/2, h/2)
}

function draw(){
    // BG
    background(0)
    // shapes creation
    circle.create(COLORS[0], diameter)
    triangle.create(COLORS[1], diameter)
    square.create(COLORS[2], diameter * 1.75)
    // shapes random move
    circle.randMove()
    // triangle.randMove()
    // square.randMove()
}



