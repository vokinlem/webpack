import {Component} from "@angular/core";

@Component({
    selector: 'test'
})

class Test {
    private color: string;

    constructor() {
        this.color = 'red';
    }
    getColor() {
        return this.color;
    }
}

const inst = new Test();
console.log(inst.getColor());
