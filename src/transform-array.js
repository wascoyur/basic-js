const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let outArr = [];
    if(!Array.isArray(arr)) throw new Error;

    outArr = arr.map((el, index, currArr) => {
      if (el.includes('--double')) {
        switch (el) {
          case '--discard-next':
            if(currArr[index + 1])
            break;

          default:
            break;
        }
      }
      return el;
    })
  return outArr;
};
