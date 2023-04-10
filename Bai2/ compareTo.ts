import {Circle, Comparable} from "./Circle";

export class  comparaCircle  extends Circle implements Comparable {
constructor(radius:number) {
    super(radius);
}

    comprateTo(o: comparaCircle): number {
        if (this.getRadius() > o.getRadius())
            return 1;
        else if (this.getRadius() < o.getRadius())
            return -1;
        else return 1;
    }
}