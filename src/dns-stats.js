const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const resultObj = {};
    const arrayedDomains = domains.map(el => el.split('.').reverse());
    for(let i = 0; i < arrayedDomains.length; i++) {
        for(let j = 0; j < arrayedDomains[i].length; j++) {
            let arrCopy = arrayedDomains[i].slice();
            let removedElems = arrCopy.splice(0, j + 1);
            let dotedElems = removedElems.map(el => '.' + el);
            let propToAdd = dotedElems.join('');
            if(!resultObj.hasOwnProperty(propToAdd)) {
                resultObj[propToAdd] = 1;
            }
            else {
                resultObj[propToAdd] = resultObj[propToAdd] + 1;
            }
        }
    }
    return resultObj;
}

module.exports = {
  getDNSStats
};
