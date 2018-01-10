exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    var timeout;
    function nextOne () {
      console.log(start++);

      if (start <= end) {
        timeout = setTimeout(nextOne, 100);
      }
    }

    nextOne();

    return {
      cancel: function () {
        timeout && clearTimeout(timeout);
      }
    };
  }
};
