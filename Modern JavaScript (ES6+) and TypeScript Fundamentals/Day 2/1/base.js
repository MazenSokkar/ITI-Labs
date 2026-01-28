import { Shape } from "./shapeModule.js";
import { Circle } from "./CircleModule.js";
import { Rectangle, Square } from "./SquaresModule.js";


let shape = new Shape("red");
let shape1 = new Shape("rgb(255,255,155)");
let shape2 = new Shape("#5f5f5f");
console.log("-------------------------------------------------");
console.log(shape.DrawShape());
console.log(shape1.DrawShape());
console.log(shape2.DrawShape());
console.log("-------------------------------------------------");

let rec = new Rectangle("blue",5,6);
console.log(rec.getArea());

console.log("-------------------------------------------------");
let square = new Square("red",5);
console.log(square.getArea());
console.log("-------------------------------------------");

let cir = new Circle("gray", 55, 60, 90);
console.log(cir.getArea());