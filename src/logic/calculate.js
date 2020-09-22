import operate from './operate';

const calculate = (calculator, btn) => {
  let { total, next, operation } = calculator;
  const operators = ['+', '&times;', '&minus;', '÷'];
  const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  if (btn === '=') {
    if (total && next && operation) {
      total = operate(total, next, operation);
      next = null;
      operation = null;
    }
  }

  if (btn === '+/-') {
    total = (total * (-1)).toString();
    next = (next * (-1)).toString();
  }

  if (btn === '%') {
    next = (0.01 * total).toString();
    operation = '%';
  }

  if (btn === 'AC') {
    total = null;
    next = null;
    operation = null;
  }

  if (operators.includes(btn)) {
    operation = btn;
  } else if (operation && nums.includes(btn)) {
    next = next ? next + btn : btn;
  } else if (nums.includes(btn)) {
    total = total ? total + btn : btn;
  }
  return { total, next, operation };
};

export default calculate;
