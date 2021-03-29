import React from 'react';
import ButtonPanel from '../components/ButtonPanel';
import Display from '../components/Display';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [total, setTotal] = React.useState(null);
  const [next, setNext] = React.useState(null);
  const [operation, setOperation] = React.useState(null);
  const handleClick = buttonName => {
    const result = calculate({ total, next, operation }, buttonName);
    setTotal(result.total);
    setNext(result.next);
    setOperation(result.operation);
  };
  const resultStr = () => {
    const result = `${total}${operation}${next}`.replace(/null/g, '');
    return result === '' ? undefined : result;
  };

  return (
    <div className="row main-center cross-center container">
      <div className="flex">
        <h2>Let`s do some Math!</h2>
      </div>
      <div className="col calculator">
        <Display result={resultStr()} />
        <ButtonPanel handleClick={handleClick} />
      </div>
    </div>
  );
};

export default Calculator;
