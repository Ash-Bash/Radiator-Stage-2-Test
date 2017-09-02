# Radiator Stage 2 Test

## How to run the Project

Before run this project please make sure you have NodeJS installed on your computer. Once you have downloaded / cloned this repo Open Command Line / Terminal and Type:
```bash
cd /{YOUR_DIR_WHERE_SAVED}/Radiator-Stage-2-Test
npm install
npm run dev
```

To build the project ready for putting on a Web Server that does not have not but ether Apache or Microsoft IIS then after you do `npm install`, type this command
`npm run build` (if command line gives an error but `client.min.js` is in the src dir then this ignore the error messages) if you want to test `npm run build` make sure you backup & delete `client.min.js` in the src dir before testing the command out so that you can see it working.

Once you have entered theses commands It should then tell you to open a Browser and go to:
`http://localhost:8080/`
Once this has been done you are now ready to view the Webpage / Project.

## Technology Stack Used
### Software & Frameworks Used

* NodeJS
* Visual Studio Code
* Babel
* Webpack
* ReactJS

### Downloaded NodeJS / NPM Dependences & Packages Used

* babel-core  (` npm install --save babel-core `)
* babel-loader (` npm install --save babel-loader `)
* babel-plugin-add-module-exports (` npm install --save babel-plugin-add-module-exports `)
* babel-plugin-react-html-attrs (` npm install --save babel-plugin-react-html-attrs `)
* babel-plugin-transform-class-properties (` npm install --save babel-plugin-transform-class-properties  `)
* babel-plugin-transform-decorators-legacy (` npm install --save babel-plugin-transform-decorators-legacy `)
* babel-preset-es2015 (` npm install --save babel-preset-es2015 `)
* babel-preset-react (` npm install --save babel-preset-react `)
* babel-preset-stage-0 (` npm install --save babel-preset-stage-0 `)
* react (` npm install --save react `)
* react-dom (` npm install --save react-dom `)
* webpack (` npm install --save webpack `)
* webpack-dev-server (` npm install --save webpack-dev-server `)

### Advantages of the Packagaes and Technologies Used
#### Babel
The benfits on using babel it allows you to use latest and greatest programming languages that are designed for Web Development like ES6 / ES2015 & Typescript which are not currently in the latest Web Browsers. What babel does to get your project that is programmed using ES6 for example, is to transpile Your ES6 code into ES5 Code which has been around since 2009 because ES5 is the standard JavaScript Version that runs on all common & current Web Browsers.

#### Webpack
This package / framework works in tendom with Babel for this project atleast, where babel transpiles ES6 code to ES5 Code, webpack grabs the newly converted code that Babel transpiled and bundles & compiles each script (Which Babel for this project doesnt Physicly create these files, just transfers the data to Webpack to compile) into one big main script for the HTML file to read.

#### Webpack Dev Server
This package is an addon to webpack which allows for realtime changes to your projects that does not require you to recompile / retranspile everytime you make a change to your code.

#### React
React is a Javascript Framework that help you create more dynamic web pages that could'nt be possible with conventional methods. Also with React it allows you to manage your HTML Code it bitsize pieces which React calls them Components and in my opinion simplifies web development.

## Troubles while developing this Project

## Parts that show off my strengths

## Extra stuff done that is to try and showcase my best work & skills

## Journey

### Day 1

### Day 2

### Day 3