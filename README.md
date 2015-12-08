# About

This is an example of an administrative interface for user management. This application uses [Node](https://nodejs.org/en/)/[Express](http://expressjs.com/en/index.html) to distribute resources to the front-end. It uses [Webpack](https://webpack.github.io/) to manage development and build tasks. This application uses [React](https://facebook.github.io/react/docs/glossary.html) to manage front-end view components. The project is using [Babel](https://babeljs.io/) to transpile ES2015 JavaScript code.

# Development and Build Instructions
1. Clone repo with `git clone https://github.com/matt81m/node_user_handling.git`.
2. Run `npm install` to install dependencies.

### Front-end
* Run a hot-module-replacement-server for front-end development: `npm run hot`
* Run a client side watch, to be used in conjuction with server development: `npm run client`

### Back-end
* Run node server: `npm run server`

### Production
* Build files for production: `npm run dist`
* Start server from production files: `npm run start`
* Both build and start server: `npm run deploy`