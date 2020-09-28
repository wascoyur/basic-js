const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  console.log('input:', arr);
  let outArr = [];
  let array = new Array(arr);
  if(!Array.isArray(arr)) throw new Error;
  if (arr.length = 0) return outArr;

  for (let i = 0; i < array.length; i++) {
    switch (array[index].toString()) {
      case '--discard-next':
        if (array[index + 1]) {
          array.splice(index, 2);
          index -= 1;
        } else {
          array.splice(index, 1);
        }
        break;
      case '--discard-prev':
        if (array[index - 1]) {
          outArr.splice(index - 1, 2,)
          console.log('dp outArr:', outArr);
        } else {
          outArr.splice(index, 1);
        }
        break;;
      // case '--double-next':
      // if (array[index + 1]) currArr.splice(index, 2,)
      //   break;
      case '--double-prev':
        if (array[index - 1]) {
          outArr.splice(index - 1, 2, array[index - 1], array[index - 1]);
        } else {
          array.splice(index, 1);
        }
        break;
      default:
        outArr.push(array[index])
    }
  }
  console.log('outArr:', outArr);
  return outArr
}
