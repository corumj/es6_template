// you should only pass the html element a module is responsible for to the module
// caching the element in the constructor allows all module methods to access the element
// and prevents repeatedly traversing the DOM looking for the element
export default class ModuleExample {
  constructor($div) {
    this.$div = $div;
  }
  initModuleExample() {
    this.$div.innerHTML = 'Hello from inside of the module example';
  }
}
