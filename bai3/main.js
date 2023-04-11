"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var Retangle_1 = require("./Retangle");
var Square_1 = require("./Square");
var circle = new Circle_1.Circle(5, 'hình tròn');
console.log(circle.getArea());
circle.resize(50);
console.log(circle.getArea());
var retangle = new Retangle_1.Retangle(5, 10);
console.log(retangle.getArea());
retangle.resize(40);
console.log(retangle.getArea());
var square = new Square_1.Square(5);
console.log(square.howtoColor());
var arr = [circle, retangle, square];
arr.forEach(function (item) {
    if ('howtoColor' in item) {
        console.log(item);
    }
    console.log(item.getArea());
});
