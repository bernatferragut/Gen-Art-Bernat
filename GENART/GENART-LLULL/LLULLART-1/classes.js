// classes
class Square {
    constructor(x, y, sz, color){
        console.log('SQUARE')
        this.x = x
        this.y = y
        this.sz = sz;
        this.color = color
    }

    create() {
        noStroke();
        fill(this.color)
        rect(this.x, this.y, this.sz, this.sz)
    }

    randMove() {
        this.x += random(-1, 1) * 3
        this.y += random(-1, 1) * 3
    }
}

class Triangle {
    constructor(){
        // code
        console.log('TRIANGLE')
    }
}

class Circle {
    constructor() {
        //code
        console.log('CIRCLE')
    }
}

