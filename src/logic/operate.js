import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const number = Big(numberOne);
  let result;

  switch (operation) {
    case '+':
      result = number.plus(numberTwo);
      break;
    case '-':
      result = number.minus(numberTwo);
      break;
    case 'x':
      result = number.times(numberTwo);
      break;
    case '÷':
      if (numberTwo === '0') {
        result = 'Invalid operation: division by 0';
      } else {
        result = number.div(numberTwo);
      }
      break;
    default:
      result = number.mod(numberTwo);
  }

  return result.toString();
};

export default operate;
