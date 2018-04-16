// Import any CSS files here so they are combined and moved to your build folder
import '../styles/main.css';

// import the babel polyfill library required to support older browsers
import 'babel-polyfill/dist/polyfill';

// import your shell module - the shell module builds the UI (with help from your modules), and listens for events.
import Shell from './modules/shell.js';

// locate the application container div, initialize the shell module, and initialize the application
let $container = document.querySelector('.appContainer');
let shell = new Shell($container);
shell.initializeApp();
