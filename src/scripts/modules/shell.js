// import module dependencies here, make sure to use ./ or you'll have issues
import ModuleExample from './moduleEx.js';
import PromiseExample from './promiseEx.js';

// This can be a class or set of functions that initialize the UI and listens for events.
// I like the class because it can be extended easily and features can be added.
// It also provides a place to store variables accessed by the entire application.
export default class Shell {
  constructor($container) {
    this.$container = $container;
  }
  initializeApp() {
    this.$container.innerHTML = 'Hello World from the shell';

    // build UI elements placeholders in your shell (you can just use a template and not createElement)
    let moduleExEl = document.createElement('div');
    moduleExEl.className = 'header';
    let promiseExEl = document.createElement('div');
    promiseExEl.className = 'promise';

    this.$container.appendChild(moduleExEl);
    this.$container.appendChild(promiseExEl);

    // send the UI elements to your modules to initialize them and provide their functionality
    let exampleModule = new ModuleExample(moduleExEl);
    exampleModule.initModuleExample();

    let promiseExample = new PromiseExample(promiseExEl);
    promiseExample.initPromiseExample('https://httpbin.org/get');
  }
}

