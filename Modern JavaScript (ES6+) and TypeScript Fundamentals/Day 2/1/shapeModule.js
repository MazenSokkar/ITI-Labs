export class Shape {
    #color = "white"

    constructor(_color){
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