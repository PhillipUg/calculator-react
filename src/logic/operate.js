const Big = require('big.js');

const operate = (num1, num2, operation) => {
  const numb1 = new Big(num1);
  const numb2 = new Big(num2);
  switch (operation) {
    case '+':
      return numb1.plus(numb2).toString();
    case 'x':
      return numb1.times(numb2).toString();
    case '-':
      return numb1.minus(numb2).toString();
    case '÷':
      try {
        return numb1.div(numb2).toString();
      } catch (error) {
        return undefined;
      }
    default:
      return 0;
  }
};

export default operate;
