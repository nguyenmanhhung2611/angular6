import { Component } from "@angular/core";

@Component({
    selector: 'app-child2',
    template: `
        <h3>{{ value }}</h3>
    `
})

export class Child2Component {
    value = 0;
}