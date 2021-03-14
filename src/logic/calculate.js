import operate from './operate';

const calculate = (data, buttonName) => {
  let { total, next, operation } = data;

  const operations = ['+', '-', 'x', '÷', '%'];

  const reset = () => {
    total = null;
    operation = null;
    next = null;
  };

  if (buttonName === 'AC') {
    reset();
  } else if (buttonName === '=') {
    if (total && next && operation) {
      total = operate(total, next, operation);
      next = null;
      operation = null;
    }
  } else if (operations.includes(buttonName)) {
    if (total && next && operation) {
      total = operate(total, next, operation);
      operation = buttonName;
      next = null;
    } else if (next && !operation) {
      total = next;
      operation = buttonName;
      next = null;
    } else {
      operation = buttonName;
    }
  } else if (buttonName === '+/-') {
    if (next) {
      next = operate(next, '-1', 'x');
    } else if (total) {
      total = operate(total, '-1', 'x');
    }
  } else if (next) {
    if (buttonName !== '.' || (buttonName === '.' && next.indexOf(buttonName) < 0)) {
      next = next.concat(buttonName);
    }
  } else {
    next = buttonName;
  }

  return { total, next, operation };
};

export default calculate;
