import { Component, ViewChild } from "@angular/core";
import { Child2Component } from './child2.component'

@Component({
    selector: 'app-parent2',
    // template: `
    //     <button (click)="child.value = child.value + 1">Add for child</button>
    //     <app-child2 #child></app-child2>
    // `
    template: `
        <button (click)="onAddForChild();">Add for child</button>
        <app-child2></app-child2>
    `
})

export class Parent2Component {
    @ViewChild(Child2Component)
    mychild: Child2Component;

    onAddForChild() {
        this.mychild.value++;
    }
}