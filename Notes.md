# Namaste React 🕵️‍♀️

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
        

 

