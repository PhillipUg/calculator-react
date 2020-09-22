const Big = require('big.js');

const operate = (num1, num2, operation) => {
  const numb1 = new Big(num1);
  const numb2 = new Big(num2);
  switch (operation) {
    case '+':
      return numb1.plus(numb2).toString();
    case '&times;':
      return numb1.times(numb2).toString();
    case '&minus;':
      return numb1.minus(numb2).toString();
    case '%':
      return numb1.times(numb2).div(100).toString();
    case '÷':
      return numb1.div(numb2).toString();
    default:
      return 0;
  }
};

export default operate;
