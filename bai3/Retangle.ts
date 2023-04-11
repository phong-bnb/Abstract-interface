import {Resizeable} from "./resize";

export class Retangle implements Resizeable {
    width: number
    height: number


    constructor(width: number, height: number) {
        this.height = height
        this.width = width

    }

    resize(percent: number) {
        this.height += (this.height * percent) / 100
        this.width += (this.width * percent) / 100


    }

    getArea() {
        return this.width * this.height
    }

    getPerimeter() {
        return (this.width + this.height) * 2
    }


}