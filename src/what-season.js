const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  // throw new CustomError('Not implemented');
  // new Date(year, month, date, hours, minutes, seconds, ms)
  let out = '';
  if (date == '') {
    return 'Unable to determine the time of year!'
  }
  if (typeof(date)  === 'null') {
    return 'FAIL'
  }
  if (!isValidDateInput(date)) {
     throw new Error
  }
  let month = date.getMonth();

  if ((0 <= month && month <= 1) || (month === 11)) {
    out = 'winter';
  } else if ((2 <= month) && (month <= 4)){
    out = 'spring';
  } else if ((5 <= month) && (month <= 7)) {
    out = 'summer';
  } else if ((8 <= month) && (month <= 10)){
    out = 'autumn'
  }
  // console.log('month',month,'out:', out);

  return out;
};
function isValidDateInput(value) {
  return !isNaN(value.getTime());
}
