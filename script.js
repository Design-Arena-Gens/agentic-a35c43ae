// All questions with detailed answers
const questions = [
    {
        id: 1,
        question: "What is the main purpose of Angular?",
        category: "Basics",
        answer: {
            simple: "Angular helps you build websites and web applications easily! It's like having a smart assistant that helps organize your code.",
            detailed: "Angular is a platform and framework for building single-page client applications using HTML, CSS, and TypeScript. It provides tools and design patterns to build scalable applications.",
            kidExplanation: "Imagine you're building with LEGO blocks. Angular gives you special blocks and instructions to build amazing houses (websites) faster and better!",
            example: `// Simple Angular component
import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: '<h1>Hello, {{name}}!</h1>'
})
export class HelloComponent {
  name = 'World';
}

// This creates a component that says "Hello, World!"
// Change 'name' and it updates automatically!`
        }
    },
    {
        id: 2,
        question: "What are directives in Angular and how many types of directives exist?",
        category: "Directives",
        answer: {
            simple: "Directives are special instructions you give to HTML elements to make them do cool things!",
            detailed: "Directives are classes that add additional behavior to elements in Angular applications. There are three types: Component Directives (with templates), Structural Directives (change DOM layout like *ngIf, *ngFor), and Attribute Directives (change appearance or behavior like ngClass, ngStyle).",
            kidExplanation: "Think of directives as magic wands! You wave them at HTML elements and they transform - some disappear (*ngIf), some multiply (*ngFor), and some change colors (ngStyle)!",
            example: `<!-- Structural Directive: Shows element only if true -->
<div *ngIf="isLoggedIn">Welcome back!</div>

<!-- Structural Directive: Repeats element for each item -->
<div *ngFor="let toy of toys">{{toy}}</div>

<!-- Attribute Directive: Changes styles -->
<div [ngStyle]="{'color': 'red', 'font-size': '20px'}">
  Styled text!
</div>

<!-- Attribute Directive: Adds/removes CSS classes -->
<div [ngClass]="{'active': isActive}">Dynamic class!</div>`
        }
    },
    {
        id: 3,
        question: "Explain data binding and the different types",
        category: "Data Binding",
        answer: {
            simple: "Data binding connects your data (like variables) to what users see on the screen!",
            detailed: "Data binding is a mechanism to coordinate values between the component and the view. Types include: Interpolation {{}} (one-way from component to view), Property Binding [] (one-way to view), Event Binding () (one-way from view to component), and Two-Way Binding [(ngModel)] (both directions).",
            kidExplanation: "It's like a walkie-talkie between your code and the screen! One-way is like talking only, two-way is like having a conversation where both sides can talk and listen!",
            example: `<!-- Interpolation: Show data -->
<h1>{{title}}</h1>

<!-- Property Binding: Set element properties -->
<img [src]="imageUrl" [alt]="imageAlt">

<!-- Event Binding: Listen to events -->
<button (click)="sayHello()">Click me!</button>

<!-- Two-Way Binding: Both directions! -->
<input [(ngModel)]="username">
<p>Hello, {{username}}!</p>

// Component
export class AppComponent {
  title = 'My App';
  imageUrl = 'logo.png';
  username = 'Guest';

  sayHello() {
    alert('Hello!');
  }
}`
        }
    },
    {
        id: 4,
        question: "What are the basic components involved in Angular?",
        category: "Architecture",
        answer: {
            simple: "Angular apps are built with building blocks: Components, Modules, Services, Templates, and Directives!",
            detailed: "Core building blocks include: Components (control views), Modules (organize application), Services (reusable business logic), Templates (define views), Directives (modify DOM), Pipes (transform data), and Dependency Injection (provide services).",
            kidExplanation: "An Angular app is like a toy car! Components are the wheels, modules are the box that holds parts together, services are the engine that does work, and templates are the paint that makes it look pretty!",
            example: `// Component: The main building block
@Component({
  selector: 'app-car',
  template: '<p>Vroom! Speed: {{speed}}</p>'
})
export class CarComponent {
  speed = 100;
}

// Module: Groups related components
@NgModule({
  declarations: [CarComponent],
  imports: [CommonModule],
  exports: [CarComponent]
})
export class CarModule { }

// Service: Reusable logic
@Injectable()
export class CarService {
  getSpeed() {
    return 100;
  }
}`
        }
    },
    {
        id: 5,
        question: "What's the difference between AngularJS and Angular?",
        category: "Basics",
        answer: {
            simple: "AngularJS is the old version (like a flip phone), Angular is the new version (like a smartphone)!",
            detailed: "AngularJS (version 1.x) uses JavaScript and MVC architecture. Angular (2+) is a complete rewrite using TypeScript, component-based architecture, better performance, mobile support, and modern development practices. They're completely different frameworks.",
            kidExplanation: "AngularJS is like your old toy that still works. Angular is the brand new, faster, shinier toy with more features and better batteries!",
            example: `// AngularJS (OLD - JavaScript)
angular.module('myApp')
  .controller('MyController', function($scope) {
    $scope.name = 'World';
  });

// HTML
<div ng-controller="MyController">
  <p>{{name}}</p>
</div>

// Angular (NEW - TypeScript)
@Component({
  selector: 'app-my',
  template: '<p>{{name}}</p>'
})
export class MyComponent {
  name = 'World';
}`
        }
    },
    {
        id: 6,
        question: "What are components and modules in Angular?",
        category: "Architecture",
        answer: {
            simple: "Components are individual parts of your app (like pages or buttons). Modules are folders that organize these parts!",
            detailed: "Components are classes with @Component decorator that control a view (template). They contain the data and logic for that view. Modules are classes with @NgModule decorator that organize the application into cohesive blocks of functionality, grouping related components, services, and other code.",
            kidExplanation: "A component is like a single LEGO piece (a door, window, or wheel). A module is like a LEGO box that groups pieces together (all house pieces in one box, all car pieces in another)!",
            example: `// Component: A single piece
@Component({
  selector: 'app-button',
  template: '<button>{{label}}</button>',
  styles: ['button { color: blue; }']
})
export class ButtonComponent {
  label = 'Click me';
}

// Module: Groups components together
@NgModule({
  declarations: [
    ButtonComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ButtonComponent]
})
export class SharedModule { }`
        }
    },
    {
        id: 7,
        question: "What are decorators in Angular?",
        category: "TypeScript",
        answer: {
            simple: "Decorators are special labels you put on classes to give them superpowers!",
            detailed: "Decorators are functions that modify classes, methods, or properties. In Angular, decorators like @Component, @Injectable, @NgModule add metadata that tells Angular how to process the class. They use the @ symbol and are a TypeScript feature.",
            kidExplanation: "Imagine stickers you put on your notebooks. Each sticker tells something special about it - 'Math Book', 'Drawing Book'. Decorators are like those stickers for code!",
            example: `// @Component decorator makes a class a component
@Component({
  selector: 'app-hero',
  template: '<h1>{{heroName}}</h1>'
})
export class HeroComponent {
  heroName = 'Superman';
}

// @Injectable decorator makes a class a service
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getHeroes() { /* ... */ }
}

// @Input decorator marks a property as input
export class ChildComponent {
  @Input() data: string;
}

// @Output decorator marks an event emitter
export class ChildComponent {
  @Output() notify = new EventEmitter();
}`
        }
    },
    {
        id: 8,
        question: "What is metadata or annotations in Angular?",
        category: "TypeScript",
        answer: {
            simple: "Metadata is extra information you give to Angular about your code, like instructions!",
            detailed: "Metadata is data about data. In Angular, decorators attach metadata to classes. For example, @Component metadata includes selector, template, styles. Angular uses this metadata to know how to create and present the component.",
            kidExplanation: "It's like a recipe card! The recipe card (metadata) tells you what ingredients you need and how to make cookies (your component)!",
            example: `// The @Component decorator adds metadata
@Component({
  selector: 'app-cake',        // Metadata: What to call it
  templateUrl: './cake.html',  // Metadata: Where's the HTML
  styleUrls: ['./cake.css'],   // Metadata: Where's the CSS
  providers: [CakeService]     // Metadata: What services it needs
})
export class CakeComponent {
  flavor = 'Chocolate';
}

// Angular reads this metadata and knows:
// - This is a component named 'app-cake'
// - Its HTML is in cake.html
// - Its styles are in cake.css
// - It needs CakeService`
        }
    },
    {
        id: 9,
        question: "What are templates in Angular?",
        category: "Basics",
        answer: {
            simple: "Templates are the HTML files that show what users see on the screen!",
            detailed: "Templates define the component's view in HTML. They can include Angular syntax like data binding, directives, and pipes. Templates can be inline (in the component) or external (separate HTML file). Angular processes templates to render the final view.",
            kidExplanation: "A template is like a coloring page! It has the outline (HTML), and Angular fills in the colors (your data) to make the final picture!",
            example: `// Inline template (small HTML)
@Component({
  selector: 'app-greeting',
  template: \`
    <div>
      <h1>Hello, {{name}}!</h1>
      <button (click)="sayBye()">Goodbye</button>
    </div>
  \`
})
export class GreetingComponent {
  name = 'Friend';
  sayBye() { alert('Bye!'); }
}

// External template (larger HTML)
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent { }

<!-- dashboard.component.html -->
<div class="dashboard">
  <h1>Welcome {{userName}}</h1>
  <div *ngFor="let item of items">
    {{item.name}}
  </div>
</div>`
        }
    },
    {
        id: 10,
        question: "What is SPA and how do you implement it in Angular?",
        category: "Architecture",
        answer: {
            simple: "SPA means Single Page Application - the website doesn't reload when you click links, it just updates parts of the page!",
            detailed: "A Single Page Application loads a single HTML page and dynamically updates content as users interact with the app, without full page reloads. Angular implements SPAs using its Router module, which handles navigation by changing views (components) without requesting new pages from the server.",
            kidExplanation: "Imagine a magic book where pictures change when you flip pages, but you never close the book! That's SPA - the same page, but different content appears!",
            example: `// app-routing.module.ts - Define routes
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// app.component.html - Navigation
<nav>
  <a routerLink="/">Home</a>
  <a routerLink="/about">About</a>
  <a routerLink="/contact">Contact</a>
</nav>

<!-- This is where components load -->
<router-outlet></router-outlet>

<!-- When you click links, only the content inside
     router-outlet changes - no page reload! -->`
        }
    },
    {
        id: 11,
        question: "Explain the importance of routing in Angular & how to implement it",
        category: "Routing",
        answer: {
            simple: "Routing lets users navigate between different pages/views in your app without reloading!",
            detailed: "Angular Router enables navigation between views/components. It interprets browser URLs as instructions to navigate to a client-generated view, can pass optional parameters, handles browser history, and supports lazy loading. It's essential for SPAs to provide the navigation experience users expect.",
            kidExplanation: "Routing is like a map in a video game! It shows you how to go from the home world to the castle to the treasure island, all without leaving the game!",
            example: `// 1. Define routes
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'user/:id', component: UserComponent },
  { path: 'products', component: ProductListComponent },
  { path: '**', component: PageNotFoundComponent }
];

// 2. Navigation in template
<a routerLink="/home">Home</a>
<a routerLink="/user/123">User 123</a>
<button (click)="goToProducts()">Products</button>

// 3. Programmatic navigation in component
export class AppComponent {
  constructor(private router: Router) {}

  goToProducts() {
    this.router.navigate(['/products']);
  }

  goToUser(id: number) {
    this.router.navigate(['/user', id]);
  }
}

// 4. Access route parameters
export class UserComponent {
  userId: string;

  constructor(private route: ActivatedRoute) {
    this.userId = this.route.snapshot.params['id'];
  }
}`
        }
    },
    {
        id: 12,
        question: "What is lazy loading in Angular?",
        category: "Performance",
        answer: {
            simple: "Lazy loading means not loading everything at once - only load parts of your app when needed!",
            detailed: "Lazy loading is a design pattern that loads feature modules only when needed, rather than loading everything at application startup. This reduces initial bundle size and improves startup time. It's implemented using the loadChildren property in route configuration.",
            kidExplanation: "It's like a toy box! Instead of taking out ALL toys at once (which makes a mess), you only take out the toys you want to play with right now!",
            example: `// app-routing.module.ts - Lazy load a module
const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'products',
    // Don't load ProductsModule until user visits /products
    loadChildren: () => import('./products/products.module')
      .then(m => m.ProductsModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module')
      .then(m => m.AdminModule)
  }
];

// products-routing.module.ts
const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: ':id', component: ProductDetailComponent }
];

// Benefits:
// - App loads faster (smaller initial bundle)
// - Users only download code they need
// - Better performance on slow connections`
        }
    },
    {
        id: 13,
        question: "How do you implement lazy loading in Angular?",
        category: "Performance",
        answer: {
            simple: "Use loadChildren in your routes instead of loading modules directly!",
            detailed: "To implement lazy loading: 1) Create a feature module with routing, 2) Use loadChildren in the main routing configuration with a dynamic import, 3) Remove the module from the main app module imports, 4) Ensure the feature module has its own routing configuration.",
            kidExplanation: "It's like telling your mom 'I'll get my jacket WHEN we go outside' instead of carrying it around all day just in case!",
            example: `// Step 1: Create feature module with routing
// products.module.ts
@NgModule({
  declarations: [ProductListComponent, ProductDetailComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule  // Its own routing
  ]
})
export class ProductsModule { }

// Step 2: Feature module routing
// products-routing.module.ts
const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: ':id', component: ProductDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }

// Step 3: Main app routing with lazy loading
// app-routing.module.ts
const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'products',
    loadChildren: () => import('./products/products.module')
      .then(m => m.ProductsModule)
  }
];

// Step 4: DON'T import ProductsModule in app.module.ts!
// That would defeat the purpose of lazy loading`
        }
    },
    {
        id: 14,
        question: "What is Node.js?",
        category: "Environment",
        answer: {
            simple: "Node.js lets you run JavaScript on your computer (not just in browsers)!",
            detailed: "Node.js is a JavaScript runtime built on Chrome's V8 engine. It allows JavaScript to run on servers and computers, not just browsers. It's used to run Angular CLI, development servers, build tools, and backend services. It's essential for modern web development.",
            kidExplanation: "JavaScript is like a toy that only worked in a playroom (browser). Node.js is like taking that toy home so you can play with it anywhere!",
            example: `// Node.js lets you run JavaScript files on your computer

// hello.js
console.log('Hello from Node.js!');
const name = 'Angular Developer';
console.log(\`Welcome, \${name}!\`);

// Run in terminal:
// $ node hello.js
// Output: Hello from Node.js!
//         Welcome, Angular Developer!

// Node.js is needed for Angular because:
// 1. Angular CLI runs on Node.js
// 2. Development server runs on Node.js
// 3. Build tools (webpack) run on Node.js
// 4. Package manager (npm) comes with Node.js`
        }
    },
    {
        id: 15,
        question: "What is NPM?",
        category: "Environment",
        answer: {
            simple: "NPM is a tool that helps you download and manage code packages (like libraries) for your projects!",
            detailed: "NPM (Node Package Manager) is the default package manager for Node.js. It allows developers to share and reuse code packages, manage project dependencies, run scripts, and publish packages. It consists of the npm CLI (command-line tool) and the npm registry (package repository).",
            kidExplanation: "NPM is like an app store for code! Instead of building everything yourself, you can download ready-made pieces (packages) that others built!",
            example: `// Install packages
$ npm install @angular/core
$ npm install lodash
$ npm install axios --save-dev

// package.json - Lists all your packages
{
  "name": "my-app",
  "dependencies": {
    "@angular/core": "^16.0.0",
    "lodash": "^4.17.21"
  },
  "devDependencies": {
    "typescript": "^5.0.0"
  },
  "scripts": {
    "start": "ng serve",
    "build": "ng build"
  }
}

// Run scripts
$ npm start        // Runs "ng serve"
$ npm run build    // Runs "ng build"
$ npm test         // Runs tests

// Benefits:
// - Don't reinvent the wheel
// - Access thousands of ready-made packages
// - Easy to update and manage dependencies`
        }
    },
    {
        id: 16,
        question: "Why is the node_modules folder important?",
        category: "Environment",
        answer: {
            simple: "node_modules is where all the downloaded code packages are stored!",
            detailed: "node_modules folder contains all installed npm packages and their dependencies. It's where the actual code of libraries lives. Angular, TypeScript, and all other dependencies are stored here. It can be regenerated using 'npm install', so it's usually not committed to version control (added to .gitignore).",
            kidExplanation: "It's like your toy chest! All the toys (packages) you downloaded from the store (npm) are kept in this chest. If the chest gets lost, you can buy the same toys again using your shopping list (package.json)!",
            example: `// Project structure
my-angular-app/
├── node_modules/          ← All packages stored here!
│   ├── @angular/
│   │   ├── core/
│   │   ├── common/
│   │   └── router/
│   ├── typescript/
│   ├── lodash/
│   └── ... (thousands of folders!)
├── src/
├── package.json          ← List of what you need
└── package-lock.json     ← Exact versions installed

// Why it's important:
// 1. Your app won't run without it
// 2. Contains ALL the code you import
// 3. Can be 100+ MB in size
// 4. Should be in .gitignore (don't commit it!)

// Regenerate it:
$ rm -rf node_modules
$ npm install    // Downloads everything again!

// In your code, you import from node_modules:
import { Component } from '@angular/core';
// Angular finds this in node_modules/@angular/core/`
        }
    },
    {
        id: 17,
        question: "What is package.json?",
        category: "Environment",
        answer: {
            simple: "package.json is a file that lists all the packages your project needs and project settings!",
            detailed: "package.json is the heart of a Node.js project. It contains metadata (name, version, description), dependencies (packages needed), devDependencies (packages needed for development only), scripts (commands you can run), and configuration. It's like a blueprint for your project.",
            kidExplanation: "It's your project's recipe card! It says what ingredients (packages) you need, what the recipe is called (name), and instructions (scripts) for making it!",
            example: `// package.json
{
  // Project info
  "name": "my-awesome-app",
  "version": "1.0.0",
  "description": "An awesome Angular app",

  // Scripts - shortcuts you can run
  "scripts": {
    "start": "ng serve",           // npm start
    "build": "ng build",            // npm run build
    "test": "ng test",              // npm test
    "lint": "ng lint"               // npm run lint
  },

  // Packages needed to run the app
  "dependencies": {
    "@angular/core": "^16.0.0",
    "@angular/router": "^16.0.0",
    "rxjs": "^7.8.0"
  },

  // Packages needed only for development
  "devDependencies": {
    "@angular/cli": "^16.0.0",
    "typescript": "~5.0.0",
    "karma": "~6.4.0"
  }
}

// When someone clones your project:
$ git clone your-repo
$ cd your-repo
$ npm install    // Reads package.json and installs everything!`
        }
    },
    {
        id: 18,
        question: "What is TypeScript?",
        category: "TypeScript",
        answer: {
            simple: "TypeScript is JavaScript with superpowers - it adds types to catch errors before running code!",
            detailed: "TypeScript is a superset of JavaScript that adds static typing, interfaces, classes, and other features. It compiles to plain JavaScript. Angular is built with TypeScript. It helps catch errors at development time rather than runtime, provides better IDE support, and makes code more maintainable.",
            kidExplanation: "JavaScript is like saying 'Give me a toy'. TypeScript is like saying 'Give me a RED CAR toy'. It's more specific so there are fewer mistakes!",
            example: `// JavaScript - No type checking
function addNumbers(a, b) {
  return a + b;
}
addNumbers(5, "10");     // Returns "510" - BUG! No error!

// TypeScript - Type checking!
function addNumbers(a: number, b: number): number {
  return a + b;
}
addNumbers(5, "10");     // ERROR! Can't pass string!
addNumbers(5, 10);       // OK! Returns 15

// TypeScript features:

// 1. Types
let name: string = "Alice";
let age: number = 25;
let isActive: boolean = true;

// 2. Interfaces
interface User {
  name: string;
  age: number;
  email: string;
}

const user: User = {
  name: "Bob",
  age: 30,
  email: "bob@example.com"
};

// 3. Classes
class Car {
  constructor(public brand: string, public speed: number) {}

  accelerate(): void {
    this.speed += 10;
  }
}

// 4. Generics
function getFirst<T>(array: T[]): T {
  return array[0];
}

// TypeScript compiles to JavaScript
// Your browser runs the JavaScript version`
        }
    },
    {
        id: 19,
        question: "What is the need for Angular CLI?",
        category: "Tools",
        answer: {
            simple: "Angular CLI is a command-line tool that helps you create, develop, and build Angular apps quickly!",
            detailed: "Angular CLI (Command Line Interface) is an official tool for Angular development. It scaffolds projects, generates components/services/modules, sets up testing, handles building and bundling, manages dependencies, and provides development server. It enforces best practices and saves time.",
            kidExplanation: "CLI is like a magic wand! Instead of creating folders and files by hand, you just say 'make me a component!' and it creates everything you need instantly!",
            example: `// Create a new Angular project
$ ng new my-app
// Creates full project structure in seconds!

// Generate components
$ ng generate component header
$ ng g c footer           // shorthand
// Creates: .ts, .html, .css, .spec.ts files

// Generate service
$ ng generate service user
$ ng g s auth             // shorthand

// Generate module
$ ng generate module products --routing
$ ng g m admin --routing

// Run development server
$ ng serve
// Starts server at http://localhost:4200

// Build for production
$ ng build
// Creates optimized files in dist/ folder

// Run tests
$ ng test

// Without CLI, you'd have to:
// 1. Manually create every file
// 2. Set up webpack configuration
// 3. Configure TypeScript
// 4. Set up testing framework
// 5. Configure build scripts
// CLI does ALL of this for you!`
        }
    },
    {
        id: 20,
        question: "What are services in Angular?",
        category: "Services",
        answer: {
            simple: "Services are classes that hold business logic and data that you want to share across components!",
            detailed: "Services are singleton classes decorated with @Injectable() that provide specific functionality. They're used for data sharing, API calls, business logic, and utility functions. Services follow the Dependency Injection pattern - Angular creates one instance and injects it wherever needed.",
            kidExplanation: "Services are like helpers in a restaurant! The chef (component) focuses on cooking, but the helper (service) gets ingredients, cleans dishes, and handles other tasks. Many chefs can use the same helper!",
            example: `// user.service.ts - Create a service
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'  // Available throughout app
})
export class UserService {
  private apiUrl = 'https://api.example.com/users';

  constructor(private http: HttpClient) {}

  // Methods that components can use
  getUsers() {
    return this.http.get(this.apiUrl);
  }

  getUserById(id: number) {
    return this.http.get(\`\${this.apiUrl}/\${id}\`);
  }

  createUser(user: any) {
    return this.http.post(this.apiUrl, user);
  }
}

// Use service in component
export class UserListComponent {
  users: any[] = [];

  // Inject service
  constructor(private userService: UserService) {}

  ngOnInit() {
    // Use service methods
    this.userService.getUsers().subscribe(
      data => this.users = data
    );
  }
}

// Why services?
// 1. Share data between components
// 2. Keep components clean and focused
// 3. Reusable logic
// 4. Easier to test`
        }
    },
    {
        id: 21,
        question: "When would you use content projection?",
        category: "Advanced",
        answer: {
            simple: "Content projection lets you pass HTML content into a component from outside!",
            detailed: "Use content projection when you want to create reusable wrapper components that accept custom content. It's useful for creating layout components, modals, cards, tabs, where the container structure is fixed but inner content varies. Implemented using <ng-content>.",
            kidExplanation: "It's like a picture frame! The frame (component) stays the same, but you can put any picture (content) inside it!",
            example: `// card.component.ts - A reusable card
@Component({
  selector: 'app-card',
  template: \`
    <div class="card">
      <div class="card-header">
        <ng-content select="[header]"></ng-content>
      </div>
      <div class="card-body">
        <ng-content></ng-content>
      </div>
      <div class="card-footer">
        <ng-content select="[footer]"></ng-content>
      </div>
    </div>
  \`
})
export class CardComponent {}

// Use it with different content!
<app-card>
  <div header>
    <h2>User Profile</h2>
  </div>

  <p>Name: John Doe</p>
  <p>Email: john@example.com</p>

  <div footer>
    <button>Edit</button>
    <button>Delete</button>
  </div>
</app-card>

<app-card>
  <div header>
    <h2>Product Details</h2>
  </div>

  <img src="product.jpg">
  <p>Price: $99.99</p>

  <div footer>
    <button>Add to Cart</button>
  </div>
</app-card>

// Same component, different content!`
        }
    },
    {
        id: 22,
        question: "Explain content projection slots in Angular",
        category: "Advanced",
        answer: {
            simple: "Content projection slots are named placeholders where you can put specific content!",
            detailed: "Content projection slots use the select attribute on <ng-content> to create multiple projection areas. You can have a default slot (no select) and named slots (with select using CSS selectors, element names, or attributes). This allows fine-grained control over where content goes.",
            kidExplanation: "It's like a bento box with different compartments! Each compartment (slot) holds specific food (content) - rice here, vegetables there, dessert in this section!",
            example: `// modal.component.ts
@Component({
  selector: 'app-modal',
  template: \`
    <div class="modal">
      <div class="modal-header">
        <!-- Slot for header content -->
        <ng-content select="[modal-header]"></ng-content>
        <button (click)="close()">×</button>
      </div>

      <div class="modal-body">
        <!-- Default slot for body content -->
        <ng-content></ng-content>
      </div>

      <div class="modal-footer">
        <!-- Slot for footer content -->
        <ng-content select="[modal-footer]"></ng-content>
      </div>
    </div>
  \`
})
export class ModalComponent {
  close() { /* ... */ }
}

// Using the modal with slots
<app-modal>
  <!-- Goes to modal-header slot -->
  <h2 modal-header>Confirm Delete</h2>

  <!-- Goes to default slot (modal-body) -->
  <p>Are you sure you want to delete this item?</p>
  <p>This action cannot be undone.</p>

  <!-- Goes to modal-footer slot -->
  <div modal-footer>
    <button>Cancel</button>
    <button>Delete</button>
  </div>
</app-modal>

// You can also use CSS selectors:
<ng-content select=".special"></ng-content>  // Class
<ng-content select="h2"></ng-content>        // Element
<ng-content select="[role=button]"></ng-content>  // Attribute`
        }
    },
    {
        id: 23,
        question: "Why do we need ViewChild and ViewChildren in Angular?",
        category: "Component Interaction",
        answer: {
            simple: "ViewChild and ViewChildren let you access and control child components or elements from the parent!",
            detailed: "ViewChild and ViewChildren are decorators that provide access to child components, directives, or DOM elements in the component's template. ViewChild returns a single reference, ViewChildren returns a QueryList. They're used when you need to call methods on child components, access properties, or manipulate DOM elements directly.",
            kidExplanation: "Imagine you're a teacher (parent) and you need to talk to specific students (children) in your class. ViewChild finds one student, ViewChildren finds all students with something in common!",
            example: `// child.component.ts
@Component({
  selector: 'app-child',
  template: '<p>{{message}}</p>'
})
export class ChildComponent {
  message = 'Hello';

  sayHello() {
    console.log('Hello from child!');
  }
}

// parent.component.ts
import { ViewChild, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: \`
    <app-child #child1></app-child>
    <app-child #child2></app-child>
    <app-child #child3></app-child>
    <button (click)="callChild()">Call First Child</button>
    <button (click)="callAll()">Call All Children</button>
  \`
})
export class ParentComponent {
  // Get reference to first child
  @ViewChild('child1') firstChild!: ChildComponent;

  // Get references to ALL children
  @ViewChildren(ChildComponent) allChildren!: QueryList<ChildComponent>;

  callChild() {
    // Access first child's method
    this.firstChild.sayHello();
    // Change first child's property
    this.firstChild.message = 'Hi from parent!';
  }

  callAll() {
    // Loop through all children
    this.allChildren.forEach(child => {
      child.sayHello();
    });
  }
}

// Access DOM elements
@Component({
  template: '<input #myInput type="text">'
})
export class AppComponent {
  @ViewChild('myInput') inputElement!: ElementRef;

  focusInput() {
    this.inputElement.nativeElement.focus();
  }
}`
        }
    },
    {
        id: 24,
        question: "What is a template reference variable?",
        category: "Templates",
        answer: {
            simple: "Template reference variables (using #) let you reference elements or components in your template!",
            detailed: "Template reference variables are created using # in templates. They provide a way to reference a DOM element, component, or directive within the template. You can use them to access properties, call methods, or pass references to event handlers. They're local to the template.",
            kidExplanation: "It's like giving a nickname to something! Instead of saying 'that blue button over there', you say 'call it #myButton' and now you can talk about it easily!",
            example: `<!-- Reference DOM elements -->
<input #myInput type="text" placeholder="Enter name">
<button (click)="myInput.focus()">Focus Input</button>
<p>You typed: {{myInput.value}}</p>

<!-- Reference components -->
<app-child #childComp></app-child>
<button (click)="childComp.doSomething()">
  Call Child Method
</button>

<!-- Use with forms -->
<form #myForm="ngForm">
  <input name="username" ngModel required>
  <button [disabled]="!myForm.valid">Submit</button>
  <p>Form valid: {{myForm.valid}}</p>
</form>

<!-- Pass to methods -->
<input #nameInput type="text">
<button (click)="greet(nameInput.value)">Greet</button>

// Component
export class AppComponent {
  greet(name: string) {
    alert('Hello, ' + name + '!');
  }
}

<!-- Access element properties -->
<video #myVideo src="movie.mp4"></video>
<button (click)="myVideo.play()">Play</button>
<button (click)="myVideo.pause()">Pause</button>
<p>Current time: {{myVideo.currentTime}}</p>

<!-- Reference directives -->
<div #tooltip="matTooltip" matTooltip="Helpful text">
  Hover me!
</div>
<button (click)="tooltip.show()">Show Tooltip</button>`
        }
    },
    {
        id: 25,
        question: "Explain ContentChild and ContentChildren",
        category: "Component Interaction",
        answer: {
            simple: "ContentChild and ContentChildren access content projected INTO a component from outside!",
            detailed: "ContentChild and ContentChildren are decorators similar to ViewChild/ViewChildren, but they access content projected via <ng-content> rather than the component's own template. They're used to interact with projected content, call methods on projected components, or access projected elements.",
            kidExplanation: "ViewChild looks at your own toys (your template). ContentChild looks at toys someone else gave you (projected content)!",
            example: `// tab.component.ts - A single tab
@Component({
  selector: 'app-tab',
  template: '<div [hidden]="!active"><ng-content></ng-content></div>'
})
export class TabComponent {
  @Input() title: string;
  active = false;
}

// tabs.component.ts - Tab container
@Component({
  selector: 'app-tabs',
  template: \`
    <div class="tab-buttons">
      <button *ngFor="let tab of tabs; let i = index"
              (click)="selectTab(i)">
        {{tab.title}}
      </button>
    </div>
    <ng-content></ng-content>
  \`
})
export class TabsComponent implements AfterContentInit {
  // Access ALL projected tabs
  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;

  ngAfterContentInit() {
    // After projected content is initialized
    if (this.tabs.length > 0) {
      this.tabs.first.active = true;
    }
  }

  selectTab(index: number) {
    this.tabs.forEach((tab, i) => {
      tab.active = (i === index);
    });
  }
}

// Usage - tabs are PROJECTED content
<app-tabs>
  <app-tab title="Home">
    <p>Home content here</p>
  </app-tab>
  <app-tab title="Profile">
    <p>Profile content here</p>
  </app-tab>
  <app-tab title="Settings">
    <p>Settings content here</p>
  </app-tab>
</app-tabs>

// The TabsComponent can access and control
// the projected TabComponents using @ContentChildren!`
        }
    },
    {
        id: 26,
        question: "Differentiate between ViewChild, ViewChildren, ContentChild, and ContentChildren",
        category: "Component Interaction",
        answer: {
            simple: "View* queries access YOUR template. Content* queries access PROJECTED content. *Child gets one, *Children gets all!",
            detailed: "ViewChild/ViewChildren query elements defined in the component's own template. ContentChild/ContentChildren query elements projected via <ng-content>. The 'Child' versions return a single reference, 'Children' versions return a QueryList of all matches. Use View* for your template, Content* for projected content.",
            kidExplanation: "Think of your house: ViewChild finds things in YOUR room (your template). ContentChild finds things guests brought to YOUR room (projected content). 'Child' finds one thing, 'Children' finds all things!",
            example: `@Component({
  selector: 'app-parent',
  template: \`
    <!-- This is in the VIEW (own template) -->
    <h1 #myTitle>Title</h1>
    <app-child #child1></app-child>
    <app-child #child2></app-child>

    <!-- This receives CONTENT (projection) -->
    <ng-content></ng-content>
  \`
})
export class ParentComponent {
  // VIEW queries - access own template
  @ViewChild('myTitle')
  title!: ElementRef;  // Finds <h1> in own template

  @ViewChild('child1')
  firstChild!: ChildComponent;  // Finds first child in template

  @ViewChildren(ChildComponent)
  allViewChildren!: QueryList<ChildComponent>;  // Finds all in template

  // CONTENT queries - access projected content
  @ContentChild(CardComponent)
  projectedCard!: CardComponent;  // Finds projected card

  @ContentChildren(CardComponent)
  allProjectedCards!: QueryList<CardComponent>;  // Finds all projected cards
}

// Usage:
<app-parent>
  <!-- These are PROJECTED content -->
  <app-card>Card 1</app-card>
  <app-card>Card 2</app-card>
</app-parent>

// Summary:
┌─────────────────┬──────────────┬─────────────────┐
│                 │ Single Item  │ Multiple Items  │
├─────────────────┼──────────────┼─────────────────┤
│ Own Template    │ @ViewChild   │ @ViewChildren   │
├─────────────────┼──────────────┼─────────────────┤
│ Projected       │ @ContentChild│ @ContentChildren│
└─────────────────┴──────────────┴─────────────────┘`
        }
    },
    {
        id: 27,
        question: "What is { static: true } in ViewChild?",
        category: "Component Interaction",
        answer: {
            simple: "{ static: true } means the element is always there (not inside *ngIf) so you can access it earlier!",
            detailed: "The static option determines when the query is resolved. static: true resolves the query before change detection runs (in ngOnInit), but only works if the element is not behind structural directives (*ngIf, *ngFor). static: false (default) resolves after change detection (in ngAfterViewInit) and works with dynamic content.",
            kidExplanation: "It's like asking: Is this toy always on your shelf, or do you sometimes hide it in a box? If it's always there (static: true), you can grab it quickly. If it might be hidden (static: false), you need to wait and check!",
            example: `@Component({
  template: \`
    <!-- Always present - can use static: true -->
    <input #staticInput type="text">

    <!-- Inside *ngIf - must use static: false -->
    <div *ngIf="show">
      <input #dynamicInput type="text">
    </div>
  \`
})
export class AppComponent {
  show = true;

  // static: true - available in ngOnInit
  @ViewChild('staticInput', { static: true })
  staticInput!: ElementRef;

  // static: false - available in ngAfterViewInit
  @ViewChild('dynamicInput', { static: false })
  dynamicInput?: ElementRef;

  ngOnInit() {
    // ✅ Works - element always exists
    console.log(this.staticInput.nativeElement.value);

    // ❌ undefined - too early for dynamic content
    console.log(this.dynamicInput?.nativeElement.value);
  }

  ngAfterViewInit() {
    // ✅ Now it's available (if show is true)
    if (this.dynamicInput) {
      console.log(this.dynamicInput.nativeElement.value);
    }
  }
}

// When to use what:
// static: true  - Element not in *ngIf/*ngFor, need it early
// static: false - Element might be dynamic, can wait

// Default is static: false (since Angular 9)
@ViewChild('myElement') element!: ElementRef;  // static: false`
        }
    },
    {
        id: 28,
        question: "What is the importance of Angular component hooks/life cycles?",
        category: "Lifecycle Hooks",
        answer: {
            simple: "Lifecycle hooks let you run code at specific moments in a component's life - when it's created, updated, or destroyed!",
            detailed: "Lifecycle hooks provide visibility into key moments in a component's lifecycle. They allow you to perform initialization, react to changes, fetch data, clean up resources, and optimize performance. Understanding hooks is crucial for proper component behavior, avoiding memory leaks, and efficient change detection.",
            kidExplanation: "It's like stages in your day! Wake up (created), eat breakfast (initialized), play (active), dinner (update), sleep (destroyed). You do different things at different times!",
            example: `import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: '<p>{{data}}</p>'
})
export class DemoComponent implements OnInit, OnChanges, OnDestroy {
  @Input() data: string;
  private subscription: any;

  // 1. Constructor - Component is created
  constructor(private dataService: DataService) {
    console.log('Constructor: Component created');
    // Use for dependency injection only!
  }

  // 2. ngOnChanges - Input properties change
  ngOnChanges(changes: SimpleChanges) {
    console.log('Input changed:', changes);
    // React to @Input() changes
  }

  // 3. ngOnInit - Component initialized
  ngOnInit() {
    console.log('ngOnInit: Component ready');
    // Perfect for fetching data
    this.subscription = this.dataService.getData()
      .subscribe(data => this.data = data);
  }

  // 4. ngAfterViewInit - View initialized
  ngAfterViewInit() {
    console.log('View is ready');
    // Access @ViewChild elements here
  }

  // 5. ngOnDestroy - Component about to be destroyed
  ngOnDestroy() {
    console.log('Cleaning up');
    // IMPORTANT: Prevent memory leaks!
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

// Why they matter:
// ✅ Fetch data at the right time
// ✅ Clean up to prevent memory leaks
// ✅ React to input changes
// ✅ Optimize performance`
        }
    },
    {
        id: 29,
        question: "Explain Angular life cycle hooks in detail",
        category: "Lifecycle Hooks",
        answer: {
            simple: "Angular has 8 lifecycle hooks that run in a specific order as components are created, updated, and destroyed!",
            detailed: "The lifecycle hooks in order: 1) ngOnChanges - when input changes, 2) ngOnInit - after first ngOnChanges, 3) ngDoCheck - custom change detection, 4) ngAfterContentInit - after content projection, 5) ngAfterContentChecked - after content checked, 6) ngAfterViewInit - after view initialized, 7) ngAfterViewChecked - after view checked, 8) ngOnDestroy - before destruction.",
            kidExplanation: "It's like building a LEGO house: Get pieces (created), read instructions (init), build rooms (content), add roof (view), play with house (checked), clean up (destroy)!",
            example: `import {
  Component, OnInit, OnChanges, DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy,
  Input, SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  template: '<p>{{message}}</p><ng-content></ng-content>'
})
export class LifecycleComponent {
  @Input() name: string;
  message = 'Hello';

  // 1️⃣ Called when @Input properties change
  ngOnChanges(changes: SimpleChanges) {
    console.log('1. ngOnChanges', changes);
    // Use: React to input changes
    // Called: Before ngOnInit and when inputs change
  }

  // 2️⃣ Called once after first ngOnChanges
  ngOnInit() {
    console.log('2. ngOnInit');
    // Use: Initialization, fetch data, setup subscriptions
    // Called: Once after component created
    // Most commonly used hook!
  }

  // 3️⃣ Called during every change detection
  ngDoCheck() {
    console.log('3. ngDoCheck');
    // Use: Custom change detection logic
    // Called: Very frequently - be careful!
  }

  // 4️⃣ Called after content projected via <ng-content>
  ngAfterContentInit() {
    console.log('4. ngAfterContentInit');
    // Use: Access @ContentChild/@ContentChildren
    // Called: Once after content initialized
  }

  // 5️⃣ Called after content change detection
  ngAfterContentChecked() {
    console.log('5. ngAfterContentChecked');
    // Use: React to content changes
    // Called: After every check of projected content
  }

  // 6️⃣ Called after component's view initialized
  ngAfterViewInit() {
    console.log('6. ngAfterViewInit');
    // Use: Access @ViewChild/@ViewChildren, DOM manipulation
    // Called: Once after view initialized
  }

  // 7️⃣ Called after view change detection
  ngAfterViewChecked() {
    console.log('7. ngAfterViewChecked');
    // Use: React to view changes
    // Called: After every check of component view
  }

  // 8️⃣ Called before component is destroyed
  ngOnDestroy() {
    console.log('8. ngOnDestroy');
    // Use: Cleanup! Unsubscribe, clear timers
    // Called: Once before component removed
  }
}

// Execution order:
// Constructor → ngOnChanges → ngOnInit → ngDoCheck →
// ngAfterContentInit → ngAfterContentChecked →
// ngAfterViewInit → ngAfterViewChecked →
// (updates...) → ngOnDestroy`
        }
    },
    {
        id: 30,
        question: "Differentiate between constructor and ngOnInit()",
        category: "Lifecycle Hooks",
        answer: {
            simple: "Constructor is for dependency injection. ngOnInit is for initialization logic and data fetching!",
            detailed: "Constructor is a TypeScript/JavaScript feature called when the class is instantiated, before Angular initializes the component. It should only be used for dependency injection. ngOnInit is an Angular lifecycle hook called after the first change detection, when inputs are set. Use it for initialization logic, data fetching, and setup that depends on inputs.",
            kidExplanation: "Constructor is like being born - you just exist. ngOnInit is like your first day of school - you're ready to learn and do things!",
            example: `@Component({
  selector: 'app-user',
  template: '<p>{{user?.name}}</p>'
})
export class UserComponent implements OnInit {
  @Input() userId: number;
  user: User;

  // ❌ BAD - Don't do this in constructor
  constructor(private userService: UserService) {
    // At this point, @Input userId is undefined!
    console.log(this.userId);  // undefined!

    // ❌ Don't fetch data here
    // this.userService.getUser(this.userId).subscribe(...);

    // ✅ ONLY do dependency injection
    console.log('UserService injected:', this.userService);
  }

  // ✅ GOOD - Do initialization here
  ngOnInit() {
    // Now @Input values are available!
    console.log(this.userId);  // 123 ✓

    // ✅ Fetch data here
    this.userService.getUser(this.userId).subscribe(
      user => this.user = user
    );

    // ✅ Other initialization
    this.setupForm();
    this.loadSettings();
  }
}

// Timeline:
// 1. Constructor called
//    - Inputs NOT available yet
//    - Component not fully initialized
//    - Only inject dependencies
//
// 2. Angular sets @Input properties
//
// 3. ngOnInit called
//    - Inputs ARE available
//    - Component ready
//    - Do initialization work

// Rule of thumb:
// Constructor: Dependency Injection ONLY
// ngOnInit: Everything else`
        }
    },
    {
        id: 31,
        question: "How do you implement HTTP in Angular?",
        category: "HTTP",
        answer: {
            simple: "Use HttpClient from @angular/common/http to make API calls!",
            detailed: "Angular's HttpClient module provides methods for HTTP requests (GET, POST, PUT, DELETE). Import HttpClientModule in your app module, inject HttpClient service in your component/service, and use its methods which return Observables. Handle responses with subscribe(), use pipes for transformation, and implement error handling.",
            kidExplanation: "HttpClient is like sending letters! You write a letter (request) to your friend's house (API), they send a letter back (response), and you read it (subscribe)!",
            example: `// 1. Import HttpClientModule in app.module.ts
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule  // Add this!
  ]
})
export class AppModule { }

// 2. Create a service
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://api.example.com/users';

  constructor(private http: HttpClient) {}

  // GET request
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  // GET with ID
  getUser(id: number): Observable<User> {
    return this.http.get<User>(\`\${this.apiUrl}/\${id}\`);
  }

  // POST request
  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

  // PUT request
  updateUser(id: number, user: User): Observable<User> {
    return this.http.put<User>(\`\${this.apiUrl}/\${id}\`, user);
  }

  // DELETE request
  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(\`\${this.apiUrl}/\${id}\`);
  }

  // With headers
  getUserWithAuth(id: number): Observable<User> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer token123',
      'Content-Type': 'application/json'
    });
    return this.http.get<User>(\`\${this.apiUrl}/\${id}\`, { headers });
  }
}

// 3. Use in component
export class UserListComponent implements OnInit {
  users: User[] = [];
  loading = false;
  error = '';

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.loading = true;
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load users';
        this.loading = false;
        console.error(err);
      }
    });
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe({
      next: () => {
        this.users = this.users.filter(u => u.id !== id);
      },
      error: (err) => console.error(err)
    });
  }
}`
        }
    },
    {
        id: 32,
        question: "How do you pass data between components?",
        category: "Component Interaction",
        answer: {
            simple: "Use @Input to pass data from parent to child, @Output to send events from child to parent, and Services to share data between unrelated components!",
            detailed: "Multiple methods: 1) @Input/@Output for parent-child communication, 2) Services with BehaviorSubject for any components, 3) Route parameters for navigating with data, 4) Local storage for persistence, 5) State management (NgRx) for complex apps. Choose based on relationship and requirements.",
            kidExplanation: "Passing data is like sharing toys! @Input is when mom gives you a toy. @Output is when you tell mom 'I'm done!'. Services are like a toy box everyone can access!",
            example: `// Method 1: @Input and @Output (Parent ↔ Child)

// parent.component.ts
@Component({
  selector: 'app-parent',
  template: \`
    <h1>Parent</h1>
    <app-child
      [childMessage]="parentMessage"
      (messageEvent)="receiveMessage($event)">
    </app-child>
    <p>Message from child: {{messageFromChild}}</p>
  \`
})
export class ParentComponent {
  parentMessage = "Message from parent";
  messageFromChild = "";

  receiveMessage(message: string) {
    this.messageFromChild = message;
  }
}

// child.component.ts
@Component({
  selector: 'app-child',
  template: \`
    <p>{{childMessage}}</p>
    <button (click)="sendMessage()">Send to Parent</button>
  \`
})
export class ChildComponent {
  @Input() childMessage: string;
  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit("Hello from child!");
  }
}

// Method 2: Service (Any component ↔ Any component)

// data.service.ts
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private messageSource = new BehaviorSubject('default');
  currentMessage = this.messageSource.asObservable();

  changeMessage(message: string) {
    this.messageSource.next(message);
  }
}

// component-a.ts
export class ComponentA {
  constructor(private dataService: DataService) {}

  sendData() {
    this.dataService.changeMessage("Data from A");
  }
}

// component-b.ts
export class ComponentB implements OnInit {
  message: string;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.currentMessage.subscribe(
      msg => this.message = msg
    );
  }
}

// Method 3: Route Parameters

// Navigate with data
this.router.navigate(['/user', userId]);

// Receive data
constructor(private route: ActivatedRoute) {
  this.userId = this.route.snapshot.params['id'];
}`
        }
    },
    {
        id: 33,
        question: "What are pipes in Angular?",
        category: "Pipes",
        answer: {
            simple: "Pipes transform data for display - like formatting dates, currencies, or text!",
            detailed: "Pipes are simple functions that accept an input value and return a transformed value. They're used in templates with the | symbol. Angular provides built-in pipes (DatePipe, CurrencyPipe, UpperCasePipe, etc.) and allows custom pipes. They're pure by default (only run when input changes) for performance.",
            kidExplanation: "Pipes are like filters for water! Dirty water goes in, clean water comes out. Ugly text goes in, pretty formatted text comes out!",
            example: `<!-- Built-in Pipes -->

<!-- Uppercase/Lowercase -->
<p>{{ 'hello' | uppercase }}</p>  <!-- HELLO -->
<p>{{ 'WORLD' | lowercase }}</p>  <!-- world -->

<!-- Date formatting -->
<p>{{ today | date }}</p>  <!-- Jan 6, 2025 -->
<p>{{ today | date:'short' }}</p>  <!-- 1/6/25, 10:30 AM -->
<p>{{ today | date:'fullDate' }}</p>  <!-- Monday, January 6, 2025 -->

<!-- Currency -->
<p>{{ 1234.56 | currency }}</p>  <!-- $1,234.56 -->
<p>{{ 1234.56 | currency:'EUR' }}</p>  <!-- €1,234.56 -->

<!-- Decimal/Number -->
<p>{{ 3.14159 | number:'1.2-2' }}</p>  <!-- 3.14 -->

<!-- Percent -->
<p>{{ 0.25 | percent }}</p>  <!-- 25% -->

<!-- JSON (for debugging) -->
<pre>{{ user | json }}</pre>

<!-- Slice (substring/array) -->
<p>{{ 'Hello World' | slice:0:5 }}</p>  <!-- Hello -->

<!-- Async (for Observables/Promises) -->
<p>{{ user$ | async }}</p>

<!-- Chain multiple pipes -->
<p>{{ 'hello' | uppercase | slice:0:3 }}</p>  <!-- HEL -->

<!-- Custom Pipe -->
// reverse.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
  transform(value: string): string {
    return value.split('').reverse().join('');
  }
}

<!-- Use custom pipe -->
<p>{{ 'Angular' | reverse }}</p>  <!-- ralugnA -->`
        }
    },
    {
        id: 34,
        question: "Can you give examples of inbuilt Angular pipes?",
        category: "Pipes",
        answer: {
            simple: "Angular has many built-in pipes: DatePipe, CurrencyPipe, UpperCasePipe, LowerCasePipe, DecimalPipe, PercentPipe, JsonPipe, SlicePipe, AsyncPipe!",
            detailed: "Common built-in pipes: DatePipe (format dates), CurrencyPipe (format currency), DecimalPipe (format numbers), PercentPipe (format percentages), UpperCasePipe/LowerCasePipe/TitleCasePipe (text case), SlicePipe (substring/array slice), JsonPipe (JSON stringify), AsyncPipe (unwrap Observables/Promises), KeyValuePipe (iterate objects).",
            kidExplanation: "Angular gives you a toolbox of formatters! Each pipe is a different tool - one makes text BIG, one makes numbers into money $$$, one makes dates pretty!",
            example: `// Component data
export class AppComponent {
  // Dates
  today = new Date();
  birthday = new Date(2000, 5, 15);

  // Numbers
  price = 1234.567;
  score = 0.85;
  pi = 3.14159265359;

  // Text
  name = 'angular pipes';

  // Arrays/Objects
  items = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
  user = { name: 'John', age: 30, city: 'NYC' };

  // Observable
  user$ = this.userService.getUser();
}

<!-- Template examples -->

<!-- 1. DatePipe -->
<p>{{ today | date }}</p>
<p>{{ today | date:'short' }}</p>
<p>{{ today | date:'dd/MM/yyyy' }}</p>
<p>{{ birthday | date:'longDate' }}</p>

<!-- 2. CurrencyPipe -->
<p>{{ price | currency }}</p>  <!-- $1,234.57 -->
<p>{{ price | currency:'EUR' }}</p>  <!-- €1,234.57 -->
<p>{{ price | currency:'GBP':'symbol':'1.2-2' }}</p>  <!-- £1,234.57 -->

<!-- 3. DecimalPipe -->
<p>{{ pi | number }}</p>  <!-- 3.142 -->
<p>{{ pi | number:'1.0-2' }}</p>  <!-- 3.14 -->
<p>{{ pi | number:'3.1-5' }}</p>  <!-- 003.14159 -->

<!-- 4. PercentPipe -->
<p>{{ score | percent }}</p>  <!-- 85% -->
<p>{{ score | percent:'1.2-2' }}</p>  <!-- 85.00% -->

<!-- 5. Case pipes -->
<p>{{ name | uppercase }}</p>  <!-- ANGULAR PIPES -->
<p>{{ name | lowercase }}</p>  <!-- angular pipes -->
<p>{{ name | titlecase }}</p>  <!-- Angular Pipes -->

<!-- 6. SlicePipe -->
<p>{{ name | slice:0:7 }}</p>  <!-- angular -->
<p>{{ items | slice:1:3 | json }}</p>  <!-- ["banana","cherry"] -->

<!-- 7. JsonPipe (for debugging) -->
<pre>{{ user | json }}</pre>
<!-- {
  "name": "John",
  "age": 30,
  "city": "NYC"
} -->

<!-- 8. AsyncPipe (unwraps Observables) -->
<p>{{ user$ | async | json }}</p>

<!-- 9. KeyValuePipe (for objects) -->
<div *ngFor="let item of user | keyvalue">
  {{ item.key }}: {{ item.value }}
</div>`
        }
    },
    {
        id: 35,
        question: "How do you write a custom pipe?",
        category: "Pipes",
        answer: {
            simple: "Create a class with @Pipe decorator and implement PipeTransform interface!",
            detailed: "To create a custom pipe: 1) Create a class with @Pipe decorator specifying the name, 2) Implement PipeTransform interface with transform() method, 3) Add pipe to module declarations, 4) Use in templates with | pipeName. Pipes can accept parameters and can be pure (default) or impure.",
            kidExplanation: "It's like creating your own toy transformer! You tell it what to transform (input), how to transform it (transform method), and give it a name so you can use it!",
            example: `// 1. Generate pipe using CLI
$ ng generate pipe reverse
// or
$ ng g p reverse

// 2. Implement the pipe
// reverse.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'  // Use in template as {{ value | reverse }}
})
export class ReversePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return value;
    return value.split('').reverse().join('');
  }
}

<!-- Use in template -->
<p>{{ 'Hello' | reverse }}</p>  <!-- olleH -->

// Example 2: Pipe with parameters
// truncate.pipe.ts
@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit: number = 10, trail: string = '...'): string {
    if (!value) return value;
    return value.length > limit
      ? value.substring(0, limit) + trail
      : value;
  }
}

<!-- Use with parameters -->
<p>{{ longText | truncate:20:'...' }}</p>
<p>{{ longText | truncate:50 }}</p>

// Example 3: Filter pipe
// filter.pipe.ts
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string, property: string): any[] {
    if (!items) return [];
    if (!searchText) return items;

    searchText = searchText.toLowerCase();
    return items.filter(item => {
      return item[property].toLowerCase().includes(searchText);
    });
  }
}

<!-- Use in template -->
<input [(ngModel)]="searchTerm" placeholder="Search">
<div *ngFor="let user of users | filter:searchTerm:'name'">
  {{ user.name }}
</div>

// Example 4: Impure pipe (runs on every change)
@Pipe({
  name: 'filterImpure',
  pure: false  // Runs on every change detection
})
export class FilterImpurePipe implements PipeTransform {
  // Same as above but checks every time
}

// 3. Add to module
@NgModule({
  declarations: [
    ReversePipe,
    TruncatePipe,
    FilterPipe
  ]
})
export class AppModule { }`
        }
    },
    {
        id: 36,
        question: "What is RxJS and why is it needed?",
        category: "RxJS",
        answer: {
            simple: "RxJS is a library for handling async data streams - like user clicks, HTTP requests, or timers!",
            detailed: "RxJS (Reactive Extensions for JavaScript) is a library for reactive programming using Observables. It makes it easier to compose asynchronous or callback-based code. Angular uses RxJS extensively for HTTP, forms, routing, and events. It provides operators for transforming, filtering, combining, and managing data streams.",
            kidExplanation: "Imagine a water pipe where toys float by. RxJS helps you watch the pipe (subscribe), grab toys you want (filter), change toys (map), and stop watching (unsubscribe)!",
            example: `import { Observable, of, from, interval } from 'rxjs';
import { map, filter, debounceTime } from 'rxjs/operators';

// 1. Creating Observables

// From a value
const obs1$ = of(1, 2, 3);

// From an array
const obs2$ = from([1, 2, 3]);

// From events
const clicks$ = fromEvent(button, 'click');

// Timer/Interval
const timer$ = interval(1000);  // Emits every second

// 2. Using in Angular

// HTTP requests return Observables
this.http.get('/api/users').subscribe(
  data => console.log(data)
);

// Form value changes
this.myForm.valueChanges.subscribe(
  value => console.log('Form changed:', value)
);

// Search with debounce (wait for user to stop typing)
searchInput.valueChanges.pipe(
  debounceTime(300),  // Wait 300ms
  distinctUntilChanged(),  // Only if changed
  switchMap(term => this.searchService.search(term))
).subscribe(results => this.results = results);

// 3. Why it's needed

// ❌ Without RxJS (callback hell)
fetchUser(userId, (user) => {
  fetchPosts(user.id, (posts) => {
    fetchComments(posts[0].id, (comments) => {
      // Deep nesting!
    });
  });
});

// ✅ With RxJS (clean and composable)
this.userService.getUser(userId).pipe(
  switchMap(user => this.postService.getPosts(user.id)),
  switchMap(posts => this.commentService.getComments(posts[0].id))
).subscribe(comments => console.log(comments));

// 4. Common use cases in Angular
// - HTTP requests
// - Form validation
// - Search with debounce
// - Real-time data updates
// - Event handling
// - State management`
        }
    },
    {
        id: 37,
        question: "What are observables and observers?",
        category: "RxJS",
        answer: {
            simple: "Observable is a data stream. Observer is someone watching that stream and reacting to data!",
            detailed: "Observable is a lazy collection of values over time. It's like a stream that can emit data, errors, or completion. Observer is an object with next(), error(), and complete() methods that consume values from an Observable. The observer subscribes to the observable to start receiving values.",
            kidExplanation: "Observable is like a YouTube channel posting videos. Observer is like you watching the channel - you watch (subscribe), see new videos (next), handle errors (error), and when they stop posting (complete)!",
            example: `import { Observable, Observer } from 'rxjs';

// Creating an Observable
const myObservable$ = new Observable(observer => {
  // Emit values
  observer.next(1);
  observer.next(2);
  observer.next(3);

  // Emit error (optional)
  // observer.error('Something went wrong!');

  // Complete (no more values)
  observer.complete();

  // Cleanup function
  return () => {
    console.log('Observable unsubscribed');
  };
});

// Creating an Observer
const myObserver: Observer<number> = {
  next: (value) => console.log('Received:', value),
  error: (err) => console.error('Error:', err),
  complete: () => console.log('Done!')
};

// Subscribe (connect observer to observable)
const subscription = myObservable$.subscribe(myObserver);

// Output:
// Received: 1
// Received: 2
// Received: 3
// Done!

// Shorthand subscription (most common)
myObservable$.subscribe({
  next: value => console.log(value),
  error: err => console.error(err),
  complete: () => console.log('Complete')
});

// Even shorter (just next)
myObservable$.subscribe(value => console.log(value));

// Real-world example: HTTP request
this.http.get('/api/users').subscribe({
  next: (users) => {
    this.users = users;  // Handle data
  },
  error: (err) => {
    this.error = 'Failed to load users';  // Handle error
  },
  complete: () => {
    this.loading = false;  // Clean up
  }
});

// Key points:
// - Observable is lazy (doesn't run until subscribed)
// - Observer receives: data (next), errors (error), completion (complete)
// - Multiple observers can subscribe to same observable
// - Unsubscribe to prevent memory leaks

// Unsubscribe
subscription.unsubscribe();  // Stop receiving values`
        }
    },
    {
        id: 38,
        question: "What is a stream in RxJS?",
        category: "RxJS",
        answer: {
            simple: "A stream is a sequence of data values over time - like a river of data flowing!",
            detailed: "A stream is a sequence of ongoing events ordered in time. In RxJS, Observables represent streams. Values can be emitted synchronously or asynchronously. Streams can represent user inputs, HTTP responses, timers, WebSocket messages, etc. You can transform, combine, and filter streams using operators.",
            kidExplanation: "A stream is like a conveyor belt at a factory! Items (data) keep coming on the belt, and you can watch them, grab ones you want, change them, or combine multiple belts!",
            example: `import { fromEvent, interval, merge } from 'rxjs';
import { map, filter, debounceTime, scan } from 'rxjs/operators';

// 1. Stream of mouse clicks
const clicks$ = fromEvent(document, 'click');
clicks$.subscribe(event => console.log('Clicked!', event));

// 2. Stream of time (every second)
const timer$ = interval(1000);
timer$.subscribe(count => console.log('Second:', count));

// 3. Stream of input changes
const input = document.querySelector('#search');
const search$ = fromEvent(input, 'input').pipe(
  map((event: any) => event.target.value),  // Extract value
  debounceTime(300),  // Wait for pause in typing
  filter(text => text.length > 2)  // Only if 3+ chars
);
search$.subscribe(searchTerm => console.log('Search:', searchTerm));

// 4. Transforming streams

// Stream of numbers: 1, 2, 3, 4, 5...
const numbers$ = interval(1000);

// Transform: multiply by 2
const doubled$ = numbers$.pipe(
  map(n => n * 2)
);
// Emits: 0, 2, 4, 6, 8...

// Filter: only even numbers
const evens$ = numbers$.pipe(
  filter(n => n % 2 === 0)
);
// Emits: 0, 2, 4, 6...

// Accumulate: running total
const total$ = numbers$.pipe(
  scan((acc, curr) => acc + curr, 0)
);
// Emits: 0, 1, 3, 6, 10, 15...

// 5. Combining streams
const clicks$ = fromEvent(button1, 'click').pipe(map(() => 1));
const clicks2$ = fromEvent(button2, 'click').pipe(map(() => -1));

const merged$ = merge(clicks$, clicks2$).pipe(
  scan((count, val) => count + val, 0)
);
// Counts up when button1 clicked, down when button2 clicked

// 6. Real Angular example
export class SearchComponent {
  searchTerm$ = new Subject<string>();
  results$: Observable<any[]>;

  constructor(private searchService: SearchService) {
    // Stream of search results
    this.results$ = this.searchTerm$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term => this.searchService.search(term))
    );
  }

  onSearch(term: string) {
    this.searchTerm$.next(term);  // Push to stream
  }
}

<!-- In template -->
<input (input)="onSearch($event.target.value)">
<div *ngFor="let result of results$ | async">
  {{ result.name }}
</div>`
        }
    },
    {
        id: 39,
        question: "What is the use of subscribe in RxJS?",
        category: "RxJS",
        answer: {
            simple: "subscribe() starts the Observable and lets you react to emitted values!",
            detailed: "subscribe() is how you consume values from an Observable. It activates the Observable (they're lazy by default), provides callbacks for handling emitted values, errors, and completion, and returns a Subscription object for unsubscribing. Without subscribe(), the Observable doesn't execute.",
            kidExplanation: "subscribe() is like turning on a TV! The TV show (Observable) is there, but nothing happens until you press the ON button (subscribe) and start watching!",
            example: `import { Observable, of } from 'rxjs';

// Create an Observable
const numbers$ = of(1, 2, 3, 4, 5);

// ❌ Nothing happens! Observable is lazy
numbers$;  // No output

// ✅ Subscribe to activate it
numbers$.subscribe(num => console.log(num));
// Output: 1, 2, 3, 4, 5

// Subscribe with all callbacks
numbers$.subscribe({
  next: (value) => console.log('Value:', value),      // For each value
  error: (err) => console.error('Error:', err),       // On error
  complete: () => console.log('Completed!')           // When done
});

// Shorthand (common in simple cases)
numbers$.subscribe(value => console.log(value));

// Real examples:

// 1. HTTP Request
this.http.get<User[]>('/api/users').subscribe({
  next: (users) => {
    this.users = users;
    console.log('Users loaded:', users.length);
  },
  error: (err) => {
    this.errorMessage = 'Failed to load users';
    console.error(err);
  },
  complete: () => {
    this.isLoading = false;
  }
});

// 2. Form Value Changes
this.myForm.valueChanges.subscribe(value => {
  console.log('Form changed:', value);
  this.validateForm(value);
});

// 3. Route Params
this.route.params.subscribe(params => {
  const id = params['id'];
  this.loadUser(id);
});

// 4. Custom Observable
const countdown$ = new Observable<number>(observer => {
  let count = 10;
  const interval = setInterval(() => {
    if (count > 0) {
      observer.next(count);
      count--;
    } else {
      observer.complete();
      clearInterval(interval);
    }
  }, 1000);
});

countdown$.subscribe({
  next: (n) => console.log(n),
  complete: () => console.log('Blast off! 🚀')
});

// Important: Store subscription for cleanup
export class MyComponent implements OnDestroy {
  private subscription: Subscription;

  ngOnInit() {
    this.subscription = this.dataService.getData()
      .subscribe(data => this.data = data);
  }

  ngOnDestroy() {
    // Clean up to prevent memory leaks!
    this.subscription.unsubscribe();
  }
}

// Or use async pipe (auto-unsubscribes)
export class MyComponent {
  data$ = this.dataService.getData();
}
<!-- Template -->
<div *ngIf="data$ | async as data">
  {{ data }}
</div>`
        }
    },
    {
        id: 40,
        question: "How do you unsubscribe from a stream?",
        category: "RxJS",
        answer: {
            simple: "Call .unsubscribe() on the subscription to stop receiving values!",
            detailed: "Several methods: 1) Manual: Store subscription and call unsubscribe() in ngOnDestroy, 2) Async pipe: Automatically unsubscribes, 3) take/takeUntil operators: Auto-complete after condition, 4) first/takeWhile operators, 5) SubSink or takeUntilDestroyed (Angular 16+). Always unsubscribe to prevent memory leaks.",
            kidExplanation: "Unsubscribing is like unsubscribing from a YouTube channel! You stop getting notifications and it frees up space in your brain (memory)!",
            example: `import { Subscription, Subject, interval } from 'rxjs';
import { takeUntil, take, takeWhile, first } from 'rxjs/operators';

// Method 1: Manual Unsubscribe (most common)
export class MyComponent implements OnDestroy {
  private subscription: Subscription;

  ngOnInit() {
    this.subscription = interval(1000).subscribe(
      n => console.log(n)
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();  // Clean up!
  }
}

// Multiple subscriptions
export class MyComponent implements OnDestroy {
  private subscriptions = new Subscription();

  ngOnInit() {
    // Add multiple subscriptions
    this.subscriptions.add(
      this.service1.getData().subscribe(d => {})
    );
    this.subscriptions.add(
      this.service2.getData().subscribe(d => {})
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();  // Unsubscribes all!
  }
}

// Method 2: Async Pipe (automatic!)
export class MyComponent {
  data$ = this.dataService.getData();
  // No need to unsubscribe!
}
<!-- Template -->
<div *ngIf="data$ | async as data">
  {{ data }}
</div>

// Method 3: takeUntil operator (elegant!)
export class MyComponent implements OnDestroy {
  private destroy$ = new Subject<void>();

  ngOnInit() {
    this.service.getData().pipe(
      takeUntil(this.destroy$)  // Auto-complete when destroy$ emits
    ).subscribe(data => this.data = data);

    // Multiple subscriptions, one destroy$
    this.service2.getData().pipe(
      takeUntil(this.destroy$)
    ).subscribe(data => {});
  }

  ngOnDestroy() {
    this.destroy$.next();      // Emit to complete all
    this.destroy$.complete();  // Clean up subject
  }
}

// Method 4: take operators (auto-complete)

// Take only first value
this.http.get('/api/data').pipe(
  first()  // Completes after first emission
).subscribe(data => {});

// Take specific number
interval(1000).pipe(
  take(5)  // Only 5 values, then complete
).subscribe(n => console.log(n));
// Emits: 0, 1, 2, 3, 4, then completes

// Take while condition is true
interval(1000).pipe(
  takeWhile(n => n < 5)  // Stop when condition false
).subscribe(n => console.log(n));

// Method 5: takeUntilDestroyed (Angular 16+)
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

export class MyComponent {
  private destroyRef = inject(DestroyRef);

  ngOnInit() {
    this.service.getData().pipe(
      takeUntilDestroyed(this.destroyRef)  // Auto-cleanup!
    ).subscribe(data => this.data = data);
  }
}

// When to unsubscribe:
// ✅ Always: interval, timer, custom observables
// ✅ Always: Long-lived services (shared state)
// ❓ Optional: HTTP requests (auto-complete)
// ❓ Optional: Router events
// ❌ Never needed: Async pipe (auto-handles it)`
        }
    },
    {
        id: 41,
        question: "What are RxJS operators?",
        category: "RxJS",
        answer: {
            simple: "Operators are functions that transform, filter, combine, or manipulate data streams!",
            detailed: "RxJS operators are pure functions that enable functional programming style for manipulating streams. They take an Observable, perform an operation, and return a new Observable. Common categories: Creation (of, from), Transformation (map, mergeMap), Filtering (filter, take), Combination (merge, concat), Error Handling (catchError, retry), Utility (tap, delay). Use .pipe() to chain operators.",
            kidExplanation: "Operators are like kitchen tools! A strainer (filter) removes things you don't want, a mixer (map) transforms ingredients, a combiner (merge) puts things together!",
            example: `import { of, from, interval, fromEvent } from 'rxjs';
import {
  map, filter, tap, take, debounceTime,
  switchMap, mergeMap, catchError, retry,
  distinctUntilChanged, scan
} from 'rxjs/operators';

// 1. TRANSFORMATION OPERATORS

// map: Transform each value
of(1, 2, 3).pipe(
  map(n => n * 2)
).subscribe(console.log);
// Output: 2, 4, 6

// mergeMap: Transform to Observable and flatten
of(1, 2, 3).pipe(
  mergeMap(n => of(n, n * 2))
).subscribe(console.log);
// Output: 1, 2, 2, 4, 3, 6

// switchMap: Cancel previous, switch to new (great for searches!)
searchInput$.pipe(
  debounceTime(300),
  switchMap(term => this.http.get(\`/api/search?q=\${term}\`))
).subscribe(results => this.results = results);

// 2. FILTERING OPERATORS

// filter: Only values that pass test
of(1, 2, 3, 4, 5, 6).pipe(
  filter(n => n % 2 === 0)  // Only even numbers
).subscribe(console.log);
// Output: 2, 4, 6

// take: Only first N values
interval(1000).pipe(
  take(3)  // Only 3 values
).subscribe(console.log);
// Output: 0, 1, 2 (then completes)

// distinctUntilChanged: Skip duplicate consecutive values
of(1, 1, 2, 2, 2, 3, 3).pipe(
  distinctUntilChanged()
).subscribe(console.log);
// Output: 1, 2, 3

// debounceTime: Wait for silence
searchInput$.pipe(
  debounceTime(300)  // Wait 300ms after typing stops
).subscribe(value => this.search(value));

// 3. COMBINATION OPERATORS

// merge: Combine multiple streams
const clicks1$ = fromEvent(button1, 'click');
const clicks2$ = fromEvent(button2, 'click');
merge(clicks1$, clicks2$).subscribe(() => console.log('Clicked!'));

// concat: One after another
concat(
  of(1, 2, 3),
  of(4, 5, 6)
).subscribe(console.log);
// Output: 1, 2, 3, 4, 5, 6

// 4. ERROR HANDLING

// catchError: Handle errors gracefully
this.http.get('/api/data').pipe(
  catchError(error => {
    console.error('Error:', error);
    return of({ error: true });  // Return fallback
  })
).subscribe(data => this.data = data);

// retry: Retry on error
this.http.get('/api/data').pipe(
  retry(3)  // Retry up to 3 times
).subscribe(data => this.data = data);

// 5. UTILITY OPERATORS

// tap: Side effects (debugging, logging)
of(1, 2, 3).pipe(
  tap(n => console.log('Before:', n)),
  map(n => n * 2),
  tap(n => console.log('After:', n))
).subscribe();

// scan: Accumulate (like reduce)
of(1, 2, 3, 4, 5).pipe(
  scan((acc, curr) => acc + curr, 0)
).subscribe(console.log);
// Output: 1, 3, 6, 10, 15

// 6. REAL-WORLD EXAMPLES

// Search with debounce and switch
this.searchBox.valueChanges.pipe(
  debounceTime(300),              // Wait for typing pause
  distinctUntilChanged(),         // Only if changed
  filter(term => term.length > 2), // Min 3 chars
  switchMap(term => this.api.search(term)), // Switch to new search
  catchError(err => of([]))       // Handle errors
).subscribe(results => this.results = results);

// Infinite scroll
fromEvent(window, 'scroll').pipe(
  debounceTime(200),
  filter(() => this.isNearBottom()),
  tap(() => this.page++),
  switchMap(() => this.api.getItems(this.page))
).subscribe(items => this.items.push(...items));

// Auto-save with debounce
this.form.valueChanges.pipe(
  debounceTime(1000),  // Wait 1s after changes
  distinctUntilChanged(),
  switchMap(value => this.api.save(value)),
  catchError(err => {
    this.showError('Save failed');
    return of(null);
  })
).subscribe(() => this.showSuccess('Saved!'));`
        }
    },
    {
        id: 42,
        question: "What are commonly used RxJS operators?",
        category: "RxJS",
        answer: {
            simple: "Most used: map, filter, tap, switchMap, catchError, debounceTime, take, takeUntil, combineLatest, merge!",
            detailed: "Commonly used operators by category: Transformation (map, switchMap, mergeMap, concatMap), Filtering (filter, take, takeUntil, debounceTime, distinctUntilChanged), Combination (combineLatest, merge, concat, forkJoin), Error Handling (catchError, retry, retryWhen), Utility (tap, delay, finalize), Creation (of, from, interval). Choose based on use case.",
            kidExplanation: "These are like your favorite toys you play with every day! Some you use to change things (map), some to wait (debounceTime), some to fix mistakes (catchError)!",
            example: `import { of, interval, combineLatest, forkJoin } from 'rxjs';
import {
  map, filter, tap, switchMap, mergeMap, concatMap,
  debounceTime, distinctUntilChanged, take, takeUntil,
  catchError, retry, finalize, delay, combineLatestWith
} from 'rxjs/operators';

// 1. map - Transform each value (MOST COMMON!)
this.http.get<User[]>('/api/users').pipe(
  map(users => users.filter(u => u.active))
).subscribe(activeUsers => this.users = activeUsers);

// 2. filter - Keep only values that pass test
numbers$.pipe(
  filter(n => n > 10)
).subscribe(bigNumbers => {});

// 3. tap - Side effects (logging, debugging)
this.http.get('/api/data').pipe(
  tap(data => console.log('Received:', data)),
  tap(() => this.isLoading = false)
).subscribe(data => this.data = data);

// 4. switchMap - Cancel previous, switch to new
// Perfect for search, navigation
this.searchTerm$.pipe(
  debounceTime(300),
  switchMap(term => this.api.search(term))
).subscribe(results => this.results = results);

// 5. mergeMap - Don't cancel, run in parallel
// Good for independent operations
this.users$.pipe(
  mergeMap(users =>
    users.map(user => this.api.getUserDetails(user.id))
  )
).subscribe(details => {});

// 6. concatMap - Queue operations
// Good when order matters
this.requests$.pipe(
  concatMap(req => this.api.process(req))
).subscribe();

// 7. debounceTime - Wait for silence
// Essential for search, auto-save
searchInput$.pipe(
  debounceTime(300)  // Wait 300ms after last keystroke
).subscribe(term => this.search(term));

// 8. distinctUntilChanged - Skip duplicates
form$.pipe(
  distinctUntilChanged()  // Only when value changes
).subscribe(value => this.onChange(value));

// 9. take - Take N values, then complete
this.api.getData().pipe(
  take(1)  // Only first value
).subscribe(data => {});

// 10. takeUntil - Complete when condition
private destroy$ = new Subject();

this.data$.pipe(
  takeUntil(this.destroy$)
).subscribe(data => this.data = data);

// 11. catchError - Handle errors gracefully
this.http.get('/api/data').pipe(
  catchError(err => {
    console.error(err);
    return of([]);  // Return empty array as fallback
  })
).subscribe(data => this.data = data);

// 12. retry - Retry on failure
this.http.get('/api/data').pipe(
  retry(3)  // Try up to 3 times
).subscribe(data => {});

// 13. finalize - Cleanup (always runs)
this.http.get('/api/data').pipe(
  finalize(() => this.isLoading = false)  // Runs on success or error
).subscribe(data => this.data = data);

// 14. combineLatest - Wait for all to emit
combineLatest([
  this.user$,
  this.settings$,
  this.permissions$
]).subscribe(([user, settings, permissions]) => {
  this.initialize(user, settings, permissions);
});

// 15. forkJoin - Wait for all to complete
forkJoin({
  users: this.api.getUsers(),
  posts: this.api.getPosts(),
  comments: this.api.getComments()
}).subscribe(({ users, posts, comments }) => {
  // All requests completed!
});

// Real-world combos:

// Search with all the bells and whistles
this.searchBox.valueChanges.pipe(
  debounceTime(300),           // Wait for pause
  distinctUntilChanged(),      // Only if changed
  filter(term => term.length > 2), // Min length
  tap(() => this.loading = true),  // Show loading
  switchMap(term =>
    this.api.search(term).pipe(
      catchError(err => {
        this.error = 'Search failed';
        return of([]);
      })
    )
  ),
  finalize(() => this.loading = false) // Hide loading
).subscribe(results => this.results = results);

// Load user with details
this.route.params.pipe(
  map(params => params['id']),       // Extract ID
  distinctUntilChanged(),            // Only if changed
  tap(() => this.loading = true),    // Show loading
  switchMap(id =>
    forkJoin({
      user: this.api.getUser(id),
      posts: this.api.getUserPosts(id),
      comments: this.api.getUserComments(id)
    }).pipe(
      retry(2),                        // Retry on error
      catchError(err => {
        this.error = 'Failed to load';
        return of(null);
      })
    )
  ),
  finalize(() => this.loading = false)
).subscribe(data => {
  if (data) {
    this.user = data.user;
    this.posts = data.posts;
    this.comments = data.comments;
  }
});`
        }
    }
];

