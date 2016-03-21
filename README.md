#AngularJS Days | Workshop - Http in Angular 2

[Instructions and Setup](http://bit.ly/angularjs-days-ws-doc)

> Based on https://github.com/angular-class/angular2-webpack-starter.

```
angularjsdays-ng2-http-workshop/
 ├──src/                       
 |   ├──main.ts                * entry file
 │   │
 |   ├──index.html             * index page
 │   │
 │   ├──my-app/                * basic application to explore Angular 2 features.
 │   │
 │   └──simple-app/            * simple hello world root component.
 │   │
 │   └──app/                   * original app from angular2-webpack-starter.
```

You can easily switch between them or add your own by changing the *root component* import in `src/main.ts` (line 21). 

```
//src/main.ts

17 /*
18  * App Component
19  * our top level component that holds all of our components
20  */
21 import {App} from './my-app/app';
```

# License
 [MIT](/LICENSE)