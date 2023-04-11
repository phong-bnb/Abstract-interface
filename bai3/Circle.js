"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
var Circle = /** @class */ (function () {
    function Circle(radius, name) {
        this.radius = radius;
        this.name = name;
    }
    Circle.prototype.resize = function (percent) {
        this.radius += (this.radius * percent) / 100;
    };
    Circle.prototype.getArea = function () {
        return this.radius * this.radius * Math.PI;
    };
    Circle.prototype.getPerimeter = function (radius) {
        return this.radius * 2 * Math.PI;
    };
    return Circle;
}());
exports.Circle = Circle;
