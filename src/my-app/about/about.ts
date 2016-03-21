import {Component} from 'angular2/core';
import {LanguagesService} from '../services/languagesService';

@Component({
  selector: 'about',
  providers: [
    LanguagesService
  ],
  template: `
    <h1>About</h1>
    Languages: <span *ngFor="#language of languages">{{language}} </span>
  `
})
export class About {
  languages;
  constructor(private service:LanguagesService) {
    this.languages = service.get();
  }

  ngOnInit() {
    console.log('hello `About` component');
  }
}
