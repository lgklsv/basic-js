const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(reverse = true) {
      this.reverse = reverse;
  }

  encrypt(message, key) {
      if(!message || !key) {
          throw new Error('Incorrect arguments!');
      }
      const filterMes = Array.from(message).filter(el => el.match(/[a-zA-Z]/));
      const realKey = key.padEnd(filterMes.length, key);

      const mesArr = message.split('');
      const keyArr = realKey.split('');
      let i = 0;
      const resArr = mesArr.map((el) => {
          if(el.match(/[a-zA-Z]/)) {
              let curLet = ((el.toUpperCase().charCodeAt() - 65) + (keyArr[i].toUpperCase().charCodeAt() - 65)) % 26;
              i++;
              return String.fromCharCode(curLet + 65);
          }
          else {
              return el;
          }
      })
      if(!this.reverse) {
          return resArr.reverse().join('');
      }
      return resArr.join('');

  }
  decrypt(message, key) {
      if(!message || !key) {
          throw new Error('Incorrect arguments!');
      }
      const filterMes = Array.from(message).filter(el => el.match(/[a-zA-Z]/));
      const realKey = key.padEnd(filterMes.length, key);

      const mesArr = message.split('');
      const keyArr = realKey.split('');
      let i = 0;
      const resArr = mesArr.map((el) => {
          if(el.match(/[a-zA-Z]/)) {
              let curLet = ((el.toUpperCase().charCodeAt() + 65) - (keyArr[i].toUpperCase().charCodeAt() - 65)) % 26;
              i++;
              return String.fromCharCode(curLet + 65);
          }
          else {
              return el;
          }
      })
      if(!this.reverse) {
          return resArr.reverse().join('');
      }
      return resArr.join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
