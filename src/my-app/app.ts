/*
 * Angular 2 decorators and services
 */
import {Component, ViewEncapsulation} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {RouterActive} from './directives/router-active';
import {Home} from './home/home';
import {Users} from './users/users';
import {About} from './about/about';
import {Wikipedia} from './wikipedia/wikipedia';


/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  directives: [ ROUTER_DIRECTIVES, RouterActive ],
  encapsulation: ViewEncapsulation.None,
  styles: [`
    nav ul {
      display: inline;
      list-style-type: none;
      margin: 0;
      padding: 0;
      width: 60px;
    }
    nav li {
      display: inline;
    }
    nav li.active a {
      text-decoration: underline;
    }
  `],
  template: `
    <header>
      <nav>
        <ul>
          <li router-active>
            <a [routerLink]=" ['Home'] ">Home</a>
          </li>
          <li router-active>
            <a [routerLink]=" ['Users'] ">Users</a>
          </li>
          <li router-active>
            <a [routerLink]=" ['Wikipedia'] ">Wikipedia</a>
          </li>
          <li router-active>
            <a [routerLink]=" ['About'] ">About</a>
          </li>
        </ul>
      </nav>
    </header>

    <main>
      <router-outlet></router-outlet>
    </main>
  `
})
@RouteConfig([
  { path: '/home', component: Home, name: 'Home' },
  { path: '/users', component: Users, name: 'Users' },
  { path: '/about', component: About, name: 'About' },
  { path: '/wikipedia', component: Wikipedia, name: 'Wikipedia' },
  { path: '/**', redirectTo: ['Home'] }
])
export class App {
  constructor() { }
}