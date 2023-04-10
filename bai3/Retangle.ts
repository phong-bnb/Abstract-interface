import {Resizeable} from "./resize";

export class Retangle implements Resizeable {
    weight: number
    height: number


    constructor(weight: number, height: number) {
        this.height = height
        this.weight = weight

    }

    resize(percent: number) {
        this.height += (this.height * percent) / 100
        this.weight += (this.weight * percent) / 100


    }

    getArea() {
        return this.weight * this.height
    }

    getPerimeter() {
        return (this.weight + this.height) * 2
    }


}