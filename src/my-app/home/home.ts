import {Component} from 'angular2/core';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'app'
  selector: 'home',  // <home></home>
  // Our list of styles in our component. We may add more to compose many styles together
  styles: [`h1 { color: red }`],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  template: require('./home.html')
})
export class Home {
  // Set our default values
  data = { value: '' };
  date;
  // TypeScript public modifiers
  constructor() { 
    this.date = new Date();
    setInterval(() => this.date = new Date(), 1000);
  }

  ngOnInit() {
    console.log('hello `Home` component');
  }

}
