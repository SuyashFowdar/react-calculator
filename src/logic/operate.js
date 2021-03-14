import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const bigNumberOne = Big(numberOne);
  const bigNumberTwo = Big(numberTwo);
  let result;

  switch (operation) {
    case '+':
      result = bigNumberOne.plus(bigNumberTwo);
      break;
    case '-':
      result = bigNumberOne.minus(bigNumberTwo);
      break;
    case 'x':
      result = bigNumberOne.times(bigNumberTwo);
      break;
    case '÷':
      if (bigNumberTwo === '0') {
        result = 'Invalid operation: division by 0';
      } else {
        result = bigNumberOne.div(bigNumberTwo);
      }
      break;
    case '%':
      result = bigNumberOne.mod(bigNumberTwo);
      break;
    default:
      result = bigNumberOne.mod(bigNumberTwo);
  }

  return result.toString();
};

export default operate;
