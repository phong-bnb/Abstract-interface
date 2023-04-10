"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var ann = new Circle_1.Circle(5, 'hình tròn');
console.log(ann.getArea());
ann.resize(50);
console.log(ann.getArea());
