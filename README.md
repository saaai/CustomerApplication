# CustomerApplication

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


-----------------------------------------Learning -----------------------------------------------------------------------------
Folder Structure of CLI Project Angular 6 :
- Dist 
    - Dist folder is where the final compiled Java Script source code is. 
    - when the Project is compiled all the TS files are converted to JS.
    - The final output which we will take to production is all there in the dist folder.

- node_modules
    - whatever npm install we do, all those packages will get copied in this node_modules folder.

- e2e
    - end to end testing, this is where we will write our white box test. These white box tests will be fired on the source code.
    
- Src
    - Inside src folder we have something called app, where we will write all our source code.

- If you see the angular applications, it has 3 big technologies that work together.
    - Angular framework.
    - Type script which helps us to tranform into JS.
    - Node which is our packages manager.
        - So, for each one of these technologies it needs configuration files.
        - These JSON files which we see out in the project folder, Angular.json, package.json, tsconfig.json. these are all 3 configuration files for all these 3 technologies.
        - Angular - angular.json
        - Node - package.json
        - Typescript - tsconfig.json

- tslint.json file is used during the linting process, this process is used to check the source code for any errors. 
    Errors can be programmatic error or it can be stylistic errors. So, these checks are done during the coding phase itself.
    ex: if i write something in the code file during the coding phase itself it will say there is some error.
     
- Package.json 
    - Let's start looking at package.json, this is for node.
    - In package.json we can list down all our dependencies, and when we say "npm install"  it will install all the frameworks which are defined in the package.json
    - package.json has dependencies defined.
    - we can see something called as : dev dependencies
        - this dev dependencies are things which will not goto production.
        - these are used only during the development phase.
    - this package.json is having all the angular dependencies, becos of this only angular has been installed.

- tsconfig.json 
    - this file is for Typescript, to say the target folder after the ts is converted to js. 
    - how the compilation of the ts should take place.

- angular.json  
    - for angular purpose, the way angular has organised the project is as follows.
    - at the top we have app, inside the app we have the source code.
    - source root, says where is the src code in the project folder.
    - architect, says which kind of builders will run for which command.

- we will have a tsconfig.json file in the main folder of the project. 
    - in the app itself, we can have a tsconfig.json file.
    - tsconfig.app.json will take a lot of tsconfig.json file and also adds lots of spl of its.
    - we can have tsconfig.json file on the app and also we can tsconfig.app.json file for every project, so we can override it.
    - so, thats why we can see in the main root folder. we are having tsconfig.app.json and also tsconfig.json on the root.

- Now, when we ran "ng serve" it compiled in-memory. the angular application compiled in-memory and it ran the application.
    - what if i want to compile and create a dist folder for that we have proper command which is "ng build".
    - this "ng build" command will compile whatever that is there in the src folder and create the output in the dist folder and we can take this dist folder to production.

What is angular? what is the need of angular? architecture of angular? what goes inside the src folder?
- Angular is a binding framework. 
- It helps us bind the View and the Model. 
    - View (html) -----> Binding Code -------> Model (JavaScript Object)
- As a developer we have to write a lot of code which sends the data from the UI to model and from model to the UI.
- The code which binds the UI and model is very complex. In other words if the UI is having a tree view control tables right and JavaScript Object is also very complex then this binding code becomes complex and complex.
- So, angular says that dont worry about binding code I will handle it.
- If you look at angular.js website, they clearly says that (Model View whatever).
- Angular is a binding framework which binds the View and the Model.
- Ths binding code whatever you think about will be handled very easily by angular, sending the key events and raising the events back from the Object.

- How does Angular CLI organizes our project?
    - src folder at the top. src folder signifies the project. 
    - Inside the project src we can have "app" folder. this app can be erp application, hospital management application, inventory application.
    - Inside the project src we can have "multiple" app folders.
        - app, app1, app2, app3, app4.........
    - Inside "app" folder we have "component" and "module". 

