const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let outArr = Array.from(arr);
    if(!Array.isArray(arr)) throw new Error;

  outArr = outArr.map((el, index, currArr) => {
    if (el.toString().includes('--')) {
      let itemOut = '';
      switch (el) {
        case '--discard-next':
          if (currArr[index + 1]) {
            currArr.splice(index, 2, '--', '--')
          } else {
            currArr.splice(index, 1, '--')
          }
          break;
        case '--discard-prev':
          if (currArr[index - 1]) {
            currArr.splice(index - 1, 2, '--', '--')
          } else {
            currArr.splice(index, 1, '--')
          }
          break;
        case '--double-next':
          if (currArr[index + 1]) currArr.splice(index, 2,)
          break;
        case '--double-prev':
          if (currArr[index - 1]) currArr.splice(index, 2)
          break;
      }
    }
    return itemOut;
  })
};
