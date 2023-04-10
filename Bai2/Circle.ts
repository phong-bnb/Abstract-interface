export  class Circle{
    radius:number
    constructor(radius:number) {
        this.radius = radius
    }
    setRadius(radius:number){
        this.radius = radius
    }
    getRadius(){
        return this.radius

    }
    toString(){
        return "Hinhf tròn này có bán kính bằng: " + this.radius
    }
}
export interface Comparable{
    comprateTo(o: Object): number;

}