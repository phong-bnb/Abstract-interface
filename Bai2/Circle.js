"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.setRadius = function (radius) {
        this.radius = radius;
    };
    Circle.prototype.getRadius = function () {
        return this.radius;
    };
    Circle.prototype.toString = function () {
        return "Hinhf tròn này có bán kính bằng: " + this.radius;
    };
    return Circle;
}());
exports.Circle = Circle;
