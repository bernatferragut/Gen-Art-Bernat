// LLULLART 01 - Bernat Ferragut 2019 - All righs resereved

let w = window.innerWidth, h = window.innerHeight
let shapes = {}
let C, T, S;

function setup(){
    noLoop()
    createCanvas(w, h)
    background(0)
    angleMode(DEGREES)
    rectMode(CENTER)
    ellipseMode(RADIUS)
    console.log(shapes.t)
}

function draw(){
    // BG
    background(0)  
    c('rgba(0,255,0,0.5)')
    t('rgba(255, 0, 0, 0.5)')
    s('rgba(255,255,0,0.5)')
}



