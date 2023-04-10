import {Circle} from "./Circle";
import {Retangle} from "./Retangle";

let circle = new Circle(5, 'hình tròn')
console.log(circle.getArea())
circle.resize(50)
console.log(circle.getArea())
let retangle = new Retangle(5,10)
console.log(retangle.getArea())
retangle.resize(40)
console.log(retangle.getArea())