Component:
- We said we have HTML UI and JavaScript Model and angular said that it will take care of the binding between UI and Model.
- Binding Code in the Angular is which binds the Model and UI is termed as "Component".
- This Component is that part of angular which actually recieves data from the UI / the events from the UI and sends data to the UI.
- So, you can think about we have View, we have Model, the binding code what is there in between you can term that as "Component".
- Normally, in an application you can have lot of view and lot of Components and lot of Models.
    - So, a group of Components is termed as Modules.
        ex: Module called as Accounting. In Accounting Module we can have below two Components:
                ----> Journal Component 
                ----> Voucher Component

        ex: Module called as Hospital Management System. In that we can have Components like :
                -----> Patients
                -----> Doctor's 
                |
                |
- So, at the top we have something called as Modules, the Modules group the Components.
- The "Component" bind the UI and the Model.
- So, the Component has the binding code of the UI and the Model.
- Component is the Heart of Angular.

- Components is the binding layer between UI and Model.
    - Inside app.component.ts, created variable named as title and it is assigned to Customer Application. We can consume this title on the UI using Expressions {{  }}.
    - Expressions help you to display values and properties of a Component on the UI. 
    - The good part about "Expressions" is it can be mixed nicely, with HTML. That's why lot of people also termed this as "Interpolation".
    
    - What is the thing that connects the app.component.html to app.component.ts? that the code behind / binding code of this app.component.html
        - So, that is done by something called as "Decorator". This Decorator defines what the app.component.ts can do / how it should works.
            
            ex: the below code is called decorator.
            
            @Component({ //In this Decorator there are 3 properties selector, templateUrl, styleurls
                  
                  selector: 'app-root',
                  templateUrl: './app/app.component.html', --------------> this tells that this AppComponent is tied/binded up with this HTML / UI. This templateUrl is the person which binds the Component and an HTML.
                  styleurls: ['./app/component.css'] ------------> tells us that this AppComponent is binded up with this css.
            })

- @Component is the Decorator of the class "AppComponent".Decorator
- @Component comes from the angular core. angular core is nothing but the core framework of angular.
    ex: import { component } from '@angular/core';
- In our package.json file we said that we had installed dependencies, one of the dependencies where we can get "component" is from the '@angular/core'.
    import { component } from '@angular/core'; ----> this code here says, from @angular/core that means from node_modules folder ---> angular folder ---> core folder ---> import component.

- This Component is nothing but the 'decorator'.
- If the import { component } is not there then the decorator part will show error.

Module:
- In our architecture we have said that we have an UI, Model, the UI and the Model is binded by a component. at this moment we dont have Model, later we will have Model.
- We have the View, Model, Component, and group of Components are clubed or grouped into something called as "Modules".
- Everything is a class, if you create an Component its a class, if you create a Module it is a class, if you create a Model it is a Class.
- if you see the Class there is a AppModule and on top of that there is a @NgModule.
- Remember, For Module the Decorator is @NgModule. For Component the Decorator is @Component.
- In this, @NgModule Decorator we have 2 Important properties for now we will concentrate on 2 Important properties.
    - declarations --> In this declarations we give all the Components which will be grouped in this AppModule.
        - If we have more than one Component that belongs to the same Module they can all be declared in this "declarations" property in the Module file.
        - First, we need to import our custom written component into Module and add it to the declarations property.
        - We can declare the start up Component separately, in a property called "bootstrap".
        - So, in Module this "declarations" is used to define which Components will be grouped together in One Module.
        ex: @NgModule({
                    declarations: [AppComponent, AppComponent1, AppComponent2,......],
                    imports: [BrowserModule],
                    providers: [],
                    bootstrap: [AppComponent]  ----> this bootstrap says out of all the declarations Components which is the start up component.
        })

- Also, we have to import { NgModule } from '@angular/core'; ----> without importing the Decorator @NgModule will not work.
- In order to group the Components, we need to define them in the "declarations", and before declaring we need to import those Components.
- We also, have something called as bootstrap property, where we define from the declared Custom Components which of the Component has to be Instantiated first(which is the start up Component).
    - So, the Startup Component is declared in the bootstrap.
    - And, also we need to import the @NgModule decorator, so we can start decorating.


Import and Export :
- we can see that we have an AppComponent and it is having "export class AppComponent". this AppComponent is consumed in the AppModule. Inorder to Consume any of the Components they need to be exported first and then imported where ever necessary.
- The AppComponent can only be consumed in the AppModule only if there is a "export".
- Remember that if we want import a class, we always need to export it first.

