exports = typeof window === 'undefined' ? global : window;
const request = require('request');

exports.asyncAnswers = {
  async: function(value) {
    return new Promise((resolve, reject) => {
      resolve(value)
    });
  },

  manipulateRemoteData: function(url) {
      return new Promise((resolve, reject) => {
        request('http://127.0.0.1:4444' + url, function (error, response, body) {
          const people = JSON.parse(body).people;
          let result = [];
          people.forEach(element => {
            result.push(element.name)
          });
          resolve(result.sort());
        });
      });
  }
};
