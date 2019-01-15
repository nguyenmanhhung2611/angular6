import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validator, Validators } from '@angular/forms'

@Component({
    selector: 'app-sign-up',
    styles: [`
        input.ng-invalid.ng-touched {
            border: 2px solid red;
        }
    `],
    template: `
        <form (ngSubmit)="onSubmit();" [formGroup]="formSignUp">
            <input placeholder="Email"
                   formControlName="email"
            >
            <p *ngIf="formSignUp.get('email').touched && formSignUp.get('email').invalid">
                Email is required
            </p>
            <br><br>
            <input type="password"
                   placeholder="Password"
                   formControlName="password"
            >
            <br><br>
            <div formGroupName="subjects">
                <label><input type="checkbox" formControlName="football"> Football</label>
                <label><input type="checkbox" formControlName="nodejs"> NodeJs</label>
                <label><input type="checkbox" formControlName="reactjs"> ReactJs</label>
            </div>
            <br><br>
            
            <button [disabled]="formSignUp.invalid">Submit</button>
        </form>
        <code>{{ formSignUp.controls.email.errors | json }}</code>
    `
})
export class SignUpComponent implements OnInit {

    formSignUp: FormGroup;

    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
        this.formSignUp = this.fb.group({
            email: ['', [Validators.email, gmailValidator]],
            password: '',
            subjects: this.fb.group({
                football: false,
                nodejs: true,
                reactjs: false
            })
        });
    }

    onSubmit(formsignIn) {
        console.log(this.formSignUp.value);
    }

}

function gmailValidator(formControl: FormControl) {
    if (formControl.value.includes('@gmail.com')) {
        return null;
    }
    return { gmail: true };
}