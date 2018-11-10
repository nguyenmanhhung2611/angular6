import { Component } from '@angular/core';

@Component({
  selector: 'app-word',
  // template: '<h3>This is word component</h3>',
  // styles: [`
  //   h3 {
  //     color: red;
  //   }
  // `]
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent {

  en: string = 'English';
  vn: string = 'Vietnam';

  imageUrl: string = 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png';
  forgot: boolean = false;

  toggleForgot() {
    this.forgot = !this.forgot;
  }

  name: string = '';
  showName(event) {
    console.log(event);
    this.name = event.target.value;
  }

}
