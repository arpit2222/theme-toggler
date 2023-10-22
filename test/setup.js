// test/setup.js
const jsdom = require('jsdom-global')();

global.window.Date = Date;
global.window.Date.now = Date.now;

// Add other setup as needed
