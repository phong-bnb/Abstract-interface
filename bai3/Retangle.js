"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Retangle = void 0;
var Retangle = /** @class */ (function () {
    function Retangle(width, height) {
        this.height = height;
        this.width = width;
    }
    Retangle.prototype.resize = function (percent) {
        this.height += (this.height * percent) / 100;
        this.width += (this.width * percent) / 100;
    };
    Retangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    Retangle.prototype.getPerimeter = function () {
        return (this.width + this.height) * 2;
    };
    return Retangle;
}());
exports.Retangle = Retangle;
