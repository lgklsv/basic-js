const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  if(!Array.isArray(arr)) {
    throw new Error ("'arr' parameter must be an instance of the Array!");
  }
  const arrCopy = JSON.parse(JSON.stringify(arr));
  arrCopy.forEach((el, index) => {
      if (el === '--double-next') {
        if(index === arr.length - 1) {
          arrCopy.splice(index, 1);
        } else {
          arrCopy.splice(index, 1, arrCopy[index + 1]);
        }
      }
      if (el === '--double-prev') {
        if(index === 0 || !arrCopy[index - 1]) {
          arrCopy.splice(index, 1);
        } else {
          arrCopy.splice(index, 1, arrCopy[index - 1]);
        }
      }
      if (el === '--discard-next') {
        if(index === arr.length - 1) {
          arrCopy.splice(index, 1);
        } else {
          arrCopy.splice(index, 2, '');  
        }
      }
      if (el === '--discard-prev') {
        if(index === 0 || !arrCopy[index - 1]) {
          arrCopy.splice(index, 1);
        } else {
          arrCopy.splice(index - 1, 2, '');
        }
      }
  })
  const resArr = arrCopy.filter(el => el !== '');
  return resArr;
}

module.exports = {
  transform
};
