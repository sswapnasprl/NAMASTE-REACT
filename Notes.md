# Namaste React 🕵️‍♀️

SPA - Single Page Application

- Episode 1
    Push the first episode practice to git hub
    1. Make the existing application to git (git init  ----> This makes the existing application as git repository)
    2. create `main` as the main branch instead `master` (git branch -M main) - On github the default branch is main
    3. Create README.MD file
    4. Push all the code to github (git add .)
    5. Configure local git to remote 
        - add origin
        git remote add origin git@github.com:namastedev/namaste-react.git
        git remote add origin git@github.com:sswapnasprl/namaste-react.git
        - push the changes to `main` branch
            git push origin main


- Episode 2
    - NPM introduction - npmjs.com - its not `NODE PACKAGE MANAGER`
    - NPM doesn't have a full form
    - it manages packages but it doesn't stand for Node package manager, Interesting
    - its a repository for lot of packages,utilities, libraries.
    - when you try create-react-app -> it automatically has npm in it.
    - Lets add npm to our existing project.
    - Type `npm init` - it will ask you some qs provide ans and once it is done, it creates `package.json`
    - `package.json` is the configuration file for NPM.it keeps track of what version of package is installed and if there is a `caret` symbol in version it also installs minor updates.
    - WHY do we need it ????? because there are lot of dependencies, packages needed for project, package.json takes care of it like what version etc details
    - Now start installing dependencies to your project 
    - The most imp thing is `BUNDLER` [You have normal HTML, CSS, JS code, our whole code needs to be bundled, compressed, cached, minified, cleaned before it can be sent to PROD]
    - WEBPACK, PARCEL, VITE - These are bundlers - It packages your app or it bundles your app, so that it can be shift to PROD
    - `npm install -D parcel` - using parcel in current project.[ There are two types of dependencies, one is for development dependency and the other is for PROD dependency. So `-D` is for dev dependency. ]
    - it creates `package-lock.json` which keeps track of exact version that is being installed. - it locks the version and keeps the record if it, it keeps the track of all the exact version of the dependencies.
    - The most imp thing is, there is a hash value[integrity] which is for to have exact version of development to prod. so it works exactly the same as development.
    - `npm install -D parcel` - it also installs `node-modules` - it is all dependencies and its like a database.
    - Transitive dependency - your project has `parcel` dependency ->  `parcel` has its own dependency
    - Whatever you can regenerate, don't put it on github.
    - You can create `.gitignore` folder and keep that path of the file or folder that is not required to move to github.
    - `Now ignite our app`
        - `npx parcel index.html`
        - `npx` is for execution of package, `npm` is for installation of package.
        - after running `npx parcel index.html` it actually ignites your local app to server which is local host. `parcel` will create server for your app and your app will be available at localhost.
        - Now install `react` => `npm install react` or `npm i react` both are same
        - Install `react dom` => `npm install react-dom` 
        - After installing both `react` and `react dom` you can see them in `package.json` and `package-lock.json`.
        - now remove `CDN` links and add `import React from "react"` and `import ReactDOM from "react-dom"`. Meaning you are importing react from react which is in node_modules.
        - `Parcel` does below
            => Dev build
            => Local Server
            => `HMR` - Hot Module Replacement - It refreshes page automatically on the browser.
            => `parcel` uses `File Watching Algorithm` which is written in `C++`.
            => caching - Faster builds
            => Image Optimization
            => Minification files
            => Bundling files
            => Compressing files
            => Consistent hashing
            => Code splitting 
            => Differential bundling - to support older browsers
            => Diagnostic
            => Error Handling
            => HTTPS support as well
            => Tree shaking algorithm - remove unused code
            => Different dev and prod builds
            => `read more on parceljs.org`
        - `npx parcel build index.html` - to have prod build 
            - it compress all your code and keep in `dist` folder
            - every time when you update code, it reads from cache and dist folders to refresh browser
            - `parcel.cache and dist` folders can be regenerated.
        - `browserslist`
            - it is an npm package and it needs some configuration - read more here `browserlist.dev`  
            -  you can give country specific versions as well
            - last 2 Chrome versions 
            - last 2 Firefox versions
            - last 2 versions => last 2 versions of all the browsers 

 `With all this, now you've created your own "CREATE REACT APP" `    

