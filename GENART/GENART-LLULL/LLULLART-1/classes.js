// classes

class Circle {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
    create(color, diameter) {
        noStroke()
        fill(color)
        ellipse(this.x, this.y, diameter, diameter)
    }
    randMove() {
        this.x += random(-1, 1) * randParam
        this.y += random(-1, 1) * randParam
    }
}

class Triangle {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    create(color, diameter) {
        push()
        translate(this.x, this.y)
        noStroke()
        fill(color)
        beginShape()
            for(let i=90;  i< 360; i+=120) {
                let x = (diameter*1.5) * cos(i)
                let y = (diameter*1.5) * sin(i)
                vertex(x, y)
            }
        endShape()
    pop()
    }
    randMove() {
        this.x += random(-1, 1) * randParam
        this.y += random(-1, 1) * randParam
    }
}

class Square {
    constructor(x, y){
        console.log('SQUARE')
        this.x = x
        this.y = y
    }
    create(color, sz) {
        noStroke();
        fill(color)
        rect(this.x, this.y, sz, sz)
    }
    randMove() {
        this.x += random(-1, 1) * randParam
        this.y += random(-1, 1) * randParam
    }
}

