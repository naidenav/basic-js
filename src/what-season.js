const { prototype } = require("../extensions/custom-error");
const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  };
  let arrDate = [date.getFullYear(), date.getMonth(), date.getDay()];
  let arrStringDate = date.toString().split('');
  if (date.getDay() != [arrStringDate[8], arrStringDate[9]].join('')) {
    throw new Error('Упс');
  }
  let month = date.getMonth();
  if (month <= 1 || month >10) {
    return 'winter';
  } else if (month <=4) {
    return 'spring';
  } else if (month <= 7) {
    return 'summer';
  } else if (month <= 10) {
    return 'autumn';
  };
};
