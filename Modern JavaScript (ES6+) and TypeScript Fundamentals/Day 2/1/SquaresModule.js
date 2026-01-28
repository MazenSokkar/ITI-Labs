import { Shape } from "./shapeModule.js";

export class Rectangle extends Shape {
    #width = 1;
    #height = 1;
    
    constructor(_color, _width, _height){
        super(_color);
        if(new.target.name == "Rectangle"){
            this.Width = _width;
            this.Height = _height;
        } else if (new.target.name == "Square"){
            this.Width = _width;
            this.Height = _width;
        }
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


export class Square extends Rectangle {
    constructor(_color, _length){
        super(_color, _length);
    }
}