import operate from './operate';

const calculate = (data, btn) => {
  let { total, next, operation } = data;
  const operators = ['+', 'x', '-', '÷'];
  const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  switch (btn) {
    case 'AC':
    {
      total = null;
      next = null;
      operation = null;
      break;
    }
    case '+/-':
    {
      if (total) (total *= (-1));
      if (next) (next *= (-1));
      break;
    }
    case '%':
    {
      next = (0.01 * total).toString();
      break;
    }
    case '=':
    {
      if (total && next && operation) {
        total = operate(total, next, operation);
        next = null;
        operation = null;
      }
      break;
    }
    case '.':
      if (next) {
        return { total, next: `${next}.`, operation };
      }
      if (total) {
        return { total: `${total}.`, next, operation };
      }
      return { total: '0.', next, operation };
    default:
      break;
  }

  if (operators.includes(btn)) {
    operation = btn;
  } else if (operation && nums.includes(btn)) {
    next = next ? next + btn : btn;
  } else if (nums.includes(btn)) {
    total = total ? total + btn : btn;
  }

  if (total && next && operation) {
    total = operate(total, next, operation);
    next = null;
    operation = null;
  }

  return { total, next, operation };
};

export default calculate;