// State management
let exploredQuestions = new Set();

// DOM Elements
const questionsContainer = document.getElementById('questionsContainer');
const answerModal = document.getElementById('answerModal');
const modalQuestion = document.getElementById('modalQuestion');
const modalAnswer = document.getElementById('modalAnswer');
const closeModal = document.getElementById('closeModal');
const searchInput = document.getElementById('searchInput');
const totalQuestions = document.getElementById('totalQuestions');
const answeredQuestions = document.getElementById('answeredQuestions');
const progressPercent = document.getElementById('progressPercent');

// Initialize
function init() {
    totalQuestions.textContent = questions.length;
    renderQuestions(questions);
    setupEventListeners();
    updateStats();
}

// Render questions
function renderQuestions(questionsToRender) {
    questionsContainer.innerHTML = '';

    questionsToRender.forEach((q, index) => {
        const card = document.createElement('div');
        card.className = `question-card ${exploredQuestions.has(q.id) ? 'explored' : ''}`;
        card.style.animationDelay = `${index * 0.05}s`;

        card.innerHTML = `
            <div class="question-number">${q.id}</div>
            <div class="question-text">${q.question}</div>
            <span class="question-tag">${q.category}</span>
        `;

        card.addEventListener('click', () => openModal(q));
        questionsContainer.appendChild(card);
    });
}

