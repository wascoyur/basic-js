const CustomError = require("../extensions/custom-error");

module.exports = function countCats(cats) {
  // throw new CustomError('Not implemented');
  let count = 0;
  cats.forEach(row => {
    // console.log('row:', row);
    row.forEach((cell) =>{
      if (cell/* .toString() */ === '^^') {
        // console.log('cell:', cell);
          count++;
      }
    })
  });
  // console.log('count:', count);
  return count;
};
