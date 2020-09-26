const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let out = false;
  if ((typeof (sampleActivity) != 'string') || (parseFloat(sampleActivity) >= 9000) || isNaN(parseFloat(sampleActivity)) || (parseFloat(sampleActivity) <= 0) || parseFloat(sampleActivity) > MODERN_ACTIVITY ) {
    return out;
  }
  const sampleDigit = parseFloat(sampleActivity);
  // t = ln(MODERN_ACTIVITY / sampleActivity) / k
  // k = 0.693 / HALF_LIFE_PERIOD
  out = Math.log(MODERN_ACTIVITY / sampleActivity)/(0.693/HALF_LIFE_PERIOD);

  return out;
};
