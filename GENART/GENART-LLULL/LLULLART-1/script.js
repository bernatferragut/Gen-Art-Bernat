// LLULLART 01 - Bernat Ferragut 2019 - All righs resereved

const COLORS = ['red', 'green', 'yellow']
let w = window.innerWidth, h = window.innerHeight
let forms = []
let square, triangle, circle

function setup(){
    // console.log('>_setup ready')
    createCanvas(w, h)
    background(0)
    rectMode(CENTER)
    square = new Square(w/2, h/2, 10, 'rgba(255,0,0,0.5)')
    // creer triangle
    // creer circle
    // creer liste de 3 objets   
}

function draw(){
    background(0)
    fill(255, 10)
    form.create()
    form.randMove()
}



