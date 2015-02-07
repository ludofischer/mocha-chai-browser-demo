A demo setup for unit testing client-side JavaScript code with [Mocha.js](http://visionmedia.github.io/mocha/) and [Chai.js](http://chaijs.com/).

Since mocha 1.2, you can install mocha via npm and run `mocha init <path>` to generate a client side testing skeleton.

## Automated in-browser tests with Karma

This sample also includes a [Karma](http://karma-runner.github.io/) configuration to run the tests automatically.

To use Karma, you need to have [node.js](http://nodejs.org) and [npm](https://npmjs.org/) installed. In the project directory, type `npm install karma-mocha`. After the Karma install finishes, type `node_modules/karma/bin/karma start` and navigate to `http://localhost:9876` to let Karma capture the web browser and run the tests automatically.

If you are familiar with `npm`, you can look at the `package.json`. That configuration allows you to just type `npm install` and then `npm test` to start the Karma server. Since the karma NPM package does not define a `bin` field, we must make use of the `karma-cli` package to be able to use the karma executable inside our `test` script.
