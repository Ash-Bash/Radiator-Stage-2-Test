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

## Journal

### Day 1
On day one I started by thinking of what technologies I wanted to use, then once I choosen theses technologies I wanted to use, I started laying out what will become the Layout which at first the Background was an actual React Component but after a few responsive bug problems I decided it would be better if the Wood Textured background was rendered has the Background Image of the actual HTML Element. By around 1pm I had the basics of what the Layout was but still need work to get it working with smaller devices, and the early version of the Layout was the Shell of the NavBar, Content View & FooterBar. By the end of the day I managed to get basic layout to be responsive to Smaller Screens but it would be until Day 2 that I would Manage to Populate the NavBar View with NavBarItems.

### Day 2
On day two I began by Populating the NavBar with Buttons that had the correct Titles according to what was on the PSD File that was give to me on day one, the NavBar Implementation from the correct items to it being responsive to smaller & bigger screen sizes was completed by noonish. The next item that was one my list was to completely Implement te Footer again from having the correct items that was show in the PSD File to it being 100% responsive on any screen size, this was completed by the end of the day. There was bugs once the Footer was implemented which caused the NavBar Website Logo to glitch out from the left (where it was originally) into dead center no matter which screen size it was which looked ugly but I looked at the CSS code for that logo and knew that that code hasn't touch during day 2 of the task, so I set out to find a fix which led me to remove the CSS Code for that logo a redo the positioning for the logo to scale and stay at the left of the NavBar. The other bug was another NavBar bug that appeared once the Footer was implemented and that was the NavBar Scaling incorrectly at certain screen sizes this was easy to fix just got the the corasponding `@media` query for the screen size that was playing up and tweak the scaling for the NavBar.

### Day 3