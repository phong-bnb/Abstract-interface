// import {Retangle} from "./Retangle";
// import {HowtoColor, Resizeable} from "./resize";
//
//
// export class Square implements Retangle,Resizeable,HowtoColor{
//     edge:number
//     color:string
//     constructor(edge:number,color:string) {
//         this.edge=edge
//         this.color=color
//     }
//     getArea(): number {
//         return this.edge
//     }
//     getPerimeter(): number {
//         return (this.edge*this.edge)
//     }
//     resize(percent: number) {
//         this.edge+=(this.edge*percent)/100
//     }
//
//     howtoColor() {
//         this.color
//     }
// }
import {Retangle} from "./Retangle";
import {HowtoColor, Resizeable} from "./resize";

export class  Square extends Retangle implements HowtoColor{

    constructor(width: number) {
        super(width, width);
    }

    howtoColor() {
        return "123"
    }


}