const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let out =false;
  if(!(Array.isArray(members)))return out;

  members = members.filter((el) => {
    let compaundFilter = (typeof (el) === 'string' )
                          // && !(el.includes('_'))
                          && (!(Array.isArray(el)))
                          && (el !== 'undefined')
                          ;

    // console.log('el', el, 'filter:', compaundFilter);
    return compaundFilter;
  })
  // console.log('members after filter:', members);

  const arrMap = members.map(el => el.trim().toUpperCase()).
                                    sort().map(el => {
                                      return el[0]
                                    }).
                                    join('')
                                    ;
  // console.log('arrMap:', arrMap);

  out = arrMap;
  return out;
};