- Now, we have View and Model. The Connection between the View and the Model are done by Components. The Components are grouped by Using Modules.
- So, in declarations we define all the Components to be grouped into a Module. In bootstrap we define the start up Component.

- Now, when we talk about complicated applications, they have a lot of Modules.
    ex: we can have Stock Component, Purchase Component, Billing Component and everything gets grouped in to something called as "Inventory" Module.
        - So, we have Inventory Module. Inside that we have 3 Components. Stock Component, Purchase Component, Billing Component.

    ex: we can have Journal Component, Voucher Component and all these 2 Components can be grouped together into "Accounting Module".
    
    ex: you can have an About Us Component, Home Component, Index Component and all these 3 Components can be grouped together into "Home Module".
        - So, you can have lot of Modules. But angular needs to know from all of these Modules. which one is the start up Module?
            Ans: That is defined by a file called as "Main.ts"
                - In this Main.ts we need to first import the Component and we need to say here please bootstrap this module first.
                    "platformBrowserDynamic().bootstrapModule(AppComponent)"

        - Main.ts defines which is the start up module of a project.

- But now, someone has to go and invoke this Main.ts and this is done by "index.html"
- So, first thing what happens is the user loads the application the index.html starts and the index.html goes and he calls the Main.ts
    - The Main.ts then calls the AppModule by using the "platformBrowserDynamic".
    - The AppModule then goes and loads the AppComponent, by using the bootstrap property in the @NgModule Decorator.
    - Now, the AppComponent goes and loads the html becos the in the @Component Decorator the html file name is specified under the property "templateUrl".
    - and Now, the bindings start working.

- Now, if you see in the index.html there is a small element given in the body tag  called <app-root> </app-root>.
    note: <app-root> </app-root> this can be named whatever name we want.

- <app-root> </app-root> this is nothing but a "selector". Once, the html page has loaded, once this AppComponent has loaded this is that <app-root> </app-root> selector or section inside which the AppComponent linked html will run. 
    - So, if you see the AppComponent.ts we have property called "selector" in the @Component decorator.
        - So, in the "selector" we have defined that name as 
            ex: selectpr: app-root ---> any name can be given "myapp-root", "yourapp-root".

- This selector says that, load the templateUrl html specified in the @Component decorator, inside the index.html inside the selector.
- So, basically the Index.html invokes the Main.ts, the Main.ts invokes the AppModule, the AppModule invokes the AppComponent, the AppComponent invokes the linked templateUrl html, once the html is loaded by the AppComponent it gets loaded inside the "selector" defined in Index.html

- Selector also defines the thing where to load the html.

polyfills.ts:
- This is a framework which will be helpful to make our applications work with old Browsers. Where as helps new js to work with old browser.
- So, let's say you want to explore the new syntaxes of ES6 but those old browsers cannot parse the newer versions.
- this is where polyfills comes into picture.
- polyfills are not coming from angular, they are coming from core-js which is a third-party.
 
- Remember, Typescript, Node, polyfills these doesnt belong to angular.

WebPack Going Live:
- Going live, is not easy atleast in case of angular.
- There are series of steps that needs to be performed:
    1) We need to compile all the Typescript files and convert the each individual ts files into JavaScript files.
        -  Even the Components which we import from angular are also needed to be compiled to JavaScript and included as part of the build.
    2) Bundling:   
                - We know that AppComponent and AppModule use each other so rather than creating separate JS files we can create one big bundle.
                - For Main.ts we are want create another Bundle.
                - We would like to bundle things which are connected, because if we bundle them then we have to just make one call to the JavaScript file,
                    or else from the browser we have to make multiple calls to multiple JavaScript files.
                - So finally we need to do the bundling.
                - We need to take the CSS and html files and copy them into the bin / dist folder / final folder.

So, all these nice things are done by an open source tool called as "webpack package management".
    WebPack package management is a really nice open source framework which helps us to go and take our web applications bundle it and compress it and make it smaller in size
        and put it into a final folder / dist folder / bin folder.

Refer to the Screenshot: Screen Shot 2019-07-02 at 23.37.44.png in the project folder.

- This all packaging / bundling happens when we actually do "ng build", this is provided by angular cli.
- Whenever we do ng build / ng serve, all these bundling and packaging is done internally by webpack. So, internally angular cli does that.

