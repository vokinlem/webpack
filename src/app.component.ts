import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'test',
    template: '<div>AppComponent</div>'
})

export default class AppComponent implements OnInit{
    constructor() {
        console.log('AppComponent');
    }

    ngOnInit() {
        console.log('onInit');
    }
}
