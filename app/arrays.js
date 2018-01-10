exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    let sum = 0;
    arr.forEach(element => {
      sum += element;
    });
    return sum;
  },

  remove: function(arr, item) {
    while (arr.indexOf(item) >= 0) {
      arr.splice(arr.indexOf(item), arr.indexOf(item));
    }
    return arr;
  },

  removeWithoutCopy: function(arr, item) {
    while (arr.indexOf(item) >= 0) {
      arr.splice(arr.indexOf(item), arr.indexOf(item));
    }
    return arr;

  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.splice(arr.length - 1, arr.length - 1);
    return arr;
  },

  prepend: function(arr, item) {
    arr.splice(0, 0, item);
    return arr;
  },

  curtail: function(arr) {
    arr.splice(0, 1);
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    let count = 0;
    while (arr.indexOf(item) >= 0) {
      count += 1;
      arr.splice(arr.indexOf(item), arr.indexOf(item) - 1);
    }
    return count;
  },

  duplicates: function(arr) {

  },

  square: function(arr) {

  },

  findAllOccurrences: function(arr, target) {

  }
};