- Episode 3
    - Instead of writing `npx parcel index.html` every time in terminal, lets create a script that will build our project.
    - go to `package.json` -> in `scripts` section add below code
        - "start": "parcel index.html"
        - "build": "parcel build index.html"   
        - Now you can run `npm run start` or `npm run build` => it will do the same thing      
        - `npm run start` or `npm start` both are same.

    - Now Start from scratch `lay the foundation`
        -   * React way of writing code to create `h1` element
            * The code looks ugly right
            * and also its very difficult to create h1 tag compared to HTML h1 tag creation
            * Hence the concept of JSX comes into picture
            * JSX is JS extension for creating react element
            * JSX is diff and React is diff both are not same    
        - `JSX` is a convention where you can merge these `HTML` and `JS` together.
        - `JSX` is not HTML in JS, its `HTML` like or `XML` like syntax
        - `JSX` is a syntax and `React Element` is an object.
        - `JSX` is transpiled before it reaches JS engine and `Parcel` - `Babel` does that for you.
        - `BABEL`
            - `Babel` is a JS package
            - `Babel` is installed by `Parcel`
            - `babel` converts the JSX code quickly that react can understand
            - `babel` is `transpiling` our code
            - `babel` is a JS compiler.
            - babeljs.io
        - `JSX` element converted into `core react` element and `core react` element gives js object which browser can understand.
        -  `JSX` code is getting converted by `babel` to `Browser-compatible JS code`
        -  `JSX` uses camel case for its attributes
        -  Read more about JSX attributes of all elements
        - If you are writing `JSX` in multiple lines, then wrap it inside (), because `babel` should understand starting and ending points of your `JSX`
        -  `babel` transpiles `JSX` to `core react` code. 
    - React Components
        - everything is a `component` in `react`
        - There are `2` types of components in `react`
            - `Class based` component - `OLD`
            - `Functional based` component - `NEW`
        - What is `React Functional Component`?
            - its just a JS function which returns some `JSX` element
            - `Any component name it with a Capital letter otherwise you'll get an error`.
        - Component Composition
            - Component inside another component is called `Component Composition`
        - `Writing JS inside JSX is the most powerful thing.`    
        - You can inject any JS inside `JSX` => In an component inside `{}` you can write any JS code 
        - You can put react element inside component by `{}`   
        - You can use a `react element` inside `react element` , You can use `react element` inside `functional component` , you can use `functional component` inside `element`, You can put `component` inside `component`.
        - `JSX` takes care of `injection attacks`[For e.g: you are calling some API and an attacker injects something into that API and tries to execute it, `JSX` will take care of it.]
        - `Cross site scripting`
        - `JSX` escapes malicious data, assume it sanitizes the data 😎
        - `<Component />` and `<Component></Component>`, `{ Component() }` all are same
        - You can call `Functional Component` inside `{}` 
- Episode 4
    Part -2
        - PROPS
        - `Passing props to an function is just like passing arguments to an function`   
        - Passing props to an component ===> Passing properties to the function.
        - DeStructuting PROPS : Instead of `PROPS` directly use the parameters as arguments.
        - `Config Driven UI` - 
- Episode 5
    - `HOOKS`
        - Read more about `React file structure`
        - `.js` or `.jsx` hardly matters, use whatever you want
        - export first, import next
        - while importing its optional to keep .extension to file name, by default React treats it as JSs
        - `utils` means utilities that can be used anywhere in your project.
        -  There are two ways of exporting file.
            1. default export `export default <name of variable> or component_name` [`import component from "path" `]
            2. named export [`export const component_name or variable_name` [`import {component} from "path" `]]
        - But in one file you can have only one default export.  
        - For named exports, while importing use curly baces {}
        -  When you have to export multiple things, use named export
        - `Can I use default export along with named export` ?????????????????????????????

    `HOOKS`
        - To make DATA and UI layer consistent to each other
        - When you change data your UI wont get updated by default

        ******************************************************************************************************
        - So `to give super powers to your normal JS variable you use "state variable" which is SUPER POWERFUL VARIABLE, for that you use HOOKS`
        *******************************************************************************************************  
        - They are normal JS utility functions written by Facebook developers, they wrote inside React.
        - 2 imp hooks
            1. useState() - to generate super powerful state variables
            2. useEffect()   
        - Whenever a state variable updates/changes, react re-renders the component.
        - Read More about below
            - React Fibre (go ti acdlite link and read)
            - React is doing efficient DOM manipulation
            - Virtual DOM
            - Reconciliation