// Open modal with answer
function openModal(question) {
    exploredQuestions.add(question.id);
    updateStats();

    modalQuestion.textContent = `Q${question.id}: ${question.question}`;

    const answer = question.answer;
    modalAnswer.innerHTML = `
        <div class="answer-section" style="transform: translateY(20px);">
            <h3>📝 Simple Answer</h3>
            <p>${answer.simple}</p>
        </div>

        <div class="answer-section" style="transform: translateY(20px);">
            <h3>📚 Detailed Explanation</h3>
            <p>${answer.detailed}</p>
        </div>

        <div class="kid-explain">
            <strong>Explained Like You're 5:</strong><br>
            ${answer.kidExplanation}
        </div>

        <div class="answer-section" style="transform: translateY(20px);">
            <h3>💻 Code Example</h3>
            <pre class="code-block">${escapeHtml(answer.example)}</pre>
        </div>
    `;

    answerModal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Re-render questions to update explored state
    const searchTerm = searchInput.value.toLowerCase();
    const filtered = searchTerm ? filterQuestions(searchTerm) : questions;
    renderQuestions(filtered);
}

// Close modal
function closeModalFunc() {
    answerModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Search functionality
function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase();

    if (searchTerm.trim() === '') {
        renderQuestions(questions);
        return;
    }

    const filtered = filterQuestions(searchTerm);
    renderQuestions(filtered);
}

function filterQuestions(searchTerm) {
    return questions.filter(q =>
        q.question.toLowerCase().includes(searchTerm) ||
        q.category.toLowerCase().includes(searchTerm) ||
        q.answer.simple.toLowerCase().includes(searchTerm)
    );
}

// Update statistics
function updateStats() {
    const explored = exploredQuestions.size;
    const total = questions.length;
    const percent = Math.round((explored / total) * 100);

    answeredQuestions.textContent = explored;
    answeredQuestions.classList.add('updating');
    setTimeout(() => answeredQuestions.classList.remove('updating'), 500);

    progressPercent.textContent = `${percent}%`;
    progressPercent.classList.add('updating');
    setTimeout(() => progressPercent.classList.remove('updating'), 500);
}

// Setup event listeners
function setupEventListeners() {
    closeModal.addEventListener('click', closeModalFunc);

    answerModal.addEventListener('click', (e) => {
        if (e.target === answerModal) {
            closeModalFunc();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && answerModal.classList.contains('active')) {
            closeModalFunc();
        }
    });

    searchInput.addEventListener('input', handleSearch);
}

// Utility function
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Start the app
init();
