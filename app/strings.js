exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var result = [];
    var valid = true;
    var repeat = 0;
    result.push(str[0]);
    for (let i = 1; i < str.length; i++) {
      if(str[i] === str[i-1]) {
        repeat += 1;
      } else {
        repeat = 0;
      }
      if(repeat < amount) {
        result.push(str[i]);
      }
    }
    return result.join('');
  },

  wordWrap: function(str, cols) {
    var firstStr = str.substr(0, cols);
    var lastStr = str.substr(cols);
    var nouvChn = lastStr.replace(/ /gi, '\n');
    return firstStr.concat(nouvChn);
  },

  reverseString: function(str) {
    var halfLength = str.length / 2;
    var result = str;
    for (let i = 0; i < halfLength; i++) {
      var temp = str[i];
      result = result.split('');
      result[i] = str[str.length - i - 1];
      result[str.length - i - 1] = temp;
      result = result.join('');
    }
    return result;
  }
};
