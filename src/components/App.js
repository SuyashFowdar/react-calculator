import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate'; // eslint-disable-line

const App = () => {
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
    <>
      <div className="row main-center cross-center h-100">
        <div className="col">
          <Display result={resultStr()} />
          <ButtonPanel handleClick={handleClick} />
        </div>
      </div>
    </>
  );
};

export default App;
