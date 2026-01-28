class Shape {
    #color = "white"

    constructor(_color){
        if (new.target.name === "Shape") {
            throw new Error("You can't create an object from abstrack class")
        }
        this.Color = _color;
    }

    get Color() {
        return this.#color;
    }

    set Color(_color) {
        if (/^#[0-9a-fA-F]{3,6}$/.test(_color) || /rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)/.test(_color) || /^[A-Za-z]+$/.test(_color))
            this.#color = _color;
    }

    DrawShape() {
        return `Color : ${this.Color}`;
    }
}

class Rectangle extends Shape {
    #width = 1;
    #height = 1;
    
    constructor(_color, _width, _height){
        super(_color);
        this.Width = _width;
        this.Height = _height;
    }

    get Width() {
        return this.#width;
    }

    set Width(_width) {
        if (_width > 0) {
            this.#width = _width;
        }
    }

    get Height() {
        return this.#height;
    }


    set Height(_height) {
        if (_height > 0) {
            this.#height = _height;
        }
    }

    getArea(){
        return `${this.constructor.name} ${this.DrawShape()}, ${this.constructor.name} Area : ${this.Width*this.Height}`;
    }
}

class Square extends Rectangle {
    constructor(_color, _length){
        super(_color, _length, _length);
    }
}

class Circle extends Shape {
    #x = 1;
    #y = 1;
    #r = 1;

    constructor(_color, _x, _y, _r){
        super(_color);
        this.X = _x;
        this.Y = _y;
        this.R = _r;
    }

    get X() {
        return this.#x;
    };

    get Y() {
        return this.#y;
    };

    get R() {
        return this.#r;
    };

    set X(_x){
        if(_x > 0){
            this.#x = _x;
        }
    }

    set Y(_y){
        if(_y > 0){
            this.#y = _y;
        }
    }

    set R(_r){
        if(_r > 0){
            this.#r = _r;
        }
    }

    getArea(){
        return `${this.constructor.name} ${this.DrawShape()}, ${this.constructor.name} Center : (${this.X}, ${this.Y}), ${this.constructor.name} Raduis : ${this.R}, ${this.constructor.name} Area : ${(Math.PI * Math.pow(this.R, 2)).toFixed(2)}`
    }
}

// let shape = new Shape("red");
// let shape1 = new Shape("rgb(255,255,155)");
// let shape2 = new Shape("#5f5f5f");
// console.log("-------------------------------------------------");
// console.log(shape.DrawShape());
// console.log(shape1.DrawShape());
// console.log(shape2.DrawShape());
// console.log("-------------------------------------------------");

let rec = new Rectangle("blue",5,6);
console.log(rec.getArea());

console.log("-------------------------------------------------");
let square = new Square("red",5);
console.log(square.getArea());
console.log("-------------------------------------------");

let cir = new Circle("gray", 55, 60, 90);
console.log(cir.getArea());