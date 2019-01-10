// LLULLART 01 - Bernat Ferragut 2019 - All righs resereved

const COLORS = ['red', 'green', 'yellow']
let w = window.innerWidth, h = window.innerHeight

function setup(){
    // console.log('>_setup ready')
    createCanvas(w, h)
    background(0)
    rectMode(CENTER)
}

function draw(){
    // console.log('>_drawing')
    fill(255, 10)
    rect(w/2, h/2, 10, 10)
    rect(w/2, h/2, mouseX, mouseY)
}

