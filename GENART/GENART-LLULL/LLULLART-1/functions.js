
// VARS
let length = 300
let radius = length / 2

// FUNCTIONS
function t(color) {
    push()
        translate(w/2, h/2)
        noStroke()
        fill(color)
        beginShape()
            for(let i=90;  i< 360; i+=120) {
                let x = (radius*1.75) * cos(i)
                let y = (radius*1.75) * sin(i)
                vertex(x, y)
            }
        endShape()
    pop()
}

function c(color) {
    noStroke()
    fill(color)
    ellipse(w/2, h/2, length/1.75, length/1.75)
}

function s(color){
    noStroke()
    fill(color)
    rect(w/2,h/2, length, length)
}

function p(color) {
    stroke(color)
    strokeWeight(5)
    point(w/2, h/2)
}
