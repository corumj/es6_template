export default class PromiseExample {
  constructor($div) {
    this.$div = $div;
  }
  initPromiseExample(url) {
    this._get(url)
      .then((result) => {
        this.$div.innerHTML = 'Promise Example response from server: <br />' + result;
      })
      .catch((err) => {
        this.$div.innerHTML = err.message;
      });
  }
  _get(url) {
    return new Promise((resolve, reject) => {
      // do a thing, probably asyncrounous like calling a remote server
      var req = new XMLHttpRequest();
      req.open('GET', url);

      req.onload = function() {
        // this event handler is called even on 404 not found
        // so check the response status
        if (req.status == 200) {
          // resolve the promise with the response text
          resolve(req.response);
        } else {
          // otherwise reject with the status text
          // which will hopefully be a meaningfull error
          reject(Error(req.statusText));
        }
      };

      // handle network errors
      req.onerror = function() {
        reject(Error('Network Error'));
      };

      // make the request
      req.send();
    });
  }
}
