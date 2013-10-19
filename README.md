A demo setup for unit testing client-side JavaScript code with [Mocha.js](http://visionmedia.github.io/mocha/) and [Chai.js](http://chaijs.com/).

Since mocha 1.2, you can install mocha via Node and run mocha init <path> to generate a client side testing skeleton inside the directory at <path>.

This sample also includes a [Karma](http://karma-runner.github.io/) configuration to run the tests automatically.

To use Karma, you need to have [node.js](http://nodejs.org) and [npm](https://npmjs.org/) installed. In the project directory, type `npm install karma-mocha`. After the karma install is finished, type `node_modules/.bin/karma start` and navigate to `http://localhost:9876` to let Karma capture the web browser and run the tests automatically.