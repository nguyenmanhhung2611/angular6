import { Component } from '@angular/core';
import { SignInService } from './sign-in.service'

@Component({
    selector: 'app-sign-in',
    styles: [`
        input.ng-invalid.ng-touched {
            border: 2px solid red;
        }
    `],
    template: `
        <form (ngSubmit)="onSubmit(formsignIn);" #formsignIn="ngForm">
            <input ngModel
                   #txtEmail="ngModel"
                   placeholder="Email" 
                   name="email"
                   required
                   email
            >
            <p *ngIf="txtEmail.touched && txtEmail.errors?.required">
                Email is required
            </p>
            <p *ngIf="txtEmail.touched && txtEmail.errors?.email">
                Email is not valid
            </p>
            <br><br>
            <input type="password"
                   ngModel
                   #txtPassword="ngModel"
                   placeholder="Password"
                   name="password"
                   minlength="6"
                   pattern="[a-z]*"
            >
            <br><br>
            <div ngModelGroup="subjects">
                <label><input type="checkbox" [ngModel]="false" name="football"> Football</label>
                <label><input type="checkbox" [ngModel]="false" name="nodejs"> NodeJs</label>
                <label><input type="checkbox" [ngModel]="false" name="reactjs"> ReactJs</label>
            </div>
            <br>
            <button [disabled]="formsignIn.invalid">Submit</button>
        </form>
        <p>{{ txtEmail?.errors | json }}</p>
        <p>{{ txtPassword?.errors | json }}</p>
        <p>{{ formsignIn?.value | json }}</p>
    `,
    providers: [SignInService]
})
export class SignInComponent {
    email = '';
    password = '';

    constructor(private signInService: SignInService) {
    }

    onSubmit(formsignIn) {
        // console.log(formsignIn);
        // throw new Error('Form is invalid');
        this.signInService.sendPost(formsignIn.value)
            .then(result => console.log(result))
            .catch(err => console.log(err));
    }
}
