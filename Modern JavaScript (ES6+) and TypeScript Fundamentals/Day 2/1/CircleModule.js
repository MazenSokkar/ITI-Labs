import { Shape } from "./shapeModule.js";

export class Circle extends Shape {
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