- Episode 6
    - Monolith Architecture
    - Microservice Architecture
        - Separation of concerns
        - Single responsibility principle
    - useEffect hook
        - it takes two arguments
            1. A call back Function
            2. Dependency array
        - As soon as the component renders, the callback function will be called and it again rerenders the component based on the dependency array
        - So if you need anything that needs to rerender then use useEffect.
        - As soon as the body loads, useEffect will be called.
    - `CORS policy` (Cross Origin Resource Sharinghy)
        - Our browsers doesnt allow us to call one API from one Origin to another Origin
        - If there is a Origin mismatch the browser blocks that API call
        - That is a CORS policy
        - to bypass this use CORS extension of browser and enable it.
    - `Shimmer UI`
    -  `Conditional Rendering` - Rendering based on the condition 
    - Whenever you change local state variable, react re-renders the component
    - Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
    - DOM manipulation is very expensive and React is doing it very efficiently
      
- Episode 6.2
    - corsproxy.io
- Episode 7
    - Dive deep into `useEffect()`
        - Named import from `React`
        - `useEffect(() => {}, []) 
        - Dependency array [] is optional.
            - Every time component renders, useEffect is called by default.
            - if no dependency, useEffect is called on every render
            - if dependency array is empty = [], then useEffect is called on initial render only once
            - if the dependency array is `for ex btnNameReact` then useEffect is called when the `btnNameReact` is updated.
    - Dive deep into `useState()`
        - Never create `useState` outside of your component, because its a local state variable inside your functional component
        - Try to call this  useState on the top or higher level.
        - Because JS is a `Synchronous Single Threaded language`
        - Never create useState inside a condition if-else, for-loop, functions().
    - Routing
        - `react router dom` library
        - `To create a component => shortcut way rafce`
        - use `react-router-dom` library
        - Routing configuration
            1. createBrowserRouter - it will create a routing configuration for us [Configuration means the information that will define what will happen on a specific route]
            2. RouterProvider - Provides the routing configuration to our app
            3. useRouteError  - its a hook, it gives more info about error.
        - Children Routes
        - Outlet
        - Link is the react way of configuring re-directions. similar to anchor tag.
        - Client-side routing    
        - React is a `single page applications`
            - 2 types of routings in web application
                1. client side routing - fetching about component and displaying
                2. server side routing - fetching about.html from server and routing  
        - Dynamic routing
            - 
- Episode 8
    - Class based components
    - Life Cycle Methods
        - Loading / Mounting both are same
        - `ComponentDidMount` is used to make API calls 
            - *********************** `Y because, We need to render the component first and load the DOM, then make an API call and rerender the component again, this way We no need to wait for the API to load the data.` ***********************
        - LifeCycle flow
            1. Parent Constructor
            2. Parent Render
            3. Child Constructor
            4. Child Render
            5. Child Component Did Mount
            6. Parent Component Did Mount
        - ComponentDidMount and UseEffect are similar, both are used to call API
        - Why because we need to load the DOM elements first and then call the API to fetch the data and rerender the component.
        - React Life Cycle Diagram 
            - `https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/`
            - When the react component is mounted, it is mounted in two phases
                1. Render Phase (constructor and render)
                2. Commit Phase (then react updates the DOM, then the component did mount is called)

                DOM manipulation is very expensive task thats why it batches up all first Render phase of your parent child components and then go to the second Phase which is commit phase
            - Never ever compare `react lifecycle method` to functional component
            - `ComponentDidMount` and `UseEffect` are not similar.
            - ComponentDidMount - To call API
            - ComponentDidUpdate - its like based on dependency array if you want to update something, e.g: if(this.state.count!=== prevState.count){ // then do something... }
            - ComponentWillUnmount - Cleanup if any
- Episode 9
    - Single Responsibility Principle
        - your code will be reusable
        - your code will be maintainable
        - your code will be testable
    - Custom hooks
    - Chunking
    - Code splitting
    - Dynamic bundling
    - Logical Separation of Bundles  
    - Lazy loading
    - On Demand loading
    - Dynamic Import

- Episode 10
    - Styles to application
    




































        

 

