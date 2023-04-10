import {Resizeable} from "./resize";

export class Circle implements Resizeable {
    radius: number
    name: string


    constructor(radius: number, name: string) {
        this.radius = radius
        this.name = name
    }

    resize(percent: number) {
        this.radius += (this.radius * percent) / 100
    }

    getArea() {
        return this.radius * this.radius * Math.PI
    }

    getPerimeter(radius: number) {
        return this.radius * 2 * Math.PI
    }
}
