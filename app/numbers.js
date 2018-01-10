exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    return 1 & (num >> (bit - 1));
  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {
    var result = []
    for (let index = 0; index < 8; index++) {
      result.unshift(1 & num >> index) 
    }
    return result.join('');
  },

  multiply: function(a, b) {
    var greaterNumDec = b.toString().split(".")[1].length;
    var secondNumAdjust = b * Math.pow(10, greaterNumDec);
    return (a * secondNumAdjust) / Math.pow(10, greaterNumDec)
  }
};
