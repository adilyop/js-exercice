exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var resultListFiles = [];
    function processDir(dir, dirName) {
      if ('files' in dir && dir.files.length > 0) {
        var files = dir.files;
        for (let i = 0; i < files.length; i += 1) {
          if (typeof files[i] === 'string') {
            if (!dirName || files[i].indexOf(dirName) > -1)
              resultListFiles.push(files[i])
          } else {
            processDir(files[i], dirName)
          }     
        }
      }
    }
    processDir(data, dirName)
    return resultListFiles;
  },

  permute: function(arr) {
    var result = [];
    function doPermute(){

    }
    doPermute()
    return result;
  },

  fibonacci: function(n) {
    var result = 0;
    var iteration = 1;
    var tabFibo = [0, 1];
    function doFibonacci(n) {
      while(n > iteration) {
        result = tabFibo[iteration -1] + tabFibo[iteration];
        iteration += 1;
        tabFibo.push(result);
        doFibonacci(n);
      }
    }
    doFibonacci(n);
    return result;
  },

  validParentheses: function(n) {

  }
};
