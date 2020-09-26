const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let out = {
    turns: 0,
    seconds: 0
  }
  out['turns']  = (2**disksNumber) -1;
  out['seconds'] = Math.floor((out['turns'] / turnsSpeed) * 3600 ) ;
  // console.log('out:', out);
  return out
};
