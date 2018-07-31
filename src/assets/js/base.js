const Base = {
  /**
   * 倒计时—可用于获取验证码
   * @method secondCountDown
   * @param  {[type]}        timeNum  [description]
   * @param  {Function}      callback [description]
   * @return {[type]}                 [description]
   */
  secondCountDown: function(timeNum, callback) {
    ! function countDown() {
      var timer = setTimeout(function() {
        timeNum--;
        if (timeNum <= 0) {
          callback && callback(0);
          clearTimeout(timer);
        } else {
          callback && callback(1, timeNum);
          countDown();
        }
      }, 1e3);
    }();
  },
  /**
   * 数字本地化
   * @method miliFormat
   * @param  {[type]}   num [description]
   * @return {[type]}       [description]
   */
  miliFormat: function(num) {
    return num && num.toString().replace(/(^|\s)\d+(?=\.?\d*($|\s))/g, (m) => m.replace(/(?=(?!\b)(\d{3})+\.?\b)/g, ','));
  }
};

/**
 * 对目标日期对象进行格式化
 * @name Date.format
 * @function
 * @type Date
 * @grammar Date.format(pattern)
 * @param {string} pattern 日期格式化规则
 * @remark
 *
 格式表达式，变量含义：
 hh: 带 0 补齐的两位 12 进制时表示
 h: 不带 0 补齐的 12 进制时表示
 HH: 带 0 补齐的两位 24 进制时表示
 H: 不带 0 补齐的 24 进制时表示
 mm: 带 0 补齐两位分表示
 m: 不带 0 补齐分表示
 ss: 带 0 补齐两位秒表示
 s: 不带 0 补齐秒表示
 yyyy: 带 0 补齐的四位年表示
 yy: 带 0 补齐的两位年表示
 MM: 带 0 补齐的两位月表示
 M: 不带 0 补齐的月表示
 dd: 带 0 补齐的两位日表示
 d: 不带 0 补齐的日表示
 * @memberOf Date#
 *
 * @returns {string} 格式化后的字符串
 */
if (!Date.prototype.Format) Date.prototype.Format = function(pattern) {
  pattern = pattern || "yyyy-MM-dd HH:mm:ss";

  function replacer(patternPart, result) {
    pattern = pattern.replace(patternPart, result);
  }
  var _zeroPad = function(source, length) {
      var pre = "",
        negative = (source < 0),
        string = String(Math.abs(source));
      if (string.length < length) {
        pre = (new Array(length - string.length + 1)).join('0');
      }
      return (negative ? "-" : "") + pre + string;
    },
    year = this.getFullYear(),
    month = this.getMonth() + 1,
    date2 = this.getDate(),
    hours = this.getHours(),
    minutes = this.getMinutes(),
    seconds = this.getSeconds();
  replacer(/yyyy/g, _zeroPad(year, 4));
  replacer(/yy/g, _zeroPad(parseInt(year.toString().slice(2), 10), 2));
  replacer(/MM/g, _zeroPad(month, 2));
  replacer(/M/g, month);
  replacer(/dd/g, _zeroPad(date2, 2));
  replacer(/d/g, date2);
  replacer(/HH/g, _zeroPad(hours, 2));
  replacer(/H/g, hours);
  replacer(/hh/g, _zeroPad(hours % 12, 2));
  replacer(/h/g, hours % 12);
  replacer(/mm/g, _zeroPad(minutes, 2));
  replacer(/m/g, minutes);
  replacer(/ss/g, _zeroPad(seconds, 2));
  replacer(/s/g, seconds);
  return pattern;
};

export default Base